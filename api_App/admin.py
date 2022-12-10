from django.contrib import admin
from .models import *


class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "description", "price", )


admin.site.register(Product, ProductAdmin)


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ("user", "gender",  "name", "address",
                    "phone_number", "birthday", )
