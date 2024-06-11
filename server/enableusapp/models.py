from django.db import models
from django.contrib.auth.models import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser





class CustomUserManager(BaseUserManager):
      def create_user(self,email,password=None,**extra_Kwargs):
            if not email:
                  raise ValueError("email required")
            email=self.normalize_email(email)
            user=self.model(email=email,**extra_kwargs)
            user.set_password(password)
            user.save(using=self._db)
            return user  


      
      def create_superuser(self,email,password=None,**extra_kwargs):
            extra_fields.setdefault("is_staff",True)
            extra_fields.setdefault("is_superuser",True)
            if extra_fields.get("is_staff") is not True:
                  raise ValueError("superuser must set is_staff to true")

            if extra_fields.get("is_superuser") is not True:
                  raise ValueError("superuser must set is_superuser to true")
            return self.create_user(email,password,**extra_kwargs)  




class CustomUser(AbstractBaseUser):
    firstname=models.CharField(max_length=50)
    lastname=models.CharField(max_length=50)
    email=models.EmailField(max_length=50,unique=True)
    is_active=models.BooleanField(default=True)

    objects=CustomUserManager
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=["firstname","lastname"]
    def __str__(self):
        return self.firstname


class TherapistUser(AbstractBaseUser):
      firstname=models.CharField(max_length=50)
      lastname=models.CharField(max_length=50)
      email=models.EmailField(max_length=50,unique=True)
      address=models.CharField(max_length=50)
      speciality=models.CharField(max_length=100)
      is_active=models.BooleanField(default=True)
              


class UserProfile(models.Model):
    user=models.OneToOneField(CustomUser,on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user.firstname}'s profile"     

# Create your models here.
