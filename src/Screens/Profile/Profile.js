import { Text, View, Alert,Button} from 'react-native'
import React,{useState} from 'react'
import styles from './styles'
import {firebase} from './../../firebase/config'
import { useEffect } from 'react/cjs/react.development';

export default function Profile(props){
    //var to hold the name of the user that will be displayed on top of profile page
    const [name, setName] = useState('');

    const getName = async () =>{
        let user = firebase.auth().currentUser.uid
        try{
            const name1 = await firebase.firestore().collection('users').doc(user).get()
            setName(name1.data().fullName)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() =>{
        getName();
    },[])

    //function behind logout button
    const onLogoutPress = ()=>{
        console.log('pressed logout')
        firebase
        .auth()
        .signOut()
        .then(()=>{
            props.navigation.navigate('Login');
            //this to avoid the user from going back to the profile page after logging out
            props.navigation.reset({index:0, routes: [{name:'Login'}]});
        })
        .catch((error)=>{
            alert(error);
        })
    }

    return (
    <View style = {styles.container}>
        <Text style ={styles.nameStyle}>
            {name}
        </Text>

        <View style ={{paddingTop:50}}>
        <Button
            //type = 'clear'
            buttonStyle={{alignSelf:'center', paddingTop:30}}
            onPress = {()=> onLogoutPress()}
            title='Logout'
            titleStyle={styles.logoutButton}
        />
        </View>
        
    </View>
    )
}