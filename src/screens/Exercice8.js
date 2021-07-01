import React from "react";
import {
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Text,
  View,
} from "react-native";
const names = [
  {
    id: 1,
    name: "Name",
  },
  {
    id: 2,
    name: "Name",
  },
  {
    id: 3,
    name: "Name",
  },
  {
    id: 4,
    name: "Name",
  },
  {
    id: 5,
    name: "Name",
  },
  {
    id: 6,
    name: "Name",
  },
  {
    id: 7,
    name: "Name",
  },
  {
    id: 8,
    name: "Name",
  },
  {
    id: 9,
    name: "Name",
  },
  {
    id: 10,
    name: "Name",
  },
  {
    id: 11,
    name: "Name",
  },
  {
    id: 12,
    name: "Name",
  },
];

const Exercice8 = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={names}
        keyExtractor={(name) => name.id}
        renderItem={({ item, index, separators }) => (
          <TouchableHighlight
            style={{
              borderWidth: 1,
              borderTopColor: "black",
            }}
            key={index}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
          >
            <Text>{item.name}</Text>
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

export default Exercice8;

const styles = StyleSheet.create({});
