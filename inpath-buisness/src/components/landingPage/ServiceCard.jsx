import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import SerivceCard from '../../assets/serivceCard.jpg'
const ServiceCard = () => {
    return (
        <div className='bg-PrimaryBackground p-4'>
            <div className='px-40 p-4 mt-10'>
                <div className='grid grid-cols-12 gap-4'>
                    {/* Define grid child spans */}
                    <div className='col-span-8'>
                        <p className='text-4xl font-bold leading-tight'>Transform your skills for the modern world with cutting-edge learning.</p>
                    </div>
                    <div className='col-span-4 mt-3'>
                        <h1 className='text2 font-bold'>Learning solutions shouldn’t be one-size-fits-all. For effective training, you need the right skills and the right modalities. That’s where we come in.</h1>
                    </div>
                </div>

                <div className='mt-8 mb-8 bg-white  rounded-xl'>
                    <div className=''><img src={SerivceCard} alt="" /></div>
                    <div className="grid grid-cols-12 p-6">
                        <div className="col-span-3 py-4 px-2 service-card">
                            <div className="GoIcon">
                                <p className="text-4xl font-bold leading-tight">
                                    <GoArrowUpRight className="Arrow_icon" />
                                </p>
                            </div>
                            <div className="mt-6">
                                <p className="text-2xl font-bold serivce-title">On-Demand Learning</p>
                                <p className="text2 mt-2">
                                    Provide anytime access to the latest business, tech, leadership, and soft skills courses all in one learning platform.
                                </p>
                            </div>
                        </div>

                        <div className="col-span-3 py-4 px-2 service-card">
                            <div className="GoIcon">
                                <p className="text-4xl font-bold leading-tight">
                                    <GoArrowUpRight className="Arrow_icon" />
                                </p>
                            </div>
                            <div className="mt-6">
                                <p className="text-2xl font-bold serivce-title">On-Demand Learning</p>
                                <p className="text2 mt-2">
                                    Provide anytime access to the latest business, tech, leadership, and soft skills courses all in one learning platform.
                                </p>
                            </div>
                        </div>

                        <div className="col-span-3 py-4 px-2 service-card">
                            <div className="GoIcon">
                                <p className="text-4xl font-bold leading-tight">
                                    <GoArrowUpRight className="Arrow_icon" />
                                </p>
                            </div>
                            <div className="mt-6">
                                <p className="text-2xl font-bold serivce-title">On-Demand Learning</p>
                                <p className="text2 mt-2">
                                    Provide anytime access to the latest business, tech, leadership, and soft skills courses all in one learning platform.
                                </p>
                            </div>
                        </div>

                        <div className="col-span-3 py-4 px-2 service-card">
                            <div className="GoIcon">
                                <p className="text-4xl font-bold leading-tight">
                                    <GoArrowUpRight className="Arrow_icon" />
                                </p>
                            </div>
                            <div className="mt-6">
                                <p className="text-2xl font-bold serivce-title">On-Demand Learning</p>
                                <p className="text2 mt-2">
                                    Provide anytime access to the latest business, tech, leadership, and soft skills courses all in one learning platform.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ServiceCard
