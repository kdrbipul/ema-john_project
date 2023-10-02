import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './../../firebase/firebase.config';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext('');

const userContext = ({children}) => {
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const userInfo = {
        createUser,
        googleLogin,
    }

    return (
        <AuthContext.Provider value={userInfo}>
        { children }
        </AuthContext.Provider>
    );
};

export default userContext;