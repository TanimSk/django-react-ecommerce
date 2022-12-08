from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=50)
    description = serializers.CharField()
    price = serializers.FloatField()
    vacancy = serializers.IntegerField()
    
    def create(self, validated_data):
        return Product.objects.create(**validated_data)