<<<<<<< HEAD
//screen to upload the image for the backgroundimport { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Icon ,Button,Container,Content,Left}from 'native-base'
import Header from './header';
export default class imageupload extends React.Component {
	render() {
		return (
			<Container>
			<Text style={{left:50,position:'absolute',top:200}}>Image Uploader</Text>
			 <Header/>
			</Container>
			);
		}
=======
//screen to upload the image for the backgroundimport { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Icon ,Button,Container,Content,Left}from 'native-base'
import Header from './header';
export default class imageupload extends React.Component {
	render() {
		return (
			<Container>
			<Text>Uploader</Text>
			 <Header/>
			</Container>
			);
		}
>>>>>>> fd4da2d53329adcb57b8d5543dbd99247e3832fe
	}