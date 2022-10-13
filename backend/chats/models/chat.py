import os
import urllib
import uuid

from django.db import models


class ChatModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=256, unique=True)

    @property
    def qr_code(self):
        # noinspection PyUnresolvedReferences
        url = urllib.parse.quote_plus(f"{os.getenv('WEB_HOST')}/q/{self.id}")
        pixels = 512
        return f"https://api.qrserver.com/v1/create-qr-code/?data={url}&size={pixels}x{pixels}"

    def __str__(self):
        return self.name
