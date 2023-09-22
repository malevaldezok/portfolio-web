'use client'
import React from "react";

const NavBar = () => {
    return (
        <nav className="bg-gray-400 bg-opacity-5 text-black shadow-lg w-full fixed top-0 z-10">
            <div className="container mx-auto flex justify-between items-center h-20">
            <div className="mr-10">
                <a href="/" className="flex items-center justify-center">
                    <img src="https://i.ibb.co/N7P9BT7/1.png" className="h-16" />
                </a>
            </div>
                <div className="hidden md:flex space-x-15">
                    <ul className="flex items-center space-x-7">
                        <li className="active hover:font-bold hover:bg-white hover:text-gray-700 cursor-pointer"><a>Home</a></li>
                        <li className="active hover:font-bold hover:bg-white hover:text-gray-700 cursor-pointer"><a>Sobre mí</a></li>
                        <li className="active hover:font-bold hover:bg-white hover:text-gray-700 cursor-pointer"><a>Proyectos</a></li>
                        <li className="active hover:font-bold hover:bg-white hover:text-gray-700 cursor-pointer"><a>Contacto</a></li>
                    </ul>
                </div>
                <div className="md:hidden flex space-x-2">
                    <button className="text-2xl">&#9776;</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;