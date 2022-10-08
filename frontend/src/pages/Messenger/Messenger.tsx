import React, { useState } from "react";
import styles from "./Messenger.module.scss";
import { Textarea, ActionIcon, TextInput, Header, Title, Text, LoadingOverlay } from "@mantine/core";
import { IconSend } from "@tabler/icons";
import { useMessengerLogic } from "pages/Messenger/Messenger.logic";

export interface MessengerProps {}

export const Messenger:React.FC<MessengerProps> = (props) => {
  const logic = useMessengerLogic(props);
  const [
    chat,
    message,
    getInputHandler,
    fetchMessage,
    sendClickHandler,
    messageInputRef
  ] = logic.useMessenger();

  return <>
    {
      !chat ? (
        <LoadingOverlay visible overlayBlur={2}/>
      ) : (
        <>
          <Header height={60} p="md">
            <Text size={"xl"}>{ chat.name }</Text>
          </Header>
          <div className={styles["messenger"]}>

            <div className={styles["messages-container"]}>
              <div className={styles["message-incoming"]}>
                <div className={styles["message-header"]}>
                  <div className={styles["message-nickname"]}>Владимир Ильич</div>
                  <div className={styles["message-time"]}>13:37</div>
                </div>
                <div>Широкая электрификация южных губерний даст мощный толчок подъему сельского хозяйства</div>
              </div>
            </div>

            <div className={styles["message-container"]}>
              <Textarea
                ref={messageInputRef}
                className={styles["message-input"]}
                size={"xs"}
                placeholder="Message"
                autosize
                minRows={1}
                maxRows={4}
                value={message}
                onChange={getInputHandler("message")}
              />
              <ActionIcon size={"lg"} variant={"filled"} color={"indigo"} onClick={sendClickHandler}>
                <IconSend/>
              </ActionIcon>
            </div>
          </div>
        </>
      )
    }
  </>
}