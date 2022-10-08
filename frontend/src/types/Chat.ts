export interface Message {
  id: string;
  name: string;
  text: string;
  created: Date;
}

export interface Chat {
  name: string;
  id: string;
  messages: Message[];
}