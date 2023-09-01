import React from "react";
import 'tailwindcss/tailwind.css'
import Footer from "./Footer";
import Link from "next/link";

const Landing = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-[url('https://i.pinimg.com/564x/ae/bb/67/aebb672aca191a7bae8668a3592ebafb.jpg')] bg-cover bg-no-repeat bg-center first-letter:">
            <div className="w-100 p-10">
            <h3 className="text-3xl animate-fade-in-y transition ease-in duration-500">¡Bienvenidx a mi portafolio!</h3>
                <div className="flex items-center justify-center pt-5 animate-fade-up-x">
                <Link href={'/home'}>
                    <h3 class="border border-solid border-gray-500 rounded-sm px-4 py-2 text-xs uppercase leading-tight text-gray-700 font-bold bg-opacity-60 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:bg-white hover:text-gray-700 hover:scale-110 cursor-pointer mt-2">Te invito a conocer un poco sobre mí</h3>
                </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Landing;

{/*
<div className="flex items-center justify-center h-screen">
            <div className="w-100 p-10">
                <h1 className="text-center text-5xl font-semibold mb-5"> Malena Valdez</h1>
                <h4 className=" text-center text-gray-600">Full Stack Developer</h4>
                <div className="flex items-center justify-center pt-5">
                <h3 class="border border-solid border-black rounded-sm px-4 py-2 text-xs uppercase leading-tight text-gray-700 font-bold bg-opacity-60 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:bg-black hover:text-white hover:scale-110 cursor-pointer absolute mt-10">Te invito a conocer un poco sobre mí</h3>
                </div>
            </div>
            <div className="w-50">
                <img className="bg-gray-300 w-full h-auto rounded-full" src="https://i.ibb.co/jMvbRsF/avatar.png" alt="avatar" />
            </div>
        </div>
     */}