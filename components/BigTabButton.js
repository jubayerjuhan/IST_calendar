import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as Linking from "expo-linking";

const BigTabButton = ({ title, icon, navigation, page, url }) => {
  const handlePress = () => {
    if (page) return navigation.navigate(`${page}`);
    Linking.openURL(url);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      {icon}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    padding: 15,

    backgroundColor: "white",
    width: 150,
    borderRadius: 10,
  },
  title: {
    marginTop: 8,
    fontSize: 16,
  },
});

export default BigTabButton;
