from rest_framework import serializers
from .models import CustomUser,UserProfile,TherapistUser,Booking,TherapistProfile


class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model=CustomUser
        fields=("id","firstname","lastname","email","password")
        extra_kwargs={"password":{"write_only":True}}

    def create(self,validated_data):
        password=validated_data.pop("password")
        user=self.Meta.model(**validated_data)
        user.set_password(password)
        print(user)
        user.save()
        return user


class TherapistUserSerializer(serializers.ModelSerializer):
    class Meta:
        model=TherapistUser
        fields=("id","firstname","lastname","email","password","address","speciality")
        extra_kwargs={"password":{"write_only":True}}

    def create(self,validated_data):
        password=validated_data.pop("password")
        user=self.Meta.model(**validated_data)
        user.set_password(password)
        user.save()
        return user 


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model=Booking
        fields=("id","patient","date", "therapist")               



class UserLoginSerializer(serializers.Serializer):
   email=serializers.EmailField()
   password=serializers.CharField()


class UserProfileSerializer(serializers.ModelSerializer):
   class Meta:
      model=UserProfile
      fields=("id","user", "phonenumber","gender", "patient_profile_img", "address")

class TherapistProfileSerializer(serializers.ModelSerializer):
   class Meta:
      model=TherapistProfile
      fields=("id","user", "phonenumber","gender", "patient_profile_img", "address")           
