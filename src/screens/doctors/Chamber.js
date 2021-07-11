import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from 'react-redux';
import DoctorItem from '../../components/Doctors/DoctorItem';

const Chamber = props =>  {
  const listOfDoctors = useSelector(state => 
    state.doctorList.availableDoctors.find(prod => prod.id === '0DebqFZScIhMH6YorajaKeasiNW2')
  );
  list = Object.values(listOfDoctors.hospital);
    return (
       <View
        style={{ justifyContent: "center", alignItems: "center", height: 400 }}
      >
        <FlatList
          data={list} 
          numColumns={1}
          keyExtractor={item => item.id} 
          renderItem={itemData => <DoctorItem 
              image={itemData.item.image}
              name={itemData.item.title}
              role={itemData.item.phone}
              degree={itemData.item.email}
              address={itemData.item.location}
              iconName='email'
              iconType='Chamber'
          />} 
      />
      </View>
    ); 
}

export default Chamber;