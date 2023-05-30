import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API = 'https://restcountries.com/v3.1/all';

export const fetchCountryData = createAsyncThunk('country/fetchData', async () => {
  const response = await fetch(API);
  const result = await response.json();

  const data = result.map((item) => ({
    name: item.name.common,
    capital: item.capital,
    continent: item.continents[0],
    flag: item.flags.png,
    population: item.population,
    map: item.maps.googleMaps,
    area: item.area,
  }));

  return data;
});

const initialState = {
  TheCountryData: [],
  loading: false,
  error: null,
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountryData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountryData.fulfilled, (state, action) => {
        state.loading = false;
        state.TheCountryData = action.payload;
      })
      .addCase(fetchCountryData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default countrySlice.reducer;
