// import React,{useEffect,useState} from 'react'
// import contactus from "../../../assets/contactus.png"
// import apiConnector from "../../../services/apiconnector"
// import { cardEndpoints } from '../../../services/apis'

// const ContactUs = () => {
//     const [loading, setLoading] = useState(false);

//     const submitNewsletterForm = async (data) => {
//         console.log("Logging Data", data);
//         try {
//           setLoading(true);
//           const response = await apiConnector(
//             "POST",
//             cardEndpoints.ADD_NEWSLETTER_SIGN_UP,
//             data
//           );
//           console.log("Logging response", response);
//           setLoading(false);
//         } catch (error) {
//           console.log("Error", error.message);
//           setLoading(false);
//         }
//       };
    
//       useEffect(() => {
//         if (isSubmitSuccessful) {
//           reset({
//             email: "",
//             firstname: "",
//             lastname: "",
//             message: "",
//             phoneNo: "",
//           });
//         }
//       }, [reset, isSubmitSuccessful]);

//   return (
//     <div className='  bg-[#deefe7] '>
//         <div className='w-11/12 flex'>
//         <div className='w-[50%] '>
//             <div className=' ml-[10rem] mt-20 flex flex-col gap-2 w-[70%]'>
//                 <p className='text-6xl font-extrabold'>Got Question?</p>
//                 <p className='text-4xl font-bold '>we got Answers!</p>
//                 <p className=' text-[#0000008a] text-[18px] mt-5'>Stay updated with the latest offers and tips. Subscribe to our Newsletter!</p>
//             </div>
//             <div class="flex flex-col items-end gap-6 w-72 ml-[10rem] mt-10 rounded-3xl">
//                 <div class="relative h-10 w-full min-w-[200px]">
//                     <input
//                     class="peer h-full w-full rounded-full border-[5px] border-[#159a9c] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#159a9c] placeholder-shown:border-t-[#159a9c] focus:border-2 focus:border-[#159a9c] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//                     placeholder="Email " />
                    
//                     <div className=' flex justify-center mt-4 text-[#ffffff]'>
//                     <button onClick={() => (submitNewsletterForm)} className='p-4 bg-[#159a9cbd] rounded-3xl'>Subscribe</button>
//                     </div>
//                 </div>
 
//             </div> 
           
//         </div>
//         <div className='w-[50%] items-center'>
//             <img src={contactus} alt="" />
//         </div>
//         </div>
//     </div>
//   )
// }

// export default ContactUs

import React, { useEffect, useState } from 'react';
import contactus from "../../../assets/contactus.png";
import {apiConnector} from "../../../services/apiconnector";
import { cardEndpoints } from '../../../services/apis';
import toast from 'react-hot-toast';

const ContactUs = () => {
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
    <div className='bg-[#deefe7]'>
      <div className='w-11/12 flex'>
        <div className='w-[50%]'>
          <div className='ml-[10rem] mt-20 flex flex-col gap-2 w-[70%]'>
            <p className='text-6xl font-extrabold'>Got Question?</p>
            <p className='text-4xl font-bold'>We got Answers!</p>
            <p className='text-[#0000008a] text-[18px] mt-5'>Stay updated with the latest offers and tips. Subscribe to our Newsletter!</p>
          </div>
          <div className="flex flex-col items-end gap-6 w-72 ml-[10rem] mt-10 rounded-3xl">
            <div className="relative h-10 w-full min-w-[200px]">
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                className="peer h-full w-full rounded-full border-[5px] border-[#159a9c] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#159a9c] placeholder-shown:border-t-[#159a9c] focus:border-2 focus:border-[#159a9c] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder="Email"
              />
              {/* Add additional fields here */}
              <div className='flex justify-center mt-4 text-[#ffffff]'>
                <button 
                  onClick={submitNewsletterForm} 
                  className='px-5 py-2 bg-[#159a9cbd] rounded-3xl'
                  disabled={loading}
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[50%] items-center'>
          <img src={contactus} alt="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
