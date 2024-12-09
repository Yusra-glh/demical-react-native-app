import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CurrencyState {
  currency: string;
  symbol: string;
}

const currencySymbols: {[key: string]: string | undefined} = {
  USD: '$',
  EUR: '€',
  GBP: '£',
};

const initialState: CurrencyState = {
  currency: 'USD',
  symbol: currencySymbols['USD'] || '',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
      state.symbol = currencySymbols[action.payload] || '';
    },
  },
});

export const {setCurrency} = currencySlice.actions;

export {currencySlice};
