import React, { useState } from 'react'
import FindGreatDeal from '../components/common/FindGreatDeal'
import img from "../assets/doubleCard.png"
import Section_1 from '../components/core/CompareCard/Section_1'
import { useLocation } from 'react-router-dom'
import BasicDetails from '../components/core/CompareCard/BasicDetails'
import Benefits from '../components/core/CompareCard/Benefits'
import Charges from '../components/core/CompareCard/Charges'
import FAQS from '../components/core/CompareCard/FAQS'
import TermsCondition from '../components/common/TermsCondition'

const CompareCard = () => {

  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const card1Id = pathParts[pathParts.length - 1]
  console.log("ID>>>>>>>>>>>>>>", card1Id);

  const [card1, setCard1] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div>
      <FindGreatDeal img={img} heading={"Compare the Cards!"} desc={"Compare your cards to get better understanding and deals."} />
      <Section_1 card1Id={card1Id}
        setCard1Data={setCard1}
        setSelectedCardData={setSelectedCard} />

      <BasicDetails card1={card1} selectedCard={selectedCard} />

      <Benefits card1={card1} selectedCard={selectedCard} />

      <Charges card1={card1} selectedCard={selectedCard} />

      <FAQS />

      <div className='mt-20'>
        <TermsCondition />
      </div>

    </div>
  )
}

export default CompareCard
