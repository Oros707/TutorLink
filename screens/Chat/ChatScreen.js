import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useLayoutEffect, useState, useRef } from "react";
import { Avatar } from "react-native-elements";
import { getAuth } from "firebase/auth";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { db } from "../../config/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  orderBy,
  onSnapshot,
  query,
} from "firebase/firestore";

const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isInputDisabled, setInputDisabled] = useState(false);
  const scrollViewRef = useRef();

  const auth = getAuth();
  const id = route.params.id;
  const chatName = route.params.chatName;

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  const lastMessage = messages[messages.length - 1];
  const lastMessageSenderPhotoURL = lastMessage?.data.photoURL;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: chatName,
      headerTitleAlign: "left",
      headerStyle: { backgroundColor: "orange" },
      headerBackTitleVisible: false,
      headerTitle: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar
            rounded
            source={{
              uri: lastMessageSenderPhotoURL,
            }}
          />
          <View>
            <Text style={{ color: "white", marginLeft: 10, fontWeight: "700" }}>
              {chatName}
            </Text>
          </View>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 10,
          }}
        >
          <TouchableOpacity>
            <FontAwesome name="video-camera" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="call" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation, messages]);

  useLayoutEffect(() => {
    const q = query(
      collection(db, `chats/${id}/messages`),
      orderBy("timestamp", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      scrollToBottom();
    });

    return unsubscribe;
  }, [route]);

  const sendMessage = async () => {
    if (input) {
      Keyboard.dismiss();

      const newMessage = {
        timestamp: serverTimestamp(),
        message: input,
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photoURL: auth.currentUser.photoURL,
      };

      const chatMessagesRef = collection(db, `chats/${id}/messages`);

      try {
        await addDoc(chatMessagesRef, newMessage);
        setInput("");
      } catch (error) {
        console.error("Error sending message: ", error);
      } finally {
        // Re-enable the input after 2 seconds
        setTimeout(() => {
          setInputDisabled(false);
        }, 2000);
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="auto" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -500}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <>
            <ScrollView contentContainerStyle={{ paddingTop: 15 }}>
              {messages.map(({ id, data }) =>
                data.email === auth.currentUser.email ? (
                  <View key={id} style={styles.sender}>
                    <Avatar
                      source={{ uri: data.photoURL }}
                      size={30}
                      rounded
                      position="absolute"
                      bottom={-15}
                      right={-5}
                      //   Web
                      containerStyle={{
                        position: "absolute",
                        bottom: -15,
                        right: -5,
                      }}
                    />
                    <Text style={styles.senderText}>{data.message}</Text>
                  </View>
                ) : (
                  <View key={id} style={styles.receiver}>
                    <Avatar
                      source={{ uri: data.photoURL }}
                      size={30}
                      rounded
                      position="absolute"
                      containerStyle={{
                        position: "absolute",
                        bottom: -15,
                        left: -5,
                      }}
                      bottom={-15}
                      left={-5}
                    />
                    <Text style={styles.receiverText}>{data.message}</Text>
                    <Text style={styles.receiverName}>{data.displayName}</Text>
                  </View>
                )
              )}
            </ScrollView>
            <View style={styles.footer}>
              <TextInput
                placeholder="Type a messge..."
                style={styles.TextInput}
                value={input}
                onChangeText={(text) => setInput(text)}
                multiline
                disabled={isInputDisabled}
              />
              <TouchableOpacity activeOpacity={0.5} onPress={sendMessage}>
                <Ionicons name="send" size={24} color="orange" />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  footer: {
    flexDirection: "row",
    padding: 15,
    width: "100%",
    alignItems: "center",
  },
  TextInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    backgroundColor: "#ECECEC",
    padding: 10,
    borderRadius: 30,
  },
  sender: {
    padding: 15,
    backgroundColor: "#ECECEC",
    alignSelf: "flex-end",
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    maxWidth: "80%",
    position: "relative",
  },
  receiver: {
    padding: 15,
    backgroundColor: "orange",
    alignSelf: "flex-start",
    borderRadius: 20,
    margin: 15,
    maxWidth: "80%",
    position: "relative",
  },
  senderName: {
    left: 10,
    paddingRight: 10,
    fontSize: 10,
    color: "white",
  },
  senderText: {
    color: "black",
    fontWeight: "500",
    marginLeft: 10,
  },
  receiverName: {
    right: 10,
    paddingLeft: 10,
    fontSize: 10,
    color: "white",
  },
  receiverText: {
    color: "black",
    fontWeight: "500",
    marginRight: 10,
  },
});
