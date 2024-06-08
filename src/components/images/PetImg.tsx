import React from "react";

function PetImg(prop) {
    return (
        <img src={prop.img} className="h-full w-full object-contain sm:object-cover object-center"/>
    )
}

export default PetImg