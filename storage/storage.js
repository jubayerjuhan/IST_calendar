import moment from "moment";
import { AsyncStorage } from "react-native";

const addTaskToStorage = async (key, incomingValue) => {
  try {
    const storageValue = await AsyncStorage.getItem(key);
    if (!storageValue)
      return await AsyncStorage.setItem(key, JSON.stringify([incomingValue]));

    const storageValueAfter = JSON.parse(await AsyncStorage.getItem(key));
    storageValueAfter.push(incomingValue);

    return await AsyncStorage.setItem(key, JSON.stringify(storageValueAfter));
  } catch (error) {
    console.log(error);
    console.log(`Can't Save Your Item To Local Storage`);
  }
};

const getTasksFromStorage = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    console.log(`Can't Get Your Item From Local Storage`);
  }
};

const getSelectedDaysTask = async (date) => {
  try {
    const allTasks = JSON.parse(await AsyncStorage.getItem("task"));
    if (!allTasks) return [];

    const tasks = [];
    allTasks?.map((task) => {
      if (
        moment(task.date).format("DD-MM-YYYY") ===
        moment(date).format("DD-MM-YYYY")
      )
        tasks.push(task);
    });
    return tasks;
  } catch (error) {
    console.log(`Can't Get Your Item From Local Storage`);
  }
};

export { addTaskToStorage, getTasksFromStorage, getSelectedDaysTask };
