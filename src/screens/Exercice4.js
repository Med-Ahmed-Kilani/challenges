import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import Header from "../components/Header";

const Exercice4 = ({ navigation }) => {
  const [pressNumber, setPressNumber] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      <Header nav={navigation} />
      <Text style={styles.description}>
        You've pressed the button: {pressNumber} times(s)
      </Text>
      <Button onPress={() => setPressNumber(pressNumber + 1)}>Press me</Button>
    </View>
  );
};

export default Exercice4;

const styles = StyleSheet.create({
  description: {
    textAlign: "center",
    alignSelf: "center",
  },
});
