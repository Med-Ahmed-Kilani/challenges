import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

export default class Exercice11 extends Component {
  state = {
    counter: 0,
  };
  render() {
    const counter = this.state.counter;
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text> Press Count: {counter} </Text>
        <Button
          onPress={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Press me
        </Button>
      </View>
    );
  }
}
