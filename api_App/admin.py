from django.contrib import admin
from .models import *

class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "description", "price", "vacancy", "image", )


admin.site.register(Product, ProductAdmin)

