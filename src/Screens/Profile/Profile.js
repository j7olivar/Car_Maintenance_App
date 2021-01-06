import { Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { firebase } from './../../firebase/config';
import { useEffect } from 'react/cjs/react.development';
import CustomFont from '../../CustomFont.js';

export default function Profile(props) {
	//var to hold the name of the user that will be displayed on top of profile page
	const [name, setName] = useState('');

	const getName = async () => {
		let user = firebase.auth().currentUser.uid;
		try {
			const name1 = await firebase
				.firestore()
				.collection('users')
				.doc(user)
				.get();
			setName(name1.data().firstName + ' ' + name1.data().lastName);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getName();
	}, []);

	//function behind logout button
	const onLogoutPress = () => {
		console.log('pressed logout');
		firebase
			.auth()
			.signOut()
			.then(() => {
				props.navigation.navigate('Login');
				//this to avoid the user from going back to the profile page after logging out
				props.navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
			})
			.catch((error) => {
				alert(error);
			});
	};

	return (
		<View style={styles.container}>
			<CustomFont styling={styles.nameStyle}>{name}</CustomFont>

			<View style={{ paddingTop: 50 }}>
				<TouchableOpacity style={styles.referButton}>
					<CustomFont styling={styles.buttonTitle}> Share CarMate </CustomFont>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => onLogoutPress()}
					style={styles.logoutButton}
				>
					<CustomFont styling={styles.buttonTitle}>Logout</CustomFont>
				</TouchableOpacity>
			</View>
		</View>
	);
}
