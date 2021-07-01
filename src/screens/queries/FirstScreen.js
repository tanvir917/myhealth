import React, { Component, Fragment } from 'react';
import { View, Text, Button, TouchableOpacity, FlatList, Image, ScrollView, StyleSheet } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { symtomps } from '../../../data'
import * as queryActions from '../../actionCreators/queries'

export default class FirstScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [
        
      ],
      array: []
    }
  }
  
  render() {
      console.log('================se items====================');
      console.log(this.state.selectedItems);
      console.log(this.state.array);
      console.log('====================================');
  return (
    <View>
        <Fragment>
          {/* Multi */}
          <View style={{margin: 15}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 5}}>What problem are you facing the most?</Text>
                <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 5, color: 'blue'}}>Select your symptoms here</Text>
            </View>
          <SearchableDropdown
            multi={true}
            selectedItems={this.state.selectedItems}
            onItemSelect={(item) => {
              const items = this.state.selectedItems;
              const arrayItem = this.state.array;
              items.push(item)
              arrayItem.push(item.id)
              this.setState({ selectedItems: items });
              this.setState({ array: arrayItem })
            }}
            containerStyle={{ padding: 5 }}
            onRemoveItem={(item, index) => {
              const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
              const arrayItem = this.state.array.filter((sitem) => sitem !== item.id)
              this.setState({ selectedItems: items });
              this.setState({ array: arrayItem })
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={symtomps}
            chip={true}
            resetValue={false}
            textInputProps={
              {
                placeholder: "Search your symptoms",
                underlineColorAndroid: "transparent",
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                },
                onTextChange: () => {}
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
          />
          {/* Single */}
          {/* <SearchableDropdown
            onItemSelect={(item) => {
              const items = this.state.selectedItems;
              items.push(item)
              this.setState({ selectedItems: items });
            }}
            containerStyle={{ padding: 5 }}
            onRemoveItem={(item, index) => {
              const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
              this.setState({ selectedItems: items });
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={items}
            defaultIndex={2}
            resetValue={false}
            textInputProps={
              {
                placeholder: "placeholder",
                underlineColorAndroid: "transparent",
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                },
                onTextChange: text => alert(text)
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
        /> */}
      </Fragment>
      <View>
        <Button title='Submit' onPress={
          () => {
            this.props.navigation.navigate('ResultScreen', {
            array: this.state.array
          })
          }
        }/>
      </View>
    </View>
  );
  }
}
