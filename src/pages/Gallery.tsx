import React, { FormEvent, useContext, useEffect, useState } from "react";
import GalleryIntro from "../components/intro/GalleryIntro.tsx";
import MainNav from "../components/navs/mainnav/MainNav.tsx";
import Footer from "../components/footer/Footer.tsx";
import SearchPet from "../components/inputs/SearchInput.tsx";
import SelectInput from "../components/inputs/Select.tsx";
import PetCard from "../cards/Main/Card2.tsx";
import axios from "axios";
import { pet } from "../interface.tsx";
import { petArray } from "../components/variables/arrays/petArrays.tsx";
import { PetSearchContext } from "../contexts/SearchPetContext.tsx";
import PetsClass from "../components/classes/PetsClass.tsx";

function Gallery() {
    const searchContext = useContext(PetSearchContext) 
    const [pets, setPets] = useState([])
    const [filteredPets, setFilteredPets] = useState([])
    const [formProp, setFormProp] = useState({name: "", type: "All categories", breed: ""})
    const [petName, setPetName] = useState("")
    const [currentBreedOptions, setCurrentBreedOptions] = useState([])


    useEffect(() => {
        axios.post("http://localhost:5000/allPets")
        .then(res => {
            setPets(res.data.pets)
            setFilteredPets(res.data.pets)
        })
    }, [])

    const handleFormChange = (e: FormEvent<HTMLInputElement>) => {
        const {id, value} = e.currentTarget

        setFormProp(prev => {
            return {
                ...prev,
                [id]: value
            }
        })
    }

    const filterByName = () => {
        setPetName(formProp.name)
    }

    const filterByType = (pets) => {
        const filteredResults = pets.filter(pet => pet.type.toLowerCase() == formProp.type.toLowerCase())
        if (formProp.type == 'All categories') return pets
        else return filteredResults
    }

    useEffect(() => {
        petArray.map(item => {
            if (item.type == formProp.type) setCurrentBreedOptions(item?.breed)
            else if (formProp.type == "All categories") setCurrentBreedOptions([])
        })
    }, [formProp.type])

    useEffect(() => {
        const pet1 = filterByType(pets)
        const pet2 = searchContext.searchByBreed(formProp.breed, pet1)
        if (petName) {
            const pet3 = searchContext.searchByName(petName, pet2)
            setFilteredPets(pet3)
        }
        else setFilteredPets(pet2)
    }, [formProp.type, formProp.breed, petName])

    return (
        <>
            <MainNav />
            <GalleryIntro />
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="flex flex-wrap justify-between items-center space-y-4 sm:space-y-0">
                    <SearchPet 
                        id="name"
                        label=""
                        type="text"
                        value={formProp.name}
                        isRequired={false}
                        handleChange={handleFormChange}
                        placeholder="Pet name..."
                        selectId="type"
                        selectValue={formProp.type}
                        click={filterByName}
                    />
                    <SelectInput
                        id="breed"
                        value={formProp.breed}
                        label=""
                        require={false}
                        handleChange={handleFormChange}
                        content={
                            <>
                                <option></option>
                                {currentBreedOptions.map(item => {return <option key={item}>{item}</option>})}
                            </>
                        }
                    />
                </div>
                <PetsClass>
                    {filteredPets.map((item: pet) => {
                        return (
                            <PetCard 
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                type={item.type}
                                breed={item.breed}
                                min={item.min}
                                max={item.max}
                                img1={item.img1}
                            />
                        )
                    })}
                </PetsClass>
            </div>
            <Footer />
        </>
    )
}

export default Gallery