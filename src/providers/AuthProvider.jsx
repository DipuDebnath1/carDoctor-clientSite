import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/Firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    
    // // Register
    const Register = (email,password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    } 
    // //Login
    const Login = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // //user observer 
    useEffect(()=>{
        const unSubsCribe = onAuthStateChanged(auth,currentUser=>{
            setUser (currentUser)
            setLoading(false)
        });

        return ()=>{
            unSubsCribe
        } 
    },[])

    // //LogOut
    const Logout = () =>{
       return signOut(auth)
    }

   
    const authInfo = {
                loading,
                user,
                Register,
                Login,
                Logout,
        
            }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;