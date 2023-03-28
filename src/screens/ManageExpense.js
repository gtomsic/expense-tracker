import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import IconButton from "../components/ui/IconButton";
import { colors } from "../constant/colors";
import Button from "../components/ui/Button";
import { useDispatch } from "react-redux";
import { addExpense, removeExpense } from "../store/expensesSlice";

const ManageExpense = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const expenseId = route.params?.id;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteHandler(id) {
    dispatch(removeExpense({ id: expenseId }));
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }
  function addUpdateHandler() {
    dispatch(
      addExpense({
        id: `${Math.random() * 1000}`,
        description: "A pair of shoes",
        amount: 59.99,
        date: new Date(),
      })
    );
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.groupButton}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={addUpdateHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            color={colors.error}
            size={24}
            onPress={deleteHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: colors.primary,
    alignItems: "center",
  },
  groupButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
