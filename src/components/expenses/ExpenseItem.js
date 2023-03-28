import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { colors } from "../../constant/colors";
import { getFormattedDate } from "../../utils/data";
import { useNavigation } from "@react-navigation/native";

const ExpenseItem = ({ item }) => {
  const navigation = useNavigation();
  function pressedHandler() {
    navigation.navigate("ManageExpense", { id: item.id });
  }
  return (
    <Pressable
      onPress={pressedHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View style={styles.item}>
          <View>
            <Text>{item.description}</Text>
            <Text style={styles.date}>{getFormattedDate(item.date)}</Text>
          </View>
          <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
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
    alignItems: "center",
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
