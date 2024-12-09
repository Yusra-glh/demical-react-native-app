import {ENDPOINTS, AUTHORIZATION_TOKEN} from '../../config';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {
  UserType,
  DoctorType,
  BannerType,
  CategoryType,
  ApointmentType,
} from '../../types';

import {userSlice} from '../slices/userSlice';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: ENDPOINTS.BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('authorization', `Bearer ${AUTHORIZATION_TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query<UserType | null, number>({
      query: (userId) => `${ENDPOINTS.GET_USER}/${userId}`,
      async onQueryStarted(_, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          if (data === null) {
            //   dispatch(userSlice.actions.logOut());
          }
        } catch {
          // dispatch(userSlice.actions.logOut());
        }
      },
    }),
    getDoctors: builder.query<{doctors: DoctorType[]}, number | undefined>({
      query: (doctorId) =>
        doctorId
          ? `${ENDPOINTS.GET_DOCTORS}/${doctorId}`
          : ENDPOINTS.GET_DOCTORS,
      transformResponse: (response: DoctorType) => ({
        doctors: Array.isArray(response) ? response : [],
      }),
    }),
    getBanners: builder.query<{banners: BannerType[]}, void>({
      query: () => ENDPOINTS.GET_BANNERS,
      transformResponse: (response: BannerType) => ({
        banners: Array.isArray(response) ? response : [],
      }),
    }),
    getAppointments: builder.query<{appointments: ApointmentType[]}, number>({
      query: (userId) => `${ENDPOINTS.GET_APPOINTMENTS}/${userId}`,
      transformResponse: (response: any) => ({
        appointments: Array.isArray(response) ? response : [],
      }),
    }),
    getCategories: builder.query<{categories: CategoryType[]}, void>({
      query: () => ENDPOINTS.GET_CATEGORIES,
      transformResponse: (response: any) => ({
        categories: Array.isArray(response) ? response : [],
      }),
    }),
    getDiagnostics: builder.query<{diagnostics: any[]}, void>({
      query: () => ENDPOINTS.GET_DIAGNOSTICS,
      transformResponse: (response: any) => ({
        diagnostics: Array.isArray(response) ? response : [],
      }),
    }),
    getNotifications: builder.query<{notifications: any[]}, void>({
      query: (userId) => `${ENDPOINTS.GET_NOTIFICATIONS}/${userId}`,
      transformResponse: (response: any) => ({
        notifications: Array.isArray(response) ? response : [],
      }),
    }),
  }),
});

export const queryHooks = {
  useGetUserQuery: apiSlice.endpoints.getUser.useQuery,
  useGetBannersQuery: apiSlice.endpoints.getBanners.useQuery,
  useGetDoctorsQuery: apiSlice.endpoints.getDoctors.useQuery,
  useGetCategoriesQuery: apiSlice.endpoints.getCategories.useQuery,
  useGetDiagnosticsQuery: apiSlice.endpoints.getDiagnostics.useQuery,
  useGetAppointmentsQuery: apiSlice.endpoints.getAppointments.useQuery,
};

export default apiSlice.reducer;
