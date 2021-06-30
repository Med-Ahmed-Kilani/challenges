import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Exercice3 from "../screens/Exercice3";
import Exercice4 from "../screens/Exercice4";

const StackNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="ex3" component={Exercice3} />
      <Stack.Screen name="ex4" component={Exercice4} />
    </Stack.Navigator>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
