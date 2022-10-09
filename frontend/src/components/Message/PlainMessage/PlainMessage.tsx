import React from "react";
import styles from "./PlainMessage.module.scss";
import {formatTime} from "utils/formatTime";

const messageKindToClass = {
  "mine": "message-mine",
  "incoming": "message-incoming",
  "system": "message",
}

export type MessageKind = keyof typeof messageKindToClass;

export interface PlainMessageProps {
  messageKind : MessageKind,
  text : string,
  username? : string,
  time? : Date,
}

export const PlainMessage:React.FC<PlainMessageProps> = (props) => {
  return <div className={styles[messageKindToClass[props.messageKind]]}>
    <div className={styles["message-header"]}>
      {props.username ? <div className={styles["message-nickname"]}>{props.username}</div> : <></>}
      {props.time ? <div className={styles["message-time"]}>{formatTime(props.time)}</div> : <></>}
    </div>
    <div>{props.text}</div>
  </div>
}