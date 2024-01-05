import React from 'react'
import Media from './Media'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <div className='flex justify-center items-center gap-5 w-[80%]'>
      <ContactForm/>
      <Media />
    </div>
  )
}

export default Contact