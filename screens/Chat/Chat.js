import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import {
  GiftedChat,
  Bubble,
  MessageText,
  InputToolbar,
} from "react-native-gifted-chat";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const userId = 1; // Replace with the actual user ID
  const userName = "User1"; // Replace with the actual user's name

  useEffect(() => {
    // Load chat messages from storage when the component mounts
    const loadChatMessages = async () => {
      try {
        const storedMessages = await AsyncStorage.getItem("chat_messages");
        if (storedMessages) {
          const parsedMessages = JSON.parse(storedMessages);
          setMessages(parsedMessages);
        }
      } catch (error) {
        console.error("Error loading chat messages:", error);
      }
    };

    loadChatMessages();
  }, []);

  const onSend = (newMessages = []) => {
    const formattedMessages = newMessages.map((message) => ({
      _id: message._id,
      text: message.text,
      createdAt: message.createdAt,
      user: {
        _id: userId,
        name: userName, // Include the sender's name
      },
    }));

    // Save the new message to storage and update the state
    saveChatMessage(formattedMessages[0]);
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, formattedMessages)
    );
  };

  const saveChatMessage = async (message) => {
    try {
      const storedMessages = await AsyncStorage.getItem("chat_messages");
      const parsedMessages = storedMessages ? JSON.parse(storedMessages) : [];
      parsedMessages.push(message);
      await AsyncStorage.setItem(
        "chat_messages",
        JSON.stringify(parsedMessages)
      );
    } catch (error) {
      console.error("Error saving chat message:", error);
    }
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{
          _id: userId,
        }}
        renderBubble={(props) => (
          <Bubble
            {...props}
            wrapperStyle={{
              left: {
                backgroundColor: "white",
              },
              right: {
                backgroundColor: "orange",
              },
            }}
          />
        )}
        renderMessageText={(props) => (
          <MessageText
            {...props}
            textStyle={{
              left: {
                color: "black",
              },
              right: {
                color: "white",
              },
            }}
          />
        )}
        renderInputToolbar={(props) => (
          <InputToolbar
            {...props}
            containerStyle={{
              backgroundColor: "transparent", // Set the background color to transparent
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
    backgroundColor: "#FFFFF0",
  },
});
