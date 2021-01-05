import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config';

export default function Signup({ navigation }) {
	//data we are saving
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [year, setYear] = useState('');
	const [make, setMake] = useState('');
	const [model, setModel] = useState('');

	//login button on the signup page
	const onLoginPress = () => {
		navigation.navigate('Login');
	};

	/**
	 * first create the user with the given email and password. We then save the uid
	 * and save the data. We then save the data in a doc in firebase under the users
	 * collection which has all the documents. Each user gets document.
	 */
	const onSignupPress = () => {
		if (password != confirmPassword) {
			alert("Passwords don't match :(");
			return;
		}
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((response) => {
				const uid = response.user.uid;
				const userData = {
					id: uid,
					email,
					firstName,
					lastName,
					year,
					make,
					model,
				};

				//writing to cars collections for the user
				const usersCarRef = firebase.firestore().collection('cars');
				//did id attribute like this so they can be unique (worls for users
				// who have multiples of the same car )
				usersCarRef
					.doc(uid)
					.set({
						cars: firebase.firestore.FieldValue.arrayUnion({
							id:
								year +
								make +
								model +
								Math.floor(Math.random() * 100000000).toString(),
							owner: uid,
							year,
							make,
							model,
							lastOilChange: 0,
							lastAirFilter: 0,
							lastBattery: 0,
							lastBrakeFluid: 0,
							lastSparkPlugs: 0,
							lastPowerSteering: 0,
							lastCoolant: 0,
						}),
					})
					.then(() => {
						//console.log('did it')
					});

				const usersRef = firebase.firestore().collection('users');
				usersRef
					.doc(uid)
					.set(userData)
					.then(() => {
						navigation.navigate('HomeTabs', { user: userData });
						//this is to prevent the user from going back once landing on the home screen
						navigation.reset({ index: 0, routes: [{ name: 'HomeTabs' }] });
					})
					.catch((error) => {
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
				<Image
					style={styles.logo}
					source={require('../../../assets/icon.png')}
				/>
				<Text style={styles.profileInfoHeader}> Personal Information </Text>
				<TextInput
					style={styles.input}
					placeholder='First Name'
					placeholderTextColor='#aaaaaa'
					onChangeText={(text) => setFirstName(text)}
					value={firstName}
					autoCapitalize='none'
				/>
				<TextInput
					style={styles.input}
					placeholder='Last Name'
					placeholderTextColor='#aaaaaa'
					onChangeText={(text) => setLastName(text)}
					value={lastName}
					autoCapitalize='none'
				/>
				<TextInput
					style={styles.input}
					placeholder='E-mail'
					placeholderTextColor='#aaaaaa'
					onChangeText={(text) => setEmail(text)}
					value={email}
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
				<TextInput
					style={styles.input}
					placeholderTextColor='#aaaaaa'
					secureTextEntry
					placeholder='Confirm Password'
					onChangeText={(text) => setConfirmPassword(text)}
					value={confirmPassword}
					underlineColorAndroid='transparent'
					autoCapitalize='none'
				/>
				<Text style={styles.carInfoHeader}> Car Information </Text>
				<TextInput
					style={styles.input}
					placeholder='Year'
					placeholderTextColor='#aaaaaa'
					onChangeText={(text) => setYear(text)}
					value={year}
					autoCapitalize='none'
					keyboardType={'number-pad'}
				/>
				<TextInput
					style={styles.input}
					placeholder='Make (e.g Ford)'
					placeholderTextColor='#aaaaaa'
					onChangeText={(text) => setMake(text)}
					value={make}
					autoCapitalize='none'
				/>
				<TextInput
					style={styles.input}
					placeholder='Model (e.g F150)'
					placeholderTextColor='#aaaaaa'
					onChangeText={(text) => setModel(text)}
					value={model}
					autoCapitalize='none'
				/>
				<TouchableOpacity style={styles.button} onPress={() => onSignupPress()}>
					<Text style={styles.buttonTitle}>Create Account</Text>
				</TouchableOpacity>
				<View style={styles.footerView}>
					<Text style={styles.footerText}>
						Already got an account?
						<Text onPress={onLoginPress} style={styles.footerLink}>
							{' '}
							Log in
						</Text>
					</Text>
				</View>
			</KeyboardAwareScrollView>
		</View>
	);
}
