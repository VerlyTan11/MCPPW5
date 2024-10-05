import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./App.styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Navigation List</Text>
      <Button style={styles.buttonhome} title="Email" onPress={() => navigation.navigate("Email")} />
      <Button style={styles.buttonhome} title="User List" onPress={() => navigation.navigate("UserList")} />
    </View>
  );
};

export default HomeScreen;
