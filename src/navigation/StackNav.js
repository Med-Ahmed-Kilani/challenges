import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Exercice3 from "../screens/Exercice3";
import Exercice4 from "../screens/Exercice4";
import Exercice5 from "../screens/Exercice5";
import Exercice6 from "../screens/Exercice6";

const StackNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="ex3" component={Exercice3} />
      <Stack.Screen name="ex4" component={Exercice4} />
      <Stack.Screen name="ex5" component={Exercice5} />
      <Stack.Screen name="ex6" component={Exercice6} />
    </Stack.Navigator>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
