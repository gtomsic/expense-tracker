import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

import { DUMMY_DATA } from "../../data/dummy";

const ExpensesOutput = ({ expenses, periodName }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_DATA} periodName={periodName} />
      <ExpensesList expenses={DUMMY_DATA} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
