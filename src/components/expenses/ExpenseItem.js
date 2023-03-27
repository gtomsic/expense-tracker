import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { colors } from "../../constant/colors";

const ExpenseItem = ({ item }) => {
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.item}>
          <Text>{item.description}</Text>
          <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
        </View>
        <View>
          <Text style={styles.date}>{"item.date"}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 8,
    backgroundColor: colors.white,
    borderRadius: 6,
    elevation: 3,
    shadowColor: colors.gray,
    shadowRadius: 1,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amount: {
    fontWeight: "bold",
    color: colors.primary,
  },
  date: {
    fontSize: 9,
    color: colors.gray,
  },
});
