import React from "react";
import { Button, Text, View, Image } from "react-native";
import styles from "./App.styles";

const Profile = ({ navigation, route }) => {
  const { user } = route.params; 

  return (
    <View style={styles.profileContainer}>
      <Image source={{ uri: user.photo_url }} style={styles.profileAvatar} />
      <Text style={styles.profileName}>{user.name}'s Profile</Text>
      <Text style={styles.profileEmail}>{user.email}</Text>
      <Button title="Go Back" onPress={() => navigation.navigate("UserList")} />
    </View>
  );
};

export default Profile;