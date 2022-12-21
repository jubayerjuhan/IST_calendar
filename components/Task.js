import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../colors.js";
import { toggleTaskChecked } from "../storage/storage.js";

const Task = ({ item }) => {
  const handleChange = () => {};
  const [checked, setChecked] = useState(item.checked);

  const handleTaskChangeToggle = (id) => {
    setChecked(!checked);
    toggleTaskChecked(id);
  };
  return (
    <View style={styles.task}>
      <Checkbox
        style={styles.checkbox}
        value={checked}
        color={true ? colors.primary : undefined}
        onValueChange={() => handleTaskChangeToggle(item.date)}
      />
      <View>
        <Text
          style={[
            styles.title,
            { textDecorationLine: checked ? "line-through" : false },
          ]}
        >
          {item.title}{" "}
        </Text>
        {item.description && (
          <Text
            style={[
              styles.description,
              { textDecorationLine: checked ? "line-through" : false },
            ]}
          >
            {item.description}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
  },
  description: {
    fontSize: 14,
  },
});

export default Task;
