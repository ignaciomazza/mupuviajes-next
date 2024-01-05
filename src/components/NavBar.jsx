"use client"
import { React, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from 'next/link';

function NavBar() {

    const [menu, setMenu] = useState(false)
    const [buscador, setBuscador] = useState("");
    const router = useRouter();

    return (
        <nav className='w-[100%] fixed top-0 z-50'>
            <div className='p-2 z-20 w-[100%] flex justify-between items-center'>
                {!menu && <Link href={`/`} className='text-white font-black tracking-wide hover:cursor-pointer hover:scale-105 transition-transform'>MUPU VIAJES</Link>}
                {!menu && <Bars3Icon className='h-8 text-white hover:cursor-pointer hover:scale-105 transition-transform' onClick={() => setMenu(true)} />}
            </div>
            {menu && <div className='flex flex-col items-center fixed top-0 left-0 z-10 h-full w-full bg-center bg-cover backdrop-blur-2xl'>
                <div className='fixed left-0 p-2 '>
                    <Link href={`/`} className='flex justify-center items-center text-white font-black tracking-wide h-[32px] hover:cursor-pointer hover:scale-105 transition-transform'>MUPU VIAJES</Link>
                </div>
                <div className='fixed right-0 p-2'>
                    <XMarkIcon className='h-8 text-white hover:cursor-pointer hover:scale-105 transition-transform' onClick={() => setMenu(false)} />
                </div>
                <div className='h-[10vh] w-[50%]'>
                    <form action="" className='flex justify-center items-center my-2 w-full bg-[#ffffff12] backdrop-blur-sm border border-[#ffffff05] rounded-md shadow-xl' onSubmit={(e) => {
                        e.preventDefault()
                        setBuscador(`/busqueda/${e.target.search.value}`)
                        setMenu(false)
                        router.push(buscador)
                    }}>
                        <input type="text" placeholder='Buscar' name='search' className='text-white font-light py-1 w-[93%] bg-transparent outline-none' />
                        <button><MagnifyingGlassIcon className='h-5 text-white hover:scale-105 transition-transform' /></button>
                    </form>
                </div>
                <div className='h-[90vh]'>
                    <ul className='flex flex-col items-center justify-evenly text-white h-full py-9'>
                        <li className='hover:cursor-pointer opacity-60 hover:opacity-100 transition-opacity'><Link href={`/`} onClick={() => setMenu(false)}>Inicio</Link></li>
                        <li className='hover:cursor-pointer opacity-60 hover:opacity-100 transition-opacity'><Link href={`/viajes`} onClick={() => setMenu(false)}>Viajes</Link></li>
                        {/* <li className='hover:cursor-pointer opacity-60 hover:opacity-100 transition-opacity'><Link href={`/blog`}>Blog</Link></li> */}
                        <li className='hover:cursor-pointer opacity-60 hover:opacity-100 transition-opacity'><Link href={`/nosotros`} onClick={() => setMenu(false)}>Nosotros</Link></li>
                        <li className='hover:cursor-pointer opacity-60 hover:opacity-100 transition-opacity'><Link href={`/contacto`} onClick={() => setMenu(false)}>Contactanos</Link></li>
                    </ul>
                </div>
            </div>}
        </nav >
    )
}

export default NavBar