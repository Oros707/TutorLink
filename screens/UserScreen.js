import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { auth } from "../config/firebase"; // Adjust the path based on your project structure

const UserPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      // Assuming your user data is stored in a collection called 'users'
      // You can retrieve user data from Firestore here
      // ...

      // Example: Get the user's email
      const userEmail = currentUser.email;
      setUserData({ email: userEmail });
    }
  }, []);

  return (
    <View>
      {userData ? (
        <View>
          <Text>Email: {userData.email}</Text>
          {/* Add more fields as needed */}
        </View>
      ) : (
        <Text>Loading user data...</Text>
      )}
    </View>
  );
};

export default UserPage;
