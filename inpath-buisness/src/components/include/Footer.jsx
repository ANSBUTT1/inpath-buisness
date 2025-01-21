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
          <div className="flex flex-col  gap-6 md:gap-16 md:flex-row lg:gap-20">
            <div>
              <h1 className="font-bold text-xl">InPATH Business</h1>
              <ul className="flex flex-col gap-3 mt-4">
                <li>
                  <Link> About Us</Link>
                </li>
                <li>
                  <Link>Events</Link>
                </li>
                <li>
                  <Link>Partners & Integrations</Link>
                </li>
                <li>
                  <Link>Partner with INPATH</Link>
                </li>
                <li>
                  <Link>Take a product tour</Link>
                </li>
                <li>
                  <Link>News</Link>
                </li>
                <li>
                  <Link>Investor Relations</Link>
                </li>
                <li className="italic">
                  {" "}
                  <Link>Careers - we're hiring!</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-xl ">Contact Us</h1>
              <ul className="flex flex-col gap-3 mt-4">
                <li>
                  {" "}
                  <Link>Help</Link>
                </li>
                <li>
                  <Link>Terms & conditions</Link>
                </li>
                <li>
                  <Link>Privacy policy</Link>
                </li>
                <li>
                  <Link>Cookie settings</Link>
                </li>
                <li>
                  <Link>Sitemap</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* portion two */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
            <div className="flex gap-6">
              <h1 className="font-bold">Follow us</h1>
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
        <h1 className="text-xl font-semibold lg:w-1/3 text-center lg:text-left">
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
          <h1 className="text-2xl font-bold lg:border-e lg:pe-4">INPATH</h1>
          <p>The power of possibilities</p>
        </div>
        <div>© 2025 INPATH, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
