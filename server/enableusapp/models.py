from django.db import models
from django.contrib.auth.models import BaseUserManager,PermissionsMixin, AbstractBaseUser 


gender=[
      ("female", "Female"),
      ("male", "Male"),
]

speciality=[
      ("athrities","Athrities"),
      ("chronic fatigue","Chronic Fatigue"),
      ("chronic pain","Chronic Pain"),
      ("spinal cord injuries","Spinal Cord Injuries"),
      ("dementia","Dementia"),
      ("stroke","Stroke"),
]


class CustomUserManager(BaseUserManager):
      def create_user(self,email,password=None,**extra_kwargs):
            if not email:
                  raise ValueError("email required")
            email=self.normalize_email(email)
            user=self.model(email=email,**extra_kwargs)
            user.set_password(password)
            user.save(using=self._db)
            return user  


      
      def create_superuser(self,email,password=None,**extra_fields):
            extra_fields.setdefault("is_staff",True)
            extra_fields.setdefault("is_superuser",True)
            if extra_fields.get("is_staff") is not True:
                  raise ValueError("superuser must set is_staff to true")

            if extra_fields.get("is_superuser") is not True:
                  raise ValueError("superuser must set is_superuser to true")
            return self.create_user(email,password,**extra_fields)  




class CustomUser(AbstractBaseUser, PermissionsMixin):
    firstname=models.CharField(max_length=50)
    lastname=models.CharField(max_length=50)
    email=models.EmailField(max_length=50,unique=True)
    is_active=models.BooleanField(default=True)
    is_staff=models.BooleanField(default=False)
    is_superuser=models.BooleanField(default=False)

    objects=CustomUserManager()
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=["firstname","lastname"]
    def __str__(self):
        return self.firstname


class TherapistUser(AbstractBaseUser):
      firstname=models.CharField(max_length=50)
      lastname=models.CharField(max_length=50)
      email=models.EmailField(max_length=50,unique=True)
      address=models.TextField(null=True,blank=True)
      speciality=models.CharField(max_length=100,choices=speciality)
      is_active=models.BooleanField(default=True)

      objects=CustomUserManager()
      USERNAME_FIELD='email'

      def __str__(self):
        return self.firstname



class UserProfile(models.Model):
    user=models.OneToOneField(CustomUser,on_delete=models.CASCADE)
    phonenumber=models.IntegerField(null=True) 
    address=models.TextField(null=True,blank=True)
    gender=models.CharField(max_length=20, null=True, choices=gender)

    def __str__(self):
        return f"{self.user.firstname}'s profile" 

class Booking(AbstractBaseUser):
      patient=models.ForeignKey(CustomUser,on_delete=models.CASCADE, null=True)
      
      date=models.DateTimeField(auto_now=True, null=True)
      therapist=models.ForeignKey(TherapistUser, on_delete=models.CASCADE, null=True)
      
      def __str__(self):
        return f"New booking from {self.patient.firstname} to {self.therapist.firstname}" 
              

class Notification(AbstractBaseUser):
      booking=models.ForeignKey(CustomUser,on_delete=models.CASCADE,null=True)
    

