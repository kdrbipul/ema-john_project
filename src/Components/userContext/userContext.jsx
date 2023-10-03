import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


const auth = getAuth(app);


export const AuthContext = createContext('');

const userContext = ({children}) => {

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const [user,setUser] = useState(null);
const [loading,setLoading] = useState(true)


     const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    } 

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // const gitHubLogin = () => {
    //     return signInWithPopup(auth, gitHubProvider)
    // }
    // const facebookLogin = () =>{
    //     return signInWithPopup(auth, facebookProvider)
    // }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currenUser => {
            setUser(currenUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe()
        }
    
    },[])


    const userInfo = {
        createUser,
        googleLogin,
        signIn,
        logOut,
        loading,
        user,
    }


    return (
        <AuthContext.Provider value={userInfo}>
            { children }
        </AuthContext.Provider>
    );

};

export default userContext;