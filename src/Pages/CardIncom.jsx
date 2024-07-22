import React from 'react'
import CardNetworkCom from '../components/common/CardNetworkCom'

import img from "../assets/cardNetwork.png"
import Cardbox from '../components/core/CardIncom/Cardbox'
import Footer from '../components/common/Footer'




const CardIncom = () => {
  return (
    <div>
      <CardNetworkCom img={img} heading1={"Credit Card by"} heading2={"Income!"} desc1={"Unlock your style with every swipe."} desc2={"Choose the perfect card tailored to your income level, offering benefits that match your financial lifestyle and goals. Enjoy rewards that grow with you."}/>
      <Cardbox/>
      <Footer/>
    </div>
  )
}

export default CardIncom
