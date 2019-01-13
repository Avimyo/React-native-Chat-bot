// //screen to upload the image for the backgroundimport { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import { Button, Image, View,StyleSheet,Text,TouchableOpacity,Alert,AsyncStorage } from 'react-native';
import { ImagePicker,Permissions } from 'expo';
import Head from './Header';
import { LinearGradient } from 'expo';
import CacheImage from './cacheimg';
export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  
  };

  render() {
    let { image } = this.state;

    return (
      <View  style={styles.container}>
      <Text style={styles.heading}>Uploader</Text>				
      <Head/>

    {image &&
          <Image source={{ uri: image }} style={styles.image} />}
       
			 <TouchableOpacity style={styles.buttonbackground}  onPress={this._pickImage}><LinearGradient
		  colors={['#da1c5c','#0b172a']}
		  start={[0,0]} 
		  end={[1, 0]}
          style={{
						height:35,
						width:140,
						borderRadius:30,
						justifyContent: 'center',
          }}>
					
        <Text style={{fontSize:20,color:'white',textAlign:'center'}} >Select Image </Text>
				</LinearGradient></TouchableOpacity>
       
      </View>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
    
}
const styles = StyleSheet.create({
			container: {
			 flex: 1, 

			},
			heading:{
				left:125,
				position:'absolute',
				top:100,
				fontSize:20,


			},
			buttonbackground:{
				position:'absolute',
				top:360,
				height:35,
				width:140,
				left:105,
			
			},
		
			image:{
				width:200,
				height:200,
				position:'absolute',
				borderRadius:100,
				top:150,
				left:70

			}
			
		});