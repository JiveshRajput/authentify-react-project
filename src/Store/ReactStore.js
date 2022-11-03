import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './LoggedInSlice'
import AllCountriesDetailReducer from './AllCountriesListSlice'

const reactStore = configureStore({
    reducer: {
        loggedIn: loginReducer,
        CountryDetailList: AllCountriesDetailReducer
    }
});

export default reactStore;