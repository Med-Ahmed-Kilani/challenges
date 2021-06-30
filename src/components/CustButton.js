import React from "react";
import { StyleSheet, TouchableOpacity, Alert, Text, View } from "react-native";

const CustButton = ({ message }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => Alert.alert("Message", message)}
    >
      <Text
        style={{
          marginHorizontal: 5,
          textAlign: "center",
        }}
      >
        Say {message}
      </Text>
    </TouchableOpacity>
  );
};

export default CustButton;

const styles = StyleSheet.create({
  button: {
    height: 30,
    alignSelf: "center",
    backgroundColor: "pink",
    marginVertical: 15,
    justifyContent: "center",
  },
});
