import React from 'react';
import map from "../../assets/map.png";
import Ex1 from "../../assets/Exh1.png";
import Ex2 from "../../assets/Exh2.png";
import Ex3 from "../../assets/Exh3.png";

const Latest = () => {
  return (
    <div>
      <div className='bg-gradient-to-r from-secondary to-secondary/90 text-white'>
        <h1 className='text-center font-mon font-medium py-5'>DISCOVER EXHIBITIONS IN AFRICA</h1>
        <div className='flex justify-between container py-4 align-middle'>
            <p>Select a location</p>
            <button className='p-2'>
                See more
            </button>
        </div>
        <div className="container flex justify-between ">
            <div className='p-10'>
                <img src={map} alt="" />
            </div>
            <div>
                <div className=' pb-4'>
                    
                <div className='flex rounded-md shadow-lg'>
                    <div><img className='pt-4' src={Ex1} alt="" /></div>
                    <div className='font-mon p-10'>
                        <h3 className='font-600 text-lg'>Nike art gallery</h3>
                        <p className='text-white/50'>Lagos, Nigeria</p>
                    </div>
                </div>
                
                <div className='flex rounded-md shadow-lg'>
                    <div><img className='pt-4' src={Ex2} alt="" /></div>
                    <div className='font-mon p-10'>
                        <h3 className='font-600 text-lg'>Nike art gallery</h3>
                        <p className='text-white/50'>Lagos, Nigeria</p>
                    </div>
                </div>
                
                <div className='flex rounded-md shadow-lg'>
                    <div><img className='pt-4' src={Ex3} alt="" /></div>
                    <div className='font-mon p-10'>
                        <h3 className='font-600 text-lg'>Nike art gallery</h3>
                        <p className='text-white/50'>Lagos, Nigeria</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Latest
