import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Instagram from './../../public/Instagram.png'
import Facebook from './../../public/Facebook.png'

function Media() {

    const media = [
        {
            name: "Instagram",
            img: Instagram,
            followers: "+5K",
            url: "https://www.instagram.com/mupuviajesturismo/?hl=es"
        },
        {
            name: "Facebook",
            img: Facebook,
            followers: "+7K",
            url: "https://www.facebook.com/mupu.viajes.3/?locale=es_LA"
        }
    ]

    return (
        <div className='basis-2/6 flex flex-col gap-10 items-center'>
            {media.map((item, index) => (
                <div key={index} className='grid grid-cols-2 gap-2 w-full p-4'>
                    <h2 className='flex justify-center items-center text-2xl col-span-1'>{item.name}</h2>
                    <div className='flex justify-center items-center col-span-1 row-span-2 hover:scale-105 transition-transform'>
                        <Link href={item.url} target='blank'>
                            <Image
                                src={item.img}
                                width={100}
                                height={100}
                                quality={100}
                                alt='Instagram'
                                className='hover:cursor-pointer'
                            />
                        </Link>
                    </div>
                    <p className='flex justify-center items-center text-[50px] font-extrabold col-span-1'>{item.followers}</p>
                </div>
            ))}
        </div>
    )
}

export default Media