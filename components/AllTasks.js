import moment from "moment";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Checkbox from "expo-checkbox";
import {
  getSelectedDaysTask,
  getTasksFromStorage,
} from "../storage/storage.js";
import { colors } from "../colors.js";

const AllTasks = ({ selectedDate, addTaskVisible }) => {
  const [todaysTasks, settodaysTasks] = useState([]);
  useEffect(() => {
    getTasks();
  }, [selectedDate]);

  const getTasks = async () => {
    const tasks = await getSelectedDaysTask(selectedDate);
    console.log(tasks, "Taskss...");
    settodaysTasks(tasks);
  };

  console.log(todaysTasks.length, "td tasks");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Tasks Of {moment(selectedDate).format("MMM Do YY")}
      </Text>
      <FlatList
        data={todaysTasks}
        keyExtractor={(item) => Math.random(1)}
        renderItem={({ item }) => {
          return (
            <View style={styles.task}>
              <Checkbox
                style={styles.checkbox}
                value={false}
                color={true ? colors.primary : undefined}
              />
              <View>
                <Text style={styles.title}>{item.title}</Text>
                {item.description && (
                  <Text style={styles.description}>{item.description}</Text>
                )}
              </View>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  header: {
    marginTop: 5,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: "600",
  },
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

export default AllTasks;
