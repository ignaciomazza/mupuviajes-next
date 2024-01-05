import React from 'react'
import Link from 'next/link';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok, FaSpotify } from "react-icons/fa";

function Footer() {
    return (
        <footer className='flex flex-col items-center justify-between gap-8 pt-8 list-none bg-black text-white border-t border-[#ffffff60]'>
            <div className='flex items-center justify-evenly w-[60%] text-lg tracking-wide'>
                <li className='hover:cursor-pointer hover:scale-105 transition-transform'><Link href={`/`}>Inicio</Link></li>
                <li className='hover:cursor-pointer hover:scale-105 transition-transform'><Link href={`/viajes`}>Viajes</Link></li>
                {/* <li className='hover:cursor-pointer'>Blog</li>   */}
                <li className='hover:cursor-pointer hover:scale-105 transition-transform'><Link href={`nosotros`}>Nosotros</Link></li>
                <li className='hover:cursor-pointer hover:scale-105 transition-transform'><Link href={`contacto`}>Contactanos</Link></li>
            </div>
            <div className='flex items-center justify-evenly w-[40%] text-3xl'>
                <li className='hover:cursor-pointer hover:scale-105 transition-transform'><Link href={`https://api.whatsapp.com/send?phone=5491140248903`} target='blank'><FaWhatsapp/></Link></li>
                <li className=' hover:cursor-pointer hover:scale-105 transition-transform'><Link href={`https://www.facebook.com/mupu.viajes.3/?locale=es_LA`} target='blank'><FaFacebook/></Link></li>
                <li className='hover:cursor-pointer hover:scale-105 transition-transform'><Link href={`https://www.instagram.com/mupuviajesturismo/?hl=es`} target='blank'><FaInstagram/></Link></li>
                <li className='hover:cursor-pointer hover:scale-105 transition-transform'><Link href={`https://www.tiktok.com/@mupuviajes`} target='blank'><FaTiktok/></Link></li>
                {/* <li className='hover:cursor-pointer'><Link href={`/`}><FaSpotify/></Link></li> */}
            </div>
            <div className='text-sm font-extralight'>
                <p>© 2024. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer