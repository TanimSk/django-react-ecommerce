from django.contrib import admin
from .models import *

class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "description", "price", )

# @admin.register(UserProfile)
# class UserProfileAdmin(admin.ModelAdmin):
#     list_display = ("user", "address", "phone_number", "gender", "birthday", )

admin.site.register(Product, ProductAdmin)
# admin.site.register(UserProfile, UserProfileAdmin)