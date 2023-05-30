import { configureStore } from '@reduxjs/toolkit';
import countrySlice from './Country/countrySlice';

const store = configureStore({
  reducer: {
    country: countrySlice,
  },
});

export default store;
