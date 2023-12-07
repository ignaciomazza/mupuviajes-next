import React from 'react'
import Link from "next/link";
import Image from 'next/image';

function CardCategory(props) {

    const { categoria, nombre, img } = props

    return (
        <div>
            <Link href={`/category/${categoria}/destination/all/tidy/mayor`}>
                <div className='h-[350px] w-[300px]'>
                    <Image
                        src={img}
                        width={350}
                        height={200}
                        alt={`Cateoria ${categoria}`}
                        quality={40}
                        priority={true}
                        className='h-full w-full object-cover object-center rounded-md'
                    />
                    <div className='flex justify-center items-center h-[50%] w-full relative bottom-[50%]  rounded-md'>
                        <h5 className='text-center text-white font-bold'>{nombre.toUpperCase()}</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardCategory