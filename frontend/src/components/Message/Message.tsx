import React from "react";
import { MessageType } from "types/Chat";
import { useUserID } from "hooks/useUserID";
import {PlainMessage} from "components/Message/PlainMessage";
import {generateName} from "utils/generateName";


export interface MessageProps {
  message : MessageType
}

export const Message:React.FC<MessageProps> = (props) => {
  const isMine = useUserID() === props.message.userID;

  return <PlainMessage
      messageKind={isMine ? "mine" : "incoming"}
      text={props.message.text}
      username={generateName(props.message.userID)}
      time={props.message.created}
  />
}