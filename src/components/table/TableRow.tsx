import React from "react";
import { petTableRow } from "../../interface";

function TableRow(prop: petTableRow) {
    return (
        <tr className="border-b dark:border-gray-700">
            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{prop.name}</th>
            <td className="px-4 py-3">{prop.type}</td>
            <td className="px-4 py-3">{prop.breed}</td>
            <td className="px-4 py-3">{prop.lifespan}</td>
            <td className="px-4 py-3 flex items-center justify-end">
                <button id={`${prop.id}-button`} data-dropdown-toggle={`${prop.id}`} className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                </button>
                <div id={`${prop.id}`}  className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby={`${prop.id}-button`}>
                        <li>
                            <button className="w-full text-left block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</button>
                        </li>
                        <li>
                            <button className="w-full text-left block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => prop.update()}>Edit</button>
                        </li>
                    </ul>
                    <div className="py-1">
                        <button className="w-full text-left block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={() => prop.delete()}>Delete</button>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default TableRow