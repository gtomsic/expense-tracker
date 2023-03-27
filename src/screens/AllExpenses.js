import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/expenses/ExpensesOutput";

const AllExpenses = () => {
  return <ExpensesOutput periodName="Total" />;
};

export default AllExpenses;

const styles = StyleSheet.create({});
