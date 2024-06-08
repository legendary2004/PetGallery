import React from "react";
import MainNav from "../components/navs/mainnav/MainNav.tsx";
import Footer from "../components/footer/Footer.tsx";
import AboutIntro from "../components/intro/AboutIntro.tsx";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdSecurity, MdStarRate } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { RiRefund2Fill } from "react-icons/ri";
import { GiSittingDog } from "react-icons/gi";
import Team from "../components/intro/AboutTeam.tsx";

function About() {
    return (
        <>
            <MainNav />
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">Who are we?</h2>
                        <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-center px-10">UK’s largest online pet gallery, relied upon by up to 7 million people monthly, and helps rehome over 2,500 pets each day. Founded in 2005 and acquired by Pet Media Group in August 2019, Pet Store prioritises responsible practices and works to ensure trust, safety, and convenience for buyers and sellers.</p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <AboutIntro 
                            label="Trusted" 
                            desc="Pet Gallery connects a high volume of serious buyers with responsible breeders and is also trusted by a number of leading UK animal shelters and charities" 
                            icon={<VscWorkspaceTrusted className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} 
                        />
                        <AboutIntro
                            label="Security"
                            desc="Pet Gallery provides a safe environment in which to find their dream pet, alongside expert advice on animal health and veterinary care, tips on what to look for in a reputable breeder, and secured user's data."
                            icon={<MdSecurity className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} 
                        />
                        <AboutIntro
                            label="Double check"
                            desc="We manually approve the majority of adverts that are placed on our Pet Gallery website in addition to applying other tools and safeguards."
                            icon={<FaCheckDouble className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />} 
                        />
                        <AboutIntro
                            label="Refund"
                            desc="You can request to return a pet or accessory within 7 days after the purchase. Full money back guaranteed."
                            icon={<RiRefund2Fill className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />}
                        />
                        <AboutIntro
                            label="Animal welfare, regulations and advice"
                            desc="Pet Gallery has a zero tolerance approach to puppy farming and the unethical selling of animals."
                            icon={<GiSittingDog className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />}
                        />
                        <AboutIntro
                            label="High rating"
                            desc="Pet Gallery has earned a rating of 4.3 out of 5 stars on Trustpilot (with over 9,000 reviews and counting!)."
                            icon={<MdStarRate className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />}
                        />
                    </div>
                </div>
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                        <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">Explore our passionate team with many years of experience working for this company. </p>
                        </div>
                        <ul role="list" className="grid gap-x-5 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2">
                            <Team 
                                name="Leslie Alexander" 
                                role="Founder / CEO"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            />
                            <Team 
                                name="Bonnie Green" 
                                role="Co-Founder"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                            />
                            <Team 
                                name="Jese Leos" 
                                role="Front end developer"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                            />
                            <Team 
                                name="Michael Gough" 
                                role="Back end developer"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                            />
                            <Team 
                                name="Dries Vincent" 
                                role="Back end developer"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
                            />
                            <Team 
                                name="Leslie Alexander" 
                                role="Front end developer"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            />
                            <Team 
                                name="Bonnie Green" 
                                role="Front end developer"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                            />
                            <Team 
                                name="Jese Leos" 
                                role="Animal analysis"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                            />
                            <Team 
                                name="Michael Gough" 
                                role="Animal analysis"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                            />
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About