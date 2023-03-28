import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../../constant/colors";

const Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.text, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: colors.primary,
  },
  flat: {
    backgroundColor: "transparent",
  },
  text: {
    color: colors.white,
    textAlign: "center",
  },
  flatText: {
    color: colors.primary,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: colors.light,
    borderRadius: 4,
  },
});
