import React from 'react'
import visa from "../../../assets/Visa_1.png"
import rupay from "../../../assets/Rupay.png"
import diner from "../../../assets/dinersClub.png"
import master from "../../../assets/master.png"
import american from "../../../assets/americanExpress.png"
import Card from './Card'

const card = [
    {
    img:visa,
    text:"Visa"
    },
    {
        img:rupay,
        text:"Rupay"
    }

]

const card_1=[
    {
        img:master,
        text:"Maestercard"
    },
    {
        img:american,
        text:"American Express"
    },
    {
        img:visa,
        text:"visa"
    },
    {
        img:rupay,
        text:"Rupay"
    },
    {
        img:diner,
        text:"Diner"
    },
]

const CardSection = () => {
  return (
    <div className='bg-[#f7f5fd] p-10'>
      <div className=''>
        <div className='text-[#159a9c] text-xl w-11/12 mx-auto '>
            <p>Most opted card network</p>
            <div className=' w-[13%] mt-[-35px] ' >
                <div className=' border-[#159A9C] border-b border-[1px] my-12'></div>
            </div>
        </div>
        <div className='w-11/12 mx-auto'>
        <div className='grid grid-cols-2 gap-x-24'>

            {
                card.map((data,i) =>(
                    <Card  key={i} data={data}/>
                ))
            }
        </div>
        </div>
      </div>

      <div className='mt-10'>
        <div className='text-[#159a9c] text-xl w-11/12 mx-auto '>
                <p>Most opted card network</p>
                <div className=' w-[13%] mt-[-35px] ' >
                    <div className=' border-[#159A9C] border-b border-[1px] my-12'></div>
                </div>
            </div>
            <div className='w-11/12 mx-auto'>
            <div className='grid grid-cols-2 gap-x-24 gap-y-16'>

                {
                    card_1.map((data,i) =>(
                        <Card  key={i} data={data}/>
                    ))
                }
            </div>
            </div>
      </div>

      <div>

      </div>
    </div>
  )
}

export default CardSection
