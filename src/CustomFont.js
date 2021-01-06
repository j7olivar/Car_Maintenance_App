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

The returned Text component will have the font attribute appended to the
styling object, so that the font will hold precedence.
The app's global font can be changed using this component without needing to go
thru the code base and manually change the font. Other global properties can
also be set thru this component.

*/
