import React from "react";

function GalleryIntro() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Our gallery</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Welcome to our Pet Gallery. Here, you'll find stories of resilience, love, and the joy that our pets bring into our lives. Let these photos inspire you and remind you of the simple pleasures and profound connections that pets offer</p>
                </div>
                <div className="lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="https://t4.ftcdn.net/jpg/00/81/95/19/360_F_81951964_WW9pQsXZ4OwshXHEySZXHcuy7mEFNF9k.jpg" alt="mockup" />
                </div>                
            </div>
        </section>
    )
}

export default GalleryIntro