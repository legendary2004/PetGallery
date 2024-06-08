import React from "react";
import { pet } from "../../interface";

function PetCard(prop: pet) {
    return (
        <div className="h-full w-[300px] sm:w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg h-[200px] w-full mx-auto object-fill" src={require(`../../images/pets/${prop.img1}`)} alt="" />
            <div className="grid grid-cols-1 place-items-center gap-y-2 my-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{prop.name}</h5>
            <div className="flex justify-between items-center space-x-2">
                <p className="font-normal text-gray-700 dark:text-gray-400">{prop.type}</p> 
                <p className="font-normal text-gray-700 dark:text-gray-400"> | </p> 
                <p className="font-normal text-gray-700 dark:text-gray-400">{prop.breed}</p>
            </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">Lifespan: {prop.min}-{prop.max} </p>
                <button onClick={() => prop.extend()} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default PetCard