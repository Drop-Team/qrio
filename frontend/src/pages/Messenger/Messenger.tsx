import React, { useState } from "react";
import styles from "./Messenger.module.scss";

export interface MessengerProps {

}

export const Messenger:React.FC<MessengerProps> = (props) => {
  const [message, setMessage] = useState<string>("");

  return <div className={styles["messenger"]}>
    <></>
  </div>
}