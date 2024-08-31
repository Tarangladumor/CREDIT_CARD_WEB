import React, { useState } from 'react'
import FEECHARGES from '../../../assets/FeeCharges_img.png'
import { FaQuestionCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Questions = [
    {
        Que: "How do I redeem my credit card rewards?",
        Ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
    },
    {
        Que: "How do I apply for a credit card?",
        Ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
    },
    {
        Que: "What happens if I miss a payment?",
        Ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
    }
]

const FAQS = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleActiveIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className='mt-10 lg:mt-20 px-4'>
            <header className='flex flex-col lg:flex-row justify-start items-center gap-2 w-full lg:w-10/12 mx-auto mb-4 lg:mb-5'>
            <img src={FEECHARGES} className='w-[100px] lg:w-[125px] aspect-square' alt='Fee Charges' />
            <h2 className='font-semibold text-2xl lg:text-4xl text-center lg:text-left'>Frequently Asked Questions</h2>
            </header>

            <section className='w-full lg:w-10/12 mx-auto'>
                {Questions.map((question, index) => (
                    <div
                    onClick={() => toggleActiveIndex(index)}
                    className={`py-4 lg:py-5 px-4 lg:px-5 my-2 lg:my-3 cursor-pointer rounded-lg lg:rounded-l ${activeIndex === index ? 'border-[2px] lg:border-[3px] border-[#056E67]' : 'border-[1px] border-black border-opacity-40'}`}
                        key={index}
                    >
                        <div className='flex justify-start items-start gap-2 lg:gap-3'>
                            <FaQuestionCircle className="text-[20px] lg:text-[25px] flex-shrink-0" />
                            <p className='font-semibold text-lg lg:text-2xl leading-6 lg:leading-8'>{question.Que}</p>
                        </div>

                        {activeIndex === index && (
                            <div className='py-5 px-10'>
                                <p className='text-base lg:text-lg'>{`${question.Ans}  `}
                                    <span className=' underline text-blue-600 font-medium'><Link>link to apply for offer.</Link></span>
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </section>
        </div>
    )
}

export default FAQS
