import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { LinearGradient } from 'expo';

export default class Head extends React.Component {
	render() {
		return (
			<View>
			<View style={{position:'absolute',
			top:0,
			right:0,
			left:0,
			height:25, 
			zIndex:50,
			backgroundColor:'black'

		}}/>
	 <LinearGradient
		  colors={['#da1c5c','#0b172a']}
		  start={[0,0]} 
		  end={[1, 0]}
          style={{
			position: 'absolute',
			
            left: 0,
            right: 0,
            top: 25,
            height: 50,
          }}
        />
	</View>

	);
}
}
