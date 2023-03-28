import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/expenses/ExpensesOutput";
import { useSelector } from "react-redux";

const AllExpenses = () => {
  const expenses = useSelector((state) => state.expenses.expenses);
  console.log(expenses);
  return <ExpensesOutput periodName="Total" expenses={expenses} />;
};

export default AllExpenses;

const styles = StyleSheet.create({});
