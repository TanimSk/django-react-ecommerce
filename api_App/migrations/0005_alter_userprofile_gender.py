# Generated by Django 4.1.4 on 2022-12-11 09:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_App', '0004_alter_userprofile_phone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='gender',
            field=models.CharField(blank=True, choices=[('Male', 'Male'), ('Female', 'Female')], max_length=10, null=True),
        ),
    ]
