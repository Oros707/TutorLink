import { db } from "../config/firebase";
import React, { useContext, useState, useEffect } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { onSnapshot, collection, deleteDoc, doc } from "firebase/firestore";
import DetailsContext from './ClaimProcess/DetailsContext';

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
    <View>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Claims in the Database:
      </Text>
      <FlatList
        data={claims}
        keyExtractor={(claim) => claim.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1 }}>
              <Text>Contact E/T No.: {item.contactETNo}</Text>
              <Text>Total Hours Worked: {item.totalUnits}</Text>
              <Text>Rate: {item.rate}</Text>
              <Text>Amount Claimed: {item.amount}</Text>
              <Text>Centre Number: {item.costCentreNumber}</Text>
            </View>
            <Button
              title="Delete"
              onPress={() => handleDeleteClaim(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Claims;
