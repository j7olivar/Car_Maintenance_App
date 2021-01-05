import React, { useState } from 'react';
import {
	Text,
	View,
	FlatList,
	TouchableOpacity,
	Image,
	Modal,
} from 'react-native';
import styles from './styles';
import { firebase } from './../../firebase/config';
import { useEffect } from 'react/cjs/react.development';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import AddCar from './AddCar';

export default function Home(props) {
	//var to hold the name of the user that will be displayed on top of profile page
	const [name, setName] = useState('');
	const [cars, setCars] = useState([]);
	//use this to bring up the modal to add a new car
	const [isAddMode, setIsAddMode] = useState(false);
	const user = firebase.auth().currentUser.uid;

	//retrieves name and displays it on front homepage
	const getName = async () => {
		//let user = firebase.auth().currentUser.uid
		try {
			const name1 = await firebase
				.firestore()
				.collection('users')
				.doc(user)
				.get();
			setName(name1.data().firstName);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getName();
		//retrieve information from firstore and set it to our cars to display
		const usersRef = firebase.firestore().collection('cars');
		usersRef.doc(user).onSnapshot((docSnapshot) => {
			if (!docSnapshot.exists) {
				console.log('doc does not exist');
			} else {
				setCars(docSnapshot.data().cars);
			}
		});
	}, []);

	//shows modal on screen and collects the data below and adds it to cars
	const addCarHandler = (
		year,
		make,
		model,
		lastAirFilter,
		lastBattery,
		lastBrakeFluid,
		lastCoolant,
		lastOilChange,
		lastPowerSteering,
		lastSparkPlugs
	) => {
		const randNumb = Math.floor(Math.random() * 100000000).toString();
		setCars((prevCars) => [
			...cars,
			{
				id: year + make + model + randNumb,
				owner: user,
				year,
				make,
				model,
				lastOilChange,
				lastAirFilter,
				lastBattery,
				lastBrakeFluid,
				lastSparkPlugs,
				lastPowerSteering,
				lastCoolant,
			},
		]);
		//provide id to Firebase
		const id = year + make + model + randNumb;
		const owner = user;
		updateCarsFirebase(
			year,
			make,
			model,
			id,
			owner,
			lastOilChange,
			lastAirFilter,
			lastBattery,
			lastBrakeFluid,
			lastSparkPlugs,
			lastCoolant,
			lastPowerSteering
		);
		setIsAddMode(false);
	};

	//this function adds all new data to Firebase
	const updateCarsFirebase = async (
		year,
		make,
		model,
		id,
		owner,
		lastOilChange,
		lastAirFilter,
		lastBattery,
		lastBrakeFluid,
		lastSparkPlugs,
		lastCoolant,
		lastPowerSteering
	) => {
		//retrieve the document that holds this users' car information
		const loadDoc = await firebase
			.firestore()
			.collection('cars')
			.doc(user)
			.get();

		//update the array of cars with this new one
		if (loadDoc.exists) {
			await firebase
				.firestore()
				.collection('cars')
				.doc(user)
				.update({
					cars: firebase.firestore.FieldValue.arrayUnion({
						id,
						year,
						make,
						model,
						owner,
						lastOilChange,
						lastAirFilter,
						lastBattery,
						lastBrakeFluid,
						lastSparkPlugs,
						lastCoolant,
						lastPowerSteering,
					}),
				});
		}
		/*
        I DONT THINK WE WILL EVER NEED TO CREATE AN INSTANCE WHERE THEY DONT
        HAVE A DOCUMENT B/C IT GETS CREATED WHEN THEY SIGNUP
        -create a new document for them
        else{

        }
        */
	};
	//removes the modal from screen
	const cancelAddCar = () => {
		setIsAddMode(false);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.welcomeStyle}>Hello, {name}!</Text>
			<View style={styles.sameRow}>
				<Text style={styles.myCars}>My Cars</Text>
				<Button
					icon={<Icon name='plus' size={18} color='white' />}
					type='clear'
					iconRight
					raised
					buttonStyle={{
						alignSelf: 'flex-end',
						paddingRight: 14,
						paddingTop: 35,
					}}
					onPress={() => setIsAddMode(true)}
					title='Add Car    '
					titleStyle={styles.addButtonText}
				/>
			</View>

			<AddCar
				visible={isAddMode}
				addCarHandler={addCarHandler}
				onCancel={cancelAddCar}
			/>
			<FlatList
				style={styles.containerList}
				keyExtractor={(item, index) => item.id}
				data={cars} //this is where we put list of cars the user has
				renderItem={({ item }) => (
					<TouchableOpacity style={styles.carItem}>
						<Text style={styles.carItemText}>
							{item.year} {item.make} {item.model}
						</Text>
					</TouchableOpacity>
				)}
			/>

			<Image style={styles.logo} source={require('../../../assets/icon.png')} />
		</View>
	);
}
