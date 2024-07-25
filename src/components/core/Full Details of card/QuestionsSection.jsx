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

const QuestionsSection = ({Data}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleActiveIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='mt-20'>
            <header className='flex justify-start items-center gap-2 w-10/12 mx-auto mb-5'>
                <img src={FEECHARGES} className='w-[125px] aspect-square' />
                <h2 className='font-semibold text-[40px]'>Frequently Asked Questions</h2>
            </header>

            <section className='w-10/12 mx-auto'>
                {Questions.map((question, index) => (
                    <div
                        onClick={() => toggleActiveIndex(index)}
                        className={`py-5 px-5 my-3 cursor-pointer rounded-l ${activeIndex === index ? 'border-[3px] border-[#056E67]' : 'border-[1px] border-black border-opacity-40'}`}
                        key={index}
                    >
                        <div className='flex justify-start items-center gap-3'>
                            <FaQuestionCircle size={25} />
                            <p className='font-semibold text-3xl'>{question.Que}</p>
                        </div>

                        {activeIndex === index && (
                            <div className='py-5 px-10'>
                                <p className='text-base font-normal'>{`${question.Ans}  `}  
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

export default QuestionsSection
