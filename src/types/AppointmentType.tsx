export type ApointmentType = {
  id: number;
  name: string;
  status: string;
  typing: boolean;
  photo?: string;
  lastMessage: string;
  time: string;
  read: boolean;
  newMessages: number;
  upcoming: boolean;
  doctor_id: number;
  history?: {
    id: number;
    message: string;
    time: string;
    sender: string;
  }[];
};
