import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Header from "../components/Header";

const Exercice1 = ({ navigation }) => {
  return (
    <View>
      <Header nav={navigation} />
      <Text>Hi Exercice1</Text>
    </View>
  );
};

export default Exercice1;

const styles = StyleSheet.create({
  container: {
    top: StatusBar.currentHeight,
  },
});
