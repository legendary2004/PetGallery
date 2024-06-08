import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './pages/Main.tsx';
import Contact from './pages/Contact.tsx';
import About from './pages/About.tsx';
import Gallery from './pages/Gallery.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import AdminPanel from "./pages/AdminPanel.tsx";
import AddPet from "./pages/AddPet.tsx";
import { initFlowbite } from "flowbite";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/addPet" element={<AddPet />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

