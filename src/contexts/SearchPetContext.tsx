import React, { createContext } from "react";
import { petSearchContext } from "../interface";

export const PetSearchContext = createContext<petSearchContext>({
    searchByName() {},
    searchByType() {},
    searchByBreed() {}
})
function PetSearchContextProvider({children}) {
    function searchByName(name, pets) {
        const filteredResults = pets.filter(pet => pet.name.toLowerCase().includes(name.toLowerCase()))
        return filteredResults
    }

    function searchByType(typeArray, pets) {
        let typeChecked = ''

        typeArray.map(item => {
            if (item.isChecked) typeChecked = item.type
        })

        const filteredResults = pets.filter(pet => pet.type.toLowerCase() == typeChecked.toLowerCase())
        if (typeChecked == 'all') return pets
        else return filteredResults
    }

    function searchByBreed(breed, pets) {
        const filteredResults = pets.filter(pet => pet.breed.toLowerCase() == breed.toLowerCase())
        if (!breed) return pets
        else return filteredResults
    }

    return (
        <PetSearchContext.Provider value={{searchByName, searchByType, searchByBreed}}>
            {children}
        </PetSearchContext.Provider>
    )
}

export default PetSearchContextProvider