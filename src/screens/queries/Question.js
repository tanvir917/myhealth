import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Question = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'North America', value: 'na'},
        {label: 'United States', value: 'usa', parent: 'na'},
        {label: 'Canada', value: 'canada', parent: 'na'},
      
        {label: 'Europe', value: 'eu'},
        {label: 'Norway', value: 'norway', parent: 'eu'},
        {label: 'Belgium', value: 'belgium', parent: 'eu'},
      ])
    return (
        <View style={{margin: 10}}>
            <View style={{marginBottom: 10, marginTop: 10,}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', }}>1. How are you</Text>
            </View>
            <View style={{zIndex: 1000}}>
                <DropDownPicker
                    searchable={true}
                    // labelStyle={{
                    //     fontWeight: "bold",
                    // }}
                    dropDownContainerStyle={{
                        backgroundColor: "#dfdfdf",
                        // height: 200,
                        // backfaceVisibility: 0,
                        // position: 'absolute',
                        // minHeight:215,
                        // flexDirection:'row',
                        // zIndex:100,
                    }}
                    // maxHeight={200}
                    zIndex={100}
                    bottomOffset={300}
                    dropDownDirection="AUTO"
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
            </View>
        </View>
  );
}

export default Question;
