import React from 'react';
import frame1 from "../../assets/Fra1.png";
import frame2 from "../../assets/Fra2.png";
import frame3 from "../../assets/Fra3.png";

const Testimonial2 = () => {
  return (
    <div>
      <div className='bg-primary'>
        <div className="container">
            <div className='text-center font-mon item-center'>
            <h1 className='text-40px font-mediun'>BUY AND INVEST ART COMMISSION - FREE </h1>
            <p className='text-16px'>PHISICAL | DIGITAL | NFT</p>
            </div>
            <div className='flex justify-between gap-4'>
                <div>
                    <img src={frame1} alt="" />
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
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial2
