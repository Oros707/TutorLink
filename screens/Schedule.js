import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { db } from '../config/firebase'; // Import db from your Firebase configuration
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';

const Schedule = () => {
  const [academicYears, setAcademicYears] = useState([]);
  const [academicYear, setAcademicYear] = useState('');
  const [timetableData, setTimetableData] = useState([]);

  useEffect(() => {
    const fetchAcademicYears = async () => {
      const academicYearCollectionRef = collection(db, 'timetable');
      const academicYearQuery = query(academicYearCollectionRef);
      const academicYearDocs = await getDocs(academicYearQuery);
      const years = [];
      academicYearDocs.forEach((doc) => {
        years.push(doc.id);
      });
      setAcademicYears(years);
      if (years.length > 0) {
        setAcademicYear(years[0]);
      }
    };

    fetchAcademicYears();
  }, []);

  useEffect(() => {
    if (academicYear) {
      const fetchTimetableData = async () => {
        try {
          const dayOfWeeks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
          const data = [];
          dayOfWeeks.forEach(async (day) => {
            const dayCollectionRef = collection(db, 'timetable', academicYear, day);
            const dayDocs = await getDocs(dayCollectionRef);
            dayDocs.forEach((doc) => {
              data.push({ day, slot: doc.id, ...doc.data() });
            });
          });
          setTimetableData(data);
        } catch (error) {
          console.error('Error retrieving timetable data:', error);
        }
      };

      fetchTimetableData();
    }
  }, [academicYear]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Academic Year:</Text>
      <RNPickerSelect
        onValueChange={(value) => setAcademicYear(value)}
        items={academicYears.map((year) => ({ label: year, value: year }))}
        value={academicYear}
        style={pickerSelectStyles}
      />

      <View style={styles.timetableContainer}>
        <Text style={styles.timetableTitle}>
          Timetable for {academicYear}
        </Text>

        <FlatList
          data={timetableData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.timetableCard}>
              <Text style={styles.timetableSlot}>{item.day} - {item.slot}</Text>
              <Text style={styles.timetableModule}>{item.module}</Text>
              <Text style={styles.timetableEndTime}>Ends at: {item.endTime}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500', // Orange background color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white', // Text color
  },
  timetableContainer: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: 'white', // Background color of the timetable container
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  timetableTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timetableCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2, // Android shadow
    shadowColor: 'black', // iOS shadow
    shadowOffset: { width: 0, height: 2 }, // iOS shadow
    shadowOpacity: 0.2, // iOS shadow
  },
  timetableSlot: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timetableModule: {
    fontSize: 14,
    color: 'gray',
  },
  timetableEndTime: {
    fontSize: 14,
    color: 'blue',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});

export default Schedule;
