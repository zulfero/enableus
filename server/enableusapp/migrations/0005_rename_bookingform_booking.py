# Generated by Django 5.0.6 on 2024-06-12 07:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('enableusapp', '0004_remove_bookingform_email_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='BookingForm',
            new_name='Booking',
        ),
    ]