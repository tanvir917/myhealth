import React, {useState, useEffect} from 'react';
import { 
    FlatList,
    TouchableOpacity,
     View,
     Text,
     Image,
     TouchableHighlight,
     StyleSheet,
     Platform,
     TouchableNativeFeedback
  } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import DoctorItem from '../../components/Doctors/DoctorItem';
import FindCategory from '../../components/Doctors/FindCategory';
import { SearchBar } from 'react-native-elements';
import Card from '../../components/UI/Card';
import { database } from '../../firebase';
import * as doctorActions from '../../actionCreators/doctorList';
import Icon from 'react-native-vector-icons/FontAwesome';

const FindDoctor = props => {
    let TouchableCmp = TouchableOpacity;

    if(Platform.OS==='android' && Platform.Version >=21){
        TouchableCmp=TouchableNativeFeedback;
    }
    const dispatch = useDispatch();
    const [selectedbtn, setSelectedbtn] = useState(null);
    const [value, setValue] = useState();
    const listOfDoctors = useSelector(state => state.doctorList.availableDoctors);
    //console.log(listOfDoctors);
    const Doctor = useSelector(state => state.categoryreducer.availableCategory);
    const doctorData =  selectedbtn === null ? listOfDoctors : listOfDoctors.filter( item => {
      const itemData = item.role.toUpperCase();
      const buttonText = selectedbtn.toUpperCase();
      return itemData.indexOf(buttonText) > -1;
    })
    
    useEffect(() => {
      
    }, [selectedbtn, doctorData])
    useEffect(() => {
      dispatch(doctorActions.fetchDoctors())
    }, [])
    console.log('==============doctordata======================');
    console.log(doctorData);
    console.log('====================================');
    console.log('==============doctorcategory======================');
    console.log(Doctor);
    console.log('====================================');
    const [arrayholder, setArrayholder] = useState(doctorData);
    const searchDoctor = listOfDoctors;
    const onBtnPress = (id) => {
        setSelectedbtn(id)
    }

    const searchFilterFunction = text => {
      setValue(text);
      const newData = searchDoctor.filter(item => {
        const itemData = item.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setArrayholder(newData);
    };

    const listView = <FlatList
        data={arrayholder.length === 0 ? doctorData : arrayholder} 
        numColumns={1}
        keyExtractor={item => item.id} 
        renderItem={itemData => <DoctorItem 
            image={itemData.item.imageUrl}
            name={itemData.item.name}
            role={itemData.item.role}
            degree={itemData.item.degree}
            address='Nothing'
            iconName='graduation-cap'
            iconType={Icon}
            onSelect={() => {
                props.navigation.navigate('FindChamber', {
                  doctorId: itemData.item.id,
                  hospitalId: itemData.item.hospital,
                  doctorName: itemData.item.name
                });
            }}
        />} 
    />

     return (
        <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', margin: 15, color: 'black'}}>Choose a Category</Text>
            <FlatList
              extractData={selectedbtn}
              horizontal={true}
              data={Doctor}
              numColumns={1}
              keyExtractor={item=>item.id}
              renderItem={({item}) => 
                  <View style={{marginBottom: 15}}> 
                      <Card 
                          style={{height: 55, margin: 7, width: 130,}}
                          containerStyle={selectedbtn === item.Name ? {
                                        backgroundColor: '#a1a1a1',
                                    } : {backgroundColor: 'white'}}
                      >
                        <TouchableCmp
                          onPress={() => {
                              onBtnPress(item.Name)
                              // console.log('====================================');
                              // console.log(item.Name);
                              // console.log('====================================');
                          }}
                        >
                            <View style={styles.card}>
                                  <View style={styles.imageContainer} >
                                    <Image 
                                        style={styles.image} 
                                        source={{uri: item.image}} 
                                    />
                                  </View>
                                  <View style={styles.textContainer}>
                                      <View>
                                              <Text>{item.Name}</Text>
                                      </View>
                                  </View>
                            </View>
                        </TouchableCmp>
                      </Card>
                </View>}
              onViewDetail={()=>{}}
          />
          <SearchBar
                focus
                placeholder="Search Doctor Name..."
                lightTheme
                round
                onChangeText={text => searchFilterFunction(text)}
                //onSearchButtonPress={text => searchFilterFunction(text)}
                autoCorrect={false}
                searchIcon={{ size: 24 }}
                value={value}
                //icon = {{type: 'material-community', color: '#86939e', name: 'share' }}
                //clearIcon = {{type: 'material-community', color: '#86939e', name: 'share' }}
           />
           <View style={{height: '73%'}}>
              {listView}
           </View>
            
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
                style={[{ color: 'blue', marginRight: 15 }]}
                size={15}
            /></TouchableHighlight>,
      };
  }

  const styles = StyleSheet.create({
    imageContainer: {
        margin: 6,
        marginLeft: 10,
        width: '25%',
        height: '80%',
        borderRadius: 18,
        overflow: 'hidden'
    },
    textContainer: {
      width: '70%',
      justifyContent: 'center',
      marginLeft: 5,
      marginRight: 5,
},
    image: {
        width: '100%',
        height: '100%'
    },
    card: {
        flexDirection: 'row',
        height: 50,
        width: 120,
    },
})

export default FindDoctor; 