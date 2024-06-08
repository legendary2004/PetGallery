import React from "react";

function TabList(prop) {
    const borderColor = prop.selected ? 'border-gray-500' : ''
    return (
        <li className="me-2" role="presentation">
            <button onClick={() => prop.handleClick()} className={`inline-block p-4 px-10 border-b-2 ${borderColor} rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`} type="button" role="tab">{prop.label}</button>
        </li>
    )
}

export default TabList