from rest_framework import serializers
from .models import Product, ProductImage, UserProfile, OrderedProduct


class ImageUrlField(serializers.RelatedField):
    def to_representation(self, instance):
        url = instance.image.url
        request = self.context.get('request', None)
        if request is not None:
            return request.build_absolute_uri(url)
        return url


class ProductSerializer(serializers.ModelSerializer):
    product_images = ImageUrlField(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'price',
                  'vacancy', 'product_images',)

    def create(self, validated_data):
        return Product.objects.create(**validated_data)


class OrderedProductSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source='product.name')
    product_price = serializers.FloatField(source='product.price')
    images = serializers.SerializerMethodField()

    def get_images(self, obj: OrderedProduct):
        return [img.image.url for img in obj.product.product_images.all()]

    class Meta:
        model = OrderedProduct
        fields = ('user', 'product', 'quantity',
                  'delivered', 'product_name', 'product_price', 'images')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('name', 'address', 'phone_number', 'gender', 'birthday',)
