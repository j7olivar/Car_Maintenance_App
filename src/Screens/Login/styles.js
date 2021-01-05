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
		flex: 1,
		height: 120,
		width: 120,
		alignSelf: 'center',
		margin: 30,
	},
	input: {
		height: 48,
		borderRadius: 5,
		overflow: 'hidden',
		color: 'white',
		backgroundColor: 'transparent',
		borderBottomWidth: 1,
		borderBottomColor: 'white',
		marginTop: 40,
		marginBottom: 10,
		marginLeft: 20,
		marginRight: 30,
		paddingLeft: 16,
	},
	button: {
		backgroundColor: colors.secondary,
		marginLeft: 30,
		marginRight: 30,
		marginTop: 70,
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
		marginTop: 40,
	},
	footerText: {
		fontSize: 16,
		color: 'white',
	},
	footerLink: {
		color: colors.secondary,
		fontWeight: 'bold',
		fontSize: 16,
	},
});
