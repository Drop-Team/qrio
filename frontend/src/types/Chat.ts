export interface Message {
  userID: string;
  text: string;
  created: Date;
}

export interface Chat {
  name: string;
  id: string;
  messages: Message[];
}