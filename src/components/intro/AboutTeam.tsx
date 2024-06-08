import React from "react";

function Team(prop) {
    return (
        <li>
            <div className="flex items-center gap-x-6">
            <img className="h-16 w-16 rounded-full" src={prop.src} alt="" />
            <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{prop.name}</h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">{prop.role}</p>
            </div>
            </div>
        </li>
    )
}

export default Team