import React from 'react'

const CardNetworkCom = ({ img, heading1, heading2, desc1, desc2 }) => {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center justify-center m-4'>
        <div className='flex flex-col items-center md:items-start'>
          <img src={img} alt="" className='h-[100px] w-[120px] md:h-[200px] md:w-[230px]' />
          <div className='w-[60%] mt-[-30px] md:mt-[-50px] mx-auto'>
            <div className='border-[#159A9C] border-b border-[5px] my-8 md:my-12 flex justify-center'></div>
          </div>
        </div>
        <div className='flex flex-col gap-1 ml-0 md:ml-5 text-center md:text-left'>
          <p className='text-4xl md:text-7xl font-extrabold'>{heading1}</p>
          <p className='text-4xl md:text-7xl font-extrabold text-[#159a9c]'>{heading2}</p>
          <p className='text-[#0000008a] text-lg md:text-xl'>{desc1}</p>
        </div>
      </div>

      <div className='hidden md:flex flex-col justify-center items-center w-[90%] mx-auto'>
        <div className='text-base md:text-xl max-w-[55%] text-center'>{desc2}</div>
        <div className='w-[60%] md:w-[30%] mx-auto'>
          <div className='border-[#159A9C] border-b border-[5px] my-8 md:my-12'></div>
        </div>
      </div>
    </div>

  )
}

export default CardNetworkCom
