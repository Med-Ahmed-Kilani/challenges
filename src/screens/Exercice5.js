import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

const Exercice5 = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header nav={navigation} />
      <View style={styles.container}>
        <View style={[styles.square, { backgroundColor: "skyblue" }]}>
          <Text>Square 1</Text>
        </View>
        <View style={[{ backgroundColor: "lightgreen" }, styles.square]}>
          <Text>Square 2</Text>
        </View>
        <View style={[styles.square, { backgroundColor: "pink" }]}>
          <Text>Square 3</Text>
        </View>
      </View>
    </View>
  );
};

export default Exercice5;

const styles = StyleSheet.create({
  square: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
