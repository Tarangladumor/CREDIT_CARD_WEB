import React from 'react'
import Footer from '../components/common/Footer'
import IMG from '../assets/check_offers_img.png'
import Image from '../assets/Card_img.png'
import CardDetails from '../components/common/CardDetails'

const cardData = [
  {
    bank: "Axis bank",
    image: Image,
    APR: 15.99,
    title: "Rupay Credit card",
    annualFees: 0,
    rewards: "Earn 2% cashback onll purchases.",
    reviews: [
      "Great rewards, low fees, excellent customer service. Highly recommend!",
      "Great rewards, low fees, excellent customer service. Highly recommend!",
    ]
  },
  {
    bank: "ICICI bank",
    image: Image,
    APR: 15.99,
    title: "Rupay Credit card",
    annualFees: 0,
    rewards: "Earn 2% cashback onll purchases.",
    reviews: [
      "Great rewards, low fees, excellent customer service. Highly recommend!",
      "Great rewards, low fees, excellent customer service. Highly recommend!",
    ]
  },
  {
    bank: "Axis bank",
    image: Image,
    APR: 15.99,
    title: "Rupay Credit card",
    annualFees: 0,
    rewards: "Earn 2% cashback onll purchases.",
    reviews: [
      "Great rewards, low fees, excellent customer service. Highly recommend!",
      "Great rewards, low fees, excellent customer service. Highly recommend!",
    ]
  },
  {
    bank: "ICICI bank",
    image: Image,
    APR: 15.99,
    title: "Rupay Credit card",
    annualFees: 0,
    rewards: "Earn 2% cashback onll purchases.",
    reviews: [
      "Great rewards, low fees, excellent customer service. Highly recommend!",
      "Great rewards, low fees, excellent customer service. Highly recommend!",
    ]
  },
  {
    bank: "Axis bank",
    image: Image,
    APR: 15.99,
    title: "Rupay Credit card",
    annualFees: 0,
    rewards: "Earn 2% cashback onll purchases.",
    reviews: [
      "Great rewards, low fees, excellent customer service. Highly recommend!",
      "Great rewards, low fees, excellent customer service. Highly recommend!",
    ]
  },
  {
    bank: "ICICI bank",
    image: Image,
    APR: 15.99,
    title: "Rupay Credit card",
    annualFees: 0,
    rewards: "Earn 2% cashback onll purchases.",
    reviews: [
      "Great rewards, low fees, excellent customer service. Highly recommend!",
      "Great rewards, low fees, excellent customer service. Highly recommend!",
    ]
  }
]

const Page_2 = () => {
  return (
    <div>

      <div className=' w-10/12 mx-auto mt-16'>
        <div className='flex gap-5 justify-center items-center'>

          <div>
            <div>
              <img src={IMG} className=' w-[150px] aspect-square' />
            </div>

            <div>
              <div className=' border-[#159A9C] border-b border-[5px]  w-[70%] mx-auto'></div>
            </div>
          </div>

          <div>

            <p className=' font-black text-6xl mt-6'>Find great deals here!</p>

            <p className=' font-medium text-3xl max-w-[85%] opacity-50'>Discover exclusive deals and special discounts available for a limited time.</p>
          </div>
        </div>

        <div className='w-11/12 mx-auto mt-20'>
          <div className='grid grid-cols-2 gap-y-16 gap-x-24'>
            {
              cardData.map((card, index) => (
                <CardDetails Data={card} key={index} />
              ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Page_2
