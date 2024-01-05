"use client"
import React, { useState, useEffect } from 'react';
import db from '../services'
import { collection, getDocs } from 'firebase/firestore';
import CardTravelDetail from './CardTravelDetail';

const TravelDetail = (props) => {

    const { id } = props

    const [viajes, setViajes] = useState([]);
    const viaje = viajes.filter((item) => item.id === id)

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
            .catch((err) => console.log(err))

        return () => {

        }
    }, [])

    return (
        <div className='min-h-[71vh]'>
            {viaje.map((item, index) => (
                <CardTravelDetail key={index} nombre={item.nombre} categoria={item.categoria} descripcion={item.descripcion} destino={item.destino} duracion={item.duracion} transporte={item.transporte} hotel={item.hotel} alojamiento={item.alojamiento} regimen={item.regimen} excursiones={item.excursiones} asistencia={item.asistencia} traslado={item.traslado} img={item.img} precio={item.precio} moneda={item.moneda} />
            ))}
            {viaje.length == 0 && <h1 className='text-center text-2xl font-light tracking-wider'>Cargando...</h1>}
        </div>
    )
}

export default TravelDetail