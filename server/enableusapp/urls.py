
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns=[
    path('index',views.index,name="index"),
    path('userregistration/',views.UserRegistrationView.as_view(),name='userregistration'),
    path('userlogin/',views.UserLoginView.as_view(),name='userlogin'),
    path('userprofile/',views.UserProfileView.as_view(),name='userprofile'),
    path('therapistprofile/',views.UserProfileView.as_view(),name='userprofile'),
    path('therapistuser/',views.TherapistUserView.as_view(),name='therapistuser'),
    path('booking/',views.BookingView.as_view(),name='booking'),
    path('singleprofile/<id>',views.SingleProfileView.as_view(),name='singleprofile'),

]

if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)


