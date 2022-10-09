import { MessengerProps } from "pages/Messenger/Messenger";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useMessengerAPI } from "hooks/useMessengerAPI";
import { usePrevious, useToggle } from "@mantine/hooks";

export const useMessengerLogic = (props: MessengerProps) => {
  const { id } = useParams();
  return {
    useMessenger: () => {
      const [newMessage, setNewMessage] = useState<string>("");
      const [scrolled, setScrolled] = useState<boolean>(false);

      const messageInputRef = useRef<HTMLTextAreaElement>(null);
      const messagesScrollRef = useRef<HTMLDivElement>(null);

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

      const scrollDown = () => {
        messagesScrollRef.current?.scrollTo({ top: messagesScrollRef.current.scrollHeight });
      }

      const sendClickHandler = () => {
        sendMessage(newMessage);
        messageInputRef.current?.focus();
        setNewMessage("");
        setScrolled(false);
      }

      useEffect(() => {
        if (!scrolled && chat !== undefined) {
          setScrolled(true);
          scrollDown();
        }
      }, [chat]);

      return {
        chat,
        newMessage,
        getChangeHandler,
        fetchMessages,
        sendClickHandler,
        messageInputRef,
        messagesScrollRef
      } as const;
    }
  }
}