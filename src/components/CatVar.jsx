"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import db from '../services'
import { collection, getDocs } from 'firebase/firestore';

const Categories = (props) => {

    const [actualId, setActualId] = useState(props.category);
    const [cat, setCat] = useState([]);
    const [actualCat, setActualCat] = useState([]);

    const [ordenar, setOrdenar] = useState(false);

    function aparecerOrdenar(ordenar) {
        if (ordenar) {
            setOrdenar(false)
        } else {
            setOrdenar(true)
        }
    }

    cat.sort(function (a, b) {
        if (a.pos > b.pos) {
            return 1;
        }
        if (a.pos < b.pos) {
            return -1;
        }
        return 0;
    });

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
                const Categoria = resultado.filter((item) => item.categoria === actualId)
                setActualCat(Categoria)
            })
        return () => {
        }
    }, [])

    return (
        <div className='pt-[48px] flex flex-col justify-end items-center gap-1'>
            <div className='flex justify-evenly items-center flex-wrap gap-2 py-1 list-none text-sm w-full border-y border-[#ffffff20] bg-[#ffffff28] backdrop-blur-xl'>
                {cat.map((item, index) => (
                    <li key={index}><Link href={`/categoria/${item.categoria}`} > {item.nombre.toUpperCase()}</Link></li>
                ))}
            </div>
            {actualCat.length >= 1 && <div className='flex justify-between items-center w-[90%] py-1 border-b border-[#ffffff50]'>
                <h1 className='text-xl font-semibold'>{actualCat.map((item) => (item.nombre.toUpperCase()))}</h1>
                <button onClick={() => aparecerOrdenar(ordenar)} className='text-sm font-light'>Ordenar ⌵</button>
            </div>}
            {ordenar &&
                <div className='w-full px-[4%] flex justify-end'>
                    <div className='absolute flex flex-col items-center gap-1 p-3 border-[#ffffff20] bg-[#ffffff10] backdrop-blur-xl rounded-md z-50'>
                        <div className='font-light'>Por precio</div>
                        <Link className='py-1 px-3 hover:bg-[#ffffff28] hover:rounded-md hover:backdrop-blur-xl transition-colors' href={`/categoria/${props.category}/orden/mayor`}>Mayor a menor</Link>
                        <Link className='py-1 px-3 hover:bg-[#ffffff28] hover:rounded-md hover:backdrop-blur-xl transition-colors' href={`/categoria/${props.category}/orden/menor`} >Menor a mayor</Link>
                    </div>
                </div>
            }
        </div >
    )
}

export default Categories