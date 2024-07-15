import React from 'react'
import Section1 from '../components/core/HomePage/Section1'
import Choose_your_preference from '../components/core/HomePage/Choose_your_preference'
import Check_Offers from '../components/core/HomePage/Check_Offers'
import Explore_our_latest_articals from '../components/core/HomePage/Explore_our_latest_articals'
import ContactUs from '../components/core/HomePage/ContactUs'
import Footer from '../components/common/Footer'
import Categorized_Cards from '../components/core/HomePage/Categorized_Cards'

const Home = () => {
  return (
    <div>

      <Section1 />

      <Choose_your_preference />

      <Check_Offers />

      <Categorized_Cards />

      <Explore_our_latest_articals />

      <ContactUs />

      <Footer />

    </div>
  )
}

export default Home
