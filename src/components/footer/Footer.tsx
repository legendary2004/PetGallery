import React from "react";
import Brand from "../navs/mainnav/NavBrand.tsx";
import Link from "./Link.tsx";
import SocialLink from "./SocialLink.tsx";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        

        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <Brand />
                    <div className="my-5 sm:my-0">
                        <ul className="flex flex-wrap space-x-3 text-gray-500 dark:text-gray-400 font-medium">
                            <Link label="Home" link="/"/>
                            <Link label="Gallery" link="/gallery"/>
                            <Link label="About us" link="/about"/>
                            <Link label="Contact us" link="/contact"/>
                        </ul>
                    </div>
                </div>
            <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
            <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Pet Store ™. All Rights Reserved.
                </span>
                <div className="flex mt-4 sm:justify-center sm:mt-0">
                    <SocialLink social={<FaInstagram className="w-5 h-5"/>} />
                    <SocialLink social={<FaFacebook className="w-5 h-5"/>} />
                    <SocialLink social={<FaLinkedin className="w-5 h-5" />} />
                    <SocialLink social={<FaYoutube className="w-5 h-5" />} />
                    <SocialLink social={<FaTiktok className="w-5 h-5"/>} />
                </div>
            </div>
            </div>
        </footer>

    )
}

export default Footer