from django.contrib import admin

from .models import ChatModel, MessageModel

# Register your models here.
admin.site.register(ChatModel)
admin.site.register(MessageModel)
