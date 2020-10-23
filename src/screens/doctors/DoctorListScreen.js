import React from 'react';
import { 
    FlatList,
     ScrollView,
     View,
     Text,
     Image,
     Button,
     StyleSheet
  } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import DoctorItem from '../../components/Doctors/DoctorItem';
import HeaderButton from '../../components/UI/HeaderButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DoctorListScreen = props => {
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
                onViewDetail={() => {
                    props.navigation.navigate('ProductDetail', { 
                        productId: itemData.item.id ,
                        productTitle: itemData.item.title
                    });
                }}
            />} 
        />
    );
  };

  DoctorListScreen.navigationOptions = (navData) => {
      return {
          headerTitle: 'Find Your Doctor',
          headerLeft:
            <Icon
                onPress={() => navData.navigation.toggleDrawer()}
                style={[{ color: 'blue', marginLeft: 8 }]}
                size={24}
                name={'menu'}
            />
      };
  }

export default DoctorListScreen; 