import { createSlice } from '@reduxjs/toolkit';
const item = JSON.parse(localStorage.getItem('IsUpdate'));

const studentSlice = createSlice({
    name: 'student',
    initialState: { IsUpdate: item },
    reducers: {
        show: (state, action) => {
            console.log(action.payload);
            state.IsUpdate = action.payload;
            localStorage.setItem('IsUpdate', JSON.stringify(state.IsUpdate));
        }
    }
});

export default studentSlice.reducer;

export const { show } = studentSlice.actions;
