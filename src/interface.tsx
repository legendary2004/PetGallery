import { ReactNode } from "react";

export interface input {
    id: string;
    placeholder: string;
    type: string;
    label: string;
    handleChange: Function;
    isRequired: boolean
}

export interface strInput extends input {
    value: string;
}

export interface boolInput extends input {
    isChecked: boolean;
}

export interface passInput extends input {
    value: string;
    isVisible: boolean;
    changeVisibility: Function;
}

export interface numberInput extends input {
    value: number;
    min: number;
    max: number;
}

export interface flexInput extends input {
    value: string;
    selectId: string;
    selectValue: string;
    click: Function;
}

export interface user {
    id: number;
    f_name: string;
    l_name: string;
    email: string;
    password: string;
    profile_img: string;
    isAdmin: boolean;
}

export interface loginContext {
    user: user;
    msg: string;
    handleLogin: Function;
    signOut: Function;
}

export interface petTableRow {
    id: number;
    name: string;
    type: string;
    breed: string;
    lifespan: string;
    update: Function;
    delete: Function;
}

export interface pet {
    id: number
    name: string;
    type: string;
    breed: string;
    min: number;
    max: number;
    img1: string;
    extend: Function;
}

export interface petOverview extends pet {
    desc: string;
    origin: string;
    img2: string | null;
    img3: string | null;
    img4: string | null;
    img5: string | null;
    close: Function;
}

export interface petContext {
    pet: pet;
    action: string;
    getPet: Function
}

export interface petSearchContext {
    searchByName: Function;
    searchByType: Function;
    searchByBreed: Function;
}