import React from "react";
import { useNavigate } from "react-router-dom";

function Link(prop) {
    const navigate = useNavigate()
    return (
        <li>
            <a href="#" onClick={() => navigate(prop.link)} className="hover:underline">{prop.label}</a>
        </li>
    )
}

export default Link