import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Claims from "../screens/ClaimProcess/Claims";
import Attendance from "../screens/Attendance/Attendance";
import Schedule from "../screens/Schedule";
import Chat from "../screens/Chat/Chat";
import ClaimNavigator from "../screens/ClaimProcess/ClaimNavigator";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="ClaimNavigator"
      screenOptions={{
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "white",
        tabBarLabelStyle: { fontSize: 16, fontWeight: "bold" },
        tabBarStyle: { backgroundColor: "black" },
      }}
    >
      <Tab.Screen
        name="ClaimNavigator"
        component={ClaimNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Claims",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="file-tray-full-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Attendance"
        component={Attendance}
        options={{
          headerShown: false,
          tabBarLabel: "Attendance",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          headerShown: false,
          tabBarLabel: "Schedule",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
