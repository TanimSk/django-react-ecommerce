# Generated by Django 4.1.4 on 2022-12-11 11:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_App', '0005_alter_userprofile_gender'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
    ]
