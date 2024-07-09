import React from 'react';
import Img from "../../assets/smallheroimg1.png";
import Img1 from "../../assets/smallheroimg2.png";

const Smallhero = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-secondary to-secondary/90 min-h-800px min-w-260px  text-white'>
        <div className="container flex justify-between items-center">
            <div className='flex justify-between items-center px-2 py-4'>
                <div className='border-spacing-2 flex gap-8 shadow-md'>
                <img className='h-10' src={Img} alt="" />
                <div className='font-mon h-9px'>
                    <h2 className='text-sm font-mon'>NFT Artworks</h2>
                    <p>Buy and Sell</p>
                    <p>See more...</p>
                </div>
                </div>
            </div>
            <div className='flex justify-between items-center font-mon'>
                <div className='gap-8 border-spacing-2 flex'>
                <img className='h-12 w-11' src={Img1} alt="" />
                <div className='font-mon'>
                    <h2 className='font-medium text-12px'>NFT Artworks</h2>
                    <p>Buy and Sell</p>
                    <p>See more...</p>
                </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Smallhero
