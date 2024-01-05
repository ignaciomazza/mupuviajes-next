import React from 'react'
import Link from 'next/link'
import TravelDetail from '@/components/TravelDetail'
import CatVar from '@/components/CatVar'
import Whatsapp from '../../../../public/Whatsapp.png'
import Image from 'next/image'

function page({ params }) {
    return (
        <div className='bg-black text-white'>
            <CatVar />
            <div className='py-5'>
                {params && <TravelDetail id={params.id} />}
            </div>
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