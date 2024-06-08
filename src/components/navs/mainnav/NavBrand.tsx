import React from "react";

function Brand() {
    return (
        <a href="http://localhost:3000/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <img src="https://www.shutterstock.com/image-vector/black-silhouette-paw-print-isolated-600nw-1042839922.jpg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Pet Gallery</span>
        </a>
    )
}

export default Brand