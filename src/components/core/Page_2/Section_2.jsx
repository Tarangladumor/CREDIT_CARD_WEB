import React from 'react'
import CardDetails from '../../common/CardDetails'
import Image from "../../../assets/Card_img.png"


const cardData = [
    {
        bank: "Axis bank",
        image: Image,
        APR: 15.99,
        title: "Rupay Credit card",
        annualFees: 0,
        rewards: "Earn 2% cashback onll purchases."
    },
    {
        bank: "ICICI bank",
        image: Image,
        APR: 15.99,
        title: "Rupay Credit card",
        annualFees: 0,
        rewards: "Earn 2% cashback onll purchases."
    },
    
]

const Section_2 = () => {
  return (
    <div>
         <div className='flex justify-evenly w-10/12 mx-auto mt-16'>
                {
                    cardData.map((Data, i) => (
                        <CardDetails key={i} Data={Data} />
                    ))
                }
            </div>
    </div>
  )
}

export default Section_2
