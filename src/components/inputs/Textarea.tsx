import React from "react";
import { strInput } from "../../interface";

function TextArea(prop: strInput) {
    return (
        <>
            
            <label htmlFor={prop.id} className="block text-sm font-medium text-gray-900 dark:text-white">{prop.label}</label>
            <textarea id={prop.id} value={prop.value} rows={6} required={prop.isRequired} onChange={(e) => prop.handleChange(e)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none" placeholder={prop.placeholder}></textarea>

        </>
    )
}

export default TextArea