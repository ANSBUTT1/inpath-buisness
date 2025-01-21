import React, { useEffect, useState } from "react";

const OrganizationLearningImpact = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // Trigger animation when 50% of the element is visible
    );

    const element = document.getElementById("animated-images");
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-PrimaryBackground py-20 px-6 sm:px-16 md:px-40">
      <div id="animated-images" className="lg:flex justify-between items-center pb-16 hidden">
        {/* First image (coming from the left to right) */}
        <img
          className={`rounded-xl w-1/4 transition-all duration-1000 ease-in-out transform ${
            inView ? "translate-x-0" : "-translate-x-full"
          }`}
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First Image"
        />
        {/* Second image (coming from the right to left) */}
        <img
          className={`rounded-xl w-1/4 mt-16 transition-all duration-1000 ease-in-out transform ${
            inView ? "translate-x-0" : "translate-x-full"
          }`}
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second Image"
        />
      </div>
      <div className="flex flex-col justify-center items-center min-h-screen text-center py-10 relative">
        <div className="mb-8 lg:w-1/2 z-10">
          <h1 className="text-4xl font-primaryFont mb-4">
            What will learning do for your organization?
          </h1>
          <h1 className="text-lg mb-4">
            See the impact of online learning for businesses. Let’s start on a
            plan that supports your goals.
          </h1>
          <button className=" cursor-pointer bg-primaryColor text-white py-2 px-6  hover:bg-hoverColor rounded-md">
            Request a demo
          </button>
        </div>
        <div className="mt-20 z-10">
          <h1 className="text-xl font-semibold">
            Small team? <span className="underline font-primaryFont hover:text-hoverColor cursor-pointer">Start with Team Plan.</span>
          </h1>
        </div>

        <div
          id="animated-images"
          className="absolute hidden  lg:flex justify-between w-screen items-center"
        >
          {/* First section: Images coming from right to left */}
          <div className="flex flex-col justify-between items-center w-1/2">
            <img
              className={`rounded-xl w-1/3 h-72 transition-all duration-1000 ease-in-out transform ${
                inView ? "-translate-x-40" : "-translate-x-full"
              }`}
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <img
              className={`rounded-xl w-1/3 h-72 -mt-8 transition-all duration-1000 ease-in-out transform ${
                inView ? "-translate-x-24 " : "-translate-x-full"
              }`}
              src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>

          {/* Second section: Images coming from left to right */}
          <div className="flex flex-col justify-between items-center w-1/2">
            <img
              className={`rounded-xl w-1/3 h-72 transition-all duration-1000 ease-in-out transform ${
                inView ? "translate-x-40" : "translate-x-full"
              }`}
              src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <img
              className={`rounded-xl w-1/3 h-72 -mt-8 transition-all duration-1000 ease-in-out transform ${
                inView ? "translate-x-24" : "translate-x-full"
              }`}
              src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationLearningImpact;
