from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from users.serializers import UserSerializer
import jwt
from django.conf import settings


class UserView(APIView):
    def get(self, request):
        return Response(UserSerializer(request.user).data)


@api_view(["POST"])
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    if not username or not password:
        return Response(status=status.HTTP_400_BAD_REQUEST)
    user = authenticate(username=username, password=password)
    if user is not None:
        encoded_jwt = jwt.encode(
            {"pk": user.pk}, settings.SECRET_KEY, algorithm="HS256"
        )
        return Response(data={"token": encoded_jwt})
    else:
        return Response(status=status.HTTP_401_UNAUTHORIZED)