import React, { useEffect } from 'react';
import { View, 
    Text, Image, FlatList, 
    StyleSheet, TouchableHighlight, Dimensions, 
    TouchableNativeFeedback, 
    TouchableOpacity} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-native-banner-carousel';
import { LogBox } from 'react-native';

const BannerWidth = Dimensions.get('window').width - 5;
const BannerHeight = 260;
import MenuItem from '../../components/Patients/MenuItem';
import { SearchBar } from 'react-native-elements';
import { UserOutlined, StarOutlined } from '@ant-design/icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { auth, database } from '../../firebase';
import * as authActions from '../../actionCreators/authM';
import LogoTitle from '../LogoTitle';

const PatientsOverviewScreen = props => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.menus.availableProducts);
    const userEmail = useSelector(state => state.authM.email);
    const userName = useSelector(state => state.authM.displayName);
    const userInfo = useSelector(state => state.authM.userInfo)
    
    console.log('==============userInfo p======================');
    console.log(userInfo);
    console.log('====================================');

    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }, [])
    const images = [
        'https://i.ibb.co/sQqLtqz/banner-01.jpg',
        'https://i.ibb.co/tcMMHWz/About-us-3.jpg',
        'https://i.ibb.co/YQCyXXZ/Banner-Doctors.png'
    ];
    renderPage = (image, index) => {
        return (
            <View key={index} style={{ justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{ width: BannerWidth, height: '100%', margin: 10, borderRadius: 10 }} source={{ uri: image }} />
            </View>
        );
    }
    
    return ( 
        <View style={{height:'100%', width:'100%', marginTop: 10, backgroundColor:'white'}}>
            <View style={{height: 150, width:'100%', borderRadius:5, }}>
                <View style={styles.container}>
                    <Carousel
                        autoplay
                        autoplayTimeout={5000}
                        loop
                        index={0}
                        useNativeDriver='false'
                        pageSize={BannerWidth}
                    >
                        {images.map((image, index) => renderPage(image, index))}
                    </Carousel>
                </View>
            </View>
            <SearchBar
                focus
                placeholder="Ask your question..."
                lightTheme
                round
                searchIcon={{ size: 25 }}
                styles={{backgroundColor: 'white'}}
                onChangeText={() => {}}
                //onSearchButtonPress={text => searchFilterFunction(text)}
                autoCorrect={false}
                searchIcon={{ size: 24 }}
                //value={value}
                //icon = {{type: 'material-community', color: '#86939e', name: 'share' }}
                //clearIcon = {{type: 'material-community', color: '#86939e', name: 'share' }}
           />
            <View style={{height: '58%'}}>
            <FlatList
                data={products} 
                numColumns={3}
                keyExtractor={item => item.id} 
                renderItem={({item}) => <MenuItem 
                    image={item.imageUrl}
                    title={item.title}
                    onSelect={() => {
                        props.navigation.navigate(item.screen);
                    }}
                />} 
            />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity 
                onPress={() => {
                    props.navigation.navigate('FirstScreen')
                }}>
                    <View style={{height: 50, width: 380, backgroundColor: '#3bb63d', borderRadius: 12, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
                        Queries
                    </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

PatientsOverviewScreen.navigationOptions = navData => {
    return {
        headerTitle: 'My Health',
        headerRight:
            () => 
            <TouchableHighlight 
                onPress={() => navData.navigation.toggleDrawer()}
                style={{margin: 10, height: 50, width: 50}}
                activeOpacity='0'>
                <LogoTitle
                    style={[{ color: 'blue'}]}
                    size={15}
                />
            </TouchableHighlight>,
        headerLeft: () => 
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#f5f5f5', marginLeft: 10 }}>
            <TouchableHighlight
            activeOpacity={1}
            underlayColor="white"
            style={{ borderRadius: 25 }}
            onPress={() => {
                // if (auth.currentUser && userId) {
                // navigation.navigate('Profile');
                // } else {
                navData.navigation.navigate('DoctorHome');
                //}
            }}
            >
            <View
                style={{
                    borderRadius: 50
                }}
            >
                <Icon name="user" size={30} />
            </View>
            </TouchableHighlight>
        </View>,
    }
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawer: {
        height: '100%',
        width: '100%',
        color: 'grey'
    },
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
})

export default PatientsOverviewScreen;