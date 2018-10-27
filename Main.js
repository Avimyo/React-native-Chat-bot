<<<<<<< HEAD
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createDrawerNavigator}from 'react-navigation'
import {Icon ,Button,Container,Content,Left}from 'native-base'
import Homescreen from './Homescreen';
import imageupload from './imageupload';
import Header from './header';

export default class App extends React.Component {
  render() {
    return (
      <Container>
      <Myapp />
      <Header/>

      </Container>
      
      );
    }
  }
  const Myapp=createDrawerNavigator({
    Home:{
      screen: Homescreen
    },
    Uploader:{
      screen:imageupload
    }
  })

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
=======
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createDrawerNavigator}from 'react-navigation'
import {Icon ,Button,Container,Content,Left}from 'native-base'
import Homescreen from './Homescreen';
import imageupload from './imageupload';
import Header from './header';

export default class App extends React.Component {
  render() {
    return (
      <Container>
      <Myapp />
      <Header/>

      </Container>
      
      );
    }
  }
  const Myapp=createDrawerNavigator({
    Home:{
      screen: Homescreen
    },
    Uploader:{
      screen:imageupload
    }
  })

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
>>>>>>> fd4da2d53329adcb57b8d5543dbd99247e3832fe
  });