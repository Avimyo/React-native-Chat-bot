
//main screen of the appimport React from 'react';
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity
 ,ActivityIndicator/*processing indicator*/,Button } from 'react-native';
import {Container,Content,Left}from 'native-base'
import Header from './header';
export default class Homescreen extends React.Component {
	render() {
		return (
			<Container>
			<Text style={styles.heading}>Home screen</Text>
			 <Header/>
			</Container>
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


          }
      });