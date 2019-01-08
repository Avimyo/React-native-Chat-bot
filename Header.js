import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

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
		backgroundColor:'#243447'

	}}/>
	</View>

	);
}
}
