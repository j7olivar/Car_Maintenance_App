import React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';

export default function CustomFont(props) {
	const [fontsLoaded] = useFonts({
		'Staatliches-Regular': require('./assets/fonts/Staatliches-Regular.ttf'),
	});

	return (
		fontsLoaded && (
			<Text style={{ fontFamily: 'Staatliches-Regular' }}>
				{props.children}
			</Text>
		)
	);
}
