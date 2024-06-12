from django.contrib import admin
from .models import CustomUser,Booking,TherapistUser,UserProfile


admin.site.register(CustomUser)
admin.site.register(Booking)
admin.site.register(TherapistUser)
admin.site.register(UserProfile)

# Register your models here.
