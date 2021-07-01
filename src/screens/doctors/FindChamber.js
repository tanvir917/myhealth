import React, { useState } from "react";
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
import { SearchBar } from 'react-native-elements';
import ENT from 'react-native-vector-icons/Entypo';

const FindChamber = props =>  {
  const [value, setValue] = useState();
  const doctorId = props.navigation.getParam('doctorId');
  const listOfDoctors = useSelector(state => 
    state.doctorList.availableDoctors.find(prod => prod.id === doctorId)
  );
  list = Object.values(listOfDoctors.hospital);
  console.log('================Chamber list====================');
  console.log(listOfDoctors.hospital);
  console.log('====================================');
  const [arrayholder, setArrayholder] = useState(list);
  const searchDoctor = list;

  const searchFilterFunction = text => {
    setValue(text);
    const newData = searchDoctor.filter(item => {
      const itemData = item.location.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setArrayholder(newData);
  };

  return (
    <View>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black', margin: 10}}> Available Chambers for the selected Doctors</Text>
      <SearchBar
                focus
                placeholder="Search Your Area..."
                lightTheme
                round
                onChangeText={text => searchFilterFunction(text)}
                //onSearchButtonPress={text => searchFilterFunction(text)}
                autoCorrect={false}
                value={value}
       />
      <FlatList
          data={arrayholder.length === 0 ? list : arrayholder} 
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
              onSelect={() => {
                  props.navigation.navigate('DoctorProfile',{
                    doctorId,
                    hospitalId: itemData.item.id
                  });
              }}
          />} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
})

export default FindChamber;