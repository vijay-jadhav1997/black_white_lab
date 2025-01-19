from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.core.files.base import ContentFile

from rest_framework.response import Response
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status

from PIL import Image as Pillow_Image
from io import BytesIO

from .models import Image
from .serializers import ImageSerializer

# Create your views here.

# @login_required()
@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def upload_image(request):
  # print('request.data => ', request.data)
  if 'img' not in request.data:
    return Response({'error': 'No image file'}, status=status.HTTP_400_BAD_REQUEST)
  
  serializer = ImageSerializer(data=request.data)

  if serializer.is_valid():
    img = serializer.save()

    img_path = img.img.path

    try:
      with Pillow_Image.open(img_path) as image:
        bw_img = image.convert('L')
        
        bw_img_path = img_path.replace('images', 'bw_images')
        bw_img.save(bw_img_path)

      img.bw_img.name =  bw_img_path.split('media/')[-1]
      # print('img.bw_img_path => ', img.bw_img.name)
      img.save()

      response_data = {
        'img_url': img.img.url,
        'bw_img_url': img.bw_img.url,
      }
      
      return Response(response_data, status=status.HTTP_200_OK)
    except Exception as error:
      return Response({'error': 'Opps..., failed to convert image to black and white', 'details': str(error)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
      
  else:
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# @login_required()
@api_view(['GET'])
def get_bw_image(request, bw_img_id):
  try:
    image = Image.objects.get(id=bw_img_id)
  except Image.DoesNotExist:
    return Response({"error": "Image not found."}, status=status.HTTP_404_NOT_FOUND)
  else:
    serializer = ImageSerializer(image)
    return Response(serializer.data, status=status.HTTP_200_OK)