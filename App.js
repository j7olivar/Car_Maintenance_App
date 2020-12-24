import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login, Home, Signup} from './src/Screens'
import {decode, encode} from 'base-64'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

//create the stack navigator for homescreen, login, and signup
const Stack = createStackNavigator();

//create tab navigator for the homescreen 
const tab = createBottomTabNavigator();

const homeTabs = (props) =>{
  return (
    <tab.Navigator tabBarOptions={{activeTintColor:'#DB2B39'}}>
      <tab.Screen name = "Home" 
        component ={()=> <Home {...props} />}
      />
    </tab.Navigator>
  )
}

export default function App() {
  const [loading,setLoading] = useState(true);
  const [user, setUser] = useState(null);
  //remove header from screens 
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}>
        { user ? (
          <>
          <Stack.Screen name="Home">
            {props => <homeTabs {...props} extraData={user} />}
          </Stack.Screen>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

