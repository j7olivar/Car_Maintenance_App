import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#222831'
    },
    logoutButton:{
        borderRadius:5,
        justifyContent:'center',
        height:50,
        backgroundColor: '#DB2B39',
        alignItems:'center',
        width:200,
        alignSelf:'flex-end',
        marginBottom:20
    },
    buttonTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
        alignSelf:'center'
    },
    nameStyle:{
        paddingTop:85,
        color:'white',
        fontSize:35,
        fontWeight:'bold',
        alignSelf:'center',
        flex:1
    }
})