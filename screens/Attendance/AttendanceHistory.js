import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {
  collection,
  getDocs,
  orderBy,
  query,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { Table, Row, Rows } from "react-native-table-component";
import { ScrollView } from "react-native-gesture-handler";
import ModalDropdown from "react-native-modal-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../Settings/ThemeContext";

export default function AttendanceHistory({ navigation }) {
  const [attendanceData, setAttendanceData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [sortAscending, setSortAscending] = useState(true);
  const [isFetching, setIsFetching] = useState(true);
  const { darkMode } = useTheme();
  const sortingOptions = ["Ascending", "Descending"];

  const fetchAttendanceData = async () => {
    try {
      const attendanceRef = collection(db, "Attendance");
      const attendanceQuery = query(
        attendanceRef,
        orderBy("Date", sortAscending ? "asc" : "desc")
      );

      const querySnapshot = await getDocs(attendanceQuery);
      const data = [];
      querySnapshot.forEach((doc) => {
        const docData = doc.data();
        data.push([docData.QRData, docData.Date, docData.Time]);
      });
      setAttendanceData(data);
      setTableData([["Data", "Date", "Time"], ...data]);
    } catch (error) {
      console.error("Error fetching data from Firestore: ", error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchAttendanceData();
  }, [sortAscending]);

  const handleSortingOptionSelect = (index) => {
    setSortAscending(index === 0);
    fetchAttendanceData();
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: darkMode ? "#333" : "#D9E3F0",
        },
      ]}
    >
      {isFetching ? (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator
            size="large"
            color={darkMode ? "white" : "#333"}
          />
        </View>
      ) : (
        <>
          <Text
            style={[
              styles.heading,
              {
                color: darkMode ? "white" : "#333",
              },
            ]}
          >
            Attendance History
          </Text>
          <TouchableOpacity
            style={styles.home}
            onPress={() => navigation.navigate("Attendance")}
          >
            <Text style={styles.homeText}>Home</Text>
          </TouchableOpacity>
          <ModalDropdown
            options={sortingOptions}
            style={styles.dropdown}
            textStyle={styles.dropdownText}
            dropdownStyle={styles.dropdownContainer}
            dropdownTextStyle={styles.dropdownItemText}
            onSelect={handleSortingOptionSelect}
          >
            <View style={styles.dropdownTrigger}>
              <AntDesign
                name={sortAscending ? "arrowup" : "arrowdown"}
                size={16}
                color={darkMode ? "white" : "#333"}
              />
              <Text>{"  "}</Text>
              <Text
                style={{
                  color: darkMode ? "white" : "#333",
                }}
              >
                {sortingOptions[sortAscending ? 0 : 1]}
              </Text>
            </View>
          </ModalDropdown>

          <ScrollView style={{ width: "100%" }}>
            <Table borderStyle={{ borderWidth: 2, borderColor: "#ffaa00" }}>
              <Row
                data={tableData[0]}
                style={styles.head}
                textStyle={[
                  styles.headText,
                  { color: darkMode ? "white" : "#333" },
                ]}
              />
            </Table>
            <Table borderStyle={{ borderWidth: 2, borderColor: "#ffaa00" }}>
              <Rows
                data={tableData.slice(1)}
                textStyle={[
                  styles.rowText,
                  { color: darkMode ? "white" : "#333" },
                ]}
              />
            </Table>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  head: {
    height: 40,
    backgroundColor: "#ffc266",
  },
  headText: {
    margin: 6,
    textAlign: "center",
    fontWeight: "bold",
  },
  rowText: {
    margin: 6,
    textAlign: "center",
  },
  heading: {
    fontSize: 33,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    color: "black",
  },
  dropdown: {
    alignSelf: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ffaa00",
    borderRadius: 5,
    marginBottom: 10,
  },
  dropdownText: {
    fontSize: 16,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: "#ffaa00",
    borderRadius: 5,
  },
  dropdownItemText: {
    fontSize: 16,
  },
  dropdownTrigger: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  home: {
    bottom: -30,
  },
  homeText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#007BFF",
  },
});
