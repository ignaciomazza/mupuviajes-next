import React from 'react'
import Image from 'next/image'
import User1 from "../../public/User2.jpg"
import User2 from "../../public/User5.jpg"
import User3 from "../../public/User6.jpg"
import { FaStar } from 'react-icons/fa'
import Link from 'next/link'

const reviews = [
  {
    user: "Juan Ignacio Mazza",
    date: "13/12/2023",
    img: User1,
    stars: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    msj: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis laborum labore facere ad id reiciendis nemo dolores repellendus earum laudantium cumque consequatur maxime eos modi, cupiditate dolorem minima adipisci similique?"
  },
  {
    user: "Martina Mazza",
    date: "27/07/2023",
    img: User2,
    stars: [<FaStar />, <FaStar />, <FaStar />, <FaStar />],
    msj: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis laborum labore facere ad id reiciendis nemo dolores repellendus earum laudantium cumque consequatur maxime eos modi, cupiditate dolorem minima adipisci similique?"
  },
  {
    user: "Agustina Mazza",
    date: "18/10/2023",
    img: User3,
    stars: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    msj: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis laborum labore facere ad id reiciendis nemo dolores repellendus earum laudantium cumque consequatur maxime eos modi, cupiditate dolorem minima adipisci similique?"
  }
]

function Reviews() {
  return (
    <div className='w-[80%] border border-[#ffffff20] bg-[#ffffff28] rounded-md backdrop-blur-xl'>
      <div className='flex flex-col p-4'>
        <h3 className='text-2xl font-semibold'>Mupu Viajes</h3>
        <p className='text-sm'>Domingo Faustino Sarmiento 1355, San Miguel, Provincia de Buenos Aires</p>
        <div className='flex items-center text-sm text-[#ffdd44]'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><p className='text-white text-xl ml-2'>4.7</p></div>
        <p className='text-sm font-light'>48 opiniones <Link href="https://www.google.com/search?gs_ssp=eJzj4tFP1zesTDcpS8oxyjJgtFI1qLA0TUpOSjExMjM2TUuxNDW3MqhIMUixMLAwSTJMMzEwTU4z9eLOLS0oVSjLTMxKLQYAe0UToQ&q=mupu+viajes&rlz=1C1ALOY_esAR973AR973&oq=mupuv&gs_lcrp=EgZjaHJvbWUqEggDEC4YChivARjHARiABBiOBTIGCAAQRRg8MgYIARBFGDkyBggCEEUYOzISCAMQLhgKGK8BGMcBGIAEGI4FMgkIBBAAGAoYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg0Mzk5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#ip=1&lrd=0x95bcbd42635fd957:0xd0d8084b1f405cf5,1,,,," target='blank'><button className='text-base ml-1 px-2 py-1 font-medium rounded-md hover:bg-[#ffffff28] hover:backdrop-blur-xl transition-colors'>Ver Todas</button></Link></p>
      </div>
      <div className='flex flex-col items-start w-full'>
        {reviews.map((item, index) => (
          <li key={index} className='list-none m-2 pb-2 border-b border-[#ffffff50]'>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-0 px-2'>
              <Image
                src={item.img}
                width={80}
                height={80}
                alt={`Reseña de Google ${index}`}
                quality={50}
                priority={false}
                className='object-cover object-center rounded-full ml-2 sm:ml-0 self-start sm:self-center'
              />
              <div className='flex flex-col px-2'>
                <p className='font-semibold'>{item.user}</p>
                <p className='text-sm font-light'>{item.date}</p>
                <div className='flex text-[#ffdd44] py-1'>
                  {item.stars.map((item, index) => (
                    <div key={index} >
                      {item}
                    </div>
                  ))}
                </div>
                <p className='text-sm'>{item.msj}</p>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  )
}

export default Reviews