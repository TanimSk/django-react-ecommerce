from django.db import models


class Product(models.Model):

    name = models.CharField(max_length=50)
    description = models.TextField()
    price = models.FloatField()
    vacancy = models.IntegerField()
    image = models.ImageField(upload_to="images/")
