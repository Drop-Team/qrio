export interface MessageType {
  userID: string;
  text: string;
  created: Date;
}

export interface Chat {
  name: string;
  id: string;
  messages: MessageType[];
}