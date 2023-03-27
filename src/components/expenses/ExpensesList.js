import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import { colors } from "../../constant/colors";
import ExpenseItem from "./ExpenseItem";

// function renderItem({ item }) {
//   return (
//     <View style={styles.container}>
//       <View>
//         <Text>{item.description}</Text>
//       </View>
//       <View>
//         <Text>{item.amount.toFixed(2)}</Text>
//       </View>
//     </View>
//   );
// }

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ExpenseItem item={item} />}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: colors.white,
    overflow: "hidden",
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
