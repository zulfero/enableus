# Generated by Django 5.0.6 on 2024-06-12 07:19

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enableusapp', '0005_rename_bookingform_booking'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='patient',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
