import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Home, Signup, Profile } from './src/Screens';
import { decode, encode } from 'base-64';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { firebase } from './src/firebase/config';
import { Ionicons } from '@expo/vector-icons';

if (!global.btoa) {
	global.btoa = encode;
}
if (!global.atob) {
	global.atob = decode;
}

//create the stack navigator for homescreen, login, and signup
const Stack = createStackNavigator();

//create tab navigator for the homescreen
const tab = createBottomTabNavigator();

//where we can add more screens to the landing page
const HomeTabs = (props) => {
	//these vars are to avoid the yellow warning about inline functions
	//for the tab.screens
	const homeComp = () => <Home {...props} />;
	const homeOpt = {
		tabBarIcon: (props) => (
			<Ionicons name='ios-home-outline' size={22} color={props.color} />
		),
	};
	const profComp = () => <Profile {...props} />;
	const profOpt = {
		tabBarIcon: (props) => (
			<Ionicons name='car-sport-outline' size={22} color={props.color} />
		),
	};

	return (
		<tab.Navigator
			tabBarOptions={{
				activeTintColor: '#DB2B39',
				activeBackgroundColor: '#222831',
				inactiveBackgroundColor: '#222831',
				inactiveTintColor: 'white',
				style: { backgroundColor: '#222831' },
				labelStyle: { fontSize: 14 },
			}}
		>
			<tab.Screen name='Home' component={homeComp} options={homeOpt} />
			<tab.Screen name='Profile' component={profComp} options={profOpt} />
		</tab.Navigator>
	);
};

export default function App() {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);

	useEffect(() => {
		const usersRef = firebase.firestore().collection('users');
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				usersRef
					.doc(user.uid)
					.get()
					.then((document) => {
						const userData = document.data();
						setLoading(false);
						setUser(userData);
					})
					.catch((error) => {
						alert(error);
					});
			} else {
				setLoading(false);
			}
		});
	}, []);
	//remove header from screens
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{user ? (
					<>
						<Stack.Screen name='HomeTabs'>
							{(props) => <HomeTabs {...props} extraData={user} />}
						</Stack.Screen>
						<Stack.Screen name='Login' component={Login} />
						<Stack.Screen name='Signup' component={Signup} />
					</>
				) : (
					<>
						<Stack.Screen name='Login' component={Login} />
						<Stack.Screen name='Signup' component={Signup} />
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
