
//main screen of the appimport React from 'react';
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,ActivityIndicator/*processing indicator*/,Button } from 'react-native';
import Header from './header';
import imageupload from './imageupload';
    
export default class Homescreen extends React.Component {
  constructor(props){
   super(props);

   this.state = {
      image:null
   }
}
	render() {
    let { image } = this.state;
		return (
			<View>
			<Text style={styles.heading}>Home screen</Text>
      {image &&
          <Image source={{ uri: image }} style={styles.image} />}

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
            image:{
        width:200,
        height:200,
        position:'absolute',
        borderRadius:100,
        top:150,
        left:70

      },
      });