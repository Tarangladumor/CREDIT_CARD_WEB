import React from 'react'
import FindGreatDeal from '../components/common/FindGreatDeal'
import img from "../assets/doubleCard.png"
import Section_1 from '../components/core/CompareCard/Section_1'
import BasicDetails from '../components/core/CompareCard/BasicDetails'

const CompareCard = () => {
  return (
    <div className=''>
      <FindGreatDeal img={img} heading={"Compare the Cards!"} desc={"Compare your cards to get better understanding and deals."} />
      <Section_1/>
      <BasicDetails/>
    </div>
  )
}

export default CompareCard
