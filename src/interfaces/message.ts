export interface Message {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface MessageErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
