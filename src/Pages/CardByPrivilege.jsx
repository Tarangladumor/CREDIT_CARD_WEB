import React from 'react'
import CardNetworkCom from '../components/common/CardNetworkCom'
import PRIVILEGEIMG from '../assets/Privilege_image.png'
import CardSection from '../components/core/CardByPrivilege/CardSection'

const CardByPrivilege = () => {
  return (
    <div>

        <CardNetworkCom img={PRIVILEGEIMG} heading1={"Credit Card by"} heading2={" Privilege!"} desc1={"Unlock your style with every swipe."} desc2={"Unlock privileges with our cards: tailored rewards, exclusive access, and premium benefits. Experience unmatched convenience and luxury. Elevate your journey"}/>

        <CardSection/>

    </div>
  )
}

export default CardByPrivilege
