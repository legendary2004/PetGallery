import React from "react";
import { useNavigate } from "react-router-dom";

function Link(prop) {
    const navigate = useNavigate()
    return (
        <li>
            <a href="#" onClick={() => navigate(prop.link)} className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent font-medium  text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">{prop.value}</a>
        </li>
    )
}

export default Link