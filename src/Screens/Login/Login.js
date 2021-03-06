import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config';
import CustomFont from '../../CustomFont.js';

export default function Login({ navigation }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onSignupPress = () => {
		navigation.navigate('Signup');
	};

	const onLoginPress = () => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((response) => {
				const uid = response.user.uid;
				const usersRef = firebase.firestore().collection('users');
				usersRef
					.doc(uid)
					.get()
					.then((firestoreDoc) => {
						if (!firestoreDoc.exists) {
							alert('User does not exist');
							return;
						}
						const user = firestoreDoc.data();
						navigation.navigate('HomeTabs', { user });
						//this is to prevent the user from going back once logging in
						navigation.reset({ index: 0, routes: [{ name: 'HomeTabs' }] });
					})
					.catch((error) => {
						console.log('error in logging in');
						alert(error);
					});
			})
			.catch((error) => {
				alert(error);
			});
	};

	return (
		<View style={styles.container}>
			<KeyboardAwareScrollView
				style={{ flex: 1, width: '100%' }}
				keyboardShouldPersistTaps='always'
			>
				<CustomFont styling={styles.title}>ServiceMate</CustomFont>
				<Image
					style={styles.logo}
					source={require('../../../assets/icon.png')}
				/>
				<TextInput
					style={styles.input}
					placeholder='E-mail'
					placeholderTextColor='#aaaaaa'
					onChangeText={(text) => setEmail(text)}
					value={email}
					underlineColorAndroid='transparent'
					autoCapitalize='none'
				/>
				<TextInput
					style={styles.input}
					placeholderTextColor='#aaaaaa'
					secureTextEntry
					placeholder='Password'
					onChangeText={(text) => setPassword(text)}
					value={password}
					underlineColorAndroid='transparent'
					autoCapitalize='none'
				/>
				<TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
					<CustomFont styling={styles.buttonTitle}>Log in</CustomFont>
				</TouchableOpacity>
				<View style={styles.footerView}>
					<CustomFont styling={styles.footerText}>
						Don't have an account?{' '}
						<Text onPress={onSignupPress} style={styles.footerLink}>
							Sign up
						</Text>
					</CustomFont>
				</View>
			</KeyboardAwareScrollView>
		</View>
	);
}
