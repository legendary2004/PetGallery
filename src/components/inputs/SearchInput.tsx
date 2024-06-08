import React from "react";
import { flexInput } from "../../interface";

function SearchPet(prop: flexInput) {
    return (
        <div className="max-w-lg">
            <label htmlFor={prop.id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{prop.label}</label>
            <div className="flex flex-nowrap">
                <select id={prop.selectId} name={prop.selectId} value={prop.selectValue} onChange={(e) => prop.handleChange(e)} className="py-2 text-sm bg-gray-50 border-gray-300 rounded-s-lg text-gray-700 dark:text-gray-200 focus:border-gray-300 focus:ring-0">
                    <option className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All categories</option>
                    <option className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dog</option>
                    <option className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cat</option>
                    <option className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bird</option>
                </select>
                <div className="relative w-full">
                    <input type="btn" id={prop.id} name={prop.id} value={prop.value} onChange={(e) => prop.handleChange(e)} required={prop.isRequired} className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-2 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Pet name..." />
                    <button onClick={() => prop.click()} type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-gray-700 rounded-e-lg border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchPet