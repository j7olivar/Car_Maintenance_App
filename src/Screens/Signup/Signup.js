import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {firebase} from '../../firebase/config'

export default function Signup({navigation}){
    //data we are saving
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    //const [car, setCar] = useState('');
    const [year, setYear] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');

    //login button on the signup page
    const onLoginPress = () =>{
        navigation.navigate('Login');
    }

    /**
     * first create the user with the given email and password. We then save the uid 
     * and save the data. We then save the data in a doc in firebase under the users 
     * collection which has all the documents. Each user gets document. 
     */
    const onSignupPress = () =>{
        if(password != confirmPassword){
            alert("Passwords don't match :(")
            return;
        }
        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid;
            const userData = {
                id: uid,
                email,
                password,
                fullName,
                year,
                make,
                model
            } 
            const usersRef = firebase.firestore().collection('users')
            usersRef.doc(uid)
                    .set(userData)
                    .then(() => {
                        navigation.navigate("HomeTabs", {user: userData})
                    })
                    .catch((error) => {
                        alert(error)
                    })
        })
        .catch((error)=> {
            alert(error)
        })
    }

    return(
        <View style ={styles.container}>
            <KeyboardAwareScrollView
            style = {{flex:1,width: '100%'}}
            keyboardShouldPersistTaps='always'>
                <Image style = {styles.logo}
                source ={require('../../../assets/icon.png')}/>
                <TextInput style = {styles.input}
                    placeholder ='Full Name'
                    placeholderTextColor='#aaaaaa'
                    onChangeText ={(text) => setFullName(text)}
                    value = {fullName}
                    autoCapitalize = 'none'
                />
                <TextInput style = {styles.input}
                    placeholder ='E-mail'
                    placeholderTextColor='#aaaaaa'
                    onChangeText ={(text) => setEmail(text)}
                    value = {email}
                    autoCapitalize = 'none'
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput style = {styles.input}
                    placeholder ='Year'
                    placeholderTextColor='#aaaaaa'
                    onChangeText ={(text) => setYear(text)}
                    value = {year}
                    autoCapitalize = 'none'
                    keyboardType={'number-pad'}
                />
                <TextInput style = {styles.input}
                    placeholder ='Make (e.g Ford)'
                    placeholderTextColor='#aaaaaa'
                    onChangeText ={(text) => setMake(text)}
                    value = {make}
                    autoCapitalize = 'none'
                />
                <TextInput style = {styles.input}
                    placeholder ='Model (e.g F150)'
                    placeholderTextColor='#aaaaaa'
                    onChangeText ={(text) => setModel(text)}
                    value = {model}
                    autoCapitalize = 'none'
                />
                <TouchableOpacity 
                    style = {styles.button}
                    onPress = {()=> onSignupPress()}>
                        <Text style = {styles.buttonTitle}>Create Account</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? 
                        <Text onPress={onLoginPress} style={styles.footerLink}> Log in</Text>
                    </Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}