from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer

# Register a new user
@api_view(['POST'])
def user_signup(request):
  serializer = UserSerializer(data=request.data)
  
  if serializer.is_valid():
    user = serializer.save()
    return Response({"message": "User signing up is successfully"}, status=status.HTTP_201_CREATED)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Login user
@api_view(['POST'])
def user_login(request):
  username = request.data.get('username')
  password = request.data.get('password')

  user = authenticate(request, username=username, password=password)
  if user is not None:
    login(request, user)
    return Response({"message": f"Dear {username}, you logged in sucessfully"}, status=status.HTTP_200_OK)
  return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

# Logout user
@api_view(['POST'])
def user_logout(request):
  logout(request)
  return Response({"message": "You Logged out successfully."}, status=status.HTTP_200_OK)
