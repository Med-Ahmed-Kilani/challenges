import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
import axios from "axios";

const Exercice9 = () => {
  const [users, setUsers] = useState([]);
  console.log("lol", users);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=100&inc=name")
      .then((response) => {
        // handle success
        setUsers(response.data.results);
      })
      .catch((error) => {
        // handle error
        console.error(error);
      });
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Text>Hello ex9 !</Text>

      <FlatList
        data={users}
        renderItem={({ item, index }) => (
          <View style={{ flex: 1 }}>
            <Text key={index}>
              {`Hello ${item.name.title} ${item.name.first} ${item.name.last}`}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Exercice9;

const styles = StyleSheet.create({});
