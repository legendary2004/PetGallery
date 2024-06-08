import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { loginContext } from "../interface";
import { useNavigate } from "react-router-dom";

const userObj = {
    id: 0,
    f_name: '',
    l_name: '',
    email: '',
    password: '',
    profile_img: '',
    isAdmin: false
}

export const LoginContext = createContext<loginContext>({
    user: userObj,
    msg: '',
    handleLogin() {},
    signOut() {}
})

function LoginContextProvider({children}) {
    const [user, setUser] = useState(userObj)
    const [msg, setMsg] = useState("")

    function handleLogin(email: string, pass: string) {
        axios.post("http://localhost:5000/login", {
            email,
            pass
        })
        .then(res => {
            if (res.data.message) setMsg(res.data.message)
            else {
                setUser(res.data.user)
            }
        })
    }

    function signOut() {
        setUser(userObj)
    }

    useEffect(() => {
        const currentUser = JSON.parse(window.localStorage.getItem('user') || '""');
        if (currentUser) {
            setUser(currentUser);
        }
      }, []);

    useEffect(() => {
        window.localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <LoginContext.Provider value={{user, msg, handleLogin, signOut}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider