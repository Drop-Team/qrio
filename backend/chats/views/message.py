from rest_framework import mixins
from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from ..models import MessageModel
from ..serializers import MessageSerializer


class ChatMessageViewSet(mixins.ListModelMixin,
                         mixins.RetrieveModelMixin,
                         GenericViewSet):
    queryset = MessageModel.objects.all()
    serializer_class = MessageSerializer

    def create(self, request, chat_pk):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(chat_id=chat_pk)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
