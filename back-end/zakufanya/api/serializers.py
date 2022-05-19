from rest_framework import serializers
from todo.models import Todo

from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from django.contrib.auth import get_user_model
UserModel = get_user_model()


class TodoSerializer(serializers.ModelSerializer):

    def getUsername(self, obj):
        return obj.user.first_name

    created = serializers.ReadOnlyField()
    completed = serializers.ReadOnlyField()
    user = serializers.SerializerMethodField("getUsername", read_only=True)

    class Meta:
        model = Todo
        fields = ['id', 'title', 'memo', 'created', 'completed', 'user']


class TodoToggleCompleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ['id']
        read_only_fields = ['title', 'memo', 'created', 'completed']


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        token['first_name'] = user.first_name
        # ...
        return token

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = UserModel
        fields = ('email', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = UserModel.objects.create(
            email=validated_data['email']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user