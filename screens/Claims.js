import { db } from "../config/firebase";
import React, { useContext, useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { onSnapshot, collection } from "firebase/firestore";
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

  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Claims in the Database:
      </Text>
      <FlatList
        data={claims}
        keyExtractor={(claim) => claim.id}
        renderItem={({ item }) => (
          <View>
            <Text>Claimed By: {item.claimedBy || "Unknown User"}</Text>
            <Text>Contact E/T No.: {item.contactETNo}</Text>
            <Text>Total Units: {item.totalUnits}</Text>
            <Text>Rate: {item.rate}</Text>
            <Text>Currency: {item.currency}</Text>
            {/* Display more claim information as needed */}
          </View>
        )}
      />
    </View>
  );
};

export default Claims;
