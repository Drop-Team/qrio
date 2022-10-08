import { API_URL } from "hooks/consts";
import { useEffect, useState } from "react";
import { Chat } from "types/Chat";
import { useUserID } from "./useUserID";

interface ChatDTO {
  id: string,
  name: string
  messages: Array<{ userID: string, text: string, created: Date }>
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
        setChat(res);
      });
  }

  const sendMessage = (message: string) => {
    if (message == "") return;

    fetch(API_URL+"chats/"+id+"/messages/", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userID, text: message })
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