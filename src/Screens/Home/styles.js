import { Dimensions, StatusBar, StyleSheet } from 'react-native';
// import { colors } from 'react-native-elements';
import colors from '../../colors.js';

export default StyleSheet.create({
	logo: {
		height: 35,
		width: 35,
		alignSelf: 'center',
		margin: 30,
	},
	container: {
		flex: 1,
		alignContent: 'flex-start',
		backgroundColor: colors.primary,
	},
	addCarContainer: {
		flex: 1,
		alignContent: 'flex-start',
		backgroundColor: colors.primary,
		padding: 30,
	},
	welcomeStyle: {
		paddingTop: 80,
		color: colors.secondary,
		fontSize: 30,
		fontWeight: 'bold',
		alignSelf: 'center',
		paddingLeft: 15,
	},
	myCars: {
		paddingTop: 40,
		color: 'white',
		fontSize: 26,
		fontWeight: 'bold',
		alignSelf: 'flex-start',
		paddingLeft: 15,
		paddingBottom: 9,
	},
	containerList: {
		alignSelf: 'center',
		alignContent: 'flex-start',
		borderRadius: 8,
	},
	carItem: {
		alignItems: 'stretch',
		alignSelf: 'flex-start',
		height: 96,
		shadowRadius:3,
		shadowColor: 'black',
		shadowOpacity: 0.6,
		//shadowOffset: { width: 0, height: 10},
		width: Dimensions.get('window').width - 25,
		borderRadius: 8,
		marginVertical: 12,
		backgroundColor: colors.carButton,
	},
	carItemText: {
		color: 'white',
		textAlign: 'center',
		paddingTop: 32,
		fontWeight: 'bold',
		fontSize: 25,
	},
	addButtonText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
		alignSelf: 'flex-end',
	},
	addNewCarText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: colors.addNewCarText,
		paddingTop: 80,
		alignSelf: 'center',
		paddingBottom: 40,
	},
	sameRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		alignItems: 'center',
	},
	addCarButton: {
		height: 48,
		borderRadius: 5,
		overflow: 'hidden',
		backgroundColor: 'green',
		marginTop: 25,
		marginBottom: 10,
		marginLeft: 30,
		marginRight: 30,
		paddingLeft: 35,
		paddingRight: 35,
	},
	cancelCarButton: {
		height: 48,
		borderRadius: 5,
		overflow: 'hidden',
		backgroundColor: colors.cancelCarButton,
		marginTop: 25,
		marginBottom: 10,
		marginLeft: 30,
		marginRight: 30,
		paddingLeft: 35,
		paddingRight: 35,
	},
	addCarButtonText: {
		fontSize: 16,
		marginTop: 13,
		color: 'white',
		fontWeight: 'bold',
		alignSelf: 'center',
	},
});
