import React from "react";
import MainPageHeading1 from "../../components/headers/Heading1.tsx";
import Card1 from "./Card1.tsx";
import Card2 from "./Card2.tsx";

function CardComponent() {
    return (
        <div className="my-2">
            <MainPageHeading1 />
            <div className="h-[500px] w-full flex flex-wrap justify-center items-start gap-x-2 gap-y-2">
                <Card2 />
                <div className="grid grid-cols-1 gap-y-2">
                    <Card1 />
                    <Card1 />
                    <Card1 />
                </div>
            </div>
        </div>
    )
}

export default CardComponent