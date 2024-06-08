import React, { FormEvent, useContext, useEffect, useState } from "react";
import FormClass from "../components/classes/FormClass.tsx";
import Brand from "../components/navs/mainnav/NavBrand.tsx";
import FormInput from "../components/inputs/FormInput.tsx";
import SelectInput from "../components/inputs/Select.tsx";
import TextArea from "../components/inputs/Textarea.tsx";
import NumberInput from "../components/inputs/NumberInput.tsx";
import FormButton from "../components/buttons/ConfirmForm.tsx";
import { FcAddImage } from "react-icons/fc";
import RemoveImg from "../components/badge/RemoveImg.tsx";
import axios from "axios"
import { PetUpdate } from "../contexts/petUpdate.tsx";
import ResultModal from "../components/modals/ResultModal.tsx";
import { petArray } from "../components/variables/arrays/petArrays.tsx";

const petObj = {
    name: "", 
    type: "", 
    breed: "", 
    desc: "", 
    min: "", 
    max: "", 
    origin: ""
}

function AddPet() {
    const petUpdate = useContext(PetUpdate)
    const [currentBreedOption, setCurrentBreedOption] = useState(petArray[0].breed)
    const [formProp, setFormProp] = useState(petObj)
    const [imgCollection, setImgCollection] = useState([])
    const [msg, setMsg] = useState('')

    useEffect(() => {
        if (petUpdate.action == 'edit') {
            setFormProp({
                name: petUpdate.pet?.name,
                type: petUpdate.pet?.type,
                breed: petUpdate.pet?.breed,
                desc: petUpdate.pet?.desc,
                origin: petUpdate.pet?.origin,
                min: petUpdate.pet?.min,
                max: petUpdate.pet?.max,
            })
        }
        else if (petUpdate.action == 'add') {
            setFormProp(petObj)
        }
    }, [petUpdate])

    useEffect(() => {
        if (!formProp.type) setCurrentBreedOption([])
        else {
            petArray.map(item => {
                if (item.type == formProp.type) {
                    setCurrentBreedOption(item.breed)
                }
            })
        }
    }, [formProp.type])

    const handleFormChange = (e: FormEvent<HTMLInputElement>) => {
        const {id, value} = e.currentTarget

        setFormProp(prev => {
            return {
                ...prev,
                [id]: value
            }
        })
    }

    const handleImgChange = (e: FormEvent<HTMLInputElement>) => {
        const oldImg = [...imgCollection]
        if (e.currentTarget?.files && e.currentTarget?.files?.length > 0) {
            for (let i = 0; i < e.currentTarget?.files?.length; i++) {
                if (oldImg.length < 5) {
                    oldImg.push(e.currentTarget?.files[i])
                }
                
            }
        }
        setImgCollection(oldImg)
    }

    const removeImg = (index) => {
        const oldImg = [...imgCollection]
        oldImg.splice(index, 1)
        setImgCollection(oldImg)
    }

    const confirmForm = (e: FormEvent) => {
        e.preventDefault()
        if (imgCollection.length == 0) setMsg("Required at least one image to add pet to database") 
        else {
            const postUrl = petUpdate.action == 'add' ? "http://localhost:5000/addPet" : "http://localhost:5000/updatePet"
            const formData = new FormData()

            petUpdate.pet?.id && formData.append("id", petUpdate.pet?.id)
            formData.append("name", formProp.name.charAt(0).toUpperCase() + formProp.name.slice(1).toLowerCase())
            formData.append("type", formProp.type)
            formData.append("breed", formProp.breed)
            formData.append("desc", formProp.desc)
            formData.append("origin", formProp.origin)
            formData.append("min", formProp.min)
            formData.append("max", formProp.max)
            imgCollection.map(item => {
                formData.append("images", item)
            })
            
            axios.post(postUrl, formData)
            .then(res => setMsg(res.data.message))
            .catch(err => console.log(err))
        } 
    }
    return (
        <FormClass>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="flex justify-center">
                    <Brand />
                </div>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Add Pet</h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-4" onSubmit={confirmForm}>
                    <FormInput
                        id="name"
                        type="text"
                        value={formProp.name}
                        label="Pet name"
                        isRequired={true}
                        handleChange={handleFormChange}
                        placeholder="Pet name..."
                    />
                    <div className="flex justify-between items-center space-x-2">
                        <div className="w-full">
                            <SelectInput 
                                id="type" 
                                label="Pet type" 
                                isRequired={true} 
                                value={formProp.type} 
                                handleChange={handleFormChange} 
                                content={<>
                                    <option></option>
                                    {petArray.map(item => {return <option key={item.type}>{item.type}</option>})}
                                </>}
                            />
                        </div>
                        <div className="w-full">
                            <SelectInput 
                                id="breed" 
                                label="Pet Breed" 
                                isRequired={true} 
                                value={formProp.breed} 
                                handleChange={handleFormChange} 
                                content={
                                    <>
                                        <option></option>
                                        {currentBreedOption.map(breed => { return <option key={breed}>{breed}</option> })}
                                    </>
                                }
                            />
                        </div>
                    </div>
                    <TextArea
                        id="desc"
                        value={formProp.desc}
                        type=""
                        label="Pet description"
                        isRequired={true}
                        handleChange={handleFormChange}
                        placeholder="Pet desc..."
                    />
                    <div className="flex justify-between items-start space-x-2">
                        <div className="w-full">
                            <FormInput
                                id="origin"
                                type="text"
                                value={formProp.origin}
                                label="Pet country origin"
                                isRequired={true}
                                handleChange={handleFormChange}
                                placeholder="Pet origin..."
                            />
                        </div>
                        <div className="w-full">
                            <div className="flex justify-between items-end space-x-2">
                                <div className="w-full">
                                    <NumberInput
                                        id="min"
                                        type="number"
                                        value={formProp.min}
                                        label="Lifespan"
                                        isRequired={true}
                                        handleChange={handleFormChange}
                                        placeholder="from"
                                        min={0}
                                        max={50}
                                    />
                                </div>
                                <div className="w-full">
                                    <NumberInput
                                        id="max"
                                        type="number"
                                        value={formProp.max}
                                        label="  "
                                        isRequired={true}
                                        handleChange={handleFormChange}
                                        placeholder="to"
                                        min={Number(formProp.min)}
                                        max={100}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload images(max 5)</p>
                    <div className="grid grid-cols-3 place-items-start space-3 border rounded-lg h-56 p-5 bg-gray-50">
                        <div className="flex items-center justify-center">
                            <label htmlFor="file"><FcAddImage className="w-20 h-20 cursor-pointer" /></label>
                            <input id="file" name="file" type="file" onChange={handleImgChange} className="hidden" multiple accept="image/*"/>
                        </div>
                        {imgCollection.map((item, index)=> { return <RemoveImg key={index} img={item} removeImg={() => removeImg(index)} />})}
                        

                    </div>
                    <FormButton label="Confirm" />
                </form>
            </div>
            {msg && <ResultModal msg={msg} closeModal={() => setMsg("")} />}
        </FormClass>
    )
}

export default AddPet