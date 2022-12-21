import { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import AddTask from "./components/AddTask.js";
import RoundButton from "./components/RoundButton.js";
import AllTasks from "./components/AllTasks.js";
import { closeDays } from "./storage/closedDays";

export default function App() {
  const [addTaskVisible, setAddTaskVisible] = useState(false);
  const [date, setDate] = useState(Date.now());
  const [selectedDate, setSelectedDate] = useState(new Date());
  let customDatesStyles = [];
  const [offDays, setOffDays] = useState(customDatesStyles);

  useEffect(() => {
    closeDays.forEach((closeDay) => {});
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=740&t=st=1671301137~exp=1671301737~hmac=90d4dfc7b7649e6f4a606367e7d582aff6119978a4e27ef82fdb89fafcaac2f6",
            }}
            style={styles.image}
          />
          <View style={styles.dateContainer}>
            <Text style={styles.day}>{moment().format("dddd")}</Text>
            <Text style={styles.date}>{moment().format("Do MMM YY")}</Text>
          </View>
        </View>
        <CalendarPicker
          // weekdays={["fri"]}

          todayBackgroundColor="#E66702"
          customDatesStyles={closeDays}
          value={new Date()}
          // customDayHeaderStyles={}
          todayTextStyle={{
            color: "#ffff",
          }}
          onMonthChange={(date) => console.log(date, "date...")}
          selectedDayColor={"blue"}
          selectedDayTextColor={"white"}
          onDateChange={(date) => setSelectedDate(date)}
        />
        <AllTasks addTaskVisible={addTaskVisible} selectedDate={selectedDate} />
      </View>
      <AddTask
        selectedDate={selectedDate}
        setAddTaskVisible={setAddTaskVisible}
        addTaskVisible={addTaskVisible}
      />
      <RoundButton
        setAddTaskVisible={setAddTaskVisible}
        addTaskVisible={addTaskVisible}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modal: {
    padding: 20,
  },
  image: {
    height: 200,
    width: "100%",
    opacity: 0.6,
  },
  container: {
    height: "100%",
    paddingVertical: 20,
  },
  subcontainer: {
    backgroundColor: "black",
    position: "relative",
  },
  dateContainer: {
    position: "absolute",
    top: "35%",
    left: "5%",
    color: "white",
  },
  day: {
    fontSize: 30,
    fontWeight: "600",
    color: "white",
  },
  date: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
});
