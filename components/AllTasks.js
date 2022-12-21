import moment from "moment";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Checkbox from "expo-checkbox";
import { closeDays } from "../storage/closedDays";
import {
  getSelectedDaysTask,
  getTasksFromStorage,
  toggleTaskChecked,
} from "../storage/storage.js";
import { colors } from "../colors.js";
import Task from "./Task.js";

const AllTasks = ({ selectedDate, addTaskVisible }) => {
  console.log("selected date...", moment(selectedDate).format("DD-MM-YY"));
  const [todaysTasks, settodaysTasks] = useState([]);
  useEffect(() => {
    getTasks();
  }, [selectedDate, addTaskVisible]);

  const getTasks = async () => {
    const tasks = await getSelectedDaysTask(selectedDate);
    console.log(tasks, "Taskss...");
    settodaysTasks(tasks);
  };

  console.log(todaysTasks.length, "td tasks");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Tasks Of {moment(selectedDate).format("MMMM Do")}
      </Text>
      {/* <FlatList
        data={closeDays}
        keyExtractor={(item) => item.date}
        renderItem={() => {
          if (moment(selectedDate) !== moment(selectedDate)) return <></>;
          return <Text>Hello</Text>;
        }}
      /> */}
      <FlatList
        data={todaysTasks}
        keyExtractor={(item) => Math.random(1)}
        renderItem={({ item }) => {
          return <Task item={item} />;
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
});

export default AllTasks;
