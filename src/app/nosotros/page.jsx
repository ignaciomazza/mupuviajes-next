import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import Whatsapp from "@/../../public/Whatsapp.png"
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import User1 from "../../../public/User1.jpg"
import User2 from "../../../public/User2.jpg"
import User3 from "../../../public/User3.jpg"
import User4 from "../../../public/User4.jpg"
import User5 from "../../../public/User5.jpg"
import User6 from "../../../public/User6.jpg"

export default function Page() {

  const team = [
    {
      name: "Agustin Zuttarelli",
      img: User1,
      age: 29,
      rol: "Socio gerente"
    },
    {
      name: "Marcelo Zuttarelli",
      img: User4,
      age: 50,
      rol: "Socio gerente"
    },
    {
      name: "Florencia Alderete",
      img: User3,
      age: 30,
      rol: "Vendedora"
    },
    {
      name: "Agustina Mazza",
      img: User6,
      age: 27,
      rol: "Vendedora"
    },
    {
      name: "Martina Mazza",
      img: User5,
      age: 25,
      rol: "Comunity Manager"
    },
    {
      name: "Juan Ignacio Mazza",
      img: User2,
      age: 21,
      rol: "Programador Web"
    },
    {
      name: "Matias",
      img: User2,
      age: 24,
      rol: "Contador"
    },
    {
      name: "Paula",
      img: User3,
      age: 43,
      rol: "Jefe de Ventas"
    },
    {
      name: "Hanna",
      img: User3,
      age: 20,
      rol: "Vendedora"
    },
    {
      name: "Facundo",
      img: User2,
      age: 22,
      rol: "Vendedor"
    },
    {
      name: "Agustin",
      img: User1,
      age: 29,
      rol: "Vendedor"
    },
    {
      name: "Pepe",
      img: User2,
      age: 29,
      rol: "Vendedor"
    }
  ]

  return (
    <div className="relative isolate overflow-hidden bg-black text-white px-6 pt-16 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-green-600">Agencia de Viajes certificada</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-8xl">MUPU VIAJES <span className='font-normal'>TURISMO</span></h1>
              <p className="mt-6 text-xl leading-7">
                Bienvenidos a Mupu, expertos en turismo con un enfoque distintivo en calidad y atención personalizada.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 lg:max-w-lg">
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                semper sed amet vitae sed turpis id.
              </p>
              <ul role="list" className="mt-8 space-y-8">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">Push to deploy.</strong> Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">SSL certificates.</strong> Anim aute id magna aliqua
                    ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold">Database backups.</strong> Ac tincidunt sapien
                    vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight">No server? No problem.</h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
              <h2 className="mt-24 text-5xl font-semibold">Nosotros</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col items-center flex-wrap rounded-md py-5'>
        <div className='flex justify-evenly items-center flex-wrap'>
          {team.map((item, index) => (
            <div key={index} className='flex md:flex-col justify-center items-center gap-1 p-4 mx-3 hover:cursor-pointer  hover:scale-105 transition-transform'>
              <Image
                src={item.img}
                width={130}
                height={130}
                alt={`Cateoria ${item.categoria}`}
                quality={50}
                priority={false}
                className='object-cover object-center rounded-md'
              />
              <div className='flex flex-col justify-center items-center'>
                <h5 className='text-md text-white font-semibold'>{item.name}</h5>
                <p className='text-sm'>{item.rol}</p>
                <p className='text-sm font-light'>{item.age} años</p>
              </div>
            </div>
          ))}
        </div>
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