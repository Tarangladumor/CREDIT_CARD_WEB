import React from 'react'
import { Link } from 'react-router-dom'

const TermsCondition = () => {
  return (
    <div>
       <div className='bg-[#056e67] h-16 flex justify-center items-center'>
        {/* <p className=' text-white'>Terms of Service | Privacy Policy | Disclaimers</p> */}
        <Link className=' text-white'> Terms of Service |</Link>
        <Link className=' text-white'> Privacy Policy |</Link>
        <Link className=' text-white'> Disclaimers |</Link>
        <Link className=' text-white'> About Us</Link>
    </div>
    </div>
  )
}

export default TermsCondition
