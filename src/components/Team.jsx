import React from 'react'
import Image from 'next/image'
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
        <div className='w-[80%] flex justify-evenly items-center flex-wrap border border-[#ffffff20] bg-[#ffffff28] rounded-md backdrop-blur-xl'>
            {team.map((item, index) => (
                <div className='flex md:flex-col justify-center items-center gap-1 p-4'>
                    <Image
                        src={item.img}
                        width={100}
                        height={100}
                        alt={`Cateoria ${item.categoria}`}
                        quality={100}
                        priority={true}
                        className='object-cover object-center rounded-full'
                    />
                    <div className='flex flex-col justify-center items-center'>
                        <h5 className='text-center text-white font-bold'>{item.name}</h5>
                        <p>{item.rol}</p>
                        <p>{item.age} años</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Team