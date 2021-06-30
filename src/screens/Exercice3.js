import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import CustButton from "../components/CustButton";
import Header from "../components/Header";

const Exercice3 = ({ navigation }) => {
  return (
    <View>
      <Header nav={navigation} />
      <Text>Exercice 3</Text>
      <CustButton message={"hello"} />
      <CustButton message={"goodbye"} />
      <Button onPress={() => navigation.navigate("ex4")}> test</Button>
    </View>
  );
};

export default Exercice3;

const styles = StyleSheet.create({});
