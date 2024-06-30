import React from 'react'
import IMG from "../../../assets/check_offers_img.png"
import Image from "../../../assets/Card_img.png"
import CardDetails from '../../common/CardDetails'

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
    }
]

const Check_Offers = () => {
    return (
        <div>
            <div className=' w-3/4 mx-auto mt-16'>

                <div className='flex gap-5 items-center'>

                    <div>
                        <div>
                            <img src={IMG} className=' w-[150px] aspect-square' />
                        </div>

                        <div>
                            <div className=' border-[#159A9C] border-b border-[5px]  w-[70%] mx-auto'></div>
                        </div>
                    </div>

                    <div>

                        <p className=' font-black text-6xl'>CHECK ALL </p>

                        <p className=' font-black text-6xl'>AVAILABLE OFFERS </p>
                    </div>
                </div>

                <div className=' opacity-55 font-medium text-2xl mt-10 ml-10 max-w-[50%]'>
                    Explore exclusive partner deals, available for a limited time only.
                </div>
            </div>

            <div className='flex justify-evenly w-10/12 mx-auto mt-16'>
                {
                    cardData.map((Data, i) => (
                        <CardDetails key={i} Data={Data} />
                    ))
                }
            </div>

            <div className='flex justify-center items-center mt-14 mb-14'>
                <button className=' border-[8px] border-[#159A9C] rounded-full px-10 py-3 shadow-[0px_20px_50px_10px_#00000040]'>
                    <p className=' font-medium text-xl'>Discover More</p>
                </button>
            </div>
        </div>
    )
}

export default Check_Offers
