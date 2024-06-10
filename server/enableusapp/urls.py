from django.urls import path
from . import views


urlpatterns=[
    path('index',views.index,name="index"),
    path('userregistration/',views.UserRegistrationView.as_view(),name='userregistration'),
    path('userlogin/',views.UserLoginView.as_view(),name='userlogin'),
    path('userprofile/',views.UserProfileView.as_view(),name='userprofile'),
]

