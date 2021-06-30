import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Header from "../components/Header";

const Exercice2 = ({ navigation }) => {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <Header nav={navigation} />
      <Text>Hi Exercice2</Text>
    </View>
  );
};

export default Exercice2;

const styles = StyleSheet.create({
  container: {
    top: StatusBar.currentHeight,
  },
});
