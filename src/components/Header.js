import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

const Header = ({ nav }) => {
  return (
    <View style={styles.header}>
      <Button title="drawer" onPress={() => nav.toggleDrawer()} />
      <Text></Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "skyblue",
    height: "10%",
  },
});
