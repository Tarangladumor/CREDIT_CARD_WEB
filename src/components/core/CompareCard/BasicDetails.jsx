import React from 'react'
import img from "../../../assets/Visa.png"
import img1 from "../../../assets/right.png"
import img2 from "../../../assets/wrong.png"
import Table from './Table'
import Table_1 from './Table_1'
import Table_3 from './Table_3'
import Table_4 from './Table_4'
import CardCharges from './CardCharges'
import FrequentlyAskQue from './FrequentlyAskQue'
import TermsCondition from '../../common/TermsCondition'

const cardType = [
    {
        cardType:"Regular",
        networkType:img,
        bestFor:"lifestyle"
    }
]

const creditCardRating =[
    {
        usabilityRating:"abc",
        customerRating:"abc"
    }
]

const feature = [
    {
        diningBenefits:img1,
        travelBenifits:img1,
        shoppingBenifits:img1,
        insuranceBuying:img2,
        intrestFreePeriod:img1,
        milestone:img2,
    }
]

 const cardCharges = [
    {
        anualFees:"Free",
        joingFrees:"Free",
        apr:"42%",
        addOnCardFree:"Free",
        minimumRePayment:"5%",
        cashAdvance:"NA"
    }
 ]

const BasicDetails = () => {
  return (
    <div>

    
    <div className='w-11/12 mx-auto'>
    <div>
    {
        cardType.map((Data,i) => (
            <Table key={i} Data={Data}/>
        ))
    }
    </div>

    <div>
        {
            creditCardRating.map((item,i) => (
                <Table_1 key={i} item={item} />
            ))
        }
    </div>

    <div>
        {
            feature.map((feature,i)=>(
                <Table_3 key={i} feature={feature} />
            ))
        }
    </div>

    <div>
        {
            cardCharges.map((card,i) => (
                <Table_4 key={i} card={card} />
            ))
        }
    </div>
    <div>
        <CardCharges/>
    </div>
    <div>
        <FrequentlyAskQue/>
    </div>
   

    </div>
    <TermsCondition/>
    </div>
  )
}

export default BasicDetails
