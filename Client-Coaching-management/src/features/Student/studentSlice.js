import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
    name: 'student',
    initialState: { value: null },
    reducers: {
        show: (state, action) => {
            console.log(action.payload);
            state.value = action.payload;
        }
    }
});

export default studentSlice.reducer;

export const { show } = studentSlice.actions;
