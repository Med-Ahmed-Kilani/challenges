import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, Alert } from "react-native";
import { Button } from "react-native-paper";

const Exercice7 = () => {
  const [name, setName] = useState("");
  return (
    <View style={{ flex: 1, padding: 5 }}>
      <Text style={styles.subtitle}>What is your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your name!"
        onChangeText={(value) => setName(value)}
      />
      <Button onPress={() => Alert.alert("Greetings", `Hello ${name}`)}>
        Say hello
      </Button>
    </View>
  );
};

export default Exercice7;

const styles = StyleSheet.create({
  subtitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 5,
  },
  input: {
    backgroundColor: "gris",
    borderRadius: 8,
    width: "100%",
  },
});
