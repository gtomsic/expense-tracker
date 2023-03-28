import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [
      {
        id: "1",
        description: "A pair of shoes",
        amount: 59.99,
        date: new Date("2021-12-19"),
      },
      {
        id: "2",
        description: "Bag",
        amount: 87.76,
        date: new Date("2021-11-19"),
      },
      {
        id: "3",
        description: "Jacket",
        amount: 200.0,
        date: new Date("2021-10-19"),
      },
    ],
  },
  reducers: {
    addExpense: (state, action) => {
      const id = new Date().toString() + Math.random().toString();
      state.expenses = [{ ...action.payload, id }, ...state.expenses];
    },
    removeExpense: (state, action) => {
      console.log(action.payload.id);
      console.log(state.expenses);
      state.expenses = [
        ...state.expenses.filter((item) => item.id !== action.payload.id),
      ];
    },
  },
});

export default expensesSlice.reducer;
export const { addExpense, removeExpense } = expensesSlice.actions;
