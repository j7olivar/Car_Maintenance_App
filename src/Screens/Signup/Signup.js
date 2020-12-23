import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

export default function Singup({navigation}){
    //data we are saving
    //we should maybe do one field for year, one for make, one for model
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [car, setCar] = useState('');

    //login button on the signup page
    const onLoginPress = () =>{
        navigation.navigate('Login');
    }

    const onSignupPress = () =>{
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
                <TextInput style = {styles.input}
                    placeholder ='Vehicle Info: Year Make Model'
                    placeholderTextColor='#aaaaaa'
                    onChangeText ={(text) => setCar(text)}
                    value = {car}
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