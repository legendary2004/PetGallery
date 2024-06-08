import React from "react";
import { numberInput } from "../../interface";

function NumberInput(prop: numberInput) {
    return (
        <div>
            <label htmlFor={prop.id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{prop.label}</label>
            <input type={prop.type} id={prop.id} min={prop.min} max={prop.max} onChange={(e) => prop.handleChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={prop.placeholder} required />
        </div>
    )
}

export default NumberInput