import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const Exercice3 = ({ navigation }) => {
  return (
    <View>
      <Text>Exercice 3</Text>
      <Button onPress={() => navigation.navigate("ex4")}> test</Button>
    </View>
  );
};

export default Exercice3;

const styles = StyleSheet.create({});
