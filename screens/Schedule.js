import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Spinner from 'react-native-loading-spinner-overlay';
import { db } from '../config/firebase';
import { collection, query, getDocs } from 'firebase/firestore';

const Schedule = () => {
  const [academicYears, setAcademicYears] = useState([]);
  const [academicYear, setAcademicYear] = useState('');
  const [timetableData, setTimetableData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAcademicYears = async () => {
      try {
        // ... (same as before)
      } catch (error) {
        console.error('Error retrieving academic years:', error);
      }
    };

    fetchAcademicYears();
  }, []);

  useEffect(() => {
    if (academicYear) {
      const fetchTimetableData = async () => {
        try {
          setLoading(true);
          // ... (same as before)
          setLoading(false);
        } catch (error) {
          console.error('Error retrieving timetable data:', error);
          setLoading(false);
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

      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={styles.spinnerText}
        color={'#FFA500'} // Customize the spinner color to match your theme
        overlayColor={'rgba(0, 0, 0, 0.6)'} // Customize the overlay color for the loading spinner
        animation={'fade'}
      />

      {!loading && (
        <View style={styles.timetableContainer}>
          <Text style={styles.timetableTitle}>Timetable for {academicYear}</Text>

          <FlatList
            data={timetableData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.timetableCard}>
                <Text style={styles.timetableSlot}>{item.day}</Text>
                <Text style={styles.timetableModule}>{item.module}</Text>
                <Text style={styles.timetableTime}>
                  {item.startTime} - {item.endTime}
                </Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  timetableContainer: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
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
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  timetableSlot: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timetableModule: {
    fontSize: 14,
    color: 'gray',
  },
  timetableTime: {
    fontSize: 14,
    color: 'blue',
  },
  spinnerText: {
    color: 'white',
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
