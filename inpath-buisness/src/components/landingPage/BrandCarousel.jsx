import React, { useState } from 'react';

const BrandCarousel = () => {
    const [isHovered, setIsHovered] = useState(false);

    const logos = [
        'https://business.udemy.com/wp-content/uploads/2024/11/04-aflac-logo-gray.svg',
        'https://business.udemy.com/wp-content/uploads/2024/11/03-fender-logo-gray.svg',
        'https://business.udemy.com/wp-content/uploads/2024/11/02-vimeo-logo-gray.svg',
        'https://business.udemy.com/wp-content/uploads/2024/11/01-mattel-logo-gray.svg',
        'https://business.udemy.com/wp-content/uploads/2024/11/13-ford-logo-gray.svg',
        'https://business.udemy.com/wp-content/uploads/2024/11/12-infosys-logo-gray.svg',
        'https://business.udemy.com/wp-content/uploads/2024/11/11-citi-bank-logo-gray.svg',
        'https://business.udemy.com/wp-content/uploads/2024/11/10-samsung-logo-gray.svg',
        'https://business.udemy.com/wp-content/uploads/2024/11/09-hp-logo-gray.svg',
        'https://business.udemy.com/wp-content/uploads/2024/11/08-cisco-logo-gray.svg',
        'https://business.udemy.com/wp-content/uploads/2024/11/07-bosch-logo-gray.svg',
        'https://business.udemy.com/wp-content/uploads/2024/11/06-tcs-logo-gray.svg',
    ];

    return (
        <div
            className="relative px-40 p-4 mt-10"
        >
            <p className='text text-center mb-6' style={{fontSize: '16px'}}>An online training platform trusted by 17K+ businesses around the world</p>
            <div className="carousel-container overflow-hidden relative w-full">
                {/* Scrolling content */}
                <div
                    className={`carousel-track flex items-center ${isHovered ? 'pause' : ''}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {logos.map((logo, index) => (
                        <div key={index} className="logo-wrapper flex-shrink-0 mx-4">
                            <img src={logo} alt={`Brand ${index}`} className="w-[55px] h-auto" />
                        </div>
                    ))}

                    {/* Duplicate for seamless scrolling */}
                    {logos.map((logo, index) => (
                        <div key={`duplicate-${index}`} className="logo-wrapper flex-shrink-0 mx-4">
                            <img src={logo} alt={`Brand ${index}`} className="w-[55px] h-auto" />
                        </div>
                    ))}
                </div>

                {/* Left and right blur effects */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/70 to-transparent pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white/70 to-transparent pointer-events-none"></div>
            </div>
        </div>
    );
};

export default BrandCarousel;

