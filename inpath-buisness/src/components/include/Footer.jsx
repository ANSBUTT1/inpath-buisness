import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import the social media icons
import GoogleTranslator from "./GoogleTranslator";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-16 px-6 sm:px-16 md:px-40 bg-secondaryColor text-secondaryBackground">
      <footer>
        <main className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* portion one */}
          <div className="flex flex-col  gap-6 md:gap-16 md:flex-row lg:gap-36">
            <div>
              <h1 className="font-primaryFont text-lg">InPATH Business</h1>
              <ul className="flex flex-col gap-3 mt-4 text-sm">
                <li className="hover:text-primaryColor hover:font-primaryFont">
                  <Link> About Us</Link>
                </li>
                <li className="hover:text-primaryColor hover:font-primaryFont">
                  <Link>Events</Link>
                </li>
                <li className="hover:text-primaryColor ">
                  <Link>Partners & Integrations</Link>
                </li>
                <li className="hover:text-primaryColor hover:font-primaryFont">
                  <Link>Partner with INPATH</Link>
                </li>
                <li className="hover:text-primaryColor hover:font-primaryFont">
                  <Link>Take a product tour</Link>
                </li>
                <li className="hover:text-primaryColor hover:font-primaryFont">
                  <Link>News</Link>
                </li>
                <li className="hover:text-primaryColor hover:font-primaryFont" >
                  <Link>Investor Relations</Link>
                </li>
                <li className="italic hover:text-primaryColor hover:font-primaryFont">
                  
                  <Link>Careers - we're hiring!</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-primaryFont text-lg ">Contact Us</h1>
              <ul className="flex flex-col gap-3 mt-4 text-sm">
                <li className="hover:text-primaryColor hover:font-primaryFont">
                  {" "}
                  <Link>Help</Link>
                </li>
                <li className="hover:text-primaryColor hover:font-primaryFont">
                  <Link>Terms & conditions</Link>
                </li>
                <li className="hover:text-primaryColor hover:font-primaryFont">
                  <Link>Privacy policy</Link>
                </li>
                <li className="hover:text-primaryColor hover:font-primaryFont">
                  <Link>Cookie settings</Link>
                </li>
                <li className="hover:text-primaryColor hover:font-primaryFont">
                  <Link>Sitemap</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* portion two */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
            <div className="flex gap-6">
              <h1 className="font-primaryFont">Follow us</h1>
              <ul className="flex gap-4">
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={24} />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={24} />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <GoogleTranslator />
            </div>
          </div>
        </main>
      </footer>
      <hr className="my-8" />
      <div className="flex flex-col lg:flex-row justify-start items-center gap-8">
        <h1 className="text-lg  lg:w-1/3 text-center lg:text-left">
          Reviewers recommended learning with INPATH Business
        </h1>
        <div className="flex justify-center gap-4">
          <img
            width={50}
            src="https://business.udemy.com/wp-content/uploads/2024/04/time-atedtc-worlds-top-edtech-companies-2024-logo-180px.png.webp"
            alt="Logo"
          />
          <img
            width={50}
            src="https://business.udemy.com/wp-content/uploads/2025/01/g2-badge-leader-winter-2025.png"
            alt="Badge"
          />
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-primaryFont lg:border-e lg:pe-4">INPATH</h1>
          <p>The power of possibilities</p>
        </div>
        <div className="hover:text-primaryColor ">© 2025 INPATH, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
