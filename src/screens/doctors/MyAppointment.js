import React from 'react';
import { 
    FlatList
  } from 'react-native';

import { useSelector } from 'react-redux';
import DoctorItem from '../../components/Doctors/DoctorItem';

const MyAppointment = props => {
    const listOfDoctors = useSelector(state => state.doctorList.availableDoctors);
    
  };

export default MyAppointment; 