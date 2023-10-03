import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat, Bubble, MessageText, InputToolbar } from 'react-native-gifted-chat';

export default function Chat() {
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{
          _id: 1,
        }}
        renderBubble={(props) => (
          <Bubble
            {...props}
            wrapperStyle={{
              left: {
                backgroundColor: 'white',
              },
              right: {
                backgroundColor: 'orange',
              },
            }}
          />
        )}
        renderMessageText={(props) => (
          <MessageText
            {...props}
            textStyle={{
              left: {
                color: 'black',
              },
              right: {
                color: 'white',
              },
            }}
          />
        )}
        renderInputToolbar={(props) => (
          <InputToolbar
            {...props}
            containerStyle={{
              backgroundColor: 'transparent', // Set the background color to transparent
              borderTopWidth: 0, // Remove the top border
            }}
          />
        )}
        keyboardShouldPersistTaps="never"
        keyboardDismissMode="on-drag"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFF0',
  },
});
