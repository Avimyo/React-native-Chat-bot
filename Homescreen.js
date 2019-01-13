
//main screen of the appimport React from 'react';
import React from 'react';
import { StyleSheet,Alert, Text, View,Image,TouchableOpacity,ActivityIndicator/*processing indicator*/,Button,TextInput,KeyboardAvoidingView } from 'react-native';
import Head from './Header';
import imageupload from './imageupload';
import CacheImage from './cacheimg';
import {Icon} from 'react-native-elements';
import { GiftedChat,InputToolbar } from 'react-native-gifted-chat'
    
export default class Homescreen extends React.Component {
    InputToolbar (props) {
     //Add the extra styles via containerStyle
    return <InputToolbar {...props} containerStyle={{borderTopWidth: 2, borderTopColor: '#da1c5c',borderBottomColor: '#da1c5c'}} />
  }
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
           renderInputToolbar={this.InputToolbar} 
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
          <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={5}/>
  
       
    

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
            position:'absolute',
            color:'#ddd',
            height:50,
            width:500,
            backgroundColor: '#243447',
            // borderTopWidth:2,
            borderTopColor: '#ddd',
            zIndex:100,
             
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