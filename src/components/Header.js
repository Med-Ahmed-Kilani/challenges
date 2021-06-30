import React from "react";
import { TouchableOpacity, StyleSheet, Text, Button, View } from "react-native";

const Header = ({ nav }) => {
  return (
    <TouchableOpacity style={styles.header} onPress={() => nav.toggleDrawer()}>
      <Text>Open Drawer</Text>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "skyblue",
    alignItems: "center",
    alignSelf: "center",
  },
});
