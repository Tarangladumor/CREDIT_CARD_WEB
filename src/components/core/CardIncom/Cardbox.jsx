import React from 'react'
import upto from "../../../assets/upto.png"

import CardIncomBox from './CardIncomBox'


const card = [
    {
    img:upto,
    text:"Up to 25k"
    },
    {
        img:upto,
        text:"25k to 50k"
    }

]

const card_1=[
    {
        img:upto,
        text:"Up to 25k"
    },
    {
        img:upto,
        text:"25k to 50k"
    },
    {
        img:upto,
        text:"50k to 1Lakh"
    },
    {
        img:upto,
        text:"50k to 1.5L"
    },
    {
        img:upto,
        text:"Above 1.5L"
    },
]

const Cardbox = () => {
  return (
    <div className='bg-[#f7f5fd] p-10'>
      <div className=''>
        <div className='text-[#159a9c] text-xl w-11/12 mx-auto '>
            <p>Most opted Card based on Income</p>
            <div className=' w-[20%] mt-[-35px] ' >
                <div className=' border-[#159A9C] border-b border-[1px] my-12'></div>
            </div>
        </div>
        <div className='w-11/12 mx-auto'>
        <div className='grid grid-cols-2 gap-x-24'>

            {
                card.map((data,i) =>(
                    <CardIncomBox  key={i} data={data}/>
                ))
            }
        </div>
        </div>
      </div>

      <div className='mt-10'>
        <div className='text-[#159a9c] text-xl w-11/12 mx-auto '>
                <p>All Card networks</p>
                <div className=' w-[10%] mt-[-35px] ' >
                    <div className=' border-[#159A9C] border-b border-[1px] my-12'></div>
                </div>
            </div>
            <div className='w-11/12 mx-auto'>
            <div className='grid grid-cols-2 gap-x-24 gap-y-16'>

                {
                    card_1.map((data,i) =>(
                        <CardIncomBox  key={i} data={data}/>
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

export default Cardbox
