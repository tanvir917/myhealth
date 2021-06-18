import React from 'react';
import { ScrollView, View, 
    Text, StyleSheet, Button, 
    Image, Platform, TouchableNativeFeedback,
    TouchableOpacity } from 'react-native';
import Card from '../UI/Card';

const FindCategory=props=>{
    let TouchableCmp = TouchableOpacity;

    if(Platform.OS==='android' && Platform.Version >=21){
        TouchableCmp=TouchableNativeFeedback;
    }
    
return(
    <ScrollView horizontal={true}>
    <View style={{marginBottom: 15}}> 
        <Card style={{height: 50, margin: 7, width: 120,}}>
           <TouchableCmp
            onPress={() => {
                onBtnPress(item.id)
            }}
           >
               <View style={styles.card}>
                    <View style={styles.imageContainer} >
                            <Image 
                                style={styles.image} 
                                source={{uri: props.image}} 
                            />
                    </View>
                    <View style={{justifyContent: 'center'}}>
                        <View>
                                <Text>{props.title}</Text>
                        </View>
                    </View>
               </View>
           </TouchableCmp>
       
         </Card>
   </View>
    </ScrollView>
)

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

export default FindCategory;