"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import db from '../../../../../services'
import { collection, getDocs } from 'firebase/firestore';
import Whatsapp from '@/../../public/Whatsapp.png'
import Image from "next/image";
import Travels from '@/components/Travels';
import CatVar from '@/components/CatVar'

const Page = ({ params }) => {

  const [viajes, setViajes] = useState([]);
  const Categoria = params ? viajes.filter((item) => item.categoria === params.id) : viajes

  if (params.or == "mayor") {
    Categoria.sort(function (a, b) {
      if (parseInt(a.precio) > parseInt(b.precio)) {
        return -1;
      }
      if (parseInt(a.precio) < parseInt(b.precio)) {
        return 1;
      }
      return 0;
    });
  }else {
    Categoria.sort(function (a, b) {
      if (parseInt(a.precio) > parseInt(b.precio)) {
        return 1;
      }
      if (parseInt(a.precio) < parseInt(b.precio)) {
        return -1;
      }
      return 0;
    });
  }


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
    <div className='bg-black text-white min-h-screen'>
      <CatVar key="Categorias NavBar" category={params.id} orden={params.or} />
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

export default Page