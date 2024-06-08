import React from "react";
import { strInput } from "../../interface";

function FormInput(prop: strInput) {
    return (
        <div>
            <label htmlFor={prop.id} className="block text-sm font-medium leading-6 text-gray-900">{prop.label}</label>
            <div className="mt-2">
                <input id={prop.id} name={prop.id} type={prop.type} placeholder={prop.placeholder} value={prop.value} onChange={(e) => prop.handleChange(e)} required={prop.isRequired} className="block w-full rounded-lg border-0 py-1.5 bg-gray-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
        </div>
    )
}

export default FormInput