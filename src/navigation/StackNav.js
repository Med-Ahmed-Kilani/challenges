import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Exercice3 from "../screens/Exercice3";
import Exercice4 from "../screens/Exercice4";
import Exercice5 from "../screens/Exercice5";
import Exercice6 from "../screens/Exercice6";
import Exercice7 from "../screens/Exercice7";
import Exercice8 from "../screens/Exercice8";
import Exercice9 from "../screens/Exercice9";
import Exercice11 from "../screens/Exercice11";
import Exercice12 from "../screens/Exercice12";

const StackNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="ex3" component={Exercice3} />
      <Stack.Screen name="ex4" component={Exercice4} />
      <Stack.Screen name="ex5" component={Exercice5} />
      <Stack.Screen name="ex6" component={Exercice6} />
      <Stack.Screen name="ex7" component={Exercice7} />
      <Stack.Screen name="ex8" component={Exercice8} />
      <Stack.Screen name="ex9" component={Exercice9} />
      <Stack.Screen name="ex11" component={Exercice11} />
      <Stack.Screen name="ex12" component={Exercice12} />
    </Stack.Navigator>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
