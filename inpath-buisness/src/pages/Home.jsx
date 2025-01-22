
import React from 'react'
import BusinessPlatform from '../components/landingPage/BusinessPlatform'
import OrganizationLearningImpact from '../components/landingPage/OrganizationLearningImpact'
import CustomerExperience from '../components/landingPage/CustomerExperience'
import MainCard from "../components/landingPage/MainCard"
import BrandCarousel from "../components/landingPage/BrandCarousel"
import ServiceCard from '../components/landingPage/ServiceCard'
import HeroSection from '../components/landingPage/HeroSection'
import NavigationSection from '../components/landingPage/NavigationSection'
const Home = () => {
  return (
    <div className='overflow-hidden'>
      <HeroSection/>
      <BrandCarousel/>
      <MainCard/>
      <ServiceCard/>
      <NavigationSection />
     <BusinessPlatform/>
      <CustomerExperience/>
     <OrganizationLearningImpact/>
    </div>
  );
};

export default Home;
