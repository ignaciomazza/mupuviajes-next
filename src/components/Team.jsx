import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import User1 from "../../public/User1.jpg"
import User2 from "../../public/User2.jpg"
import User3 from "../../public/User3.jpg"
import User4 from "../../public/User4.jpg"
import User5 from "../../public/User5.jpg"
import User6 from "../../public/User6.jpg"

function Team() {

    const team = [
        {
            name: "Agustin Zuttarelli",
            img: User1,
            age: 29,
            rol: "Socio gerente"
        },
        {
            name: "Marcelo Zuttarelli",
            img: User4,
            age: 50,
            rol: "Socio gerente"
        },
        {
            name: "Florencia Alderete",
            img: User3,
            age: 30,
            rol: "Vendedora"
        },
        {
            name: "Agustina Mazza",
            img: User6,
            age: 27,
            rol: "Vendedora"
        },
        {
            name: "Martina Mazza",
            img: User5,
            age: 25,
            rol: "Comunity Manager"
        },
        {
            name: "Juan Ignacio Mazza",
            img: User2,
            age: 21,
            rol: "Programador Web"
        },
        {
            name: "Matias",
            img: User2,
            age: 24,
            rol: "Contador"
        },
        {
            name: "Paula",
            img: User3,
            age: 43,
            rol: "Jefe de Ventas"
        },
        {
            name: "Hanna",
            img: User3,
            age: 20,
            rol: "Vendedora"
        },
        {
            name: "Facundo",
            img: User2,
            age: 22,
            rol: "Vendedor"
        },
        {
            name: "Agustin",
            img: User1,
            age: 29,
            rol: "Vendedor"
        },
        {
            name: "Pepe",
            img: User2,
            age: 29,
            rol: "Vendedor"
        }
    ]

    return (
        <div className='w-[80%] flex flex-col items-center flex-wrap border border-[#ffffff20] bg-[#ffffff28] rounded-md backdrop-blur-xl py-4'>
            <div className='flex justify-evenly items-center flex-wrap'>
                {team.map((item, index) => (
                    <div key={index} className='flex md:flex-col justify-center items-center gap-1 p-4'>
                        <Image
                            src={item.img}
                            width={100}
                            height={100}
                            alt={`Cateoria ${item.categoria}`}
                            quality={50}
                            priority={false}
                            className='object-cover object-center rounded-full'
                        />
                        <div className='flex flex-col justify-center items-center'>
                            <h5 className='text-sm text-white font-semibold'>{item.name}</h5>
                            <p className='text-xs'>{item.rol}</p>
                            <p className='text-xs font-light'>{item.age} años</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-[98%] border-t border-[#ffffff50]'>
                <Link href={`/nosotros`} className='w-full flex items-center justify-end p-2 mt-2 text-xl font-light tracking-wide rounded-md hover:bg-[#ffffff28] hover:backdrop-blur-xl transition-colors'><button className='flex items-center gap-1' >Nosotros <FaRegArrowAltCircleRight /></button></Link>
            </div>

        </div>
    )
}

export default Team