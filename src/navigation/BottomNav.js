import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Exercice1 from "../screens/Exercice1";
import Exercice2 from "../screens/Exercice2";

const Tab = createBottomTabNavigator();
const BottomNav = () => {
  return (
    <Tab.Navigator initialRouteName="ex1">
      <Tab.Screen name="ex1" component={Exercice1} />
      <Tab.Screen name="ex2" component={Exercice2} />
    </Tab.Navigator>
  );
};

export default BottomNav;
