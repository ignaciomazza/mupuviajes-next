import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function CardTravelDetail(props) {

    const { nombre, categoria, descripcion, img, destino, duracion, transporte, hotel, alojamiento, regimen, excursiones, asistencia, traslado, precio, moneda } = props
    const blank = "blank"

    return (
        <div className='flex flex-col items-center w-full'>
            <div className='w-[90%] flex gap-10 border border-[#ffffff50] px-10 py-16 rounded-md'>
                <div className='flex flex-col justify-center gap-1 basis-1/2'>
                    <div className='flex flex-col gap-1 border-b border-[#ffffff50] mb-2'>
                        <h1 className='font-bold mb-1 text-2xl tracking-wide'>{nombre.toUpperCase()}</h1>
                        {moneda == "pesos" && precio != "" && precio != undefined && precio != " " && <p className='font-light mb-1'>ARS ${precio}</p>}
                        {moneda == "dolares" && precio != "" && precio != undefined && precio != " " && <p className='font-light mb-1'>USD ${precio}</p>}
                        {descripcion && <h2 >{descripcion}</h2>}
                    </div>
                    <div>
                        {categoria != "asistencias" && categoria != "particulares" && <div className='flex flex-col gap-1 border-b border-[#ffffff50] mb-2'>
                            <h3 className='font-semibold mb-1 text-lg'>DATOS DEL VIAJE</h3>
                            {destino != "" && destino != undefined && <p><span className='font-light'> Destino:</span> {destino}</p>}
                            {duracion != "" && duracion != undefined && <p><span className='font-light'> Duracion:</span> {duracion}</p>}
                            {transporte != "" && transporte != undefined && <p><span className='font-light'>Transporte:</span> {transporte}</p>}
                            {hotel != "" && hotel != undefined && <p><span className='font-light'>Hotel:</span> {hotel}</p>}
                            {alojamiento != "false" && alojamiento != "" && <p>Alojamiento incluido</p>}
                            {regimen != "" && regimen != undefined && <p><span className='font-light'>Regimen de comida:</span> {regimen}</p>}
                            {excursiones != "" && excursiones != undefined && <p><span className='font-light'>Excursiones:</span> {excursiones}</p>}
                            {asistencia != "false" && asistencia != "" && <p>Asistencia al viajero incluido</p>}
                            {traslado != "false" && traslado != "" && <p>Traslados incluidos</p>}

                        </div>}
                        <div className='flex flex-col gap-1 mb-2'>
                            <h3 className='font-medium mb-1 text-lg'>MEDIOS DE PAGO</h3>
                            <p className='font-light'>Debito</p>
                            <p className='font-light'>Credito</p>
                            <p className='font-light'>Transferencia</p>
                        </div>
                        <div className='mt-5'>
                            <button className='w-full bg-[#27c818] rounded-sm py-2 text-lg'><Link href="https://api.whatsapp.com/send?phone=5491140248903" target={blank}>Consultar</Link></button>
                        </div>
                    </div>
                </div>
                <div className='relative rounded-sm basis-1/2'>
                    <Image
                        src={img}
                        alt="Foto del lugar del viaje"
                        priority={true}
                        fill
                        sizes="w-[50%]"
                        quality={50}
                        className='object-cover object-center rounded-sm'
                    />
                </div>
            </div>
        </div>
    )
}

export default CardTravelDetail