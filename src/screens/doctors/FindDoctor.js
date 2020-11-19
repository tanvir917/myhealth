import React from 'react';
import { 
    FlatList,
     ScrollView,
     View,
     Text,
     Image,
     TouchableHighlight,
     StyleSheet
  } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import DoctorItem from '../../components/Doctors/DoctorItem';
import HeaderButton from '../../components/UI/HeaderButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FindDoctor = props => {
    const listOfDoctors = useSelector(state => state.doctorList.availableDoctors);
     return (
        <FlatList
            data={listOfDoctors} 
            numColumns={1}
            keyExtractor={item => item.id} 
            renderItem={itemData => <DoctorItem 
                image={itemData.item.imageUrl}
                name={itemData.item.name}
                role={itemData.item.role}
                degree={itemData.item.degree}
                address={itemData.item.address}
                onSelect={() => {
                    props.navigation.navigate('BookAppointment');
                }}
            />} 
        />
    );
  };

  class LogoTitle extends React.Component {
    render() {
      return (
        <Image
          source={require('../../icons8-menu-24.png')}
          style={{ width: 30, height: 30, marginRight: 5 }}
        />
      );
    }
  }

  FindDoctor.navigationOptions = (navData) => {
      return {
          headerTitle: 'Find Your Doctor',
          headerRight:
            () => 
            <TouchableHighlight 
                onPress={() => navData.navigation.toggleDrawer()}
                activeOpacity={.2} >
            <LogoTitle
                style={[{ color: 'blue', marginRight: 5 }]}
                size={15}
            /></TouchableHighlight>,
      };
  }

export default FindDoctor; 