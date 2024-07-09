import React from 'react';
import HeroImage from "../../assets/heroimg.png";
import { FaPlayCircle } from 'react-icons/fa';

const Hero = () => {
  return (
    <>
      <div className='bg-primary min-h-[500px] sm:min-h-[600px] flex justify-center items-center'>
        <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-2">
                {/* text section  */}
                <div className='text-white sm:text-sm font-mon flex flex-col justify-center gap-6 '>
                    <h1 className='text-6xl'>Art For Africa</h1>
                    <h3 className='text-xl'>Connecting African Art Enthusiasts Across the Continent: Invest in the Future of African Art.</h3>
                    <p className='text-xs'>Connecting African Art Enthusiasts Across the Continent: Invest in the Future of African Art.Connecting African Art Enthusiasts Across the Continent: 
                        Invest in the Future of African Art.Connecting African Art Enthusiasts Across the Continent: <br /> 
                        Invest in the Future of African Art.Connecting African Art Enthusiasts Across the Continent: Invest in the Future of African Art.
                    </p>
                    <div className='flex items-center sm:text-xs gap-3 cursor-pointer'>
                        <div className=' font-mon'>
                           <a className='items-center flex gap-2 ' href="#"><FaPlayCircle/>Learn More</a>
                        </div>
                        <div className='font-mon'>
                            <button className='rounded-full-white p-4 border-y-white'> <a href="#">Get Started</a></button>
                        </div>
                    </div> 
                    
                                           
                </div>
                {/* img Secton  */}
                <div className='rounded-l-lg'>
                    <img className='w-[350px] sm:w-[450px] sm:scale-110 mx-auto' src={HeroImage} alt="" />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero
