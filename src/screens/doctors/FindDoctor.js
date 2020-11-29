import React, {useState, useEffect} from 'react';
import { 
    FlatList,
     ScrollView,
     View,
     Text,
     Image,
     TouchableHighlight,
     StyleSheet,
     Platform
  } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import DoctorItem from '../../components/Doctors/DoctorItem';
import FindCategory from '../../components/Doctors/FindCategory';
import { SearchBar } from 'react-native-elements';
import Card from '../../components/UI/Card';

const FindDoctor = props => {
    if(Platform.OS==='android' && Platform.Version >=21){
        TouchableCmp=TouchableNativeFeedback;
    }
    const [selectedbtn, setSelectedbtn] = useState(null);
    const [value, setValue] = useState();
    const listOfDoctors = useSelector(state => state.doctorList.availableDoctors);
    //console.log(listOfDoctors);
    const Doctor = useSelector(state => state.categoryreducer.availableCategory);
    const doctorData =  selectedbtn === null ? listOfDoctors : listOfDoctors.filter( item => {
      const itemData = item.role.toUpperCase();
      console.log('itemData',itemData);
      const buttonText = selectedbtn.toUpperCase();
      console.log('button',buttonText);
      return itemData.indexOf(buttonText) > -1;
    })
    
    useEffect(() => {

    }, [selectedbtn, doctorData])
    console.log('==============dd======================');
    console.log(doctorData);
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
                                  <View style={{justifyContent: 'center'}}>
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
                style={[{ color: 'blue', marginRight: 5 }]}
                size={15}
            /></TouchableHighlight>,
      };
  }

  const styles = StyleSheet.create({
    imageContainer: {
        margin:4,
        width: '25%',
        height: '80%',
        borderRadius: 18,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    card: {
        flexDirection: 'row'
    },
})

export default FindDoctor; 