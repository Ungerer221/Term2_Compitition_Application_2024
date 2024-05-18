import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export const handleLogin = (email, password)=>{
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        // Signed in
        const user = userCredential.user;
        console.log("logged In User - " + user.email)
        // ...
    })
    .catch((error)=> {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
    });
}