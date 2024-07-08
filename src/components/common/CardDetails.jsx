import React from 'react'
import LIMITED from '../../assets/limited_offer_img.png'

const CardDetails = ({Data}) => {

  console.log(Data);
  return (
    <div className=' bg-[#D2F4E4] w-[40%] flex flex-col gap-5 rounded-tr-3xl rounded-bl-3xl'>
      
      <div className='flex justify-between relative'>

        <img src={LIMITED} width={100} height={100} className='absolute -top-8 -left-5'/>

        <p className='absolute right-20 top-10 font-medium text-xl'>{Data?.bank}</p>
      </div>

      <div className=' rotate-15 w-full flex justify-center'>
        <img src={Data?.image} height={300} width={300} className=' mt-12'/>
      </div>

      <div className='flex flex-col gap-2 px-12'>

        <div className=' flex justify-between'>

          <p className=' font-medium text-xl'>{Data?.title}</p>

          <p className=' font-medium text-xl'>ARP : {Data?.APR}%</p>
        </div>

        <p className=' font-medium text-xl'>Annual Fee : ${Data?.annualFees}</p>

        <p className=' text-[#8A8C17] font-medium text-xl'>Rewards : <span className=' text-black'>{Data.rewards}</span></p>
      </div>

      <div className='flex flex-col gap-2 px-12 pb-10'>

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
