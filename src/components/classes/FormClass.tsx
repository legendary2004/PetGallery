import React from "react";

function FormClass({children}) {
    return (
        <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
            {children}
        </div>
    )
}

export default FormClass