import { createSlice } from '@reduxjs/toolkit'

const loggedIn = createSlice({
    name: "loggedIn",
    initialState: false,
    reducers: {
        setLoggedIn(state, actions) {
            return actions.payload;
        }
    }
});

export const { setLoggedIn } = loggedIn.actions;
export default loggedIn.reducer;