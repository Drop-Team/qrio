import { API_URL } from "consts";
import { useEffect, useState } from "react";
import { Chat } from "types/Chat";
import { useUserID } from "./useUserID";

interface ChatDTO {
  id: string,
  name: string
  messages: Array<{ user_id: string, text: string, created: string }>
}

export const useMessengerAPI = (id: string = "") => {
  const [chat, setChat] = useState<Chat|undefined>();
  const userID = useUserID();
  const [messageSentFlag, setMessageSentFlag] = useState<boolean>(false);

  const fetchChat = () => {
    fetch(API_URL+"chats/"+id+"/")
      .then((res) => res.text())
      .then((res) => JSON.parse(res) as ChatDTO)
      .then((res) => {
        return {
          ...res,
          messages: res.messages.map((message) => (
              {
                ...message,
                created : new Date(message.created),
                userID: message.user_id,
              })),
        } as Chat
      })
      .then(setChat);
  }

  const sendMessage = (message: string) => {
    if (message == "") return;

    fetch(API_URL+"chats/"+id+"/messages/", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user_id: userID, text: message })
    })
      .then((res) => res.text())
      .then((res) => JSON.parse(res) as string)
      .then(() => {
        setMessageSentFlag(flag => !flag);
      });
  }

  useEffect(() => {
    fetchChat();
  }, [id, messageSentFlag])

  return [chat, fetchChat, sendMessage] as const;
}