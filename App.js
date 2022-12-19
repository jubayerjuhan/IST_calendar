import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";

export default function App() {
  const [date, setDate] = useState(Date.now());
  console.log('Hello World...')
  return (
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
        todayBackgroundColor="#E66702"
        todayTextStyle={{
          color: "#ffff",
        }}
        onMonthChange={(date) => console.log(date, "date...")}
        selectedDayColor={"blue"}
        selectedDayTextColor={"white"}
        onDateChange={() => console.log("Changed...")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
    opacity: 0.6,
  },
  container: {
    // paddingHorizontal: 10,
    paddingTop: 50,
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
