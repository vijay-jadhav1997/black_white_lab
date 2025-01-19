from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from rest_framework import serializers


class UserSignupSerializer(serializers.ModelSerializer):
  password = serializers.CharField(write_only=True)
  password2 = serializers.CharField(write_only=True)
  class Meta:
    model = User
    fields = ['username', 'email', 'password', 'password2']

  def validate(self, data):
    if data['password'] != data['password2']:
      raise serializers.ValidationError({'password': 'Passwords do not match'})
    return data

  def create(self, validated_data):
    validated_data.pop('password2')
    user = User.objects.create_user(**validated_data)
    return user
  
# Serializer for user login
class UserLoginSerializer(serializers.Serializer):
  username = serializers.CharField(required=True)
  password = serializers.CharField(required=True, write_only=True)

  def validate(self, data):
    user = authenticate(username=data.get('username'), password=data.get('password'))
    if not user:
      raise serializers.ValidationError('Invalid username and password.')
    return data