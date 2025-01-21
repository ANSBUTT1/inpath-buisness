import React from 'react';
import HeroImg from '../../assets/heroSection.png'
const HeroSection = () => {
    return (
        <div className='px-40 p-4 mt-10'>
            {/* Define the grid container */}
            <div className='grid grid-cols-12 gap-4'>
                {/* Define grid child spans */}
                <div className='col-span-8'>
                    <p className='text-4xl font-bold leading-tight'>Empowering businesses to innovate through transformative learning solutions.</p>
                </div>
                <div className='col-span-4 mt-3'>
                    {/* Content for the second section */}
                    <h1 className='text-xl font-bold'>When people grow, business does too</h1>
                    <div className='flex gap-4 mt-2'>
                        <button className='font-primaryFont btn-goble-bg hover:bg-hoverColor'>Compare plans</button>
                        <button className='font-primaryFont btn-goble hover:bg-PrimaryBackground'>
                            Request a demo
                        </button>
                    </div>
                </div>
            </div>
            <img src={HeroImg} alt="" />
        </div>
    );
};

export default HeroSection;
