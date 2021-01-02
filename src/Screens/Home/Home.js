import React,{useState} from 'react'
import { Text, View, FlatList, TouchableOpacity, Image} from 'react-native'
import styles from './styles'
import {firebase} from './../../firebase/config'
import { useEffect } from 'react/cjs/react.development';


export default function Home(props) {
    //var to hold the name of the user that will be displayed on top of profile page
    const [name, setName] = useState('');
    const [cars,setCars] = useState([]);
    const user = firebase.auth().currentUser.uid

    //retrieves name and displays it on front homepage
    const getName = async () =>{
        //let user = firebase.auth().currentUser.uid
        try{
            const name1 = await firebase.firestore().collection('users').doc(user).get()
            setName(name1.data().firstName)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() =>{
        getName();
        //retrieve information from firstore and set it to our cars to display
        const usersRef = firebase.firestore().collection('cars') 
        usersRef.doc(user).onSnapshot(
            (docSnapshot) =>{
                if(!docSnapshot.exists){console.log('doc does not exist')}
                else{
                    setCars(docSnapshot.data().cars)
                }
            }
        )
    },[])

    return (
        <View style = {styles.container}>
            <Text style={styles.welcomeStyle}>Hello,  {name}!</Text> 
            <Text style ={styles.myCars}>My Cars</Text>
            <FlatList
                style={styles.cotainerList}
                keyExtractor={(item,index) => (item.id)}
                data = {cars}//this is where we put list of cars the user has
                renderItem = {({item}) => (
                    <TouchableOpacity style ={styles.carItem}> 
                        <Text style={styles.carItemText}>
                            {item.year} {item.make} {item.model}
                        </Text>
                    </TouchableOpacity>
                )}
            />
           
           <Image
                style={styles.logo}
                source={require('../../../assets/icon.png')}
            />
        </View>
    )
}
