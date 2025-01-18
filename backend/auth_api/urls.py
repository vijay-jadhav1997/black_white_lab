from django.urls import path
from . import views

urlpatterns = [
  path('user-signup/', views.user_signup, name='user_signup'),
  path('user-login/', views.user_login, name='user_login'),
  path('user-logout/', views.user_logout, name='user_logout'),
]
