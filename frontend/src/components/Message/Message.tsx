import React from "react";
import styles from "./Message.module.scss";
import { MessageType } from "../../types/Chat";
import {useUserID} from "../../hooks/useUserID";
import {formatTime} from "../../utils/formatTime";

export interface MessageProps {
  message : MessageType
}

export const Message:React.FC<MessageProps> = (props) => {
  const userID = useUserID();

  const isMine = userID === props.message.userID;

  return <div className={styles[`message-${isMine ? "mine" : "incoming"}`]}>
    <div className={styles["message-header"]}>
      <div className={styles["message-nickname"]}>Владимир Ильич</div>
      <div className={styles["message-time"]}>{formatTime(props.message.created)}</div>
    </div>
    <div>{props.message.text}</div>
  </div>
}