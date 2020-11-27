import React, { useEffect, useState, useCallback } from 'react';
import { View, 
    Text, Image, FlatList, Button, Platform, ActivityIndicator, 
    StyleSheet, TouchableHighlight, TouchableOpacity, 
    TouchableNativeFeedback } from 'react-native';
//import { SearchBar } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

//import menusAction from '../../actionCreators/menus';
import MenuItem from '../../components/Patients/MenuItem';
import HeaderButton from '../../components/UI/HeaderButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as firebase from 'firebase'

let TouchableCmp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    
const PatientsOverviewScreen = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [value, setValue] = useState();
    
    const [error, setError] = useState();
    const products = useSelector(state => state.menus.availableProducts);
    const userName = useSelector(state => state.authM.userId);
    //console.log(userName);
    //const [arrayholder, setArrayholder] = useState(products);
    const dispatch = useDispatch();
    
    //const productF = products;
    const loadProducts =
        {
            title: 'Find Doctor',
            imageUrl: 'https://picsum.photos/id/237/200/300'
        }
        const title = 'Find Doctor'
        const imageUrl = 'https://picsum.photos/id/237/200/300'
    // const loadProducts = useCallback(async () => {
    //     console.log('Load Products');
    //     setError(null);
    //     setIsRefreshing(true);
    //     //setIsLoading(true);
    //     try {
    //         await dispatch(menusAction.fetchMenus());
    //     } catch (err) {
    //         setError(err.message);
    //     }
    //     setIsRefreshing(false);
    //     //setIsLoading(false);
    // }, [dispatch, setError]);

    /*useEffect(() => {
        const willFocusSub = props.navigation.addListener('willFocus', loadProducts);

        return () => {
            willFocusSub.remove();
        }
    }, [loadProducts]);*/

    //initially takes effects
    // useEffect(() => {
    //     setIsLoading(true);
    //     loadProducts().then(() => {
    //         setIsLoading(false);
    //     });
    // }, [dispatch, loadProducts]);

    const selectItemHandler = (id, title) => {
        props.navigation.navigate('ProductDetail', { 
            productId: id ,
            productTitle: title
        });
    };
/*
    const searchFilterFunction = text => {
        // setState({
        //   value: text,
        // });
        setValue(text);
    
        const newData = productF.filter(item => {
          const itemData = item.title.toUpperCase();
          const textData = text.toUpperCase();
    
          return itemData.indexOf(textData) > -1;
        });
        // setState({
        //   data: newData,
        // });
        //arrayholder = newData;
        setArrayholder(newData);
        // console.log('arrayholder:');
        // console.log(arrayholder);
      };*/

    // if (error) {
    //     return (
    //         <View style={styles.centered}>
    //             <Text>An error occurred!</Text>
    //             <Button 
    //                 title="Try again" 
    //                 onPress={loadProducts} 
    //                 color={Colors.primary} 
    //             />
    //         </View>
    //     )
    // }

    // if (isLoading) {
    //     return (
    //         <View style={styles.centered}>
    //             <ActivityIndicator size='large' color={Colors.primary} />
    //         </View>
    //     )
    // }

    /*if (!isLoading && products.length === 0) {
        return (
            <View style={styles.centered}>
                <Text>No products found. Maybe start adding some!</Text>
            </View>
        )
    }*/

    
    return (
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
    );
};

class LogoTitle extends React.Component {
    render() {
      return (
        <View style={styles.drawer}>
            <Image
                source={require('./icons8-menu-24.png')}
                style={{ width: 30, height: 30, margin: 10, padding: 10 }}
            />
        </View>
      );
    }
  }

PatientsOverviewScreen.navigationOptions = navData => {
    console.log('====================================');
    console.log(navData);
    console.log('====================================');
    return {
        headerTitle: 'My Health',
        headerRight:
            () => 
            <TouchableHighlight 
                onPress={() => navData.navigation.toggleDrawer()}
                activeOpacity='0'>
            <LogoTitle
                style={[{ color: 'blue', marginRight: 12 }]}
                size={15}
            /></TouchableHighlight>,
        headerLeft: () => {},
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
    }
})

export default PatientsOverviewScreen;