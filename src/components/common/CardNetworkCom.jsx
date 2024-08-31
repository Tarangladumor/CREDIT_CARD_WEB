import React from 'react';

const CardNetworkCom = ({ img, heading1, heading2, desc1, desc2 }) => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center m-4'>
      <div className='flex flex-col items-center md:items-start'>
        <img 
          src={img} 
          alt="" 
          className='h-[100px] w-[120px] md:h-[150px] md:w-[170px]' 
        />
        <div className='w-[60%] md:w-full mt-[-30px] md:mt-[-50px] ml-2 md:ml-7'>
          <div className='border-[#159A9C] border-b-[5px] my-6 md:my-12'></div>
        </div>
      </div>
      <div className='flex flex-col gap-1 ml-2 md:ml-5 mt-4 md:mt-0'>
        <p className='text-4xl md:text-7xl font-extrabold'>{heading1}</p>
        <p className='text-4xl md:text-7xl font-extrabold text-[#159a9c]'>{heading2}</p>
        <p className='text-base md:text-xl text-[#0000008a]'>{desc1}</p>
      </div>
      <div className='flex flex-col justify-center items-center mt-4 md:mt-0'>
        <div className='text-center'>{desc2}</div>
        <div className='w-[70%] md:w-[30%]'>
          <div className='border-[#159A9C] border-b-[5px] my-6 md:my-12'></div>
        </div>
      </div>
    </div>
  );
}

export default CardNetworkCom;
