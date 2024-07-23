import React from 'react'
import FEECHARGES from '../../../assets/FeeCharges_img.png'

const RewardPoints = () => {
    return (
        <div className='mt-10'>

            <header className='flex justify-start items-center gap-2 w-10/12 mx-auto mb-5'>
                <img src={FEECHARGES} className='w-[125px] aspect-square' />
                <h2 className=' font-semibold text-[40px]'>Reward Points</h2>
            </header>

            <section className=' w-10/12 mx-auto border-[5px] border-[#056E67] rounded-2xl px-16 shadow-[0px_20px_50px_10px_#00000040] py-5'>

            <p>Rupay Credit Card offers unlimited Non-expiry reward points that can be earned transaction as mentioned below:</p>

            <p>*Note: Some transactions, such as fuel, EMI, insurance transaction are not eligible for reward points.</p>

            

            </section>

        </div>
    )
}

export default RewardPoints
