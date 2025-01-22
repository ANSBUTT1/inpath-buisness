import React from "react";
import { FaCheck } from "react-icons/fa6";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup"; // For validation
import Volks from "../../assets/Volks.png";
import Cisco from "../../assets/cisco.png";
import Citi from "../../assets/citi.png";
import Ericson from "../../assets/ericson.png";
import Sumsung from "../../assets/samsung.png";
import Procter from "../../assets/procter.png";
import Vimeo from "../../assets/vimeo.png";
import Att from "../../assets/att.png";

const SignUp = () => {
  const images = [
    Volks,
    Cisco,
    Citi,
    Ericson,
    Sumsung,
    Procter,
    Vimeo,
    Att,
  ];

  // Validation Schema with Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    location: Yup.string().required("Location is required"),
    companyName: Yup.string().required("Company Name is required"),
    companySize: Yup.string().required("Company Size is required"),
    peopleToTrain: Yup.string().required("Number of people to train is required"),
    jobTitle: Yup.string().required("Job Title is required"),
    jobLevel: Yup.string().required("Job Level is required"),
    trainingNeeds: Yup.string(),
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 md:px-40 py-16">
      {/* Left Section */}
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-primaryFont text-secondaryColor">Get your demo</h1>
          <p className="text-gray-600 mt-4">
            Tell us your needs and we'll start on a custom plan to drive results.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-primaryFont text-secondaryColor">With INPATH as your learning partner, you can:</h1>
          <ul className="list-none space-y-3 mt-8">
            <li className="flex items-center text-gray-700">
              <FaCheck className="text-primaryColor mr-3 text-xl" />
              Train your entire workforce with over 28,000+ courses in 16 languages
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheck className="text-primaryColor mr-3 text-xl" />
              Prep employees for over 200 industry-recognized certification exams
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheck className="text-primaryColor mr-3 text-xl" />
              Develop highly skilled tech teams in risk-free practice environments
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheck className="text-primaryColor mr-3 text-xl" />
              Identify emerging skills gaps, learning trends, and industry benchmarks
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheck className="text-primaryColor mr-3 text-xl" />
              Integrate content with your existing learning management system
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-primaryFont text-secondaryColor md:mt-16">Trusted by</h1>
          <div className="grid grid-cols-4 sm:grid-cols-4 gap-4 mt-12">
            {images.map((imageSrc, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  src={imageSrc}
                  alt={`Trusted by ${index}`}
                  className="w-16 h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="bg-white shadow-lg p-4 md:p-8 rounded-lg w-full max-w-lg mx-auto">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            location: "",
            companyName: "",
            companySize: "",
            peopleToTrain: "",
            jobTitle: "",
            jobLevel: "",
            trainingNeeds: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Form submitted with values: ", values);
          }}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form>
              <div className="space-y-6">
                {/* First Name and Last Name */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full">
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="First Name*"
                      className="border p-3 w-full placeholder-secondaryColor border-secondaryColor rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {touched.firstName && errors.firstName && (
                      <div className="text-red-500 text-sm">{errors.firstName}</div>
                    )}
                  </div>
                  <div className="w-full">
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Last Name*"
                      className="border p-3 w-full rounded-lg placeholder-secondaryColor border-secondaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {touched.lastName && errors.lastName && (
                      <div className="text-red-500 text-sm">{errors.lastName}</div>
                    )}
                  </div>
                </div>

                {/* Email and Phone */}
                
                  <div className="w-full">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Work Email*"
                      className="border p-3 w-full rounded-lg placeholder-secondaryColor border-secondaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {touched.email && errors.email && (
                      <div className="text-red-500 text-sm">{errors.email}</div>
                    )}
                  </div>
                  <div className="w-full">
                    <Field
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone Number*"
                      className="border p-3 w-full rounded-lg placeholder-secondaryColor border-secondaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {touched.phoneNumber && errors.phoneNumber && (
                      <div className="text-red-500 text-sm">{errors.phoneNumber}</div>
                    )}
                  </div>
               

                {/* Location, Company Name */}
                
                  <div className="w-full">
                    <Field
                      as="select"
                      name="location"
                      className="border p-3 w-full rounded-lg placeholder-secondaryColor border-secondaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    >
                      <option value="">Select Location</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                    </Field>
                    {touched.location && errors.location && (
                      <div className="text-red-500 text-sm">{errors.location}</div>
                    )}
                  </div>
                  <div className="w-full">
                    <Field
                      type="text"
                      name="companyName"
                      placeholder="Company Name*"
                      className="border p-3 w-full rounded-lg placeholder-secondaryColor border-secondaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {touched.companyName && errors.companyName && (
                      <div className="text-red-500 text-sm">{errors.companyName}</div>
                    )}
                  </div>
            

                {/* Company Size, People to Train */}
                <div className="flex gap-4 flex-col sm:flex-row">
                  <div className="w-full">
                    <Field
                      as="select"
                      name="companySize"
                      className="border p-3 w-full rounded-lg placeholder-secondaryColor border-secondaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    >
                      <option value="">Select Company Size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201+">201+ employees</option>
                    </Field>
                    {touched.companySize && errors.companySize && (
                      <div className="text-red-500 text-sm">{errors.companySize}</div>
                    )}
                  </div>
                  <div className="w-full">
                    <Field
                      as="select"
                      name="peopleToTrain"
                      className="border p-3 w-full rounded-lg placeholder-secondaryColor border-secondaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    >
                      <option value="">Select Number of People to Train</option>
                      <option value="1-10">1-10 people</option>
                      <option value="11-50">11-50 people</option>
                      <option value="51-200">51-200 people</option>
                      <option value="201+">201+ people</option>
                    </Field>
                    {touched.peopleToTrain && errors.peopleToTrain && (
                      <div className="text-red-500 text-sm">{errors.peopleToTrain}</div>
                    )}
                  </div>
                </div>

                {/* Job Title, Job Level */}
                <div className="flex gap-4 flex-col sm:flex-row">
                  <div className="w-full">
                    <Field
                      as="select"
                      name="jobTitle"
                      className="border p-3 w-full rounded-lg placeholder-secondaryColor border-secondaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    >
                      <option value="">Select Job Title</option>
                      <option value="Manager">Manager</option>
                      <option value="Director">Director</option>
                      <option value="Executive">Executive</option>
                    </Field>
                    {touched.jobTitle && errors.jobTitle && (
                      <div className="text-red-500 text-sm">{errors.jobTitle}</div>
                    )}
                  </div>
                  <div className="w-full">
                    <Field
                      as="select"
                      name="jobLevel"
                      className="border p-3 w-full rounded-lg placeholder-secondaryColor border-secondaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    >
                      <option value="">Select Job Level</option>
                      <option value="Entry">Entry Level</option>
                      <option value="Mid">Mid Level</option>
                      <option value="Senior">Senior Level</option>
                    </Field>
                    {touched.jobLevel && errors.jobLevel && (
                      <div className="text-red-500 text-sm">{errors.jobLevel}</div>
                    )}
                  </div>
                </div>

                {/* Training Needs */}
                <div>
                  <Field
                    as="textarea"
                    name="trainingNeeds"
                    placeholder="What are your organization's training needs? (Optional)"
                    className="border p-3 w-full rounded-lg placeholder-secondaryColor border-secondaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched.trainingNeeds && errors.trainingNeeds && (
                    <div className="text-red-500 text-sm">{errors.trainingNeeds}</div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-primaryColor text-white py-3 rounded-lg hover:bg-hoverColor transition duration-300"
                >
                  Submit
                </button>
              </div>
              <p className="text-xs text-center mt-3 text-gray-500">
                By <span className="text-primaryColor font-primaryFont cursor-pointer"> signing up</span>, you agree to our <span className="text-primaryColor font-primaryFont cursor-pointer"> Terms</span> and <span  className=  " cursor-pointer text-primaryColor font-primaryFont"> Privacy Policy</span>. You agree that we can contact you about <span className="cursor-pointer text-primaryColor font-primaryFont" > INPATH</span> and use data from third parties to personalize your experience.
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
