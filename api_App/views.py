from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser

# -------------- Authentication ------------------
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes

from django.http import HttpResponse, JsonResponse

from .serializers import ProductSerializer, UserSerializer, OrderedProductSerializer
from .models import Product, UserProfile, OrderedProduct


# ---------- Public Data ----------
@api_view(['GET', 'POST'])
def products_detail(request, product_id=None):

    if request.method == 'POST':
        serializer = ProductSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return HttpResponse('OK')
        else:
            return HttpResponse(status=404)

    if product_id is None:
        products = Product.objects.all()
        serialized_data = ProductSerializer(products, many=True)
    else:
        product = Product.objects.get(id=product_id)
        serialized_data = ProductSerializer(product)

    return JsonResponse(serialized_data.data, safe=False)


# ---------- Private Data ----------
@api_view(['GET'])
@permission_classes((IsAuthenticated, ))
def is_valid(request):
    return Response({
        'status': 'OK'
    })


@api_view(['GET', 'PUT'])
@permission_classes((IsAuthenticated, ))
def user_profile(request):
    user_profile = UserProfile.objects.get(user=request.user)

    if request.method == 'PUT':
        serializer = UserSerializer(user_profile, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return HttpResponse('ok', status=201)
        else:
            return HttpResponse('error', status=404)

    user_profile_data = UserSerializer(user_profile)
    return JsonResponse(user_profile_data.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated, ])
def order_products(request):

    user_instance = UserProfile.objects.get(user=request.user)

    if request.method == 'POST':

        product_instance = Product.objects.get(id=request.data['product_id'])
        quantity = int(request.data['quantity'])

        OrderedProduct.objects.create(
            user=user_instance, product=product_instance, quantity=quantity)

        return Response({
            'status': 'OK'
        })

    ordered_products = OrderedProduct.objects.filter(
        user=user_instance, confirmed=False)
    products = OrderedProductSerializer(ordered_products, many=True)

    return JsonResponse(products.data, safe=False)


@api_view(['POST'])
@permission_classes([IsAuthenticated, ])
def order_confirm(request):
    user_instance = UserProfile.objects.get(user=request.user)
    OrderedProduct.objects.filter(user=user_instance).update(
        confirmed=True
    )
    return Response({
        'status': 'OK'
    })
