import {ViewToken} from 'react-native/types';

import type {UserType} from './UserType';
import type {ChatType} from './ChatType';
import type {BannerType} from './BannerType';
import type {DoctorType} from './DoctorType';
import type {ReviewType} from './ReviewType';
import type {CategoryType} from './CategoryType';
import type {ApointmentType} from './AppointmentType';
import type {NotificationType} from './NotificationType';
import type {RootStackParamList} from './RootStackParamList';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type ViewableItemsChanged = {
  viewableItems: Array<ViewToken>;
  changed: Array<ViewToken>;
};

export type OnboardingTypes = {
  id: number;
  image: any;
  description: string;
  title: string;
};

export type VerifyYourPhoneNumberScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'VerifyYourPhoneNumber'
>;

export type {
  UserType,
  ChatType,
  DoctorType,
  ReviewType,
  BannerType,
  CategoryType,
  ApointmentType,
  NotificationType,
  RootStackParamList,
};
