import React, { useState } from 'react';
import logo from '../../assets/logo2.png';
import { GrLanguage } from "react-icons/gr";

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null); // State to track the active menu

    return (
        <div>
            <div className='px-40 p-4'>
                <div className='flex justify-between items-center'>
                    <img src={logo} alt="" className='' style={{ width: '18%' }} />
                    <div className='flex gap-8'>
                        {/* Set activeMenu to "menu1" when hovering over the first link */}
                        <a
                            href=""
                            className='font-primaryFont relative'
                            onMouseEnter={() => setActiveMenu('menu1')}
                        >
                            What we do
                        </a>

                        {/* Set activeMenu to "menu2" when hovering over the second link */}
                        <a
                            href=""
                            className='font-primaryFont'
                            onMouseEnter={() => setActiveMenu('menu2')}
                        >
                            How we do it
                        </a>
                        <a href="" className='font-primaryFont' onMouseEnter={() => setActiveMenu('menu3')}>Resources</a>
                        <a href="" className='font-primaryFont' onMouseEnter={() => setActiveMenu('menu4')}>Plans</a>
                    </div>
                    <div className='flex justify-center items-baseline gap-10'>
                        <a href="" className='hover:text-hoverColor font-primaryFont'>Login</a>
                        <div className='flex gap-4'>
                            <button className='font-primaryFont btn-goble-bg hover:bg-hoverColor'>Get Started</button>
                            <button className='font-primaryFont btn-goble hover:bg-PrimaryBackground'>
                                <GrLanguage />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Conditionally render menu1 */}
                {activeMenu === 'menu1' && (
                    <div
                        className='absolute mega-navbar'
                        onMouseLeave={() => setActiveMenu(null)} // Reset activeMenu when leaving
                    >
                        <div className='flex justify-between gap-10'>
                            <div className='flex flex-col gap-3'>
                                <a className='text-heading mb-1'>By need</a>
                                <a className='text hover:text-hoverColor'>Enterprise-Wide Training</a>
                                <a className='text hover:text-hoverColor'>Small Team Training</a>
                                <a className='text hover:text-hoverColor'>Tech Team Training</a>
                                <a className='text hover:text-hoverColor'>Leadership Development</a>
                                <a className='text hover:text-hoverColor'>Dedicated Customer Success Team</a>
                                <a className='text hover:text-hoverColor'>Remote & Hybrid Team Training</a>
                                <a className='text hover:text-hoverColor'>Certification Areas & Badges</a>
                                <a className='text hover:text-hoverColor'>GenAI Upskilling</a>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <a className='text-heading mb-2'>By team</a>
                                <a className='text hover:text-hoverColor'>Leaders & Executives</a>
                                <a className='text hover:text-hoverColor'>Learning & Development</a>
                                <a className='text hover:text-hoverColor'>Human Resources</a>
                                <a className='text hover:text-hoverColor'>Engineering</a>
                                <a className='text hover:text-hoverColor'>IT Operations</a>
                                <a className='text hover:text-hoverColor'>Data Science</a>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <a className='text-heading mb-2'>By industry</a>
                                <a className='text hover:text-hoverColor'>Technology</a>
                                <a className='text hover:text-hoverColor'>Professional Services</a>
                                <a className='text hover:text-hoverColor'>Financial Services</a>
                                <a className='text hover:text-hoverColor'>Manufacturing</a>
                                <a className='text hover:text-hoverColor'>Government</a>
                                <a className='text hover:text-hoverColor'>Higher Ed</a>
                            </div>
                        </div>
                    </div>
                )}

                {/* Conditionally render menu2 */}
                {activeMenu === 'menu2' && (
                    <div
                        className='absolute mega-navbar'
                        style={{ left: '39rem' }}
                        onMouseLeave={() => setActiveMenu(null)} // Reset activeMenu when leaving
                    >
                        <div className='flex justify-between gap-10'>
                            <div className='flex flex-col gap-4'>
                                <a className='text hover:text-hoverColor'>Learning Ecosystem</a>
                                <a className='text hover:text-hoverColor'>On-Demand Learning</a>
                                <a className='text hover:text-hoverColor'>Immersive Learning Cohort</a>
                                <a className='text hover:text-hoverColor'>Learning Professional Services</a>
                                <a className='text hover:text-hoverColor'>AI-Enabled Learning</a>
                                <a className='text hover:text-hoverColor'>Case Studies</a>
                            </div>
                        </div>
                    </div>
                )}
                {activeMenu === 'menu3' && (
                    <div
                        className='absolute mega-navbar'
                        style={{ left: '48rem' }}
                        onMouseLeave={() => setActiveMenu(null)} // Reset activeMenu when leaving
                    >
                        <div className='flex justify-between gap-10'>
                            <div className='flex flex-col gap-4'>
                                <a className='text hover:text-hoverColor'>All Resources</a>
                                <a className='text hover:text-hoverColor'>Our Product</a>
                                <a className='text hover:text-hoverColor'>Resources by Topic</a>
                                <a className='text hover:text-hoverColor'>Podcast: Leading Up</a>
                                <a className='text hover:text-hoverColor'>Small Business Hub Events</a>
                                <a className='text hover:text-hoverColor'>Partners & Integrations</a>
                                <a className='text hover:text-hoverColor'>Partner with Udemy</a>
                                <a className='text hover:text-hoverColor'>Blog</a>
                            </div>
                        </div>
                    </div>
                )}
                {activeMenu === 'menu4' && (
                    <div
                        className='absolute mega-navbar'
                        style={{ left: '54rem' }}
                        onMouseLeave={() => setActiveMenu(null)} // Reset activeMenu when leaving
                    >
                        <div className='flex justify-between gap-10'>
                            <div className='flex flex-col gap-4'>
                                <a className='text hover:text-hoverColor'>Compare Plans</a>
                                <a className='text hover:text-hoverColor'>Team (2-20 learners)</a>
                                <a className='text hover:text-hoverColor'>Enterprise (21+ learners)</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <hr />
        </div>
    );
};

export default Header;

  