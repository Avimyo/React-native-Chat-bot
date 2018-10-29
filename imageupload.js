//screen to upload the image for the backgroundimport { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,Alert
	,ActivityIndicator/*processing indicator*/,Button } from 'react-native';
	import {Container,Content,Left}from 'native-base'
	import ImagePicker from 'react-native-customized-image-picker';

	import Header from './header';
	export default class imageupload extends React.Component {
		render() {
			return (
				<Container>
				<Text style={styles.heading}>Uploader</Text>
				<Header/>
				<View 
				style={{position:'absolute',
				top:300,height:30,width:120,left:115,
				backgroundColor:'#243447',borderRadius:5}}>
				<TouchableOpacity   >
				<Text style={{fontSize:20,color:'white',textAlign:'center'}}>Select Image</Text>
				</TouchableOpacity>
				</View>
				</Container>
				);
		}
			chooser(){
			Alert.alert(
				'Pick Image:',
				[
			{text: 'Pick from camera',},
          {text: 'Pick from Gallery',},
          ],
          { cancelable: false }
          )
	}
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


		}
	});