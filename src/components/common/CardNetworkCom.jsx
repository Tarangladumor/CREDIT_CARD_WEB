import React from 'react';

const CardNetworkCom = ({ img, heading1, heading2, desc1, desc2 }) => {
  return (
    <div>
      {/* Main container for the card */}
      <div className='flex flex-col md:flex-row items-center justify-center m-4'>
        {/* Image and border section */}
        <div className='flex flex-col items-center md:items-start'>
          {/* Image adjustments for responsiveness */}
          <img 
            src={img} 
            alt="" 
            className='h-[100px] w-[120px] md:h-[180px] md:w-[200px] lg:h-[200px] lg:w-[230px]' 
          />
          {/* Border below the image */}
          <div className='w-[60%] mt-[-30px] md:mt-[-40px] lg:mt-[-50px] mx-auto'>
            <div className='border-[#159A9C] border-b-4 my-6 md:my-8 lg:my-12 flex justify-center'></div>
          </div>
        </div>

        {/* Text content section */}
        <div className='flex flex-col gap-2 ml-0 md:ml-5 lg:ml-10 text-center md:text-left mt-4 md:mt-0'>
          {/* Headings with adjusted sizes for responsiveness */}
          <p className='text-3xl md:text-5xl lg:text-7xl font-extrabold'>{heading1}</p>
          <p className='text-3xl md:text-5xl lg:text-7xl font-extrabold text-[#159a9c]'>{heading2}</p>
          {/* Descriptions with adjusted text size */}
          <p className='text-[#0000008a] text-base md:text-lg lg:text-xl'>{desc1}</p>
        </div>
      </div>

      {/* Second description section (only for larger screens) */}
      <div className='hidden md:flex flex-col justify-center items-center w-[90%] mx-auto'>
        <div className='text-base md:text-lg lg:text-xl max-w-[70%] md:max-w-[90%] lg:max-w-[50%] text-center'>{desc2}</div>
        <div className='w-[60%] md:w-[40%] lg:w-[30%] mx-auto'>
          <div className='border-[#159A9C] border-b-4 my-6 md:my-8 lg:my-12'></div>
        </div>
      </div>
    </div>
  );
};

export default CardNetworkCom;
