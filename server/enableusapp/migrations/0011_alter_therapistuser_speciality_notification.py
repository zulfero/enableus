# Generated by Django 5.0.6 on 2024-06-12 11:30

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enableusapp', '0010_alter_booking_patient_alter_userprofile_gender'),
    ]

    operations = [
        migrations.AlterField(
            model_name='therapistuser',
            name='speciality',
            field=models.CharField(choices=[('athrities', 'Athrities'), ('chronic fatigue', 'Chronic Fatigue'), ('chronic pain', 'Chronic Pain'), ('spinal cord injuries', 'Spinal Cord Injuries'), ('dementia', 'Dementia'), ('stroke', 'Stroke')], max_length=100),
        ),
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('booking', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]