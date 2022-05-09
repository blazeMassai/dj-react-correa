from django.contrib.auth import get_user_model
from django.http import request
from rest_framework.permissions import IsAuthenticated

UserModel = get_user_model()

# Create your views here.
from rest_framework import generics
from .serializers import TodoSerializer
from todo.models import Todo

class TodoList(generics.ListCreateAPIView):
    # ListAPIView requires two mandatory attributes, serializer_class and
    # queryset.
    # We specify TodoSerializer which we have earlier implemented

    serializer_class = TodoSerializer

    # permission_classes = (
    #     IsAuthenticated,
    # )

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(user=user).order_by('-created')

    def perform_create(self, serializer):
        # serializer holds a django model
        user = self.request.user.id
        serializer.save(user_id=1)
