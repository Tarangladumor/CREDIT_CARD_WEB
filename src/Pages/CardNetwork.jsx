import React from 'react'
import CardNetworkCom from '../components/common/CardNetworkCom'
import img from "../assets/cardNetwork.png"
import CardSection from '../components/core/CardNetwork/CardSection'
import Footer from '../components/common/Footer'
import TermsCondition from '../components/common/TermsCondition'

const CardNetwork = () => {
  return (
    <div>
      <CardNetworkCom img={img} heading1={"Credit Card by"} heading2={"Network!"} desc1={"Unlock your style with every swipe."} desc2={"Select offers cards tailored to your network preferences, providing global acceptability, lower transaction fees, flexible redemption options, and the luxury of premium experiences."} />

    <CardSection/>
    <Footer/>

    </div>
  )
}

export default CardNetwork
