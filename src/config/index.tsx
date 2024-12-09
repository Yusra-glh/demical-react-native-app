const LOCALHOST = 'http://127.0.0.1:8000/';
const DOMAIN = 'https://demical.rn-admin.site/';

export const BASE_URL = LOCALHOST;

export const GET_USER = `${BASE_URL}api/user`;
export const GET_BANNERS = `${BASE_URL}api/banners`;
export const GET_DOCTORS = `${BASE_URL}api/doctors`;
export const GET_CATEGORIES = `${BASE_URL}api/categories`;
export const GET_DIAGNOSTICS = `${BASE_URL}api/diagnostics`;
export const GET_APPOINTMENTS = `${BASE_URL}api/appointments`;
export const GET_NOTIFICATIONS = `${BASE_URL}api/notifications`;

export const LOGIN_USER = `${BASE_URL}api/user/login`;
export const CREATE_USER = `${BASE_URL}api/user/create`;
export const NEW_APPOINTMENT = `${BASE_URL}api/appointments/create`;

export const AUTHORIZATION_TOKEN = 'aH3KCew1YsWhWqW0tqNU3ndzHb3RdblI';

export const CONFIG = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + AUTHORIZATION_TOKEN,
  },
};

export const ENDPOINTS = {
  BASE_URL,
  GET_USER,
  LOGIN_USER,
  GET_DOCTORS,
  GET_BANNERS,
  CREATE_USER,
  GET_CATEGORIES,
  GET_DIAGNOSTICS,
  GET_APPOINTMENTS,
  GET_NOTIFICATIONS,
};
