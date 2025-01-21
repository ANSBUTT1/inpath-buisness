import React from "react";
import Img from "../../assets/imgtwo.png"; // Replace with your customer's image
import TIBCOLogo from "../../assets/imgfour.png"; // Replace with your TIBCO logo image

const CustomerExperience = () => {
  return (
    <div className="px-6 md:px-20 lg:px-40 text-cente py-16">
      {/* Header Section */}
      <h2 className=" text-secondaryColor text-2xl md:text-3xl lg:text-4xl font-primaryFont mb-6 text-start">
        Learn from our customer’s experience
      </h2>

      {/* Experience Section */}
      <div className="flex flex-col md:flex-row justify-center items-center bg-secondaryBackground md:p-6 relative space-y-6 md:space-y-0">
        {/* TIBCO Logo */}
        <div className="absolute  top-6 me-24  md:me-40 w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#1E1E1E] text-white border-2 border-teal-500 flex items-center justify-center">
          <img
            src={TIBCOLogo}
            alt="TIBCO Company Logo"
            className="w-3/4 h-3/4 object-contain"
          />
        </div>

        {/* Profile Image */}
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-teal-500 overflow-hidden">
          <img
            src={Img}
            alt="Customer Profile Picture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center items-center ">
        {/* Combined Quote and Attribution Section */}
        <p className="mt-6 sm:text-center text-base md:text-xl text-secondaryColor mx-2 sm:mx-36">
          “Employee development and investing in our workforce are top
          priorities for TIBCO. We needed a learning solution that would allow
          our 4,000+ employees to access real-world skills, and we chose Udemy
          Business over other learning solutions because of its expert global
          instructors, relevant course selection, and course content quality.”
      
          <div className=" text-start sm:text-center">
            <span className="block mt-4 text-sm md:text-md font-primaryFont text-secondaryColor">
              Dr. KimLoan Tran
            </span>
            <span className="block text-xs md:text-sm text-gray-600">
              Chief Learning Officer at TIBCO
            </span>{" "}
          </div>
        </p>{" "}
      </div>
    </div>
  );
};

export default CustomerExperience;
