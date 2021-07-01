import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity, FlatList, Image, ScrollView, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as queryActions from '../../actionCreators/queries'
import Colors from '../../constants/Colors';
import DropDownPicker from 'react-native-dropdown-picker';
import Question from '../queries/Question';
import { database } from '../../firebase';
import Card from '../../components/UI/Card';
import Autocomplete from 'react-native-autocomplete-input';
import {parameters, datalist} from '../../../data';

const Dummy = (props) => {
    const [MainJSON, setMainJSON] = useState(
        parameters
    );
    const [FilterData, setFilterData] = useState([]);
    const [selectedItem, setselectedItem] = useState('');

    // useEffect(() => {
    //     fetch('https://aboutreact.herokuapp.com/getpost.php?offset=1')
    //     .then((res) => res.json())
    //     .then((json) => {
    //         console.log('====================================');
    //         console.log(json);
    //         console.log('====================================');
    //         const {results: films} = json;
    //         setMainJSON(films);
    //     })
    //     .catch((e) => {
    //         alert(e);
    //     });
    // }, []);

    const SearchDataFromJSON = (query) => {
        if (query) {
          //Making the Search as Case Insensitive.
          const regex = new RegExp(`${query.trim()}`, 'i');
          console.log('regex exp',regex);
          setFilterData(
            MainJSON && MainJSON.filter((data) => data.search(regex) >= 0)
          );
          console.log('================filter====================');
          console.log(FilterData);
          console.log('====================================');
        } else {
          setFilterData([]);
        }
      };

    let TouchableCmp = TouchableOpacity;

    if(Platform.OS==='android' && Platform.Version >=21){
        TouchableCmp=TouchableNativeFeedback;
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(queryActions.fetchMyQueries())
    }, [])
    const userId = useSelector(state => state.authM.userId)
    const userInfo = useSelector(state => state.authM.userInfo)
    const queries = useSelector(state => state.queries.myQueries);
    console.log('========================qq============');
    console.log(queries["precautions to take"]);
    console.log('====================================');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
    ]);

    const [selectedbtn, setSelectedbtn] = useState(null);
    const Doctor = useSelector(state => state.categoryreducer.availableCategory);
    // const doctorData =  selectedbtn === null ? listOfDoctors : listOfDoctors.filter( item => {
    //   const itemData = item.role.toUpperCase();
    //   const buttonText = selectedbtn.toUpperCase();
    //   return itemData.indexOf(buttonText) > -1;
    // })

    const onBtnPress = (id) => {
        setSelectedbtn(id)
    }

    useEffect(() => {
      
    }, [selectedbtn])

    const addDoctors = () => {
    database.ref(`doctorsList`).child('P226QF1N02WgaAbtGexJX1zEygO2').set({
      imageUrl: userInfo.avatar,
      name: "Dr. Jahanara Alam",
      role: 'Gastroenterologist',
      degree: 'Doctor of Medicine (MD), PGIMER - Postgraduate Institute of Medical Education and Research',
      hospital: {'-MckoiFufoowhe4gR7Tf': {
        id: 'h1', title: "Labaid Hospital", 
         phone: '01843911111',
         email: 'labaid_hospital@gmail.com',
         location: 'Mirpur Road, Dhanmondi, Dhaka-1207',
         image: 'https://i.ibb.co/sJ35vxC/hospital.jpg',
         slots: {
            s1: {slot: "9:00 AM"},
            s2: {slot: "10:00 AM"},
            s3: {slot: "11:00 AM"},
            s4: {slot: "12:00 AM"},
        }
       },
       '-MckoxNbxS6IRBlMce5s': {
        id: 'h2', title: "Popular Hospital", 
         phone: '0182000000',
         email: 'popular_hospital@gmail.com',
         location: 'Dhanmondi, Dhaka-1212',
         image: 'https://i.ibb.co/sJ35vxC/hospital.jpg',
         slots: {
            s1: {slot: "4:00 PM"},
            s2: {slot: "5:00 PM"},
            s3: {slot: "6:00 PM"},
            s4: {slot: "7:00 PM"},
        }
       },
       '-MckpDNPHnZXv-Jj7KhY': {
        id: 'h2', title: "Green Life Hospital", 
         phone: '0177000000',
         email: 'greenlife_hospital@gmail.com',
         location: 'Rampura, Dhaka-1217',
         image: 'https://i.ibb.co/sJ35vxC/hospital.jpg',
         slots: {
            s1: {slot: "9:00 AM"},
            s2: {slot: "10:00 AM"},
            s3: {slot: "11:00 AM"},
            s4: {slot: "12:00 AM"},
        }
       },
       '-MckpSjS3nEc8Ee75oNw': {
        id: 'h2', title: "Mediaid Hospital", 
         phone: '0177000000',
         email: 'mediaid_hospital@gmail.com',
         location: 'Poltan, Motijheel, Dhaka-1217',
         image: 'https://i.ibb.co/sJ35vxC/hospital.jpg',
         slots: {
            s1: {slot: "9:00 AM"},
            s2: {slot: "10:00 AM"},
            s3: {slot: "11:00 AM"},
            s4: {slot: "12:00 AM"},
        }
       },
    },
    });
  };

  const addHospitals = () => {
    database.ref(`hospitalsList`).push({
        title: "Mediaid Hospital", 
         phone: '0182000000',
         email: 'mediaid_hospital@gmail.com',
         location: 'Poltan, Motijheel, Dhaka-1217',
         image: 'https://i.ibb.co/sJ35vxC/hospital.jpg',
         slots: {
            s1: {slot: "4:00 PM"},
            s2: {slot: "5:00 PM"},
        }
    })
  };
    
  return (
    <View style={{margin: 10, height: '90%'}}>
        <ScrollView style={{height: '80%'}}>
            <View >
                <FlatList
                    extractData={selectedbtn}
                    data={Doctor}
                    numColumns={3}
                    keyExtractor={item=>item.id}
                    renderItem={({item}) => 
                        <View style={{marginBottom: 15}}> 
                            <Card 
                                style={{height: 55, margin: 7, width: 117,}}
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
            </View>
            <View>
                <Text>What problem are you facing the most?</Text>
            </View>
            <View style={styles.MainContainer}>
                <Autocomplete
                    autoCapitalize="none"
                    autoCorrect={false}
                    containerStyle={styles.AutocompleteStyle}
                    data={FilterData}
                    defaultValue={
                        selectedItem === '' ?
                        '' :
                        selectedItem
                    }
                    keyExtractor={(item, i) => i.toString()}
                    onChangeText={(text) => SearchDataFromJSON(text)}
                    placeholder="Type The Search Keyword..."
                    renderItem={
                        <TouchableCmp
                        onPress={() => {
                            setselectedItem('');
                            console.log('=============se item=======================');
                            console.log('item');
                            console.log('====================================');
                            setFilterData([]);
                        }}> <Text>Hello</Text>
                            <View style={{
                                height: 80, width: '100%',
                                backgroundColor: 'red'
                            }}>
                                <Text style={styles.SearchBoxTextItem}>
                                    5. {'item'}
                                </Text>
                            </View>
                        </TouchableCmp>
                    }
                />
        
                <View style={styles.selectedTextContainer}>
                {
                    <Text style={styles.selectedTextStyle}>
                        1. {selectedItem}
                    </Text>
                }
                </View>
        
            </View>
            
        </ScrollView>
        <Button
            title="Add Doctors"
            onPress={() => {
                addDoctors();
            }}
        />
        <Button
            title="Add Hospitals"
            onPress={() => {
                addHospitals();
            }}
        />
        <View 
            style={{height: 40, width: 100, margin: 10,
                backgroundColor: Colors.buttonColor, borderRadius: 10,
                justifyContent: 'center', alignItems: 'center'
            }}>
            <TouchableOpacity>
                <Text style={{fontWeight: 'bold', fontSize: 15,}}>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    </View>

  );
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
      width: '55%',
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
    MainContainer: {
        backgroundColor: '#FAFAFA',
      },
      AutocompleteStyle: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1,
       borderWidth:1
      },
      SearchBoxTextItem: {
        margin: 5,
        fontSize: 16,
        paddingTop: 4,
      },
      selectedTextContainer: {
        flex: 1,
        justifyContent: 'center',
      },
      selectedTextStyle: {
        textAlign: 'center',
        fontSize: 18,
      },
})

export default Dummy;
