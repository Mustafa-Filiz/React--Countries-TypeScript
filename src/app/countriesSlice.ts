import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Root } from 'react-dom/client';
import { RootState } from './store';

export interface CountryState {
    countries: any[];
    selectedCountry: {};
    status: 'idle' | 'loading' | 'failed';
    filterRegion: string;
}

export const getAllCountries = createAsyncThunk(
    'countries/fetchCountries',
    async () => {
        const response = await axios.get(
            `${process.env.REACT_APP_COUNTRIES_API_URL}/all`
        );
        return response.data;
    }
);

const initialState: CountryState = {
    countries: [],
    selectedCountry: {},
    status: 'idle',
    filterRegion: '',
};

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCountries.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllCountries.fulfilled, (state, action) => {
                state.status = 'idle';
                state.countries = action.payload;
            })
            .addCase(getAllCountries.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const allCountries = (state: RootState) => state.countries.countries;
export const status = (state: RootState) => state.countries.status;
export const selectedRegion = (state: RootState) => state.countries.filterRegion;

export default countriesSlice.reducer;
