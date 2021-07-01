import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Exercice12 = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter(counter + 1);
  });
  return (
    <View>
      <Text>The listener has updated {counter} time(s)</Text>
    </View>
  );
};

export default Exercice12;

const styles = StyleSheet.create({});
