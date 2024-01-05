import React from 'react'
import Link from "next/link";
import Image from 'next/image';

function CardTravel(props) {

  const { nombre, img, precio, id } = props

  return (
    <Link href={`/viaje/${id}`}>
      <div className='h-[340px] w-[210px] hover:scale-105 transition-transform'>
        <div className='h-[270px]'>
          <Image
            src={img}
            width={210}
            height={270}
            alt={`Viaje a ${nombre}`}
            quality={40}
            priority={true}
            className='h-full w-full object-cover object-center rounded-sm'
          />
        </div>
        <div className='flex flex-col justify-evenly h-[70px] w-full rounded-sm'>
          <h5 className='text-white font-semibold'>{nombre.toUpperCase()}</h5>
          <p className='font-light text-sm'>${precio}</p>
        </div>
      </div>
    </Link>
  )
}

export default CardTravel