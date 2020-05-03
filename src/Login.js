//Step 1
import React from "react";
import {Alert, View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import styles from './LoginStyle'

//Step 2 and Step 3
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = { username: '', password: '' }
    }

    //Step 4
    render() {
        return <View style={styles.container}>
            <Text style={styles.headingStyle}>User Form</Text>
            <TextInput keyboardType='text'
                placeholder='Enter User Name'
                onChangeText={(value) => { this.setState({ username: value }) }}
                style={styles.textInputStyle}
            >
            </TextInput>
            <TextInput keyboardType='text'
                placeholder='Enter Password'
                onChangeText={(value) => { this.setState({ password: value }) }}
                secureTextEntry={true}
                style={styles.textInputStyle}
            >
            </TextInput>
            <TouchableOpacity
                onPress={this.login.bind(this)}
                style={styles.buttonStyle}
            >
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    }

    login() {
        var username = this.state.username
        var password = this.state.password
        if (username == '' || password == '')
            Alert.alert('Validation Failed', 'Please enter both username and        password')
        else
            Alert.alert('Current Data', `Username = ${username} , Password =  ${password}`)
    }
}
//Step 5
export default Login

