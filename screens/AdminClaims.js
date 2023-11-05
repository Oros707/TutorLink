import { db } from "../config/firebase";
import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { onSnapshot, collection, deleteDoc, doc } from "firebase/firestore";
import DetailsContext from "./ClaimProcess/DetailsContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const Claims = () => {
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);
  const details = useContext(DetailsContext);

  useEffect(() => {
    const claimsCollection = collection(db, "Claims");
    const unsubscribe = onSnapshot(claimsCollection, (snapshot) => {
      const claimsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setClaims(claimsList);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleDeleteClaim = async (claimId) => {
    try {
      const claimDocRef = doc(db, "Claims", claimId);
      await deleteDoc(claimDocRef);
      alert("This claim has been submitted to HR");
    } catch (error) {
      console.error("Error deleting claim:", error);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Claims in the Database:</Text>
      <FlatList
        data={claims}
        keyExtractor={(claim) => claim.id}
        renderItem={({ item }) => (
          <View style={styles.claimItem}>
            <View style={styles.claimInfo}>
              <Text style={styles.text}>Name: {item.name}</Text>
              <Text style={styles.text}>Surname: {item.surname}</Text>
              <Text style={styles.text}>
                ID/Passport number: {item.identity}
              </Text>
              <Text style={styles.text}>Gender: {item.gender}</Text>
              <Text style={styles.text}>Home Address: {item.address}</Text>
              <Text style={styles.text}>Email: {item.email}</Text>
              <Text style={styles.text}>Phone Number: {item.phonenumber}</Text>
              <Text style={styles.text}>Disability: {item.disability}</Text>
              <Text style={styles.text}>Race: {item.race}</Text>
              <TouchableOpacity
                onPress={() => handleDeleteClaim(item.id)}
                style={styles.deleteButton}
              >
                <Text style={{ color: "white" }}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
    top: 40,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  claimItem: {
    backgroundColor: "#D9E3F0",
    padding: 17,
    margin: 5,
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#333",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 3 },
    flexDirection: "row",
    justifyContent: "space-between",
  },
  claimInfo: {
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
  },
  deleteButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    padding: 8,
    borderRadius: 12,
    width: 300,
    marginTop: 20,
  },
});

export default Claims;
