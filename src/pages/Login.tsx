import React, { FormEvent, useContext, useEffect, useState } from "react";
import Brand from "../components/navs/mainnav/NavBrand.tsx";
import FormInput from "../components/inputs/FormInput.tsx";
import PassInput from "../components/inputs/PasswordInput.tsx";
import FormClass from "../components/classes/FormClass.tsx";
import { LoginContext } from "../contexts/LoginContext.tsx";
import FormButton from "../components/buttons/ConfirmForm.tsx";
import ResultModal from "../components/modals/ResultModal.tsx";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    const loginContext = useContext(LoginContext)
    const [formProp, setFormProp] = useState({email: "", password: ""})
    const [isVisible, setIsVisible] = useState(false)
    const [msg, setMsg] = useState("")

    const handleFormChange = (e: FormEvent<HTMLInputElement>) => {
        const id = e.currentTarget.id;
        const value = e.currentTarget.value
        setFormProp(prev => {
            return {
                ...prev,
                [id]: value
            }
        })
    }

    const submitForm =(e: FormEvent) => {
        e.preventDefault()
        loginContext.handleLogin(formProp.email, formProp.password)

    }

    useEffect(() => {
        if (loginContext.msg) setMsg(loginContext.msg)
    }, [loginContext.msg])

    useEffect(() => {
        if (loginContext.user.id) navigate("/")
    })

    return (
        <FormClass>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="flex justify-center">
                    <Brand />
                </div>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={submitForm}>
                    <FormInput
                        id="email"
                        type="email"
                        label="Email"
                        value={formProp.email}
                        handleChange={handleFormChange}
                        isRequired={true}
                        placeholder="123@gmail.com"
                    />
                    <PassInput
                        id="password"
                        type={isVisible ? "text" : "password"}
                        label="Password"
                        value={formProp.password}
                        handleChange={handleFormChange}
                        isRequired={true}
                        isVisible={isVisible}
                        changeVisibility={() => setIsVisible(!isVisible)}
                        placeholder="****"
                    />

                    {/* <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div> */}

                    <FormButton label="Sign in" />
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <a href="http://localhost:3000/register" className="font-semibold leading-6 text-blue-700"> Register</a>
                </p>
            </div>
            {msg && <ResultModal msg={msg} closeModal={() => setMsg("")} />}
        </FormClass>
            
        
    )
}

export default Login