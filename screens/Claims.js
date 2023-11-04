import { db } from "../config/firebase";
import React, { useContext, useState, useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { onSnapshot, collection, deleteDoc, doc } from "firebase/firestore";
import DetailsContext from "./ClaimProcess/DetailsContext";

const Claims = () => {
  const [claims, setClaims] = useState([]);
  const details = useContext(DetailsContext);

  useEffect(() => {
    const claimsCollection = collection(db, "Claims");
    const unsubscribe = onSnapshot(claimsCollection, (snapshot) => {
      const claimsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setClaims(claimsList);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleDeleteClaim = async (claimId) => {
    try {
      const claimDocRef = doc(db, "Claims", claimId);
      await deleteDoc(claimDocRef);
    } catch (error) {
      console.error("Error deleting claim:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Claims in the Database:</Text>
      <FlatList
        data={claims}
        keyExtractor={(claim) => claim.id}
        renderItem={({ item }) => (
          <View style={styles.claimItem}>
            <View style={styles.claimInfo}>
              <Text>Name: {item.name}</Text>
              <Text>Surname: {item.surname}</Text>
              <Text>ID/Passport number: {item.identity}</Text>
              <Text>Gender: {item.gender}</Text>
              <Text>Home Address: {item.address}</Text>
              <Text>Email: {item.email}</Text>
              <Text>Phone Number: {item.phonenumber}</Text>
              <Text>Disability: {item.disability}</Text>
              <Text>Race: {item.race}</Text>
            </View>
            <Button title="Delete" onPress={() => handleDeleteClaim(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 40,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  claimItem: {
    backgroundColor: "#D9E3F0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginVertical: 8,
  },
  claimInfo: {
    flex: 1,
  },
});

export default Claims;
