import React from "react";
import styles from "./Message.module.scss";

export interface MessageProps {}

export const Message:React.FC<MessageProps> = (props) => {
  return <div className={styles["message-incoming"]}>
    <div className={styles["message-header"]}>
      <div className={styles["message-nickname"]}>Владимир Ильич</div>
      <div className={styles["message-time"]}>13:37</div>
    </div>
    <div>Широкая электрификация южных губерний даст мощный толчок подъему сельского хозяйства</div>
  </div>
}