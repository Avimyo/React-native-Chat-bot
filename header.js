<<<<<<< HEAD
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Icon ,Button,Container,Content,Left}from 'native-base'
export default class Header extends React.Component {
	render() {
		return (
			<View>
			<View style={{position:'absolute',
			top:0,
			right:0,
			left:0,
			height:25, 
			zIndex:-50,
			backgroundColor:'black'

		}}/>
				
		<View style={{position:'absolute',
		top:25,
		right:0,
		left:0,
		height:50, 
		zIndex:-100,
		backgroundColor:'lightskyblue'

	}}/>
	</View>

	);
}
}
=======
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Icon ,Button,Container,Content,Left}from 'native-base'
export default class Header extends React.Component {
	render() {
		return (

			<View style={{position:'absolute',
			 top:0,
			 right:0,
			 left:0,
			 height:50, 
			 zIndex:-100,
			 backgroundColor:'lightskyblue'

			}}>

			</View>
			);
		}
	}
>>>>>>> fd4da2d53329adcb57b8d5543dbd99247e3832fe
