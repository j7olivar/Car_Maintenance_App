import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:50,
        alignItems: 'center',
        backgroundColor: '#222831'
    },
    logo: {
        //flex: 1,
        height: 100,
        width: 100,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        color:'white',
        backgroundColor: 'transparent',
        borderBottomWidth:1,
        borderBottomColor:'white',
        marginTop: 40,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 30,
        paddingLeft: 16,
    },
    button: {
        backgroundColor: '#DB2B39',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 50,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: 'white',
        paddingTop:20,
        paddingBottom:90
    },
    footerLink: {
        color: "#DB2B39",
        fontWeight: "bold",
        fontSize: 16
    }
})