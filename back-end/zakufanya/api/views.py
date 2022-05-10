
# Create your views here.
from rest_framework import generics, permissions
from rest_framework.decorators import permission_classes

from .serializers import TodoSerializer
from todo.models import Todo
from rest_framework import status
from rest_framework.response import Response

class TodoList(generics.ListCreateAPIView):
    # ListAPIView requires two mandatory attributes, serializer_class and
    # queryset.
    # We specify TodoSerializer which we have earlier implemented

    serializer_class = TodoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(user=user).order_by('-created')
        # if user is not None:
        #     queryset = Todo.objects.filter(user=user).order_by('-created')
        # else:
        #     return Response({'status': 'details'}, status=status.HTTP_404_NOT_FOUND)
        # return queryset

    def perform_create(self, serializer):
        # serializer holds a django model
        user = self.request.user
        serializer.save(user=user)
        # if user is not None:
        #     serializer.save(user=user)
        # else:
        #     return Response({'status': 'details'}, status=status.HTTP_404_NOT_FOUND)


class TodoRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TodoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(user=user)
