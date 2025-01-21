import React from 'react'
import Header from '../components/include/Header'
import CustomerExperience from '../components/landingPage/CustomerExperience'
import BusinessPlatform from '../components/landingPage/BusinessPlatform'

const Home = () => {
  return (
    <div>
      <Header />
      <BusinessPlatform/>
      <CustomerExperience/>
    </div>
  )
}

export default Home
