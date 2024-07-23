import React from 'react'

const CardCharges = () => {
  return (
    <div className='mx-auto mb-5 border-b-4'>
      <div className=' bg-[#159a9c] flex justify-center font-bold text-2xl p-3'>
        <p>Credit Card Charges</p>
      </div>
      <div className='flex justify-around'>
        <div className='p-2 text-[#0000008a] text-[20px] border-r-4'>
            <p className='mr-20'>Range of Fine</p>
        </div>
        <div className='p-2 text-[#0000008a] text-[20px] w-[30%] border-r-4'>
            <p className=' mr-20'>10% of the total amount Due
                Subject to a minimum of $2
                and a maximum of $15.
            </p>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default CardCharges
