from rest_framework.serializers import ModelSerializer

from .message import MessageSerializer
from ..models import ChatModel


class ChatSerializer(ModelSerializer):
    messages = MessageSerializer(many=True, read_only=True)

    class Meta:
        model = ChatModel
        fields = ("id", "name", "messages", "qr_code")
