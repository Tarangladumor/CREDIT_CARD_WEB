import React from 'react'
import CardSummary from './CardSummary'
import IncludeSection from './IncludeSection'
import Benefits from './Benefits'
import FeeCharges from './FeeCharges'
import RewardPoints from './RewardPoints'
import Overview from './Overview'
import QuestionsSection from './QuestionsSection'
import SimmilarCards from './SimmilarCards'



const FullDetails = () => {
  return (
    <div>

        <CardSummary/>

        <IncludeSection/>

        <div className=' border-[#159A9C] border-b border-[4px] w-[90%] mx-auto my-20'></div>

        <Benefits/>

        <FeeCharges/>

        <RewardPoints/>

        <Overview/>

        <QuestionsSection/>

        <SimmilarCards/>
    </div>
  )
}

export default FullDetails
