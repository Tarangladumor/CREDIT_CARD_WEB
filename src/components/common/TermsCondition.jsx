import React from 'react'
import { Link } from 'react-router-dom'

const TermsCondition = () => {
  return (
    <div className='bg-[#056e67] py-4'>
       <div 
       className='flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4'
       >
        {/* <p className=' text-white'>Terms of Service | Privacy Policy | Disclaimers</p> */}
        <Link className=' text-white hover:underline'> Terms of Service </Link>
        <Link className=' text-white hover:underline'> Privacy Policy </Link>
        <Link className=' text-white hover:underline'> Disclaimers </Link>
        <Link className=' text-white hover:underline'> About Us</Link>
    </div>
    </div>
  )
}

export default TermsCondition
