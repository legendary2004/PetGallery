import React from "react";
import { TiDelete } from "react-icons/ti";

function RemoveImg(prop) {
    return (
        <div className="flex justify-center items-start">
            <img src={URL.createObjectURL(prop.img)} className="w-20 h-20 object-scale-down"/>
            <button type="button" className="inline-flex items-center" onClick={prop.removeImg}>
                <TiDelete className="w-6 h-6 relative -left-2 -top-2" />
            </button>
        </div>
    )
}

export default RemoveImg