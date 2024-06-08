import React from "react";
import { input } from "../../interface";

function SelectInput(prop) {
    return (
        <div className="max-w-md ">
            <label htmlFor={prop.id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{prop.label}</label>
            <select id={prop.id} value={prop.value} onChange={(e) => prop.handleChange(e)} required={prop.isRequired} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {prop.content}
            </select>
        </div>
    )
}

export default SelectInput