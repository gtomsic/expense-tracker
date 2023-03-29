import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { colors } from "../../constant/colors";

const ExpensesOutput = ({ expenses, periodName, attention }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={periodName} />
      {expenses.length <= 0 ? (
        <View style={styles.attention}>
          <Text style={styles.text}>{attention}</Text>
        </View>
      ) : (
        <ExpensesList expenses={expenses} />
      )}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  attention: {
    backgroundColor: colors.white,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  text: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 18,
  },
});
