from rest_framework.serializers import ModelSerializer

from ..models import MessageModel


class MessageSerializer(ModelSerializer):
    class Meta:
        model = MessageModel
        fields = ("id", "user_id", "text", "created")
