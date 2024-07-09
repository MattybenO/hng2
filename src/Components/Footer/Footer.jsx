import React from 'react'
import { FaPlayCircle } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="bg-bla text-white font-mon py-10  px-8">
         <div className='container bg'>
      <div className='flex gap-4 justify-between items-center sm:text-xs '>
        <div>ABOUT</div>
        <div>CONTACT</div>
        <div>TERMS | CONDITION | PRIVACY</div>
        <div>LANGUAGE</div>
      </div>

      <div className="flex gap-4 py-8">
        <a href=""> <FaFacebook/> </a>
        <a href=""> <FaLinkedinIn/> </a>
        <a href=""> <FaPlayCircle/> </a>
        <a href=""> <FaInstagram/> </a>
      </div>
    </div>
    </div>
  )
}

export default Footer
