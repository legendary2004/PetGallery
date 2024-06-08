import React from "react";
import { petOverview } from "../../interface";
import PetImg from "../images/PetImg.tsx";

function PetModal(prop: petOverview) {
    return (
        <div className="bg-gray-500/50 fixed top-0 left-0 right-0 z-50 w-full p-4 flex justify-center items-center overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full">
            <div className="relative w-full max-w-lg max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            {prop.name}
                        </h3>
                        <button onClick={() => prop.close()} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 grid grid-cols-1 place-items-center gap-y-2">
                        <div className="flex justify-between items-center space-x-2">
                            <div className="w-full h-[100px] sm:h-[200px]">
                                {prop.img1 && <PetImg img={require(`../../images/pets/${prop.img1}`)} />}
                            </div>
                            {prop.img2 && <div className="w-full h-[100px] sm:h-[200px]">
                                <PetImg img={require(`../../images/pets/${prop.img2}`)} />
                            </div>}
                        </div>
                        <div className="flex justify-between items-center space-x-2">
                            {prop.img3 && <div className="w-full h-[100px] sm:h-[200px]">
                                <PetImg img={require(`../../images/pets/${prop.img3}`)} />
                            </div>}
                            {prop.img4 && <div className="w-full h-[100px] sm:h-[200px]">
                                <PetImg img={require(`../../images/pets/${prop.img4}`)} />
                            </div>}
                            {prop.img5 && <div className="w-full h-[100px] sm:h-[200px]">
                                <PetImg img={require(`../../images/pets/${prop.img5}`)} />
                            </div>}
                        </div>
                    </div>
                    <div className="p-4 md:p-5">
                        {prop.desc}
                    </div>
                    <div className="p-4 md:p-5">
                        {prop.name} is a {prop.breed} {prop.type} breed. Its origin country is {prop.origin} and is expected to live around {prop.min} - {prop.max} years.
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PetModal