// "use client"
import Header from "@/components/Header.jsx";
import Categories from "@/components/Categories.jsx";
import Contact from "@/components/Contact.jsx";
import Team from "@/components/Team.jsx";
import Reviews from "@/components/Reviews";
import Link from "next/link";
// import { useEffect } from "react";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Whatsapp from '../../public/Whatsapp.png'
import Image from "next/image";

export default function Home() {

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     toast('🦙 Bienvenido!', {
  //       position: "top-center",
  //       autoClose: 2000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }, 200);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="select-none">
      {/* <ToastContainer /> */}
      <Header />
      <main>
        <Categories />
        <div className='w-full bg-center bg-cover bg-[url("https://images.unsplash.com/photo-1487730116645-74489c95b41b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] text-white'>
          <div className='w-full flex flex-col justify-evenly items-center py-10 bg-gradient-to-b from-[#000000] via-[#00000000] to-[#000000]'>
            <div className="w-full flex justify-center items-center py-10">
              <Reviews />
            </div>
            <div className="w-full flex justify-center items-center my-10">
              <Contact />
            </div>
            <div className="w-full flex justify-center items-center py-10">
              <Team />
            </div>
          </div>
        </div>
      </main>
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
