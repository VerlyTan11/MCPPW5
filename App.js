import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { Card } from 'react-native-paper';
import userData from './data.json';
import styles from './App.styles.js';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {userData.map((users) => {
          return (
            <Card key={users.name} style={styles.card}>
              <Card.Cover source={{ uri: users.photo_url }} style={styles.avatar} />
              <Card.Content>
                <Text variant="titleLarge" style={styles.boldText}>{users.name}</Text>
                <Text variant="bodyMedium">{users.email}</Text>
              </Card.Content>
            </Card>
          );
        })}
      </View>
    </ScrollView>
  );
}
