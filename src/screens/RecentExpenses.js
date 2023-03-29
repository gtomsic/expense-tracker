import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/expenses/ExpensesOutput";
import { useSelector } from "react-redux";

const RecentExpenses = () => {
  const expenses = useSelector((state) => state.expenses.expenses);
  return (
    <ExpensesOutput
      expenses={expenses}
      periodName="Last 7 Days"
      attention="No recent expenses"
    />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
