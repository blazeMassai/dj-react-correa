from rest_framework import  serializers
from todo.models import Todo

class TodoSerializer(serializers.ModelSerializer):

    def getUsername(self, obj):
        return obj.user.first_name

    created = serializers.ReadOnlyField()
    completed = serializers.ReadOnlyField()
    user = serializers.SerializerMethodField("getUsername", read_only=True)

    class Meta:
        model = Todo
        fields = ['id', 'title', 'memo','created','completed', 'user']