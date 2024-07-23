import React from 'react'


const CardNetworkCom = ({img,heading1,heading2,desc1,desc2}) => {
  return (
    <div>
    <div className='flex items-center justify-center m-4'>
        <div className='flex flex-col'>
            <img src={img} alt="" className='h-[150px] w-[170px]' />
            <div className=' w-[60%] mt-[-50px] ml-7' >
                <div className=' border-[#159A9C] border-b border-[5px] my-12'></div>
            </div>
      </div>
      <div className='flex flex-col gap-1 ml-5'>
        <p className=' text-7xl font-extrabold'>{heading1}</p>
        <p className='text-7xl font-extrabold text-[#159a9c]'>{heading2}</p>
        <p className='text-[#0000008a] text-xl'>{desc1}</p>
      </div>
    </div>
    <div className='flex flex-col justify-center items-center'>
        <div>{desc2}</div>
        <div className='w-[30%]'>
            <div className=' border-[#159A9C] border-b border-[5px] my-12'></div>
        </div>
      </div>
    </div>
  )
}

export default CardNetworkCom
