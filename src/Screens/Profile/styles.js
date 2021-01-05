import { StyleSheet } from 'react-native';
import colors from '../../colors.js';

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: colors.primary,
	},
	logoutButton: {
		borderRadius: 5,
		justifyContent: 'center',
		height: 50,
		backgroundColor: colors.secondary,
		alignItems: 'center',
		width: 200,
		alignSelf: 'flex-end',
		marginBottom: 20,
	},
	referButton: {
		borderRadius: 5,
		justifyContent: 'center',
		height: 50,
		backgroundColor: colors.shareButton,
		alignItems: 'center',
		width: 200,
		alignSelf: 'flex-end',
		marginBottom: 20,
	},
	buttonTitle: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center',
	},
	nameStyle: {
		paddingTop: 85,
		color: 'white',
		fontSize: 35,
		fontWeight: 'bold',
		alignSelf: 'center',
		flex: 1,
	},
});
