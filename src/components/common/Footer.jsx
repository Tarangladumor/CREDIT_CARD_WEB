import React,{useEffect, useState } from 'react'
// import { FaLinkedinIn } from "react-icons/fa";
import TermsCondition from './TermsCondition';
import { Link } from 'react-router-dom';
import { apiConnector } from '../../services/apiconnector';
import { cardEndpoints } from '../../services/apis';
import toast from 'react-hot-toast';
import { MdArrowOutward } from "react-icons/md";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const {email} = formData

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

  const submitNewsletterForm = async () => {
    try {
      setLoading(true);
      const response = await apiConnector(
        "POST",
        cardEndpoints.ADD_NEWSLETTER_SIGN_UP,
        formData
      );
      console.log("Logging response", response);
      setIsSubmitSuccessful(true);
      toast.success("Subscription successful!");
    } catch (error) {
      console.log("Error", error.message);
      setIsSubmitSuccessful(false);
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      setFormData({
        email: "",
      });
      setIsSubmitSuccessful(false);
    }
  }, [isSubmitSuccessful]);

  return (
    <div className=''>

    
    <div className='w-full bg-[#f7f5fd] flex justify-around'>
      <div className='w-11/12 flex justify-around '>
      <div className=' items-center p-4 flex flex-col gap-4 mt-4'>
        <div className='text-4xl font-extrabold'>
            LOGO
        </div>
        <div className='text-2xl'>
            Follow Us
            <div className='flex gap-x-4 mt-3'>
            <SocialIcon url="https://t.me/finnindeals2" style={{ height: 35, width: 35 }}/>
            <SocialIcon url="https://x.com/Dealspouch27" style={{ height: 35, width: 35 }}/>
            <SocialIcon url="https://chat.whatsapp.com/DjSHeQmtKILGlhFDL6TN4n" style={{ height: 35, width: 35 }}/>
                {/* <p className=' rounded-full bg-[#056e67] '><FaLinkedinIn className=' rounded-full h-7 w-7 p-1'/></p>
                <p className=' rounded-full bg-[#056e67] '><FaLinkedinIn className=' rounded-full h-7 w-7 p-1'/></p>
                <p className=' rounded-full bg-[#056e67] '><FaLinkedinIn className=' rounded-full h-7 w-7 p-1'/></p>  */}
            </div>
            
        </div>
      </div>


      <div className=' flex flex-col p-4 gap-3 mt-4'>
        <div>
            <p className=' text-1xl font-medium'>Contact Us:</p>
            <p className=' text-[#374ab1] text-1xl font-medium w-[60%]'>dealspouch@gmail.com
            +91-8200440146</p>
            
        </div>

        <div className='flex flex-col'>
            <p className=' text-1xl font-medium'>Credit Card</p>
            <Link to='/more-cards' className='text-[#374ab1] text-1xl font-medium w-[80%]'>All Credit Cards</Link>
            <Link to='/cardByNetwork' className='text-[#374ab1] text-1xl font-medium w-[80%]'>All Cards Network</Link>
            {/* <p className='text-[#374ab1] text-1xl font-medium w-[80%]'></p> */}
        </div>
      </div>


      <div className='p-4 flex flex-col gap-4 mt-4'>
        <p className='text-2xl font-semibold'>Newsletter Signup</p>
        <p className='text-1xl text-[#00000087] w-[80%]'>Get the latest offers and tips—subscribe to our 
        newsletter today.</p>

        <div class="relative h-10 w-full min-w-[200px] flex">
        <div className='w-[300px]'><input
                    type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                    class="peer h-full w-full rounded-[12px] border border-[#159a9c] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#159a9c] placeholder-shown:border-t-[#159a9c] focus:border-2 focus:border-[#159a9c] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder="Email " /></div>
                    
                    <button onClick={submitNewsletterForm} disabled={loading} className='ml-3 border-green-800 border-[4px] rounded-full '>
                            <div className=' pb-[10px]'>
                                <MdArrowOutward size={35} />
                            </div>
                        </button>
                    
                    
                </div>
 
      </div>
      </div>
    </div>

    <TermsCondition/>

    </div>
  )
}

export default Footer
