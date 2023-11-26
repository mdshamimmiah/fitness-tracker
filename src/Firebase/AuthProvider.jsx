/* eslint-disable react/prop-types */
import { GoogleAuthProvider,
     createUserWithEmailAndPassword,
      onAuthStateChanged,
       signInWithEmailAndPassword, 
       signInWithPopup,
        signOut ,
    updateProfile} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "./fire.init";



export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const [loading, setLoading] = useState(true);



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
const updateUserInfo =(profile) =>{
    return updateProfile(auth.currentUser ,profile)
}


    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }



    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('observing current user', currentUser)
            setLoading(false);
        })

        return () => {
            unSubscribe();
        }

    }, [])

    const authInfo = { user, loading, createUser, signInUser, logOut, signInWithGoogle,updateUserInfo }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.PropTypes = {
    children: PropTypes.node
}