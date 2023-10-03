import React from 'react';
import { View, Text } from 'react-native';

function AttendanceConfirmation({ route }) {
  // You can access data from the QR code or link via route.params
  const { data } = route.params;

  return (
    <View>
      <Text>Attendance Confirmation Screen</Text>
      <Text>Data: {data}</Text>
    </View>
  );
}

export default AttendanceConfirmation;
