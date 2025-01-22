import React, { useState } from 'react';

const NavigationSection = () => {
    const [activeTab, setActiveTab] = useState('Professional Services');

    const content = {
        'Professional Services': {
            title: 'Driving profitability through faster staffing and cost optimization',
            stats: [
                { value: '66%', description: 'faster new talent onboarding graduates' },
                { value: '93%', description: 'retention rate for learning program graduates' }
            ],
            button: 'Explore professional services solutions',
            image: 'https://business.udemy.com/wp-content/uploads/2024/12/professional-services-tab.jpg'
        },
        'Manufacturing': {
            title: 'Streamlining operations with automation and analytics',
            stats: [
                { value: '80%', description: 'increase in operational efficiency' },
                { value: '50%', description: 'reduction in material wastage' }
            ],
            button: 'Explore manufacturing solutions',
            image: 'https://business.udemy.com/wp-content/uploads/2024/12/manufacturing-tab.jpg'
        },
        'Technology': {
            title: 'Accelerating innovation with modern tech stacks',
            stats: [
                { value: '75%', description: 'reduction in development cycles here.' },
                { value: '60%', description: 'increase in deployment success rates' }
            ],
            button: 'Explore technology solutions',
            image: 'https://business.udemy.com/wp-content/uploads/2024/12/technology-tab.jpg'
        },
        'Financial Services': {
            title: 'Enhancing decision-making with data-driven insights',
            stats: [
                { value: '90%', description: 'improvement in customer satisfaction' },
                { value: '40%', description: 'reduction in operational risks cycles here.' }
            ],
            button: 'Explore financial services solutions',
            image: 'https://business.udemy.com/wp-content/uploads/2024/12/financial-services-tab.jpg'
        }
    };

    const activeContent = content[activeTab];

    return (
        <div className='mt-10'>
            <div className='px-40 p-4'>
                <p className='text-left ml-3 text-4xl font-bold leading-tight'>
                    Redefining success for organizations <br /> in every sector.
                </p>
                <div className='flex gap-10 mt-10 ml-3'>
                    {Object.keys(content).map((tab) => (
                        <a
                            key={tab}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveTab(tab);
                            }}
                            className={`text-heading mb-1 ${
                                activeTab === tab
                                    ? 'activehometab'
                                    : ''
                            }`}
                        >
                            {tab}
                        </a>
                    ))}
                </div>
                <div className='grid grid-cols-12 mt-5 bg-PrimaryBackground'>
                    <div className='col-span-7 rounded-lg'>
                        <div className='p-16'>
                            <p className='text-left text-4xl font-bold leading-tight'>
                                {activeContent.title}
                            </p>
                            <div className='flex gap-10 mt-16'>
                                {activeContent.stats.map((stat, index) => (
                                    <p
                                        key={index}
                                        className='flex flex-col gap-1 w-[50%]'
                                    >
                                        <span className='text-left text-4xl font-extrabold leading-tight'>
                                            {stat.value}
                                        </span>
                                        <span className='text-left text-xl font-semibold leading-tight'>
                                            {stat.description}
                                        </span>
                                        <hr className='border-[#d1d7dc] border-2 mt-2 mb-2' />
                                        <span className='text-primaryColor font-bold hover:text-hoverColor underline'>
                                            Publicis Sapient
                                        </span>
                                    </p>
                                ))}
                            </div>
                            <div className='mt-16'>
                                <button className="font-primaryFont btn-goble-bg hover:bg-hoverColor">
                                    {activeContent.button}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-5'>
                        <div className='rounded-lg h-[100%]'>
                            <img
                                src={activeContent.image}
                                className='h-[100%]'
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationSection;
