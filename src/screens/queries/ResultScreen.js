import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as queryActions from '../../actionCreators/queries'

const ResultScreen = (props) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const symptoms = props.navigation.getParam('array');
    console.log('symptoms',symptoms);
    const dispatch = useDispatch();
    const queries = useSelector(state => state.queries.myQueries);
    console.log('========================qq============');
    console.log(queries && queries["precautions to take"]);
    console.log('====================================');

    useEffect(() => {}, [queries])

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            await dispatch(queryActions.fetchMyQueries(symptoms))
            setIsLoading(false);
        })();
    }, []);

    // useEffect(async () => {
    //     setIsLoading(true);
    //     await dispatch(queryActions.fetchMyQueries(symptoms))
    //     setIsLoading(false);
    // }, [])

  return (
    <View>
        { !isLoading ? (
            <View style={{margin: 15}}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 5}}>Your Problem is: </Text>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'blue', fontSize:16}}>{queries && queries["precautions to take"][0]}</Text>
                    </View>
                </View>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 5, marginTop: 5}}>
                    You Have Precautions to take is </Text>
                <View>
                    <Text>1. {queries && queries["precautions to take"][1]}</Text>
                </View>
                <View>
                    <Text>2. {queries && queries["precautions to take"][2]}</Text>
                </View>
                <View>
                    <Text>3. {queries && queries["precautions to take"][3]}</Text>
                </View>
                <View>
                    <Text>4. {queries && queries["precautions to take"][4]}</Text>
                </View>
            </View>
            
        ) : (
            <ActivityIndicator size="large"/>
        )}
    </View>
  );
}

export default ResultScreen;
