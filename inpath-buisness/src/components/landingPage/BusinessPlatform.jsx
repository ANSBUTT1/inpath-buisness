import React from 'react';  
import BusinessImage from '../../assets/imgfive.png'; // Use your provided image path  

const BusinessPlatform = () => {  
  return (  
    <div className="bg-secondaryColor/90 text-white py-12 lg:py-0 px-6 sm:px-16 md:px-40">  
      <div className="flex flex-col lg:flex-row justify-center items-center">  
        
        {/* Left Side: Image */}  
        <div className="lg:w-1/2">  
          <img   
            src={BusinessImage}   
            alt="Udemy Business Platform"   
            className="w-full lg:w-[92.7vh] h-auto lg:h-[52.2vh] rounded-t-xl mb-6 lg:mb-0" // Ensures image is responsive on small screens
            style={{ transform: 'rotate(0deg)', marginTop: '20px' }} // Slightly rotated for effect  
          />  
        </div>

        {/* Right Side: Text Content */}  
        <div className="lg:w-1/2 md:pl-8 text-center lg:text-left">  
          <h2 className="text-3xl font-primaryFont mb-4">Tour the INPATH Businsess platform</h2>  
          <p className="mb-6">  
            Take the interactive tour to see how our platform can transform the way your team learns and grows.  
          </p>  
          <a   
            href="/start-tour" // Link to the tour page   
            className="inline-block bg-primaryColor text-white font-semibold py-2 px-4 rounded hover:bg-hoverColor transition duration-300"  
          >  
            Start tour  
          </a>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default BusinessPlatform;
