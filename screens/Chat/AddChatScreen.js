import { Text, Input, Button } from "react-native-elements";
import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateChat = async () => {
    setIsLoading(true);
    try {
      const docRef = await addDoc(collection(db, "chats"), {
        chatName: input,
      });
      console.log("Document written with ID: ", docRef.id);
      setInput("");
      navigation.goBack();
    } catch (error) {
      console.error("Error adding document: ", error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add New Group Chat",
      headerStyle: { backgroundColor: "orange" },
      headerTitleStyle: { color: "#333" },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        leftIcon={<AntDesign name="wechat" size={24} color="#333" />}
      />
      <Button
        disabled={!input}
        title="create new chat"
        onPress={handleCreateChat}
      />
      {isLoading && (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="orange" />
        </View>
      )}
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});
