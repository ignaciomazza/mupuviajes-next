"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import db from '@/services'
import { collection, getDocs } from 'firebase/firestore';
import Whatsapp from '@/../../public/Whatsapp.png'
import Image from "next/image";
import Travels from '@/components/Travels';
import CatVar from '@/components/CatVar'

function page({ params }) {

    const [viajes, setViajes] = useState([]);
    const Categoria = params ? viajes.filter((item) => (item.busqueda.includes(params.id.toLowerCase()))) || (item.nombre.includes(params.id.toLowerCase())) || (item.categoria.includes(params.id.toLowerCase())) || (item.continente.includes(params.id.toLowerCase())) || (item.destino.includes(params.id.toLowerCase())) || (item.pais.includes(params.id.toLowerCase())) || (item.playa.includes(params.id.toLowerCase())) || (item.provincia.includes(params.id.toLowerCase())) : viajes

    useEffect(() => {

        const getData = async () => {
            const data = collection(db, "viajes");
            const col = await getDocs(data);
            const res = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
            return res;
        }

        const task = new Promise((resolve, reject) => {
            resolve(getData())
        })

        task
            .then((resultado) => {
                setViajes(resultado)
            })

        return () => {

        }
    }, [])

    return (
        <div className='bg-black text-white min-h-screen my-[48px]'>
            <Travels key="Viajes" filter={Categoria} />
            {Categoria.length == 0 && <h1 className='text-center text-2xl font-light tracking-wider'>Cargando...</h1>}
            <div className="fixed bottom-3 right-3 z-50 hover:cursor-pointer hover:scale-105 transition-transform">
                <Link href={`https://api.whatsapp.com/send?phone=5491140248903`} target={`blank`}>
                    <Image
                        src={Whatsapp}
                        width={50}
                        height={50}
                        alt='Whatsapp'
                    />
                </Link>
            </div>
        </div>
    )
}

export default page