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
import FindCategory from '../../components/Doctors/FindCategory';

const FindDoctor = props => {
    const listOfDoctors = useSelector(state => state.doctorList.availableDoctors);
    console.log(listOfDoctors);
    const Doctor = useSelector(state => state.categoryreducer.availableCategory);
    console.log('====================================');
    console.log(Doctor);
    console.log('====================================');
     return (
        <View>
            <FlatList
              horizontal={true}
              data={Doctor}
              numColumns={1}
              keyExtractor={item=>item.id}
              renderItem={itemData => <FindCategory
                        
                        title={itemData.item.Name}
              />}
              onViewDetail={()=>{}}
          />
          <FlatList
            data={listOfDoctors} 
            numColumns={1}
            keyExtractor={item => item.id} 
            renderItem={itemData => <DoctorItem 
                image={itemData.item.imageUrl}
                name={itemData.item.name}
                role={itemData.item.role}
                degree={itemData.item.degree}
                address={itemData.item.hospital.title}
                onSelect={() => {
                    props.navigation.navigate('FindChamber', {
                      doctorId: itemData.item.id,
                      hospitalId: itemData.item.hospital,
                      doctorName: itemData.item.name
                    });
                }}
            />} 
        />
        </View>
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