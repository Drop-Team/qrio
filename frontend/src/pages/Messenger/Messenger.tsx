import React, { useEffect, useState } from "react";
import styles from "./Messenger.module.scss";
import { Textarea, ActionIcon, Header, Text, LoadingOverlay } from "@mantine/core";
import { IconSend } from "@tabler/icons";
import { useMessengerLogic } from "pages/Messenger/Messenger.logic";
import { useNameGenerator } from "hooks/useNameGenerator";
import { useUserID } from "hooks/useUserID";
import {Message} from "components/Message";

export interface MessengerProps {}

export const Messenger:React.FC<MessengerProps> = (props) => {
  const logic = useMessengerLogic(props);
  const [
    chat,
    newMessage,
    getInputHandler,
    sendClickHandler,
    messageInputRef
  ] = logic.useMessenger();

  const [generateName] = useNameGenerator();
  const userID = useUserID();
  useEffect(() => {
    generateName(userID);
  }, []);

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
              {chat.messages.map((message) => <Message message={message}></Message>)}
            </div>

            <div className={styles["new-message-container"]}>
              <Textarea
                ref={messageInputRef}
                className={styles["new-message-input"]}
                size={"xs"}
                placeholder="Message"
                autosize
                minRows={1}
                maxRows={4}
                value={newMessage}
                onChange={getInputHandler("newMessage")}
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