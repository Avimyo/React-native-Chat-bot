
//main screen of the appimport React from 'react';
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,ActivityIndicator/*processing indicator*/,Button,TextInput,KeyboardAvoidingView } from 'react-native';
import Head from './Header';
import imageupload from './imageupload';
import CacheImage from './cacheimg';
import { GiftedChat } from 'react-native-gifted-chat'
    
export default class Homescreen extends React.Component {
   constructor(props) {
    super(props);
    let firstMsg = {
      _id: 1,
      text: "Hello",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "Abiral",
        avatar: "http://www.coderschool.vn/system/instructors/avatar_images/000/000/001/original/kunal.jpg?1531064314"
      }
    }

    this.state = {
      messages: [firstMsg]
    }
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

	render() {
		return (
       <View style={styles.container}>
    <Head/>
  
      <KeyboardAvoidingView style={styles.footer} behavior="padding" enabled>
      <TextInput
          style={styles.textInput}
          placeholder="Type a message..."
          placeholderTextColor='#ddd'
          underlineColorAndroid='transparent'
          /*onChangeText={this.onChangeText}
          value={this.state.name}*/
        ></TextInput></KeyboardAvoidingView>
        </View>
			);
	}
}
const styles = StyleSheet.create({
          container: {
            flex: 1,

          },
          heading:{
          	left:105,
          	position:'absolute',
          	top:100,
          	fontSize:20,


          },
          textInput:{
            alignSelf:'stretch',
            color:'#ddd',
            height:50,
            backgroundColor: '#243447',
            borderTopWidth:2,
            borderTopColor: '#ddd',
            zIndex:+100,
             
          },
          footer:{
                position:'absolute',
               bottom:0,
             right:0,
            left:0,
          },
     
      });