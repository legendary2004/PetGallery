import React from "react";

function AboutIntro(prop) {
    return (
        <div>
            <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                {prop.icon}
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">{prop.label}</h3>
            <p className="text-gray-500 dark:text-gray-400">{prop.desc}</p>
        </div>
    )
}

export default AboutIntro