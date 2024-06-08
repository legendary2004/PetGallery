import React from "react";
import { boolInput } from "../../interface";

function PetType(prop: boolInput) {
    return (
        <li className="flex items-center">
            <input id={prop.id} name={prop.id} type={prop.type} checked={prop.isChecked} onChange={(e) => prop.handleChange(e)} required={prop.isRequired} placeholder={prop.placeholder} className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            <label htmlFor={prop.id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">{prop.label}</label>
        </li>
    )
}

export default PetType