import React from "react";

function PetsClass({children}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 place-items-center gap-3 mt-2">
            {children}
        </div>
    )
}

export default PetsClass