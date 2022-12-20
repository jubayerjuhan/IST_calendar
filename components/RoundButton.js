import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
// import AddIcon from "@mui/icons-material/Add";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../colors.js";

const RoundButton = ({ setAddTaskVisible, addTaskVisible }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setAddTaskVisible(!addTaskVisible)}
    >
      <Ionicons name="add" size={30} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: colors.primary,
    width: 60,
    borderRadius: 50,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RoundButton;
