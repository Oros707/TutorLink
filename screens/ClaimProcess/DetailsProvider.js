import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react';
import DetailsContext from './DetailsContext';

const DetailsProvider = ({ children }) => {
    const [details, setDetails] = useState({ 
        ClaimDetails:{},
        BankingDetails:{},
        TemporaryAppointment:{},
     })
  return (
    <DetailsContext.Provider value={[details, setDetails]}>
      {children}
    </DetailsContext.Provider>
  )
}

export default DetailsProvider