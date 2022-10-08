import { MessengerProps } from "pages/Messenger/Messenger";
import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useMessengerAPI } from "hooks/useMessengerAPI";

export const useMessengerLogic = (props: MessengerProps) => {
  const { id } = useParams();
  return {
    useMessenger: () => {
      const [message, setMessage] = useState<string>("");
      const [nickname, setNickname] = useState<string>("");

      const messageInputRef = useRef(null);

      const [chat, fetchMessages, sendMessage] = useMessengerAPI(id);

      const getChangeHandler = (field: "nickname" | "message") => {
        let setState: CallableFunction;
        switch (field) {
          case "nickname":
            setState = setNickname;
            break;
          case "message":
            setState = setMessage;
            break;
        }

        return (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          setState(event.currentTarget.value);
        }
      }

      const sendClickHandler = () => {
        sendMessage(message);
        // messageInputRef.current?.focus();
      }

      return [
        chat,
        message,
        nickname,
        getChangeHandler,
        fetchMessages,
        sendClickHandler,
        messageInputRef
      ] as const;
    }
  }
}