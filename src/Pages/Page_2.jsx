import React from 'react'
import FindGreatDeal from '../components/common/FindGreatDeal'
import img from ".././assets/check_offers_img.png"
import Section_2 from '../components/core/Page_2/Section_2'
import Footer from '../components/common/Footer'

const Page_2 = () => {
  return (
    <div>

      <div>
        <FindGreatDeal img={img} heading={"Find great deals here!"} desc={"Discover exclusive deals and special discounts available for a limited time."}/>
        <Section_2/>
        <Section_2/>
        <Footer/>
      </div>
    </div>
  )
}

export default Page_2
