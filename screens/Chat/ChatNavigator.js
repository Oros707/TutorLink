import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import ChatScreen from "./ChatScreen";
import AddChatScreen from "./AddChatScreen";

const Stack = createStackNavigator();

const ChatNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="AddChat" component={AddChatScreen}/>
            <Stack.Screen name="Chat" component={ChatScreen}/>
        </Stack.Navigator>
    )
}

export default ChatNavigator;