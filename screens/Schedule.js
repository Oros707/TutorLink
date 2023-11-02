import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from './Settings/ThemeContext'; // Import the useTheme hook

const Schedule = () => {
  const { darkMode } = useTheme(); // Use the useTheme hook to get the theme information
  const [selectedYear, setSelectedYear] = useState('FirstYear');
  const [selectedModuleCode, setSelectedModuleCode] = useState('');

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
    <View style={[styles.container, { backgroundColor: darkMode ? 'black' : (darkMode ? 'orange' : '#D9E3F0') }]}>
      <View>
        <Text style={styles.title}> Tutoring Schedule</Text>
      </View>
      <View style={styles.dropdowns}>
        <View style={styles.dropdownContainer}>
          <Text style={[styles.label, { color: darkMode ? 'white' : 'black' }]}>Year of Study</Text>
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
          <Text style={[styles.label, { color: darkMode ? 'white' : 'black' }]}>Module Code</Text>
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
        <View key={index} style={styles.dataRow}>
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
    padding: 16,
  },
  dropdowns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginTop: 49,
  },
  dropdownContainer: {
    flex: 1,
  },
  dropdown: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color:'orange',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    padding: 8,
    marginBottom: 8,
    borderRadius: 8,
  },
  dataRow: {
    flexDirection: 'row',
    padding: 8,
    marginBottom: 8,
    borderRadius: 8,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'orange',
  },
  dataCell: {
    flex: 1,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'orange',
  },
  title: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 30,
  },
});

export default Schedule;
