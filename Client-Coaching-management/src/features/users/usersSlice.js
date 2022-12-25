import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'user',
    initialState: { token: null, user: null },
    reducers: {
        setCredentials: (state, action) => {
            console.log(action.payload);
            const { token, user } = action.payload;
            state.token = token;
            state.user = user;
        },
        logOut: (state, action) => {
            state.token = null;
            state.user = null;
        }
    }
});

export const { setCredentials, logOut } = usersSlice.actions;

export default usersSlice.reducer;
export const selectCurrentToken = (state) => state.user.token;
export const selectCurrentUser = (state) => state.user.user;
