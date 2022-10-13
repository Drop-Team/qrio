from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet

from ..models import ChatModel
from ..serializers import ChatSerializer


class ChatViewSet(mixins.ListModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.CreateModelMixin,
                  GenericViewSet):
    queryset = ChatModel.objects.all()
    serializer_class = ChatSerializer
