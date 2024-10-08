import React from 'react'
import { Link } from 'react-router-dom'

const TermsCondition = () => {
  return (
    <div className='bg-[#056e67] py-4'>
       <div 
       className='flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4'
       >
        <Link to="/termsofservice" className=' text-white hover:underline'> Terms of Service </Link>
        <Link to="/privacypolicy" className=' text-white hover:underline'> Privacy Policy </Link>
        <Link to="/disclaimer" className=' text-white hover:underline'> Disclaimer </Link>
        <Link to="/disclouser" className=' text-white hover:underline'> Disclosure</Link>
    </div>
    </div>
  )
}

export default TermsCondition
