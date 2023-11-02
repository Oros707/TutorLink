import React, { useState, useEffect } from 'react';
import { View, Text, FlatList ,StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from './Settings/ThemeContext';
import { db } from '../config/firebase'; // Import db from your Firebase configuration
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';

const Schedule = () => {
  const { darkMode } = useTheme(); // Use the useTheme hook to get the theme information

  const [academicYears, setAcademicYears] = useState([]);
  const [academicYear, setAcademicYear] = useState('');
  const [timetableData, setTimetableData] = useState([]);
  const [loading, setLoading] = useState(false);

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
          setLoading(true);
          const dayOfWeeks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
          const data = [];
          dayOfWeeks.forEach(async (day) => {
            const dayCollectionRef = collection(db, 'timetable', academicYear, day);
            const dayDocs = await getDocs(dayCollectionRef);
            dayDocs.forEach((doc) => {
              const [startTime, endTime] = doc.id.split('-'); // Split the slot into start and end times
              data.push({ day, startTime, endTime, module: doc.data().module });
            });
          });
          setTimetableData(data);
          setLoading(false);
        } catch (error) {
          console.error('Error retrieving timetable data:', error);
          setLoading(false);
        }
      };

      fetchTimetableData();
    }
  }, [academicYear]);
  const timetable = [
    // Your timetable data here
  ];

  // Define module codes for each year
  const moduleCodesByYear = {
    FirstYear: ['BAY01B1', 'DSW01B1', 'SSW01B1', 'IFS01B1'],
    SecondYear: ['BAY02B1', 'DSW02B1', 'SSW02B1', 'IFS02B1'],
    ThirdYear: ['BAY03B1', 'DSW03B1', 'SSW03B1', 'IFS03B1'],
  };

  // Update the module code options when the year selection changes
  const handleYearChange = (year) => {
    setSelectedYear(year);
    setSelectedModuleCode('');
  };



  return (
    <View style={[styles.container , { backgroundColor: darkMode ? 'black' : (darkMode ? 'orange' : '#D9E3F0') }]}>
      <View>
        <Text style={styles.title}> Tutoring Schedule</Text>
      </View>
      <View style={styles.dropdowns}>
        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Year of Study</Text>
          <Picker
            selectedValue={selectedYear}
            onValueChange={(itemValue) => handleYearChange(itemValue)}
            style={styles.dropdown}
          >
            <Picker.Item label="Select Year of Study" value="" />
            <Picker.Item label="First Year" value="FirstYear" />
            <Picker.Item label="Second Year" value="SecondYear" />
            <Picker.Item label="Third Year" value="ThirdYear" />
          </Picker>
        </View>

        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Module Code</Text>
          <Picker
            selectedValue={selectedModuleCode}
            onValueChange={(itemValue) => setSelectedModuleCode(itemValue)}
            style={styles.dropdown}
          >
            <Picker.Item label="Select Module Code" value="" />
            {selectedYear &&
              moduleCodesByYear[selectedYear].map((code) => (
                <Picker.Item key={code} label={code} value={code} />
              ))}
          </Picker>
        </View>
      </View>

      {/* Add some spacing */}
      <View style={{ marginBottom: 20 }}></View>

      <View style={styles.headerRow}>
        <Text style={[styles.headerCell, { color: darkMode ? 'white' : 'black' }]}>Time</Text>
        <Text style={[styles.headerCell, { color: darkMode ? 'white' : 'black' }]}>Monday</Text>
        <Text style={[styles.headerCell, { color: darkMode ? 'white' : 'black' }]}>Tuesday</Text>
        <Text style={[styles.headerCell, { color: darkMode ? 'white' : 'black' }]}>Wednesday</Text>
        <Text style={[styles.headerCell, { color: darkMode ? 'white' : 'black' }]}>Thursday</Text>
        <Text style={[styles.headerCell, { color: darkMode ? 'white' : 'black' }]}>Friday</Text>
      </View>

      {timetable.map((rowData, index) => (
        <View key={index} style={{}}>
          <Text style={[styles.dataCell, { color: darkMode ? 'white' : 'orange' }]}>{rowData.time}</Text>
          <Text style={[styles.dataCell, { color: darkMode ? 'white' : 'black' }]}>{rowData.Monday}</Text>
          <Text style={[styles.dataCell, { color: darkMode ? 'white' : 'black' }]}>{rowData.Tuesday}</Text>
          <Text style={[styles.dataCell, { color: darkMode ? 'white' : 'black' }]}>{rowData.Wednesday}</Text>
          <Text style={[styles.dataCell, { color: darkMode ? 'white' : 'black' }]}>{rowData.Thursday}</Text>
          <Text style={[styles.dataCell, { color: darkMode ? 'white' : 'black' }]}>{rowData.Friday}</Text>
        </View>
      ))}
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
  timetableTime: {
    fontSize: 14,
    color: 'blue',
  },
});

const SelectStyles = StyleSheet.create({
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
