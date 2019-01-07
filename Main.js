import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator}from 'react-navigation'
import {Icon ,Button,Container,Content,Left}from 'native-base'
import Homescreen from './Homescreen';
import imageupload from './imageupload';
import Header from './Header';

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
  });