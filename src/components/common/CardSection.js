import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
	//Allow style override if props.style exists
	return (
		<View style={[styles.containerStyle, props.style]}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		padding: 5,
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
};

export { CardSection };
