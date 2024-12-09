import type {RootStackParamList} from './RootStackParamList';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type DoctorDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'DoctorDetails'
>;

export type UserCreationProcessScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'UserCreationProcess'
>;

export type MakeAnAppointmentScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MakeAnAppointment'
>;

export type BiographyScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Biography'
>;

export type ReviewsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Reviews'
>;

export type DiagnosticDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'DiagnosticDetails'
>;

export type DirectMessagesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'DirectMessages'
>;

export type WebScreenProps = NativeStackScreenProps<RootStackParamList, 'Web'>;
