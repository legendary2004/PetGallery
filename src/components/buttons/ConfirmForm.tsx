import React from "react";

function FormButton(prop) {
    return (
        <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{prop.label}</button>
        </div>
    )
}

export default FormButton