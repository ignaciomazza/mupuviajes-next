import React from 'react'
import Image from 'next/image'
import Instagram from './../../public/Instagram.png'
import Facebook from './../../public/Facebook.png'

function Media() {
    return (
        <div className='h-full w-[80%] flex justify-between items-center'>
            <div className='grid grid-cols-2 gap-2 p-4 w-[45%] border border-[#ffffff20] bg-[#ffffff28] rounded-md backdrop-blur-xl'>
                <h2 className='flex justify-center items-center text-2xl col-span-1'>Instagram</h2>
                <div className='flex justify-center items-center col-span-1 row-span-2'>
                    <Image
                        src={Instagram}
                        width={100}
                        height={100}
                        quality={100}
                        alt='Instagram'
                        className='hover:cursor-pointer'
                    />
                </div>
                <p className='flex justify-center items-center text-[50px] font-extrabold col-span-1'>+5K</p>
            </div>
            <div className='grid grid-cols-2 gap-2 p-4 w-[45%] border border-[#ffffff20] bg-[#ffffff28] rounded-md backdrop-blur-xl'>
                <h2 className='flex justify-center items-center text-2xl col-span-1'>Facebook</h2>
                <div className='flex justify-center items-center col-span-1 row-span-2'>
                    <Image
                        src={Facebook}
                        width={100}
                        height={100}
                        quality={100}
                        alt='Facebook'
                        className='hover:cursor-pointer'
                    />
                </div>
                <p className='flex justify-center items-center text-[50px] font-extrabold col-span-1'>+7K</p>
            </div>
        </div>
    )
}

export default Media