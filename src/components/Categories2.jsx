"use client"
import React, { useState, useEffect } from 'react'
import db from '../services'
import { collection, getDocs } from 'firebase/firestore';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import CardCategory from "./CardCategory.jsx";

const Categories = () => {

    const [cat, setCat] = useState([]);
    const [position, setPosition] = useState(3);

    cat.sort(function (a, b) {
        if (a.pos > b.pos) {
            return 1;
        }
        if (a.pos < b.pos) {
            return -1;
        }
        return 0;
    });

    const RestarPosition = () => {
        if (position > 3) {
            setPosition(position - 1)
        }
    }

    const SumarPosition = () => {
        if (position < 10) {
            setPosition(position + 1)
        }
    }

    useEffect(() => {
        const getData = async () => {
            const data = collection(db, "categorias");
            const col = await getDocs(data);
            const res = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
            return res;
        }
        const task = new Promise((resolve, reject) => {
            resolve(getData())
        })
        task
            .then((resultado) => {
                setCat(resultado)
            })
        return () => {
        }
    }, [])

    return (
        <div className='flex justify-center items-center bg-black h-[350px]'>
            <div className='flex justify-center items-center bg-black w-[10%] h-full z-40'>
                <button onClick={() => RestarPosition()}><ArrowLeftIcon className='h-8 text-white mx-1' /></button>
            </div>
            <div className='flex justify-center items-center gap-1 w-[80%]'>
                {cat.map((item, index) => (
                    (item.pos == position || item.pos == (position + 1) || item.pos == (position + 2) || item.pos == (position - 1) || item.pos == (position - 2)) && <CardCategory key={index} categoria={item.categoria} nombre={item.nombre} img={item.img} />
                ))}
            </div>
            <div className='flex justify-center items-center bg-black w-[10%] h-full z-40'>
                <button onClick={() => SumarPosition()}><ArrowRightIcon className='h-8 text-white mx-1' /></button>
            </div>
        </div>
    )
}

export default Categories