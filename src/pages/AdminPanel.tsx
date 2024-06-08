import { initFlowbite } from "flowbite";
import React, { FormEvent, useContext, useEffect, useState } from "react";
import SearchInput from "../components/inputs/SearchInput.tsx";
import TableRow from "../components/table/TableRow.tsx";
import MainNav from "../components/navs/mainnav/MainNav.tsx";
import Footer from "../components/footer/Footer.tsx";
import axios from "axios";
import { PetUpdate } from "../contexts/petUpdate.tsx";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../components/modals/DeleteModal.tsx";
import PetType from "../components/lists/PetType.tsx";
import { PetSearchContext } from "../contexts/SearchPetContext.tsx";

function AdminPanel() {
    const navigate = useNavigate()
    const petUpdate = useContext(PetUpdate)
    const searchContext = useContext(PetSearchContext)
    const [pets, setPets] = useState([])
    const [filteredPets, setFilteredPets] = useState([])
    const [modal, setModal] = useState(false)
    const [petName, setPetName] = useState("")
    const [petId, setPetId] = useState("")
    const [typeCheck, setTypeCheck] = useState([
        {type: "all", isChecked: true},
        {type: "dog", isChecked: false},
        {type: "cat", isChecked: false},
        {type: "bird", isChecked: false}
    ])

    setTimeout(() => {
        initFlowbite()
    }, 500)

    useEffect(() => {
        axios.post("http://localhost:5000/allPets")
        .then(res => {
            setPets(res.data.pets)
            setFilteredPets(res.data.pets)
        })
        .catch(err => console.log(err))
    }, [])

    const handlePetSearch = (e: FormEvent<HTMLInputElement>) => {
        const id = e.currentTarget.id;
        const oldCheck = [...typeCheck]

        oldCheck.map(item => {
            if (item.type == id) item.isChecked = true
            else item.isChecked = false
        })
        setTypeCheck(oldCheck)
    }

    // const radioFilter = (pets) => {
    //     let typeChecked = ''
    //     typeCheck.map(item => {
    //         if (item.isChecked) {
    //             typeChecked = item.type;
    //         }
    //     })
    //     const filteredResults = pets.filter(pet => pet.type.toLowerCase() == typeChecked)
    //     if (typeChecked == 'all') return pets
    //     else return filteredResults
    // }

    // const searchPet = (pets) => {
    //     const capPetName = petName.charAt(0).toUpperCase() + petName.slice(1).toLowerCase()
    //     const filteredResults = pets.filter(pet => pet.name.includes(capPetName))
    //     return filteredResults
    // }

    const openDeleteModal = (id) => {
        setPetId(id)
        setModal(true)
    }

    useEffect(() => {
        const pet1 = searchContext.searchByType(typeCheck, pets)
        if (petName) {
            const pet2 = searchContext.searchByName(petName, pet1)
            setFilteredPets(pet2)
        }
        else setFilteredPets(pet1)
    }, [pets, typeCheck, petName])

    const updatePet = (id, action) => {
        petUpdate.getPet(id, action)
        if (action == 'add' || action == 'edit') navigate("/addPet")
        else if (action == 'delete') {
            axios.post("http://localhost:5000/deletePet", { id })
            .then(res => {
                setPets(res.data.pets)
            })
        } 
    }



    return (
        <div className="min-h-screen">
            <MainNav />
            <section className="bg-gray-50 min-h-[calc(100vh-200px)] dark:bg-gray-900 p-3 sm:p-5">
                <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                    
                    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                            <div className="w-full md:w-1/2">
                                <div className="flex items-center">
                                    <label htmlFor="petName" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <input type="text" id="petName" value={petName} onChange={(e) => setPetName(e.currentTarget.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required={false} />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                <button onClick={() => updatePet('', "add")} type="button" className="flex items-center justify-center text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                                    <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                    </svg>
                                    Add pet
                                </button>
                                <div className="flex items-center space-x-3 w-full md:w-auto">
                                    <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                                        </svg>
                                        Filter
                                        <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                        </svg>
                                    </button>
                                    <div id="filterDropdown" className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                                        <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose pet type</h6>
                                        <ul className="space-y-2 text-sm">
                                            {typeCheck.map(item => {
                                                return (
                                                    <PetType
                                                        key={item.type}
                                                        id={item.type}
                                                        type="radio"
                                                        isChecked={item.isChecked}
                                                        handleChange={(e) => handlePetSearch(e)}
                                                        isRequired={false}
                                                        placeholder=""
                                                        label={item.type.charAt(0).toUpperCase() + item.type.slice(1).toLowerCase()}
                                                    />
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto h-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">Pet name</th>
                                        <th scope="col" className="px-4 py-3">Type</th>
                                        <th scope="col" className="px-4 py-3">Breed</th>
                                        <th scope="col" className="px-4 py-3">Life expetancy</th>
                                        <th scope="col" className="px-4 py-3">
                                            <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredPets.map(pet => {
                                        return (
                                            <TableRow
                                                key={pet.id}
                                                id={pet.id}
                                                name={pet.name}
                                                type={pet.type}
                                                breed={pet.breed}
                                                lifespan={`${pet.min}-${pet.max}`}
                                                update={() => updatePet(pet.id, "edit")}
                                                delete={() => openDeleteModal(pet.id)}
                                            />
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            {modal && <DeleteModal closeModal={() => setModal(false)} deletePet={() => {
                updatePet(petId, "delete")
                setModal(false)
            }} />}
            <Footer />
        </div>
       
    )
}

export default AdminPanel