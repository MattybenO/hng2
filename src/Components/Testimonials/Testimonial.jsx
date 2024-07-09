import React from 'react';
import frame1 from "../../assets/g1.png";
import frame2 from "../../assets/g2.png";
import frame3 from "../../assets/g3.png";
import frame4 from "../../assets/g1.png";

const Testimonial = () => {
  return (
    <>
      <div className='bg-primary'>
        <div className="container">
            <div className='text-center font-mon item-center h-100%'>
            <h1 className='text-40px font-mediun'>BUY AND INVEST ART COMMISSION - FREE </h1>
            <p className='text-16px'>PHISICAL | DIGITAL | NFT</p>
            </div>
            <div className='flex justify-between pt-7 gap-4'>
                <div className='min-h-20px'>
                    <img className='h-10px' src={frame1} alt="" />
                    <p>Yellow Oil Wave </p>
                    <p>Lara Johnson</p>
                </div>
                <div>
                    <img src={frame2} alt="" />
                    <p>Yellow Oil Wave </p>
                    <p>Lara Johnson</p>
                </div>
                <div>
                    <img src={frame3} alt="" />
                    <p>Yellow Oil Wave </p>
                    <p>Lara Johnson</p>
                </div>
                <div>
                    <img src={frame4} alt="" />
                    <p>Yellow Oil Wave </p>
                    <p>Lara Johnson</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
