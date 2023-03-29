import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../constant/colors";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((curr, acc) => {
    return curr + acc.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.period}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 15,
    backgroundColor: colors.primary,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  period: {
    fontSize: 18,
    color: colors.white,
    fontWeight: "bold",
  },
});
