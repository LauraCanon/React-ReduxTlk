import { createSlice } from "@reduxjs/toolkit"

const initialState = { counter: 0, show: true }

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
          },
          decrement(state) {
            state.counter--;
          },
          increase(state, action) {
            state.counter = state.counter + action.payload;
          },
          toggle(state) {
            state.show = !state.show;
          },
          reset(state) {
            state.counter = 0
          }
        },
})

export const { increment, decrement, increase, reset } = counterSlice.actions;
export const selectCount = (state) => state.counter.counter;
export default counterSlice.reducer;
