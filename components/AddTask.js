import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Modal,
  Text,
  Button,
  TextInput,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { colors } from "../colors.js";
import { Formik } from "formik";

const AddTask = ({ setAddTaskVisible, addTaskVisible }) => {
  const [date, setDate] = useState(moment().format("L"));
  const [open, setOpen] = useState(false);

  const onChangeInputText = (inputValue) => {
    console.log(inputValue);
  };
  const inputValues = [
    { name: "title", placeHolder: "Title Of Your Task" },
    { name: "description", placeHolder: "Description" },
  ];
  console.log(date);
  return (
    <Modal
      transparent={true}
      visible={addTaskVisible}
      style={styles.modal}
      animationType={"slide"}
      onRequestClose={() => {
        setAddTaskVisible(!addTaskVisible);
      }}
    >
      <View style={[{ width: "100%", height: "100%" }, styles.container]}>
        <Text style={styles.header}>Add Task</Text>
        <Formik initialValues={{}} onSubmit={(values) => console.log(values)}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <FlatList
              data={inputValues}
              style={styles.flatList}
              renderItem={({ item }) => {
                return (
                  <TextInput
                    onChangeText={handleChange(item.name)}
                    placeholder={item.placeHolder}
                    style={styles.input}
                  />
                );
              }}
              ListFooterComponent={() => (
                <View>
                  <View style={styles.dateContainer}>
                    <Text style={styles.date}>
                      Date : {moment(date).format("MMM Do YYYY")}
                    </Text>
                    <TouchableOpacity onPress={() => setOpen(!open)}>
                      <Text style={styles.editButton}>Edit</Text>
                    </TouchableOpacity>
                  </View>
                  {open && (
                    <DateTimePicker
                      onChange={(date) => setDate(date.nativeEvent.timestamp)}
                      display="date"
                      value={new Date(date)}
                    />
                  )}
                  <Button
                    color={colors.primary}
                    style={styles.submitBtn}
                    onPress={handleSubmit}
                    title={"Add Task"}
                  ></Button>
                </View>
              )}
              // keyExtractor={(item) => item.id}
            />
          )}
        </Formik>

        <View></View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  flatList: {
    marginTop: 15,
  },
  submitBtn: {
    color: colors.primary,
    height: 20,
  },
  modal: {
    display: "flex",
    backgroundColor: "red",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 20,
    maxHeight: 340,
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    // elevation property
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    borderRadius: 8,
    marginBottom: 15,
  },
  dateContainer: {
    flexDirection: "row",
    marginBottom: 15,
    width: "100%",
    justifyContent: "space-between",
  },
  date: {
    fontSize: 15,
  },
  editButton: {
    fontSize: 15,
    color: colors.primary,
  },
});

export default AddTask;
