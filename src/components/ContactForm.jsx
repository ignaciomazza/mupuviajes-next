import React from 'react'

function ContactForm() {

    const input = "w-full border border-[#ffffff20] bg-[#ffffff28] rounded-md backdrop-blur-xl outline-none p-1 pl-2 font-light"

    return (
        <form className='basis-4/6 flex flex-col gap-5 p-5'>
            <label className='ml-2 text-lg font-medium tracking-wide'> Contactanos </label>
            <input className={input} placeholder='Nombre' type="text" />
            <input className={input} placeholder='Email' type="email" />
            <input className={input} placeholder='Telefono' type='number' />
            <textarea rows="3" className={input} placeholder='Consulta'/>
            <button className='w-[40%] p-1 m-auto font-light hover:bg-[#ffffff28] hover:rounded-md hover:backdrop-blur-xl transition-colors'>Enviar</button>
        </form>
    )
}

export default ContactForm