import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Drawer } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Feather name="user" color={color} size={size} />
            )}
            label="ex1"
            onPress={() => {
              props.navigation.navigate("ex1");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Feather name="user" color={color} size={size} />
            )}
            label="ex2"
            onPress={() => {
              props.navigation.navigate("ex2");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Feather name="user" color={color} size={size} />
            )}
            label="ex3"
            onPress={() => {
              props.navigation.navigate("stackNav", { screen: "ex3" });
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Feather name="user" color={color} size={size} />
            )}
            label="ex4"
            onPress={() => {
              props.navigation.navigate("stackNav", { screen: "ex4" });
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Feather name="user" color={color} size={size} />
            )}
            label="ex5"
            onPress={() => {
              props.navigation.navigate("stackNav", { screen: "ex5" });
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Feather name="user" color={color} size={size} />
            )}
            label="ex6"
            onPress={() => {
              props.navigation.navigate("stackNav", { screen: "ex6" });
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Feather name="user" color={color} size={size} />
            )}
            label="ex7"
            onPress={() => {
              props.navigation.navigate("stackNav", { screen: "ex7" });
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Feather name="user" color={color} size={size} />
            )}
            label="ex8"
            onPress={() => {
              props.navigation.navigate("stackNav", { screen: "ex8" });
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Feather name="user" color={color} size={size} />
            )}
            label="ex9"
            onPress={() => {
              props.navigation.navigate("stackNav", { screen: "ex9" });
            }}
          />{" "}
          <DrawerItem
            icon={({ color, size }) => (
              <Feather name="user" color={color} size={size} />
            )}
            label="ex11"
            onPress={() => {
              props.navigation.navigate("stackNav", { screen: "ex11" });
            }}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  drawerSection: {
    marginTop: 15,
  },
});
