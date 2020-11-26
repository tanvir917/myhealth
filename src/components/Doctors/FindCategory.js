import React from 'react';
import { ScrollView, View, Text, StyleSheet, Button, Image, Platform } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-ionicons';
import Card from '../UI/Card';

const FindCategory=props=>{

    if(Platform.OS==='android' && Platform.Version >=21){
        TouchableCmp=TouchableNativeFeedback;
    }
    
return(
    <ScrollView horizontal={true}>
    <View>
        <Card>
       
           <TouchableCmp>
               <View>
                  
                   <View>
                   <Text>{props.title}</Text>

                   </View>
               </View>
           </TouchableCmp>
       
         </Card>
   </View>
    </ScrollView>
)

}

export default FindCategory;