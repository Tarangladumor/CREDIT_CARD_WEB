import React from 'react'
import AXIS_CARD from '../../../assets/axis card image.jpg'
import VISA from '../../../assets/Visa.png'

const CardSummary = ({Data}) => {

    return (
        <div className='w-10/12 mx-auto  mt-20 border-[#056E67] border-[3px] rounded-2xl py-3 px-5 shadow-[0px_20px_50px_10px_#00000040]'>

            <div className='flex justify-center items-center gap-5'>
                <div>
                    <img src={Data?.image} />
                </div>

                <div>

                    <div className='flex justify-between items-center mb-3'>
                        <h2 className=' font-semibold text-3xl'>{Data?.cardName}</h2>

                        <div className=' flex gap-x-3 items-center'>
                            <img src={VISA} className=' h-5 w-auto' />
                            <button className=' border-[2px] rounded-full border-[#056E67] text-[#056E67] px-5 py-1'>Lifestyle</button>
                        </div>
                    </div>

                    <div className=' text-base font-normal'>
                       {Data?.description} <span className=' text-[#159A9C]'>Read More details below!</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardSummary
