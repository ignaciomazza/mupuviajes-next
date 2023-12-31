"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Header() {

    const [buscador, setBuscador] = useState("");
    const router = useRouter();


    return (
        <header className='flex justify-center items-center h-[90vh] w-full bg-center bg-cover bg-[url("https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
            <div className='h-full w-full flex justify-center items-center bg-gradient-to-t from-[#000000] via-[#00000000] to-[#00000000]'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h1 className='text-white font-black text-7xl md:text-8xl tracking-widest text-center'>MUPU VIAJES</h1>
                    <form action="" className='flex justify-center items-center w-[80%] py-1 sm:py-0 text-xl sm:text-base  bg-[#00000060] backdrop-blur-sm border border-[#ffffff05] rounded-md shadow-xl' onSubmit={(e) => {
                        e.preventDefault()
                        setBuscador(`/busqueda/${e.target.search.value}`)
                        router.push(buscador)
                    }}>
                        <input type="text" placeholder='Buscar' className='text-white font-light w-[89%] sm:w-[94%] bg-transparent outline-none py-1' name='search' />
                        <button><MagnifyingGlassIcon className='h-7 sm:h-5 text-white' /></button>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header