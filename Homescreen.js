<<<<<<< HEAD
//main screen of the appimport React from 'react';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Icon ,Button,Container,Content,Left}from 'native-base'
import Header from './header';
export default class Homescreen extends React.Component {
	render() {
		return (
			<Container>
			<Text style={{left:50,position:'absolute',top:200}}>Homescreen</Text>
			 <Header/>
			</Container>
			);
	}
}
=======
//main screen of the appimport React from 'react';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Icon ,Button,Container,Content,Left}from 'native-base'
import Header from './header';
export default class Homescreen extends React.Component {
	render() {
		return (
			<Container>
			<Text>Homescreen</Text>
			 <Header/>
			</Container>
			);
	}
}
>>>>>>> fd4da2d53329adcb57b8d5543dbd99247e3832fe
