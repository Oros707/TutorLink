import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatMessage = ({ message }) => {
  const { text, user, createdAt } = message;

  return (
    <View style={user._id === 1 ? styles.messageContainerRight : styles.messageContainerLeft}>
      <Text style={styles.senderName}>{user.name}</Text>
      <View style={styles.messageContent}>
        <Text style={styles.messageText}>{text}</Text>
        <Text style={styles.timestamp}>{formatTimestamp(createdAt)}</Text>
      </View>
    </View>
  );
};

const formatTimestamp = (timestamp) => {
  // You can implement your own timestamp formatting logic here
  // For example, you can use a library like Moment.js for this purpose
  return '12:34 PM'; // Replace with the actual formatted timestamp
};

const styles = StyleSheet.create({
  messageContainerLeft: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 5,
    marginLeft: 10,
  },
  messageContainerRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginVertical: 5,
    marginRight: 10,
  },
  senderName: {
    fontSize: 12,
    color: 'gray',
  },
  messageContent: {
    backgroundColor: 'lightgray',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  messageText: {
    fontSize: 16,
    color: 'black',
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
});

export default ChatMessage;
