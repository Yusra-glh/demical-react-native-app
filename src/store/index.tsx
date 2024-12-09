import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import {apiSlice} from './slices/apiSlice';
import {tabSlice} from './slices/tabSlice';
import {tagSlice} from './slices/tagSlice';
import {userSlice} from './slices/userSlice';
import {startSlice} from './slices/startSlice';
import {versionSlice} from './slices/versionSlice';
import {currencySlice} from './slices/currencySlice';
import {favoriteSlice} from './slices/favoriteSlice';

const rootReducer = combineReducers({
  tabSlice: tabSlice.reducer,
  tagSlice: tagSlice.reducer,
  apiSlice: apiSlice.reducer,
  userSlice: userSlice.reducer,
  startSlice: startSlice.reducer,
  versionSlice: versionSlice.reducer,
  currencySlice: currencySlice.reducer,
  favoriteSlice: favoriteSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'tabSlice',
    'userSlice',
    'startSlice',
    'favoriteSlice',
    'userDemoSlice',
    'currencySlice',
    'versionSlice',
    'rememberMeSlice',
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppSelector = typeof store.getState;

export const persistor = persistStore(store);
