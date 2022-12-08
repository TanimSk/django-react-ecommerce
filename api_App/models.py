from django.db import models
# from django.contrib.auth.models import User
# from allauth.account.signals import email_confirmed
# from django.dispatch import receiver

class Product(models.Model):

    name = models.CharField(max_length=50)
    description = models.TextField()
    price = models.FloatField()
    vacancy = models.IntegerField()
    # image = models.ImageField(upload_to="images/", null=True, blank=True)


# class UserProfile(models.Model):

#     GENDER = (
#         ('None', 'None'),
#         ('Male', 'Male'),
#         ('Female', 'Female')
#     )
    
#     user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
#     address = models.TextField(null=True, blank=True)
#     phone_number = models.CharField(max_length=15)
#     gender = models.CharField(
#         max_length=10,
#         choices=GENDER,
#         default='None'
#     )
#     birthday = models.DateField(null=True, blank=True)


# @receiver(email_confirmed)
# def email_confirmed_(request, email_address, **kwargs):
#     UserProfile.objects.create(user=email_address.user)