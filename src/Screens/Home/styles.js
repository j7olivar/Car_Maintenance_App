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
        alignContent:'flex-start',
        backgroundColor:'#222831'
    },
    addCarContainer:{
        flex: 1,
        alignContent:'flex-start',
        backgroundColor:'#222831',
        padding:30
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
    },
    addButtonText:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        alignSelf:'flex-end',
    },
    addNewCarText:{
        fontSize:30,
        fontWeight:'bold',
        color:'#A31C1C',
        paddingTop:80,
        alignSelf:'center',
        paddingBottom:40
    },
    sameRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        alignItems:'center'
    },
    addCarButton:{
        height: 48,
        borderRadius:5,
        overflow: 'hidden',
        backgroundColor: 'green',
        marginTop: 25,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 35,
        paddingRight: 35
    },
    cancelCarButton:{
        height: 48,
        borderRadius:5,
        overflow: 'hidden',
        backgroundColor: '#ff443a',
        marginTop: 25,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 35,
        paddingRight: 35
    },
    addCarButtonText:{
        fontSize: 16,
        marginTop: 13,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
    }
})