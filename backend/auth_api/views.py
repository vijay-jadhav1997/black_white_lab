from django.http import JsonResponse
from django.contrib.auth import authenticate, logout
from django.views.decorators.csrf import csrf_exempt

from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated

from .serializers import UserSignupSerializer, UserLoginSerializer

# Register a new user
@api_view(['POST'])
def user_signup(request):
  serializer = UserSignupSerializer(data=request.data)
  
  if serializer.is_valid():
    user = serializer.save()
    # print('user serializer => ', user)
    return Response({"message": "User signing up is successfully"}, status=status.HTTP_201_CREATED)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




@api_view(['POST'])
def user_login(request):

  serializer = UserLoginSerializer(data=request.data)

  if serializer.is_valid():
    user = authenticate(
      username=serializer.validated_data['username'],
      password=serializer.validated_data['password']
    )
    if user is not None:
      refresh = RefreshToken.for_user(user)
      # return Response({"message": f"Dear {serializer.validated_data['username']}, you logged in sucessfully"}, status=status.HTTP_200_OK)
      return Response({
        'refresh': str(refresh),
        'access': str(refresh.access_token),
      })
    return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)



# Logging out a user
@api_view(['POST', 'OPTIONs'])
def user_logout(request):
  print(request.data)
  # logout(request)
  try:
    logout(request) 
    refresh_token = request.data.get('refresh')
    print(refresh_token)
    token = RefreshToken(refresh_token)
    token.blacklist()
    return Response({"message": "You Logged out successfully."}, status=status.HTTP_200_OK)
  except Exception as e:
    return Response({"error": "Invalid token"}, status=status.HTTP_400_BAD_REQUEST)
