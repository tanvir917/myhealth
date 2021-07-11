import React, { useEffect, useState } from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, TouchableHighlight,
    Text, Dimensions, Modal, SafeAreaView, Button, Alert, PermissionsAndroid } from 'react-native';
import { database } from '../../firebase';
import FastImage from 'react-native-fast-image';
import * as ImagePicker from "react-native-image-picker"
import LogoTitle from '../LogoTitle';

let { height: screenHeight, width: screenWidth} = Dimensions.get('window');

const ReportStorage = () => {
    const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/jingalalatech/upload'
    const [photo, setPhoto] = useState();
    const [ isLoading, setIsLoading ] = useState(false);
    const [ done, setDone ] = useState(false);
    const [ selectedImage, setSelectedImage] = useState("")
    const [imageuri, setImageuri] = useState('');
    const [
        modalVisibleStatus, setModalVisibleStatus
    ] = useState(false);
    const [reports, setReports] = useState();

    const userId = 'bKg3W2JiiOXYKEiVxBYBZnWSyST2';
    //const userId = useSelector(state => state.auth.userId)

    const showModalFunction = (visible, imageURL) => {
        //handler to handle the click on image of Grid
        //and close button on modal
        setImageuri(imageURL);
        setModalVisibleStatus(visible);
      };

    useEffect(() => {
        database
            .ref('users').child(userId).once('value')
            .then((snapshot) => {
                const report = snapshot.val().report;
                const loadedReport = [];
                for(const key in report) {
                    loadedReport.push(
                        {
                            id: key,
                            image: report[key].image
                        }
                    )
                }
                setReports(loadedReport)
                console.log('reports',reports);
            })
    },[done])

    const requestCameraPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "App Camera Permission",
            message:"App needs access to your camera ",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Camera permission given");
          let options = {
            title: 'Select Image',
            customButtons: [
              {
                name: 'customOptionKey',
                title: 'Choose Photo from Custom Option'
              },
            ],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
        ImagePicker.launchCamera(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            const source = { uri: response.uri };
            console.log('response', JSON.stringify(response));
          }
        });
        } else {
          console.log("Camera permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    };

    const openImagePickerAsync = async () => {
      setIsLoading(true);
      await ImagePickerAsync()
      setIsLoading(false)
      setDone(!done)
    }

    let ImagePickerAsync = async () => {
        let options = {
            title: 'Select Photo',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
            } else {
                const uri = response.assets[0].uri;
                const type = response.assets[0].type;
                const name = response.assets[0].fileName;
                const source = {
                    uri,
                    type,
                    name,
                }
                const data = new FormData()
                data.append('file', source)
                data.append('upload_preset', 'fb0enbnv')
                data.append("cloud_name", "jingalalatech")
                fetch(CLOUDINARY_URL, {
                    method: "post",
                    body: data
                }).then(async r => {
                    let data = await r.json()
                    console.log('data', data);
                    setPhoto(data.url);
                    console.log(photo);
                    database.ref(`users/${userId}`).child('report').push({
                        image: data.url
                    })
                }).catch(err => console.log(err))
            }       
        })
    };

    useEffect(() => {},[reports])
    
    const addImages = () => {
        database.ref(`users/${userId}`).child('report').push({
            image: "https://res.cloudinary.com/jingalalatech/image/upload/v1625457392/myhealth/m8_lupvwk.jpg"
        })
      };

    const renderImages = item => {
        return(
            <View>
                <FastImage
                    source={{uri: item.item.image}}
                    style={{
                        height: screenHeight/4,
                        width: screenWidth/2
                    }}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
      {modalVisibleStatus ? (
        <Modal
          transparent={false}
          animationType={'fade'}
          visible={modalVisibleStatus}
          onRequestClose={() => {
            showModalFunction(!modalVisibleStatus, '');
          }}>
          <View style={styles.modelStyle}>
            <FastImage
              style={styles.fullImageStyle}
              source={{uri: imageuri}}
              resizeMode={
                FastImage.resizeMode.contain
              }
            />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.closeButtonStyle}
              onPress={() => {
                showModalFunction(!modalVisibleStatus, '');
              }}>
              <FastImage
                source={{
                  uri:
                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/close.png',
                }}
                style={{width: 35, height: 35}}
              />
            </TouchableOpacity>
          </View>
        </Modal>
      ) : (
        <View style={styles.container}>
          <Text style={styles.titleStyle}>
            Your Previous Reports
          </Text>
          {isLoading ? (
            <ActivityIndicator size='small'/>
          ) : (
            <Button title='Add more reports' onPress={openImagePickerAsync}/>
          )}
          <FlatList
            data={reports}
            renderItem={({item}) => (
              <View style={styles.imageContainerStyle}>
                <TouchableOpacity
                  key={item.id}
                  style={{flex: 1}}
                  onPress={() => {
                    showModalFunction(true, item.image);
                  }}>
                  <FastImage
                    style={styles.imageStyle}
                    source={{
                      uri: item.image,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
            //Setting the number of column
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </SafeAreaView>
    );
}

ReportStorage.navigationOptions = (navData) => {
  return {
      headerTitle: 'Report Storage',
      headerRight:
        () => 
        <TouchableHighlight 
            onPress={() => navData.navigation.toggleDrawer()}
            style={{margin: 10, height: 50, width: 50}}
            activeOpacity={.2} >
        <LogoTitle
            style={[{ color: 'blue' }]}
            size={15}
        /></TouchableHighlight>,
  };
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    titleStyle: {
      padding: 16,
      fontSize: 20,
      color: 'white',
      backgroundColor: 'green',
    },
    imageContainerStyle: {
      flex: 1,
      flexDirection: 'column',
      margin: 1,
    },
    imageStyle: {
      height: 120,
      width: '100%',
    },
    fullImageStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '98%',
      resizeMode: 'contain',
    },
    modelStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.4)',
    },
    closeButtonStyle: {
      width: 25,
      height: 25,
      top: 50,
      right: 20,
      position: 'absolute',
    },
  });

export default ReportStorage;
