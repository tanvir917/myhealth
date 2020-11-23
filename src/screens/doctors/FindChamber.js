import React from "react";
import { 
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
  StyleSheet
} from 'react-native';
import { useSelector } from 'react-redux';
import DoctorItem from '../../components/Doctors/DoctorItem';

const FindChamber = props =>  {
  const doctorId = props.navigation.getParam('doctorId');
  const listOfDoctors = useSelector(state => 
    state.doctorList.availableDoctors.find(prod => prod.id === doctorId)
  );
  list = listOfDoctors.hospital;
  console.log('====================================');
  console.log(listOfDoctors.hospital);
  console.log('====================================');
  return (
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
            onSelect={() => {
                props.navigation.navigate('BookAppointment',{
                  doctorId,
                  hospitalId: itemData.item.id
                });
            }}
        />} 
    />
  );
}

const styles = StyleSheet.create({
  
})

export default FindChamber;