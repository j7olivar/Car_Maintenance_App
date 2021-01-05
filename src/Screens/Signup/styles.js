import { StyleSheet } from 'react-native';
import colors from '../../colors.js';

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
		alignItems: 'center',
		backgroundColor: colors.primary,
	},
	logo: {
		//flex: 1,
		height: 100,
		width: 100,
		alignSelf: 'center',
		margin: 30,
	},
	profileInfoHeader: {
		fontSize: 24,
		color: '#fff',
		fontWeight: 'bold',
		marginLeft: '5%',
		marginBottom: '5%',
		marginTop: '5%',
	},
	carInfoHeader: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#fff',
		marginLeft: '5%',
		marginTop: '10%',
		marginBottom: '5%',
	},
	input: {
		height: 48,
		borderRadius: 5,
		overflow: 'hidden',
		color: 'white',
		backgroundColor: 'transparent',
		borderBottomWidth: 1,
		borderBottomColor: 'white',
		marginTop: '10%',
		marginBottom: '10%',
		marginLeft: '5%',
		marginRight: 30,
		paddingLeft: 16,
	},
	button: {
		backgroundColor: colors.secondary,
		marginLeft: 30,
		marginRight: 30,
		marginTop: 50,
		height: 48,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonTitle: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
	footerView: {
		flex: 1,
		alignItems: 'center',
		marginTop: 20,
	},
	footerText: {
		fontSize: 16,
		color: 'white',
		paddingTop: 20,
		paddingBottom: 90,
	},
	footerLink: {
		color: colors.secondary,
		fontWeight: 'bold',
		fontSize: 16,
	},
});
