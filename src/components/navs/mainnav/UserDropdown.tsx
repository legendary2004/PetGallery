import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../../contexts/LoginContext.tsx";
import bufferImage from "buffer-image"
import { useNavigate } from "react-router-dom";

function User() {
    const navigate = useNavigate()
    const loginContext = useContext(LoginContext)

    useEffect(() => {
        console.log(loginContext)
    }, [loginContext])

    function signOut() {
        loginContext.signOut()
        navigate("/login")
    }
    
    return (
        <>
            <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                {loginContext.user.profile_img &&  <img className="w-8 h-8 rounded-full" src={require(`../../../images/profiles/${loginContext.user.profile_img}`)} alt="user photo" />} 
            </button>
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">{loginContext.user.f_name} {loginContext.user.l_name}</span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{loginContext.user.email}</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                        <a href="#" onClick={signOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default User