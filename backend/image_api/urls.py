from django.urls import path

from . import views


urlpatterns = [
  path('upload-image/', views.upload_image, name='upload_image'),
  path('black-white-image/<int:bw_img_id>/', views.get_bw_image, name='get_bw_img'),
]
