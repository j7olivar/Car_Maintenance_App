import React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';

function CustomFont(props) {
	const [fontsLoaded] = useFonts({
		'Staatliches-Regular': require('../assets/fonts/Staatliches-Regular.ttf'),
	});

	return (
		fontsLoaded && (
			<Text
				style={[
					props.styling ? props.styling : {},
					{ fontFamily: props.font ? props.font : 'Staatliches-Regular' },
				]}
			>
				{props.children}
			</Text>
		)
	);
}

export default CustomFont;

/*

CustomFont component accepts:
1. font prop (string that is the FontFamily to use for the Text)
2. styling prop (object that is the normal styles we want to apply to Text)

The returned Text component will have the FontFamily attribute appended to the
OtherStyles object, so that the FontFamily will hold precedence

*/
