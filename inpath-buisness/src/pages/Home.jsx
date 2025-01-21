import React from 'react'
import BusinessPlatform from '../components/landingPage/BusinessPlatform'
import OrganizationLearningImpact from '../components/landingPage/OrganizationLearningImpact'
import CustomerExperience from '../components/landingPage/CustomerExperience'
const Home = () => {
  return (
    <div>
     <BusinessPlatform/>
      <CustomerExperience/>
     <OrganizationLearningImpact/>
    </div>
  )
}

export default Home
