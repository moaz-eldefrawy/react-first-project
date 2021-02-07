import React, {createContext, useContext, useState} from 'react'
import axios from 'axios';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}



export default function AuthProvider({ children }) {
    
    async function handleSignUp(email, password) {
        try
        {
            const res = await axios.post('http://localhost:5000/userAuth/signup',
            {
                email: email,
                password: password
            });
            setCurrentUser(res.data.user);
            localStorage.setItem("user", JSON.stringify(res.data.user));
        }
        catch(err){
            throw err.response.data;
        }
    }

    function getCurrentUser() {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        setCurrentUser(user);
    }

    async function handleLogIn(email, password){
        try
        {
            const res = await axios.post('http://localhost:5000/userAuth/login',
            {
                email: email,
                password: password
            }, {
                withCredentials: true
            });
            setCurrentUser(res.data.user);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            console.log(res.data.user);
        }
        catch(err){
            throw err.response.data;
        }
    }

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const value = {
        currentUser,
        handleSignUp,
        handleLogIn,
        getCurrentUser
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
