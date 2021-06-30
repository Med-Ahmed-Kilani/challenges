import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Exercice6 = () => {
  const [array, setArray] = useState([]);
  useEffect(() => {
    for (let index = 1; index < 16; index++) {
      setArray((array) => [...array, index]);
    }
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {array.map((value, index) => {
          return (
            <View key={index} style={styles.square}>
              <Text>Square {value}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Exercice6;

const styles = StyleSheet.create({
  square: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "skyblue",
    marginVertical: 10,
  },
});
