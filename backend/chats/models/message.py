import uuid

from django.db import models

from .chat import ChatModel


class MessageModel(models.Model):
    chat = models.ForeignKey(ChatModel, on_delete=models.CASCADE, related_name="messages")
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user_id = models.UUIDField()
    text = models.CharField(max_length=512)
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user_id}: {self.text}"
