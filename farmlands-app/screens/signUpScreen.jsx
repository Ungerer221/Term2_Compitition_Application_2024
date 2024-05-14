import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
// import React from 'react'
import React, { useState } from 'react';
// views
import TopNavBar from '../views/topNavBar';
// firebase
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// componenets
import PasswordInputField from '../components/passwordInputField';
import EmailInputField from '../components/emailInputField';

// todo : make the sign up screen part of the drawer navigation for the menu button
export default function SignUpScreen() {

    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

    return (
        <View style={styles.container}>
            <TopNavBar />
            <View style={styles.formCon}>
                <EmailInputField/>
                <PasswordInputField/>
                <TouchableOpacity>

                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        // backgroundColor: '#90F6DE',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20,
        paddingTop: 40,
    },
    input: {
        height: 40,
        width: '100%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    formCon:{
        width:'100%',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        // backgroundColor:'red',
    },
});