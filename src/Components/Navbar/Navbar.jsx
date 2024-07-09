import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';



const NavLinks = [
    {
        id: 1,
        name: 'Home',
        link: '/#',
      },

      {
        id: 2,
        name: 'Artworks',
        link: '/#',
      },

      {
        id: 3,
        name: 'About',
        link: '/#',
      },
]
const Navbar = () => {
  return (
    <>
      <div className='bg-black text-white h-1200px'>
        <div className="container">
            <div className='flex justify-between items-center gap-4'>
                {/* logo section  */}
                <div className='h-24px'>
                    <h1 className='font-san font-medium w-92px h-71px text-5xl'>Co<span className='font-mon' >re</span></h1>
                </div>
                {/* links section  */}
                <div className='h-64px'>
                <ul className='hidden sm:flex items-center gap-4'>
              {
                NavLinks.map((data, index) => (
                  <li key={index} className=' hover:scale-110 duration-150'>
                    <a href={data.link} className='inline-block text-xl py-4 px-4 text-white hover:text-white/70 duration-200'>
                      {data.name}
                    </a>
                  </li>
                ))}
            </ul>
                </div>
                {/* left section  */}
                <div className=' xs:hidden flex items-center w-309px gap-4'>
                <CiShoppingCart  className='text-xl text-white drop-shadow-sm cursor-pointer' />
                <button className='font-sans font-medium text-base'>
                    <a className='font-sans py-2 px-4' href="">Login</a>
                    <a className='px-4 py-2 rounded-full border-white bg-slate-500' href="#">Sign up</a>
                </button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
