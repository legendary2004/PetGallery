import React from "react";
import { passInput } from "../../interface";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function PassInput(prop: passInput) {
    return (
        <div>
            <label htmlFor={prop.id} className="block text-sm font-medium leading-6 text-gray-900">{prop.label}</label>
            <div className="flex items-center mt-2">
            <input id={prop.id} name={prop.id} type={prop.type} value={prop.value} onChange={(e) => prop.handleChange(e)} required={prop.isRequired} minLength={6} className="bg-gray-50 block w-full rounded-s-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 sm:text-sm sm:leading-6" />
                <div onClick={() => prop.changeVisibility()} className="bg-gray-50 w-10 py-2 cursor-pointer rounded-e-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 ">
                    {prop.isVisible ? <FaEyeSlash className="w-5 h-5 mx-auto" /> : <FaEye className="w-5 h-5 mx-auto " onClick={() => prop.changeVisibility} />}
                </div>
                
            </div>
        </div>
    )
}

export default PassInput