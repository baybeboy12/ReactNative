import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    jobs: [
      { job: "Learn English", id: 1 },
      { job: "Learn Java", id: 2 },
      { job: "Cooking", id: 3 },
      { job: "Learn Cooking", id: 4 },
    ],
  },
  reducers: {
    increment: () => {},
    decrement: () => {},
    incrementByAmount: () => {},
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
