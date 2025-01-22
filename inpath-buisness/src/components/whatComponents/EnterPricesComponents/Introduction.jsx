import React from 'react'

const Introduction = () => {
    return (
        <div>
            <div className='enterPrice-bg h-screen md:h-[85vh]' style={{ backgroundImage: `url(https://business.udemy.com/wp-content/uploads/2022/07/enterprise-training-hero-desktop-2x.png)` }}>
                <div className='px-40 p-4'>
                    <div className='flex flex-col justify-center'>
                        <p>ENTERPRISE-WIDE TRAINING</p>
                        <p className='text-5xl font-bold leading-tight'>Upskill your entire <br></br> workforce</p>
                        <p className='text-lg font-bold leading-tight'>Keep your people engaged and help them grow.</p>
                        <button className='font-primaryFont btn-goble-bg hover:bg-hoverColor mt-5 w-[15%]'>Request a demo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction
