import React, { useEffect, useRef } from "react";
import styles from "./Messenger.module.scss";
import { Textarea, ActionIcon, Header, Text, LoadingOverlay, AppShell, ScrollArea } from "@mantine/core";
import { IconSend } from "@tabler/icons";
import { useMessengerLogic } from "pages/Messenger/Messenger.logic";
import {Message} from "components/Message";
import {EmptyChatMessage} from "prefabs/systemMessages";
import {DebugDrawer} from "components/DebugDrawer";

export interface MessengerProps {}

export const Messenger:React.FC<MessengerProps> = (props) => {
  const logic = useMessengerLogic(props);
  const {
    chat,
    newMessage,
    getChangeHandler,
    sendClickHandler,
    messageInputRef,
    messagesScrollRef
  } = logic.useMessenger();

  return <>
    {
      !chat ? (
        <LoadingOverlay visible overlayBlur={2}/>
      ) : (
        <AppShell
          styles={{
            main: {
              "position": "absolute",
              "bottom": 0,
              "top": 0,
              "left": 0,
              "right": 0,
              "min-height": 0,
              "padding-left": "8px",
              "padding-right": "8px"
            }
          }}>
          <Header height={60} p="md">
            <Text size={"xl"}>{ chat.name }</Text>
          </Header>
          <div className={styles["messenger"]}>

            <ScrollArea
              type={"scroll"}
              scrollbarSize={2}
              viewportRef={messagesScrollRef}
            >
              <div className={styles["messages-container"]}>
                {chat.messages.length === 0 ? <EmptyChatMessage/> : <></>}
                {chat.messages.map((message) =>
                  <Message message={message} key={message.created.getMilliseconds()}></Message>
                )}
              </div>
            </ScrollArea>

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
                onChange={getChangeHandler("newMessage")}
              />
              <ActionIcon size={"lg"} variant={"filled"} color={"indigo"} onClick={sendClickHandler}>
                <IconSend/>
              </ActionIcon>
            </div>
          </div>
        </AppShell>
      )
    }
  </>
}