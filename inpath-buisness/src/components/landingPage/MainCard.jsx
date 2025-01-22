import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // Importing the icons
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Correct import for newer Swiper versions
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles (optional)
import image2 from "../../assets/sllider-genai-upskilling.jpg";
import image1 from "../../assets/slider-leadership-development.jpg"
import image3 from "../../assets/Tech-team-training-.jpg"
import image4 from "../../assets/slider-certification-preparation.jpg"
import image5 from "../../assets/slider-enterprise-wide-training.jpg"

// Sample card data
const cardData = [
  {
    id: 1,
    image: image1, // Replace with actual images
    check: "Enterprice-wide training",
    title: "Beautiful Landscape 1",
    description:
      "Explore the breathtaking beauty of nature in this stunning landscape 1.",
  },
  {
    id: 2,
    image: image2,
    title: "Beautiful Landscape 2",
    check: "Certification Preperation",
    description:
      "Explore the breathtaking beauty of nature in this stunning landscape 2.",
  },
  {
    id: 3,
    image: image3,
    title: "Beautiful Landscape 3",
    check: "GenAI upskilling",
    description:
      "Explore the breathtaking beauty of nature in this stunning landscape 3.",
  },
  {
    id: 4,
    image: image4,
    title: "Beautiful Landscape 4",
    check: "Leadership Development",
    description:
      "Explore the breathtaking beauty of nature in this stunning landscape 4.",
  },
  {
    id: 5,
    image: image5,
    title: "Beautiful Landscape 5",
    check: "Tech Team Training",
    description:
      "Explore the breathtaking beauty of nature in this stunning landscape 5.",
  },
];

const getContentBasedOnCheck = (check) => {
  switch (check) {
    case "Enterprice-wide training":
      return {
        title: "Enterprise-wide Training Program",
        description:
          "Our Enterprise-wide training program helps businesses enhance their workforce capabilities.",
      };
    case "Certification Preperation":
      return {
        title: "Certification Preparation",
        description:
          "Prepare for industry-leading certifications with expert-led preparation programs.",
      };
    case "GenAI upskilling":
      return {
        title: "GenAI Upskilling Program",
        description:
          "Upskill your workforce with the latest advancements in Generative AI technologies.",
      };
    case "Leadership Development":
      return {
        title: "Leadership Development",
        description:
          "Invest in leadership development to foster strong leaders who can drive growth.",
      };
    case "Tech Team Training":
      return {
        title: "Tech Team Training",
        description:
          "Equip your tech teams with the tools and skills they need to excel in the tech industry.",
      };
    default:
      return { title: "Default Title", description: "Default Description" };
  }
};

const MainCard = () => {
  const swiperRef = useRef(null); // Create a reference for the Swiper instance

  const handlePrevClick = () => {
    swiperRef.current.swiper.slidePrev(); // Navigate to the previous slide
  };

  const handleNextClick = () => {
    swiperRef.current.swiper.slideNext(); // Navigate to the next slide
  };

  return (
    <div className="mt-5 py-16">
      {/* Heading */}
      <div className="flex justify-start md:justify-between items-center px-6 sm:px-16 md:px-40">
        <p className="text-start text-4xl font-primaryFont leading-tight w-1/2 hidden md:flex">
          Whatever your goal, the path starts here.
        </p>
        <div className="flex justify-start items-center gap-6">
          {/* Custom Left Navigation Button */}
          <button
            className="p-4 hover:bg-PrimaryBackground/80 border-secondaryColor/60 rounded-full border"
            onClick={handlePrevClick}
          >
            <IoIosArrowBack /> {/* Left arrow icon */}
          </button>
          {/* Custom Right Navigation Button */}
          <button
            className="p-4 hover:bg-PrimaryBackground/80 border-secondaryColor/60 rounded-full border"
            onClick={handleNextClick}
          >
            <IoIosArrowForward /> {/* Right arrow icon */}
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="mt-10 px-6 sm:px-16 md:px-0 md:pl-40">
        <Swiper
          ref={swiperRef} // Assign the Swiper reference
          spaceBetween={2} // Space between slides
          loop={true} // Infinite loop for the slides
          breakpoints={{
            // Configure Swiper for different screen sizes
            320: {
              // Mobile (smallest)
              slidesPerView: 1,
            },
            640: {
              // Small screens (tablets)
              slidesPerView: 2,
            },
            1024: {
              // Large screens (desktops)
              slidesPerView: 4,
            },
          }}
        >
          {cardData.map(({ id, check, image }) => {
            const { title, description } = getContentBasedOnCheck(check); // Get content based on `check`
            return (
              <SwiperSlide key={id}>
                {/* Card with background image */}
                <div
                  style={{ backgroundImage: `url(${image})` }}
                  className="group relative bg-cover bg-center h-[400px] w-[94%] rounded-2xl shadow-lg overflow-hidden transform transition-all duration-700 hover:translate-y-2"
                >
                  <div className="absolute top-4 left-4 text-xs p-2 border border-secondaryColor/60 ">
                    <span>{check}</span>
                  </div>
                  {/* Content container that will show on hover */}
                  <div className="rounded-t-2xl border-t border-secondaryColor/30 absolute bottom-0 left-0 right-0 bg-PrimaryBackground p-4 transition-all duration-700 h-28 flex flex-col justify-start items-start group-hover:h-64">
                    <h3 className=" text-2xl font-semibold text-start">{title}</h3>
                    <p className="text-sm text-start mt-6 hidden group-hover:block">{description}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default MainCard;
