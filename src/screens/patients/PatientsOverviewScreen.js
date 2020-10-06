import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, Button, Platform, ActivityIndicator, StyleSheet } from 'react-native';
//import { SearchBar } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

//import menusAction from '../../actionCreators/menus';
import MenuItem from '../../components/Patients/MenuItem';
import HeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Colors';

const PatientsOverviewScreen = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [value, setValue] = useState();
    
    const [error, setError] = useState();
    const products = useSelector(state => state.menus.availableProducts);
    //const [arrayholder, setArrayholder] = useState(products);
    console.log('====================================');
    console.log(products);
    console.log('====================================');
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

    if (error) {
        return (
            <View style={styles.centered}>
                <Text>An error occurred!</Text>
                <Button 
                    title="Try again" 
                    onPress={loadProducts} 
                    color={Colors.primary} 
                />
            </View>
        )
    }

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size='large' color={Colors.primary} />
            </View>
        )
    }

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
            renderItem={itemData => <MenuItem 
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                onViewDetail={() => {
                    props.navigation.navigate('ProductDetail', { 
                        productId: itemData.item.id ,
                        productTitle: itemData.item.title
                    });
                }}
                onAddToCart={() => {}}
            />} 
        />
    );
};

PatientsOverviewScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Hello User',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item  
                    title='Menu' 
                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} 
                    onPress= {() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item  
                    title='Cart' 
                    iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} 
                    onPress= {() => {
                        //navData.navigation.navigate('Cart')
                    }}
                />
            </HeaderButtons>)
    }
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default PatientsOverviewScreen;