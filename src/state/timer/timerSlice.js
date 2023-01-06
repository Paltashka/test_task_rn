import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
    name: 'timer',
    initialState: {
        values: {}
    },
    reducers: {
        increment: (state, action) => {
            state.values[action.payload.id].value += 1;
        },
        start: (state, action) => {
            state.values[action.payload.id].started = true;
        },
        setItems: (state, action) => {
            state.values = action.payload;
        },
        setTimer: (state, action) => {
            state.values[action.payload.id].timerId = action.payload.timerId;
        }
    }
})

export const { increment, start, setItems, setTimer } = timerSlice.actions;
export default timerSlice.reducer;