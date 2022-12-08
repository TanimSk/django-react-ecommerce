from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser

from django.http import JsonResponse, HttpResponse
from io import BytesIO

from .serializers import ProductSerializer
from .models import Product


@api_view(['GET', 'POST'])
def getData(request):

    if request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return HttpResponse('OK')
        else:
            return HttpResponse(status=404)
            

    products = Product.objects.all()
    serialized_data = ProductSerializer(products, many=True)

    return Response(serialized_data.data)
