import React, { FormEvent, useState } from "react";
import MainPageHeading1 from "../components/headers/Heading1.tsx";
import { FaInstagram } from "react-icons/fa";
import MainNav from "../components/navs/mainnav/MainNav.tsx";
import Footer from "../components/footer/Footer.tsx";
import FormInput from "../components/inputs/FormInput.tsx";
import TextArea from "../components/inputs/Textarea.tsx";
import axios from "axios";
import ResultModal from "../components/modals/ResultModal.tsx";

function Contact() {
    const [formProp, setFormProp] = useState({email: "", message:""})
    const [msg, setMsg] = useState("")

    const handleFormChange = (e: FormEvent<HTMLInputElement>) => {
        const {id, value} = e.currentTarget;

        setFormProp(prev => {
            return {
                ...prev,
                [id]: value
            }
        })
    }

    const submitForm = (e: FormEvent) => {
        e.preventDefault()

        axios.post("http://localhost:5000/sendEmail", {
            email: formProp.email,
            message: formProp.message
        })
        .then(res => setMsg(res.data.message))
    }
    return (
        <>
            <MainNav />
            <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact us</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">Complete the given form to reach us out</p>
                </div>
                <form onSubmit={submitForm} className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6">
                        <FormInput
                            id="email"
                            type="email"
                            value={formProp.email}
                            label="Email"
                            placeholder="123@gmail.com"
                            isRequired={true}
                            handleChange={handleFormChange}
                        />
                        <TextArea
                            id="message"
                            type=""
                            value={formProp.message}
                            label="Message"
                            placeholder="Type your message..."
                            isRequired={true}
                            handleChange={handleFormChange}
                        />
                    </div>
                    <div className="mt-10">
                        <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
                    </div>
                </form>
        </div>
        <Footer />
        {msg && <ResultModal msg={msg} closeModal={() => setMsg("")} />}
        </>
    )
}

export default Contact