import { Dimensions, StatusBar, StyleSheet } from 'react-native';

export default StyleSheet.create({
    logo:{
        height:35,
        width:35,
        alignSelf: "center",
        margin: 30,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent:'flex-start',
        backgroundColor:'#222831'
    },
    welcomeStyle:{
        paddingTop:90,
        color:'#A31C1C',
        fontSize:30,
        fontWeight:'bold',
        alignSelf:'center',
        paddingLeft:15,
    },
    myCars:{
        paddingTop:40,
        color:'white',
        fontSize:26,
        fontWeight:'bold',
        alignSelf:'flex-start',
        paddingLeft:15,
        paddingBottom:9,
    },
    cotainerList:{
        alignSelf:'center',
        alignContent:'flex-start',
        borderRadius:8
    },
    carItem:{
        alignItems:'stretch',
        alignSelf:'flex-start',
        height: 96,
        width: Dimensions.get('window').width -25,
        borderRadius: 8,
        marginVertical:12,
        backgroundColor:'#525252'
    },
    carItemText:{
        color:'white', 
        textAlign:'center',
        paddingTop:32,
        fontWeight:'bold',
        fontSize:25
    }
})