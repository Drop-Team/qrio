import { API_URL } from "hooks/consts";
import { useEffect, useState } from "react";
import { Chat } from "types/Chat";

interface ChatDTO {
  id: string,
  name: string
  messages: Array<{ id: string, text: string, name: string, created: Date }>
}

export const useMessengerAPI = (id: string = "") => {

  const [chat, setChat] = useState<Chat|undefined>();
  const [messageSentFlag, setMessageSentFlag] = useState<boolean>(false);

  const fetchChat = () => {
    fetch(API_URL+"chats/"+id+"/")
      .then((res) => res.text())
      .then((res) => JSON.parse(res) as ChatDTO)
      .then((res) => {
        setChat(res);
      });
  }

  const sendMessage = (nickname: string, message: string) => {
    if (nickname == "" || message == "") return;

    fetch(API_URL+"chats/"+id+"/messages/", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: nickname, text: message })
    })
      .then((res) => res.text())
      .then((res) => JSON.parse(res) as string)
      .then(() => {
        setMessageSentFlag(flag => !flag);
      });
  }

  // useEffect(() => {
  //  fetchChat();
  // }, [id, messageSentFlag])

  return [chat, fetchChat, sendMessage] as const;
}