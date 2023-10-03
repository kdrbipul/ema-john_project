import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';


const auth = getAuth(app);


export const AuthContext = createContext('');

const userContext = ({children}) => {

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();


     const createUser = (email,password) =>{

        return createUserWithEmailAndPassword(auth,email,password)
    } 

    const googleLogin = () => {

        return signInWithPopup(auth, googleProvider)
    }
    const gitHubLogin = () => {
        return signInWithPopup(auth, gitHubProvider)
    }
    const facebookLogin = () =>{
        return signInWithPopup(auth, facebookProvider)
    }


    const userInfo = {
        createUser,
        googleLogin,
        gitHubLogin,
        facebookLogin,
    }


    return (
        <AuthContext.Provider value={userInfo}>
            { children }
        </AuthContext.Provider>
    );

};

export default userContext;