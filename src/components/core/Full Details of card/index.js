import React, { useEffect } from 'react'
import CardSummary from './CardSummary'
import IncludeSection from './IncludeSection'
import Benefits from './Benefits'
import FeeCharges from './FeeCharges'
import RewardPoints from './RewardPoints'
import Overview from './Overview'
import QuestionsSection from './QuestionsSection'
import SimmilarCards from './SimmilarCards'
import { useLocation } from 'react-router-dom'
import { fetchOneCardDetails } from '../../../services/Operations/cardAPI'
import Comment from './Comment'

const FullDetails = ({Details}) => {

  return (
    <div>

      <CardSummary Data={Details}/>

      <IncludeSection Data={Details} />

      <div className=' border-[#159A9C] border-b border-[4px] w-[90%] mx-auto my-20'></div>

      <Benefits Data={Details}/>

      <FeeCharges Data={Details}/>

      <RewardPoints Data={Details}/>

      <Overview Data={Details}/>

      <QuestionsSection Data={Details}/>

      <Comment Data={Details}/>

      <SimmilarCards Data={Details}/>
    </div>
  )
}

export default FullDetails
