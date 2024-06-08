import { initFlowbite } from "flowbite";
import MainNav from "../components/navs/mainnav/MainNav.tsx";
import React, { useEffect } from "react";
import Intro from "../components/intro/MainIntro.tsx";
import CardComponent from "../cards/Main/CardComponent.tsx";
import Tab from "../components/navs/maintab/Tab.tsx";
import MainPageHeading1 from "../components/headers/Heading1.tsx";
import PetCard from "../cards/Main/Card2.tsx";
import Footer from "../components/footer/Footer.tsx";

export default function Main() {
    setTimeout(() => {
        initFlowbite()
    }, 500)


    return (
        <>
            <MainNav />
            <Intro />
            <MainPageHeading1 label="Explore pets" />
            <Tab />
            <Footer />
        </>
        
    )
}