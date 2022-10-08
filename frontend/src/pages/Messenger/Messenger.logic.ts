import { MessengerProps } from "pages/Messenger/Messenger";
import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useMessengerAPI } from "hooks/useMessengerAPI";

export const useMessengerLogic = (props: MessengerProps) => {
  const { id } = useParams();
  return {
    useMessenger: () => {
      const [newMessage, setNewMessage] = useState<string>("");

      const messageInputRef = useRef<HTMLTextAreaElement>(null);

      const [chat, fetchMessages, sendMessage] = useMessengerAPI(id);

      const getChangeHandler = (field: "newMessage") => {
        let setState: CallableFunction;
        switch (field) {
          case "newMessage":
            setState = setNewMessage;
            break;
        }

        return (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          setState(event.currentTarget.value);
        }
      }

      const sendClickHandler = () => {
        sendMessage(newMessage);
        messageInputRef.current?.focus();
      }

      return {
        chat,
        newMessage,
        getChangeHandler,
        fetchMessages,
        sendClickHandler,
        messageInputRef
      } as const;
    }
  }
}