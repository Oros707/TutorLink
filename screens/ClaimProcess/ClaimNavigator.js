import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Claims from "./ClaimsWelcome";
import BankingDetails from "./BankingDetails";
import ClaimDetails from "./ClaimDetails";
import Confirmation from "./Confirmation";
import TemporaryAppointment from "./TemporaryAppointment";
import ConfirmationResult from "./ConfirmationResult";
import DetailsProvider from "./DetailsProvider";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <>
    <DetailsProvider>

    
      <Stack.Navigator initialRouteName="Claims">
        <Stack.Screen
          name="Claims"
          component={Claims}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ClaimDetails"
          component={ClaimDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BankingDetails"
          component={BankingDetails}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="TemporaryAppointment"
          component={TemporaryAppointment}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Confirmation"
          component={Confirmation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ConfirmationResult"
          component={ConfirmationResult}
          options={{
            headerShown: false,
          }}
        />
       
      </Stack.Navigator>
      </DetailsProvider>
    </>
  );
};

export default AppNavigator;
