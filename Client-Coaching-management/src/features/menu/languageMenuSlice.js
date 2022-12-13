import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    language: 'English - Australia',
    open: false
};

export const LanguageMenuSlice = createSlice({
    name: 'language',
    name: 'open',
    initialState,
    reducers: {
        clickItem: (state, actions) => {
            state.language = actions.payload;
        },
        closeItem: (state, actions) => {
            state.open = actions.payload;
        }
    }
});

export const { clickItem, closeItem } = LanguageMenuSlice.actions;

export default LanguageMenuSlice.reducer;
