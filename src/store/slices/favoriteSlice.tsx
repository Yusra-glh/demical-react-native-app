import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import type {DoctorType} from '../../types';

type WishlistState = {list: DoctorType[]};

const initialState: WishlistState = {
  list: [],
};

export const favoriteSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<DoctorType>) => {
      const inWishlist = state.list.find(
        (item) => item.id === action.payload.id,
      );

      if (!inWishlist) {
        state.list.push({
          ...action.payload,
        });
      }
    },
    removeFromFavorite: (state, action: PayloadAction<DoctorType>) => {
      const inWishlist = state.list.find(
        (item) => item.id === action.payload.id,
      );

      if (inWishlist) {
        state.list = state.list.filter((item) => item.id !== action.payload.id);
      }
    },
  },
});

export const {addToFavorite, removeFromFavorite} = favoriteSlice.actions;
