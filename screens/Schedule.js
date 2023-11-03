import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { db } from "../config/firebase"; // Import db from your Firebase configuration
import { collection, query, getDocs } from "firebase/firestore";

const Schedule = () => {
  const [academicYears, setAcademicYears] = useState([]);
  const [academicYear, setAcademicYear] = useState("");
  const [timetableData, setTimetableData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAcademicYears = async () => {
      try {
        const academicYearCollectionRef = collection(db, "timetable");
        const academicYearQuery = query(academicYearCollectionRef);
        const academicYearDocs = await getDocs(academicYearQuery);
        const years = academicYearDocs.docs.map((doc) => doc.id);
        setAcademicYears(years);
        if (years.length > 0) {
          setAcademicYear(years[0]);
        }
      } catch (error) {
        console.error("Error retrieving academic years:", error);
      }
    };

    fetchAcademicYears();
  }, []);

  useEffect(() => {
    if (academicYear) {
      const fetchTimetableData = async () => {
        try {
          setLoading(true);
          const dayOfWeeks = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ];
          const data = [];

          for (const day of dayOfWeeks) {
            const dayCollectionRef = collection(
              db,
              "timetable",
              academicYear,
              day
            );
            const dayDocs = await getDocs(dayCollectionRef);
            dayDocs.forEach((doc) => {
              const [startTime, endTime] = doc.id.split("-"); // Split the slot into start and end times
              data.push({ day, startTime, endTime, module: doc.data().module });
            });
          }

          setTimetableData(data);
          setLoading(false);
        } catch (error) {
          console.error("Error retrieving timetable data:", error);
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

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.timetableContainer}>
          <Text style={styles.timetableTitle}>
            Timetable for {academicYear}
          </Text>

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
    backgroundColor: "#FFA500",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 100, // Adjust the marginTop property to move it down
    color: "white",
  },
  timetableContainer: {
    flex: 1,
    marginTop: 20,
  },
  timetableTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  timetableCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#333",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  timetableSlot: {
    fontSize: 16,
    fontWeight: "bold",
  },
  timetableModule: {
    fontSize: 14,
    color: "gray",
  },
  timetableTime: {
    fontSize: 14,
    color: "blue",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "#333",
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "#333",
    paddingRight: 30,
  },
});

export default Schedule;
