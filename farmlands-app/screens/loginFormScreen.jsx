import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
// View
import TopNavBar from '../views/topNavBar';
// components
import EmailInputField from '../components/emailInputField';
import PasswordInputField from '../components/passwordInputField';
// fireBase
// import { initializeApp } from "firebase/app";
// firebase Auth Imports
import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDDhncQ-zmbOgwkcUqlwDHExKCLGCQIM-Q",
//     authDomain: "class-work-c5bee.firebaseapp.com",
//     projectId: "class-work-c5bee",
//     storageBucket: "class-work-c5bee.appspot.com",
//     messagingSenderId: "156765701708",
//     appId: "1:156765701708:web:d543605b3a4218c9d5d6e9"
// };
// initializing your app
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

const loginEmailPassword = async () => {
    const loginEmail = txtEmail.value;
    const loginPassword = txtPassword.value

    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
}


export default function LoginFormScreen({ navigation }) {
    const [text, onChangeText] = React.useState('');
    return (
        <View style={styles.container}>
            <TopNavBar />
            <Text style={styles.loginHeadingText}>Login</Text>
            <Text>If you dont have an account please feel free to register</Text>
            <Image
                style={styles.backGroundImage}
                source={require('../assets/44.png')}
            />
            <TextInput
                style={styles.input}
                placeholder='password'
                onChangeText={onChangeText}
                value={text}
            />
            <View style={styles.formCon}>
                <EmailInputField />
                <PasswordInputField />
                {/* submit button  */}
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => { }}
                >
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.navSignupButton}
                    onPress={() => navigation.navigate('Signup')}
                >
                    <Text style={styles.loginButtonText}>Want to signUp</Text>
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
        // gap: 20,
        paddingTop: 40,
    },
    loginHeadingText: {
        fontSize: 42,
        fontWeight: '700',
    },
    formCon: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        gap: 10,
        // backgroundColor:'purple',
    },
    loginButton: {
        width: '100%',
        backgroundColor: '#41A8BB',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 22,
    },
    loginButtonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
    navSignupButton: {
        width: '50%',
        backgroundColor: '#E6BE27',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 22,
    },
    backGroundImage: {
        width: '100%',
        height: 250,
        // backgroundColor:'red',
    },
});