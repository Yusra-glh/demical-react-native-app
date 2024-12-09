export interface DoctorType {
  name: string;
  rating: number;
  photo: string;
  specialty: string;
  id: number | string;
  specialities: string[];
  start_time: string;
  end_time: string;
  price: string;
  biography: string;
  available_time: string[];
  certificates: string[];
}
