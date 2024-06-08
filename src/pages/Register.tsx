import React, { FormEvent, useState } from "react";
import FormClass from "../components/classes/FormClass.tsx";
import Brand from "../components/navs/mainnav/NavBrand.tsx";
import FormInput from "../components/inputs/FormInput.tsx";
import PassInput from "../components/inputs/PasswordInput.tsx";
import Profile from "../components/inputs/File.tsx";
import axios from "axios"
import FormButton from "../components/buttons/ConfirmForm.tsx";
import ResultModal from "../components/modals/ResultModal.tsx";


function Register() {
    const [formProp, setFormProp] = useState({fName: "", lName: "", email: "", pass: "", passRepeat: "", file: ''})
    const [isVisible, setIsVisible] = useState(false)
    const [msg, setMsg] = useState("")

    const handleFormChange = (e: FormEvent<HTMLInputElement>) => {
        const id = e.currentTarget.id;
        const value = e.currentTarget.type == 'file' ? e.currentTarget.files ? e.currentTarget.files[0] : "" : e.currentTarget.value
        setFormProp(prev => {
            return {
                ...prev,
                [id]: value
            }
        })
    }

    const submitForm = (e: FormEvent) => {
        e.preventDefault();
        
        const formData = new FormData();  //create new form object
        formData.append("fname", formProp.fName);
        formData.append("lname", formProp.lName);
        formData.append("email", formProp.email);
        formData.append("pass", formProp.pass);
        formData.append("passRepeat", formProp.passRepeat)
        formData.append("myImage", formProp.file);
        axios.post("http://localhost:5000/register", formData)
        .then((response) => {
            setMsg(response.data.message)
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <FormClass>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="flex justify-center">
                    <Brand />
                </div>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register an account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={submitForm}>
                    <div className="flex items-center space-x-2">
                        <div className="w-full">
                            <FormInput
                                id="fName"
                                type="text"
                                label="First name"
                                value={formProp.fName}
                                handleChange={handleFormChange}
                                isRequired={true}
                                placeholder="First name..."
                            />
                        </div>
                        <div className="w-full">
                            <FormInput
                                id="lName"
                                type="text"
                                label="Last name"
                                value={formProp.lName}
                                handleChange={handleFormChange}
                                isRequired={true}
                                placeholder="Last name..."
                            />
                        </div>
                    </div>
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
                        id="pass"
                        type={isVisible ? "text" : "password"}
                        label="Password"
                        value={formProp.pass}
                        handleChange={handleFormChange}
                        isRequired={true}
                        isVisible={isVisible}
                        changeVisibility={() => setIsVisible(!isVisible)}
                        placeholder="******"
                    />
                    <PassInput
                        id="passRepeat"
                        type={isVisible ? "text" : "password"}
                        label="Password"
                        value={formProp.passRepeat}
                        handleChange={handleFormChange}
                        isRequired={true}
                        isVisible={isVisible}
                        changeVisibility={() => setIsVisible(!isVisible)}
                        placeholder="******"                        
                    />
                    <Profile 
                        handleChange={handleFormChange}
                        img={formProp.file}
                    />

                    <FormButton label="Sign up" />
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already a member?
                    <a href="http://localhost:3000/login" className="font-semibold leading-6 text-blue-700"> Login</a>
                </p>
            </div>
            {msg && <ResultModal msg={msg} closeModal={() => setMsg('')} />}
        </FormClass>
    )
}

export default Register