import { createSlice } from '@reduxjs/toolkit'

const AllCountriesDetailListSlice = createSlice({
    name: "AllCountriesDetailList",
    initialState: {
        countryList: null,
        countryListLength: 0
    },
    reducers: {
        setCountryList(state, actions) {
            return { countryList: actions.payload, countryListLength: actions.payload.length };
        }
    }
});

export function fetchCountryDetails() {
    return async function fetchDetails(dispatch, getState) {
        try {
            const res = await fetch('https://restcountries.com/v3.1/all');
            const data = await res.json();
            dispatch(setCountryList(data));
        } catch (err) {
            console.log(err);
        }
    }
}

export const { setCountryList } = AllCountriesDetailListSlice.actions;
export default AllCountriesDetailListSlice.reducer;