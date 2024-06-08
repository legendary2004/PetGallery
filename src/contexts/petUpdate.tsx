import React, { createContext, useState, useEffect } from "react";
import { pet, petContext } from "../interface";
import axios from "axios";

export const PetUpdate = createContext<petContext>({
    pet: {
        id: 0,
        name: "",
        type: "",
        breed: "",
        desc: "",
        origin: "",
        min: 0,
        max: 0,
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",
    },
    action: '',
    getPet() {}
})

function PetUpdateProvider({children}) {
    const [pet, setPet] = useState({
        id: 0,
        name: "",
        type: "",
        breed: "",
        desc: "",
        origin: "",
        min: 0,
        max: 0,
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",
    })
    const [action, setAction] = useState('')
    
    function getPet(id, action) {
        axios.post("http://localhost:5000/singlePet", { id })
        .then(res => {
            if (res.data.pet) setPet(res.data.pet)
            setAction(action)
        })
    }

    useEffect(() => {
        const currentPet = JSON.parse(window.localStorage.getItem('pet') || '""');
        if (currentPet) {
            setPet(currentPet);
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem('pet', JSON.stringify(pet));
    }, [pet]);

    useEffect(() => {
        const currentAction = window.localStorage.getItem('action') || '""';
        if (currentAction) {
            setAction(currentAction);
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem('action', action);
    }, [pet]);

    return (
        <PetUpdate.Provider value={{pet, action, getPet}}>
            {children}
        </PetUpdate.Provider>
    )
}

export default PetUpdateProvider