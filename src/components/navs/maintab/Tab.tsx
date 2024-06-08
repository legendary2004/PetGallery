import React, { useEffect, useState } from "react";
import TabList from "./TabList.tsx";
import axios from "axios";
import PetCard from "../../../cards/Main/Card2.tsx";
import PetsClass from "../../classes/PetsClass.tsx";
import { pet } from "../../../interface.tsx";
import PetModal from "../../modals/PetModal.tsx";

const petObj = {
    id: "",
    name: "", 
    type: "", 
    breed: "", 
    desc: "", 
    min: 0, 
    max: 0, 
    origin: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: ""
}

function Tab() {
    const [pets, setPets] = useState([])
    const [filteredPets, setFilteredPets] = useState([]) 
    const [activeLabel, setActiveLabel] = useState("Dogs")
    const [pet, setPet] = useState(petObj)

    useEffect(() => {
        axios.post("http://localhost:5000/allPets")
        .then(res => {
            const filteredResults = res.data.pets.filter(item => item.type == 'Dog')
            setPets(res.data.pets)
            setFilteredPets(filteredResults)
        })
    }, [])

    const changeType = (type, label) => {
        const filteredResults = pets.filter(item => item.type == type)
        setFilteredPets(filteredResults)
        setActiveLabel(label)
    }

    const getPetId = (id) => {
        axios.post("http://localhost:5000/singlePet", {id})
        .then(res => setPet(res.data.pet))
    }

    useEffect(() => {
        console.log(pet)
    }, [pet])

    return (
        <div className="my-5 grid grid-cols-1 place-items-center gap-y-2">
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
                    <TabList handleClick={() => changeType("Dog", "Dogs")} label="Dogs" selected={activeLabel  == "Dogs" ? true : false}/>
                    <TabList handleClick={() => changeType("Cat", "Cats")} label="Cats" selected={activeLabel == "Cats" ? true : false}/>
                    <TabList handleClick={() => changeType("Bird", "Birds")} label="Birds" selected={activeLabel == "Birds" ? true : false}/>
                </ul>
            </div>
            <PetsClass>
                {filteredPets.length > 0 && filteredPets.map((item: pet) => {
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
                            extend={() => getPetId(item.id)}
                        />
                    )
                })}
            </PetsClass>
            {pet.id && <PetModal
                id={pet.id} 
                name={pet.name}
                type={pet.type}
                breed={pet.breed}
                desc={pet.desc}
                origin={pet.origin}
                min={pet.min}
                max={pet.max}
                img1={pet.img1}
                img2={pet.img2}
                img3={pet.img3}
                img4={pet.img4}
                img5={pet.img5}
                close={() => setPet(petObj)}
            />}
        </div>
    )
}

export default Tab