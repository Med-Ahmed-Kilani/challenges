import React from "react";
import { StyleSheet, Text, View, StatusBar, Alert } from "react-native";
import { Button } from "react-native-paper";
import Header from "../components/Header";

const Exercice2 = ({ navigation }) => {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <Header nav={navigation} />
      <Text>Hi Exercice2</Text>
      <Button
        onPress={() => {
          Alert.alert("YO ALERT", "all fine");
        }}
      >
        {" "}
        Alert{" "}
      </Button>
    </View>
  );
};

export default Exercice2;

const styles = StyleSheet.create({
  container: {
    top: StatusBar.currentHeight,
  },
});
