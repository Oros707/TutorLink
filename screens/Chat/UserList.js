import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const UserList = ({ users }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users in Chat:</Text>
      <FlatList
        data={users}
        keyExtractor={(user) => user._id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text style={styles.userName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userItem: {
    paddingVertical: 5,
  },
  userName: {
    fontSize: 14,
  },
});

export default UserList;
