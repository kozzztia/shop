import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BasketState = {
    value: number;
};

const initialState = {
    value: 0,
} as BasketState;

export const basket = createSlice({
    name: "basket",
    initialState,
    reducers: {
        reset: () => initialState,
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        },
    },
});

export const {
    increment,
    incrementByAmount,
    decrement,
    decrementByAmount,
    reset,
} = basket.actions;
export default basket.reducer;
