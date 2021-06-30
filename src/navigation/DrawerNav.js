import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomNav from "./BottomNav";
import DrawerContent from "./DrawerContent";
import StackNav from "./StackNav";
const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="bottom"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="bottomNav" component={BottomNav} />
      <Drawer.Screen name="stackNav" component={StackNav} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
