import React from "react";
import { FaCheckCircle } from "react-icons/fa";
const SignUp = () => {
  return (
    <div className="grid grid-cols-2 px-40">
      <div className="w-full h-auto">
        <div>
          <h1>Get your demo</h1>
          <p>
            Tell us your needs and we'll start on a custom plan to drive
            results.
          </p>
        </div>
        <div>
          <h1>With Udemy as your learning partner, you can:</h1>
          <ul className="list-none space-y-2">
      <li className="flex items-center">
        <FaCheckCircle className="text-green-500 mr-2" /> 
        Train your entire workforce with over 28,000+ courses in 16 languages
      </li>
      <li className="flex items-center">
        <FaCheckCircle className="text-green-500 mr-2" />
        Prep employees for over 200 industry-recognized certification exams
      </li>
      <li className="flex items-center">
        <FaCheckCircle className="text-green-500 mr-2" />
        Develop highly skilled tech teams in risk-free practice environments
      </li>
      <li className="flex items-center">
        <FaCheckCircle className="text-green-500 mr-2" />
        Identify emerging skills gaps, learning trends, and industry benchmarks
      </li>
      <li className="flex items-center">
        <FaCheckCircle className="text-green-500 mr-2" />
        Integrate content with your existing learning management system
      </li>
    </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SignUp;
