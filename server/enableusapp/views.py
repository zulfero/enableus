from django.shortcuts import render
from django.http import HttpResponse,Http404
from rest_framework.views import APIView
from .serializers import UserRegistrationSerializer,UserLoginSerializer,UserProfileSerializer,TherapistUserSerializer,BookingSerializer
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.hashers import check_password
from django.contrib.auth import login
from rest_framework import status
from .models import UserProfile,CustomUser,TherapistUser,Booking
from rest_framework.permissions import  IsAuthenticated





def index(request):
    return HttpResponse("yolo")


class UserRegistrationView(APIView):
    def post(self,request,format=None):
        serializer=UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST) 


class TherapistUserView(APIView):
    def post(self,request,format=None):
        serializer=TherapistUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)         
        


class UserLoginView(APIView):
    def post(self,request,format=None):
        serializer=UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            email=serializer.validated_data.get("email")
            print(email)
            password =serializer.validated_data.get("password")
            print(password)
            try:
                user=CustomUser.objects.get(email=email)
                print(user)
            except CustomUser.DoesNotExist:
                user=None
            if user is not None:
                if check_password(password,user.password):
                    refresh=RefreshToken.for_user(user)
                 
                    access_token=refresh.access_token
                   
                    login(request,user)
                    return Response({"refresh_token":str(refresh),"access_token":str(access_token)},status=status.HTTP_200_OK)
                else:
                    return Response({"message":"incorrect password"},status=status.HTTP_401_UNAUTHORIZED)   
            else:
                return Response({"message":"No user with this email address"},status=status.HTTP_400_BAD_REQUEST)    

        else:
          return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)  


class BookingView(APIView):
    def post(self,request,format=None):
        serializer=BookingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)     
        





class UserProfileView(APIView):

    def get(self,request,format=None):
        all_userprofiles=UserProfile.objects.all()
        serializer=UserProfileSerializer(all_userprofiles,many=True)
        return Response(serializer.data)

    def post(self,request,format=None):
        serializer=UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    def put(self,request,format=None):
        serializer=UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)

        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)        


class SingleProfileView(APIView):
    permission_classes=[IsAuthenticated]
    def getById(self,id):
        try:
            return UserProfile.objects.get(id=id)
        except UserProfile.DoesNotExist:
            raise Http404

    def get(self,request,id,format=None):
        userprofile=self.getById(id)
        serializer=UserProfileSerializer(userprofile)
        return Response(serializer.data)


    def put(self,request,id,format=None):
        userprofile=self.getById(id)
        serializer=UserProfileSerializer (userprofile,request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)  
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST) 


    def delete(self,request,id,format=None):
        userprofile=self.getById(id)
        userprofile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)    

           












# Create your views here.
