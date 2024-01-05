import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Whatsapp from '../../../public/Whatsapp.png'

function page() {

  const input = "w-full border border-[#ffffff20] bg-[#ffffff28] rounded-md backdrop-blur-xl outline-none p-1 pl-2 mb-5 font-light"

  return (
    <div className="flex justify-center w-full min-h-screen my-[70px]">
      <div className='flex flex-col gap-16 w-[90%] text-white'>
        <div className='flex flex-col w-[90%]'>
          <h1 className='text-3xl font-medium'>Contactanos</h1>
          <p className='font-light w-[60%]'>Podes dejarnos tu consulta a traves del formulario, enviarnos un mensaje por redes, contactarnos por whatsapp o encontrarnos en nuestra oficina.</p>
        </div>
        <div className='flex gap-3'>
          <div className='basis-2/6 flex flex-col justify-evenly list-none h-full'>
            <li>
              <h6 className='text-lg'>Encontranos en:</h6>
              <p className=' font-extralight'>Domingo F. Sarmiento 1355 Local 1 - Lunes a viernes de 10 a 13hs y de 15 a 18 hs</p>
              <button className='px-2 py-1 mt-1 rounded-md bg-[#ffffff20] backdrop-blur-xl hover:bg-[#ffffff28] transition-colors font-light'>Ubicacion en el mapa</button>
            </li>
            <li>
              <h6 className='text-lg'>Redes Sociales</h6>
              <button className='px-2 py-1 mr-1 mt-1 rounded-md bg-[#ffffff20] backdrop-blur-xl hover:bg-[#ffffff28] transition-colors font-light'>Instagram</button>
              <button className='px-2 py-1 ml-1 mt-1 rounded-md bg-[#ffffff20] backdrop-blur-xl hover:bg-[#ffffff28] transition-colors font-light'>Facebook</button>
            </li>
            <li>
              <h6 className='text-lg'>Correo electronico</h6>
              <p className=' font-extralight'>info@mupuviajes.com.ar</p>
            </li>
            <li>
              <h6 className='text-lg'>Whatsapp</h6>
              <p className=' font-extralight'>+54 9 11 5970-1234</p>
            </li>
            <li>
              <h6 className='text-lg'>Numero de linea</h6>
              <p className=' font-extralight'>+54 9 11 6063-1746</p>
            </li>
            <li>
              <h6 className='text-lg'>Consultas por viajes</h6>
              <p className=' font-extralight'>+54 9 11 4024-8903</p>
            </li>
          </div>
          <div className='basis-4/6'>
            <form className='flex flex-col p-5'>
              <label className='ml-2 mb-1 font-light'>Nombre completo</label>
              <input className={input} placeholder='Escribir...' type="text" />
              <label className='ml-2 mb-1 font-light'>Correo electronico</label>
              <input className={input} placeholder='Escribir...' type="email" />
              <label className='ml-2 mb-1 font-light'>Telefono</label>
              <input className={input} placeholder='Escribir...' type='number' />
              <label className='ml-2 mb-1 font-light'>Consulta</label>
              <textarea rows="3" className={input} placeholder='Escribir...' />
              <button className='w-[40%] p-1 m-auto font-light rounded-md bg-[#ffffff10] backdrop-blur-xl hover:bg-[#ffffff28] transition-colors'>Enviar</button>
            </form>
          </div>
        </div>
      </div>
      <div className='absolute right-0 -z-50 h-[120%] w-[45%]'>
        <Image
          src={`https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          fill
          className='object-cover object-center rounded-l-lg'
        />
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