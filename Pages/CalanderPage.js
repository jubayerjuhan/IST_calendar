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
import AddTask from "../components/AddTask.js";
import RoundButton from "../components/RoundButton.js";
import AllTasks from "../components/AllTasks.js";
import { closeDays, closedDaysStyles } from "../storage/closedDays";
import axios from "axios";

export default function CalanderPage() {
  const [addTaskVisible, setAddTaskVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [pictureOfTheDay, setPictureOfTheDay] = useState("");

  // off days and fridays
  let customDatesStyles = [];
  const [month, setMonth] = useState(new Date().setDate(1));
  const [fridays, setFridays] = useState([]);
  useEffect(() => {
    let AllDates = [];
    for (let i = 0; i < moment(month).daysInMonth(); i++) {
      let newDAte = moment(month).add(i, "days");
      console.log(new Date(newDAte).getDay(), "date...");
      if (new Date(newDAte).getDay() === 6) {
        AllDates.push({
          ...closedDaysStyles,
          date: newDAte,
        });
      }
      if (new Date(newDAte).getDay() === 5) {
        AllDates.push({
          ...closedDaysStyles,
          date: newDAte,
        });
      }
    }
    setFridays([...AllDates]);
  }, [month]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=dwqfO97gfc1H8BcsQ6IxrQ8gq8rXFdKVvsrV90PG"
      )
      .then((res) => {
        console.log(res.data.url, "response");
        setPictureOfTheDay(res.data.url);
      });
  }, []);

  console.log(closeDays, "cloised days...");
  console.log(fridays, "cloised days...");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Image
            source={{
              uri: pictureOfTheDay,
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
          customDatesStyles={[...closeDays, ...fridays]}
          value={new Date()}
          // customDayHeaderStyles={}
          todayTextStyle={{
            color: "#ffff",
          }}
          onMonthChange={(month) => setMonth(month)}
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
