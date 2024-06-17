import React from 'react'
import LIMITED from '../../assets/limited_offer_img.png'
import { Link } from 'react-router-dom';

const CardDetails = ({Data}) => {

  console.log(Data);
  return (
    <div className=' bg-[#D2F4E4] w-[45%] flex flex-col gap-5'>
      
      <div className='flex justify-between relative'>

        <img src={LIMITED} width={150} height={150} className='absolute -top-11 -left-8'/>

        <p className='absolute right-20 top-10 font-medium text-2xl'>{Data?.bank}</p>
      </div>

      <div className=' rotate-15 w-full flex justify-center'>
        <img src={Data?.image} height={350} width={350} className=' mt-16'/>
      </div>

      <div className='flex flex-col gap-2 px-16'>

        <div className=' flex justify-between'>

          <p className=' font-medium text-2xl'>{Data?.title}</p>

          <p className=' font-medium text-2xl'>ARP : {Data?.APR}%</p>
        </div>

        <p className=' font-medium text-2xl'>Annual Fee : ${Data?.annualFees}</p>

        <p className=' text-[#8A8C17] font-medium text-2xl'>Rewards : <span className=' text-black'>{Data.rewards}</span></p>
      </div>

      <div className='flex flex-col gap-2 px-16 pb-10'>

        <p className=' text-xl font-medium'>User Reviews and Ratings:</p>

        <div className=' flex justify-between items-center'>

          <div>Rating Stars</div>

          {/* <Link>View more</Link> */}
        </div>
      </div>
    </div>
  )
}

export default CardDetails
