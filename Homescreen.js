
//main screen of the appimport React from 'react';
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,ActivityIndicator/*processing indicator*/,Button } from 'react-native';
import Header from './header';
import imageupload from './imageupload';

export default class Homescreen extends React.Component {
	render() {

		return (
			<View>
			<Text style={styles.heading}>Home screen</Text>

			 <Header/>
			</View>
			);
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


          },
      });