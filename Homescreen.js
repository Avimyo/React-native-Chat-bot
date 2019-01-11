
//main screen of the appimport React from 'react';
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,ActivityIndicator/*processing indicator*/,Button,TextInput,KeyboardAvoidingView } from 'react-native';
import Head from './Header';
import imageupload from './imageupload';
import CacheImage from './cacheimg';
import {Icon} from 'react-native-elements';
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
        avatar: "https://1.bp.blogspot.com/-FtLycA4WPq0/XDTEJGz4lCI/AAAAAAAAATc/D7P8iYsM2ykCR68uqrQyTeAlJ_zf5MdRACLcBGAs/s1600/Travmyo-logo2.png"
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
    <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
  
      <KeyboardAvoidingView style={styles.footer} behavior="padding" enabled>
      <TextInput
          style={styles.textInput}
          placeholder="Type a message..."
          placeholderTextColor='#ddd'
          underlineColorAndroid='transparent'
          /*onChangeText={this.onChangeText}
          value={this.state.name}*/
        ></TextInput>
          
<Icon
  reverse
  name='md-send'
  type='ionicon'
  size={10}
  color='#ddd'
  onPress={() => console.log('hello')} />
      </KeyboardAvoidingView>
       
    

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
          sendButton:{
            position:'absolute',
            bottom:20,
            right:10,
            zIndex:110,


          },
          footer:{
                position:'absolute',
               bottom:0,
             right:0,
            left:0,
          },
     
      });