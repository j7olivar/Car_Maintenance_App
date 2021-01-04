import React, {useState} from 'react'
import { Text, Button, Modal, TouchableOpacity, View} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { set } from 'react-native-reanimated';
import {FloatingLabelInput} from 'react-native-floating-label-input'
import styles from './styles'

const AddCar = props =>{
    const [year, setYear] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    //const [id,setId] = useState();
    const [airFilter, setAirFilter] = useState('');
    const [battery, setBattery] = useState('');
    const [brakeFluid, setBrakeFluid] = useState('');
    const [coolant, setCoolant] = useState('')
    const [oilChange, setOilChange]= useState('');
    const [powerSteering, setPowerSteering] = useState('');
    const [sparkPlugs, setSparkPlugs] = useState('')
    //const [owner, setOwner] = useState('');

    const yearHandler = (input) =>{
        setYear(input)
    }
    const makeHandler = (input) =>{
        setMake(input)
    }
    const modelHandler = (input) =>{
        setModel(input)
    }
    const airFilterHandler = (input) =>{
        setAirFilter(input)
    }
    const batteryHandler = (input) =>{
        setBattery(input)
    }
    const brakeFluidHandler = (input) =>{
        setBrakeFluid(input)
    }
    const coolantHandler = (input) =>{
        setCoolant(input)
    }
    const oilChangeHandler = (input) =>{
        setOilChange(input)
    }
    const psHandler = (input) =>{
        setPowerSteering(input)
    }
    const sparkPlugsHandler = (input) =>{
        setSparkPlugs(input)
    }

    const addCarHandler = () =>{
        props.addCarHandler(year, make, model,oilChange,airFilter,
            battery,brakeFluid,sparkPlugs,coolant,powerSteering)
    
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style = {styles.addCarContainer}>
                <KeyboardAwareScrollView
                    style = {{flex:1,width: '100%'}}
                    keyboardShouldPersistTaps='always'>
                <Text style = {styles.addNewCarText}>
                    Add New Car
                </Text>
                <FloatingLabelInput
                    label ={'Year'}
                    value= {year}
                    keyboardType='numeric'
                    onChangeText={yearHandler}
                    customLabelStyles={{colorFocused:'#DB2B39',fontSizeFocused:12}}
                    inputStyles={{paddingLeft:20, height:25, color:'white',paddingTop:5}}
                />
                <View style={{paddingBottom:20}}></View>
                <FloatingLabelInput
                    label ={'Make'}
                    value= {make}
                    onChangeText={makeHandler}
                    customLabelStyles={{colorFocused:'#DB2B39',fontSizeFocused:12}}
                    inputStyles={{paddingLeft:20, height:25, color:'white',paddingTop:5}}
                />
                <View style={{paddingBottom:20}}></View>
                <FloatingLabelInput
                    label ={'Model'}
                    value= {model}
                    onChangeText={modelHandler}
                    customLabelStyles={{colorFocused:'#DB2B39',fontSizeFocused:12}}
                    inputStyles={{paddingLeft:20, height:25, color:'white',paddingTop:5}}
                />
                <View style={{paddingBottom:20}}></View>
                <FloatingLabelInput
                    label ={'Last Air Filter Change'}
                    value= {airFilter}
                    onChangeText={airFilterHandler}
                    customLabelStyles={{colorFocused:'#DB2B39',fontSizeFocused:12}}
                    inputStyles={{paddingLeft:20, height:25, color:'white',paddingTop:5}}
                />
                <View style={{paddingBottom:20}}></View>
                <FloatingLabelInput
                    label ={'Last Battery Change'}
                    value= {battery}
                    onChangeText={batteryHandler}
                    customLabelStyles={{colorFocused:'#DB2B39',fontSizeFocused:12}}
                    inputStyles={{paddingLeft:20, height:25, color:'white',paddingTop:5}}
                />
                <View style={{paddingBottom:20}}></View>
                <FloatingLabelInput
                    label ={'Last Brake Fluid Change'}
                    value= {brakeFluid}
                    onChangeText={brakeFluidHandler}
                    customLabelStyles={{colorFocused:'#DB2B39',fontSizeFocused:12}}
                    inputStyles={{paddingLeft:20, height:25, color:'white',paddingTop:5}}
                />
                <View style={{paddingBottom:20}}></View>
                <FloatingLabelInput
                    label ={'Last Coolant Change'}
                    value= {coolant}
                    onChangeText={coolantHandler}
                    customLabelStyles={{colorFocused:'#DB2B39',fontSizeFocused:12}}
                    inputStyles={{paddingLeft:20, height:25, color:'white',paddingTop:5}}
                />
                <View style={{paddingBottom:20}}></View>
                <FloatingLabelInput
                    label ={'Last Oil and Oil Filter Change'}
                    value= {oilChange}
                    onChangeText={oilChangeHandler}
                    customLabelStyles={{colorFocused:'#DB2B39',fontSizeFocused:12}}
                    inputStyles={{paddingLeft:20, height:25, color:'white',paddingTop:5}}
                />
                <View style={{paddingBottom:20}}></View>
                <FloatingLabelInput
                    label ={'Last Power Steering Fluid Change'}
                    value= {powerSteering}
                    onChangeText={psHandler}
                    customLabelStyles={{colorFocused:'#DB2B39',fontSizeFocused:12}}
                    inputStyles={{paddingLeft:20, height:25, color:'white',paddingTop:5}}
                />
                <View style={{paddingBottom:20}}></View>
                <FloatingLabelInput
                    label ={'Last Spark Plugs Change'}
                    value= {sparkPlugs}
                    onChangeText={sparkPlugsHandler}
                    customLabelStyles={{colorFocused:'#DB2B39',fontSizeFocused:12}}
                    inputStyles={{paddingLeft:20, height:25, color:'white',paddingTop:5}}
                />
                <View style={styles.sameRow}>
                    <TouchableOpacity 
                    style={styles.addCarButton} onPress={addCarHandler}>
                        <Text style={styles.addCarButtonText}> Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.cancelCarButton} onPress={props.onCancel}>
                        <Text style={styles.addCarButtonText}> Cancel</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
            </View>
        </Modal>
    )
}
export default AddCar