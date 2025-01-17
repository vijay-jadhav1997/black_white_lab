from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('api.urls'), name='api'),
    # path('', include('auth_api.urls'), name='auth_api'),
]
