# Generated by Django 2.2.9 on 2021-05-28 18:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('attendances', '0003_attendance_start_img'),
    ]

    operations = [
        migrations.AddField(
            model_name='attendance',
            name='end_img',
            field=models.ImageField(blank=True, null=True, upload_to='attendances/img'),
        ),
    ]
