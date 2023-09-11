import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Schedule = () => {
  // Define the timetable data for the specified modules
  const timetable = [
    {
      time: '07:30 - 09:00',
      Monday: '',
      Tuesday: 'DSW01',
      Wednesday: '',
      Thursday: '',
      Friday: 'IFS02',
    },
    {
      time: '09:00 - 10:30',
      Monday: '',
      Tuesday: 'DSW01',
      Wednesday: 'CMN04',
      Thursday: '',
      Friday: 'IFS02',
    },
    {
      time: '10:30 - 12:00',
      Monday: '',
      Tuesday: 'DSW01',
      Wednesday: 'CMN04',
      Thursday: '',
      Friday: 'IFS02',
    },
    // Add more time slots as needed
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Time</Text>
        <Text style={styles.headerCell}>Monday</Text>
        <Text style={styles.headerCell}>Tuesday</Text>
        <Text style={styles.headerCell}>Wednesday</Text>
        <Text style={styles.headerCell}>Thursday</Text>
        <Text style={styles.headerCell}>Friday</Text>
      </View>
      {timetable.map((rowData, index) => (
        <View key={index} style={styles.dataRow}>
          <Text style={styles.dataCell}>{rowData.time}</Text>
          <Text style={styles.dataCell}>{rowData.Monday}</Text>
          <Text style={styles.dataCell}>{rowData.Tuesday}</Text>
          <Text style={styles.dataCell}>{rowData.Wednesday}</Text>
          <Text style={styles.dataCell}>{rowData.Thursday}</Text>
          <Text style={styles.dataCell}>{rowData.Friday}</Text>
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
    borderColor: 'black',
  },
  dataCell: {
    flex: 1,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default Schedule;
