"use client"
import { React, useState } from 'react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function NavBar() {

    const [menu, setMenu] = useState(false)

    return (
        <nav className='w-[100%] fixed top-0 z-20'>
            <div className='p-2 z-20 w-[100%] flex justify-between items-center'>
                {!menu && <p className='text-white font-black tracking-wide hover:cursor-pointer'>MUPU VIAJES</p>}
                {!menu && <Bars3Icon className='h-8 text-white hover:cursor-pointer' onClick={() => setMenu(true)} />}
            </div>
            {menu && <div className='flex flex-col items-center fixed top-0 left-0 z-10 h-full w-full bg-center bg-cover backdrop-blur-2xl'>
                <div className='fixed left-0 p-2 '>
                    <p className='flex justify-center items-center text-white font-black tracking-wide h-[32px] hover:cursor-pointer'>MUPU VIAJES</p>
                </div>
                <div className='fixed right-0 p-2'>
                    <XMarkIcon className='h-8 text-white hover:cursor-pointer' onClick={() => setMenu(false)} />
                </div>
                <div className='h-[10vh] w-[50%]'>
                    <form action="" className='flex justify-center items-center my-2 w-full bg-[#ffffff12] backdrop-blur-sm border border-[#ffffff05] rounded-md shadow-xl'>
                        <input type="text" placeholder='Buscar' className='text-white font-light py-1 w-[93%] bg-transparent outline-none' />
                        <button><MagnifyingGlassIcon className='h-5 text-white' /></button>
                    </form>
                </div>
                <div className='h-[90vh]'>
                    <ul className='flex flex-col items-center justify-evenly text-white h-full py-9'>
                        <li className='hover:cursor-pointer opacity-60 hover:opacity-100 transition-opacity'>Inicio</li>
                        <li className='hover:cursor-pointer opacity-60 hover:opacity-100 transition-opacity'>Viajes</li>
                        <li className='hover:cursor-pointer opacity-60 hover:opacity-100 transition-opacity'>Blog</li>
                        <li className='hover:cursor-pointer opacity-60 hover:opacity-100 transition-opacity'>Nosotros</li>
                        <li className='hover:cursor-pointer opacity-60 hover:opacity-100 transition-opacity'>Contactanos</li>
                    </ul>
                </div>
            </div>}
        </nav>
    )
}

export default NavBar