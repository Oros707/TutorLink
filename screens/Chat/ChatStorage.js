import AsyncStorage from '@react-native-async-storage/async-storage';

const CHAT_KEY = 'chat_messages';

export const getChatMessages = async () => {
  try {
    const storedMessages = await AsyncStorage.getItem(CHAT_KEY);
    return storedMessages ? JSON.parse(storedMessages) : [];
  } catch (error) {
    console.error('Error retrieving chat messages:', error);
    return [];
  }
};

export const saveChatMessage = async (newMessage) => {
  try {
    const storedMessages = await getChatMessages();
    storedMessages.push(newMessage);
    await AsyncStorage.setItem(CHAT_KEY, JSON.stringify(storedMessages));
  } catch (error) {
    console.error('Error saving chat message:', error);
  }
};
