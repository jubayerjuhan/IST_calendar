import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  StatusBar,
  Image,
} from "react-native";
import istLogo from "../assets/istlogo.png";
import { Entypo } from "@expo/vector-icons";
import BigTabButton from "../components/BigTabButton.js";
import { colors } from "../colors.js";

const Home = ({ navigation }) => {
  const statusBar = StatusBar;
  return (
    <SafeAreaView
      style={[styles.container, { marginTop: statusBar.currentHeight }]}
    >
      <View style={styles.logoContainer}>
        <Image source={istLogo} style={styles.istLogo}></Image>
      </View>
      <Text style={styles.heroTitle}>IST Calander and Task Management App</Text>
      <View style={styles.buttonContainer}>
        <BigTabButton
          navigation={navigation}
          title={"Calander"}
          page={"Calander"}
          icon={<AntDesign name="calendar" size={30} color={colors.primary} />}
        />
        <BigTabButton
          navigation={navigation}
          url={"https://ist.edu.bd"}
          title={"Website"}
          icon={<Entypo name="globe" size={30} color={colors.primary} />}
        />
        <BigTabButton
          navigation={navigation}
          url={"tel:"}
          title={"Call Us"}
          icon={<AntDesign name="phone" size={30} color={colors.primary} />}
        />
        <BigTabButton
          navigation={navigation}
          url={"https://www.linkedin.com/in/jubayerjuhan/"}
          title={"Developer"}
          icon={<Entypo name="code" size={30} color={colors.primary} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    paddingTop: 150,
    width: "100%",
    alignItems: "center",
  },
  heroTitle: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  buttonContainer: {
    padding: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "flex-start",
    // backgroundColor: "green",
  },
  istLogo: {
    height: 150,
    width: 150,
  },
});

export default Home;
