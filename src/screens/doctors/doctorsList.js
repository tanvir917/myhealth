import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    ScrollView,
    View,
    Text,
    Image,
    Button,
    TouchableHighlight,
    StyleSheet, RefreshControl
 } from 'react-native';
 import LogoTitle from '../LogoTitle';
 import { database } from '../../firebase';

const doctorsList = props => {
    const userInfo = useSelector(state => state.authM.userInfo)
    const [refreshing, setRefreshing] = React.useState(false);
    //const userId = useSelector(state => state.authM.userId)
    const userId = 'bKg3W2JiiOXYKEiVxBYBZnWSyST2'
    const [data, setData ] = useState()

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        callData()
        setRefreshing(false)
      }, []);

      const callData = () => {
        database
        .ref(`users/${userId}`).child('sdata')
        .on('value', (snapshot) => {
            if(!snapshot) {
                throw new Error('Something went wrong!');
            }
            const sdata = snapshot.val();
            setData(sdata)
        })
      }

    useEffect(() => {
        callData()
    }, [])
    useEffect(() => {
    }, [data])

    // const drug_s = [Vinblastine (anticancer agents), Cyclosporin (immunosuppressive agent), Digoxin (heart drug),
    //     Acepromazine (tranquiliser)]

    // const anti_res = [methicillin-resistant Staphylococcus aureus (MRSA),vancomycin-resistant Enterococcus (VRE),
    //     multi-drug-resistant Mycobacterium tuberculosis (MDR-TB),carbapenem-resistant Enterobacteriaceae (CRE) gut bacteria]

    // const drug_a = [Antibiotics -- amoxicillin (Moxatag), ampicillin, penicillin (Bicillin L-A), tetracycline,
    //     Nonsteroidal anti-inflammatory drugs like ibuprofen and naproxen, Aspirin,
    //     Sulfa drugs,Chemotherapy drugs]
     return (
        <ScrollView
            refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
            }
        >
            <View style={{marginTop: 20, margin: 15}}>
                <View style={{marginTop: 20}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Drug Sensitivity: </Text>
                    <Text>{data && data.sensitivity}</Text>
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Antibiotic Resistance: </Text>
                    <Text>{data && data.resistance}</Text>
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Drug Allergy: </Text>
                    <Text>{data && data.allergy}</Text>
                </View>
                <Button title='Edit' onPress={() => {
                    props.navigation.navigate('EditSensitiveData')
                }}/>
            </View>
        </ScrollView>
     );
 }

 doctorsList.navigationOptions = navData => {
    return {
        headerTitle: 'Patients Sensitive Data',
        headerRight:
            () => 
            <TouchableHighlight 
                onPress={() => navData.navigation.toggleDrawer()}
                style={{margin: 15, height: 50, width: 50}}
                activeOpacity='0'>
                <LogoTitle
                    style={[{ color: 'blue'}]}
                    size={15}
                />
            </TouchableHighlight>,
    }
};

 export default doctorsList;