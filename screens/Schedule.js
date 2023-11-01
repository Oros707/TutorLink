import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { db } from '../config/firebase'; // Import db from your Firebase configuration

const Schedule = () => {
  const [timetableData, setTimetableData] = useState([]);

  useEffect(() => {
    const academicYear = "ThirdYear";
    const dayOfWeek = "Friday";
    const timeSlot = "10h00-12h00";

    const retrieveTimetable = async () => {
      try {
        const timetableDocRef = db.collection('timetable')
          .doc(academicYear)
          .collection(dayOfWeek)
          .doc(timeSlot);

        const doc = await timetableDocRef.get();
        if (doc.exists) {
          const data = doc.data();
          setTimetableData([{ startTime: timeSlot, endTime: data.endTime, module: data.module }]);
        } else {
          console.error('No document found');
        }
      } catch (error) {
        console.error('Error retrieving timetable:', error);
      }
    };

    // Call the function when the component loads
    retrieveTimetable();
  }, []);

  return (
    <View>
      <Text>Timetable for {academicYear} on {dayOfWeek} from {timeSlot}</Text>
      <FlatList
        data={timetableData}
        keyExtractor={(item) => item.startTime}
        renderItem={({ item }) => (
          <View>
            <Text>Time: {item.startTime} - {item.endTime}</Text>
            <Text>Module: {item.module}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Schedule;
