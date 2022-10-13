from rest_framework_nested.routers import DefaultRouter, NestedSimpleRouter

from .views.chat import ChatViewSet
from .views.message import ChatMessageViewSet

router = DefaultRouter()
router.register("chats", ChatViewSet, basename="chat")

chats_router = NestedSimpleRouter(router, "chats", lookup="chat")
chats_router.register("messages", ChatMessageViewSet, basename="chat-message")

urlpatterns = []
urlpatterns += router.urls
urlpatterns += chats_router.urls
