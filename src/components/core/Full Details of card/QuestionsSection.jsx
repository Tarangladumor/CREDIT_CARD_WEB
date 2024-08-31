import React, { useState } from 'react';
import FEECHARGES from '../../../assets/FeeCharges_img.png';
import { FaQuestionCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const QuestionsSection = ({ Data }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleActiveIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    console.log("DATA FOR FAQ", Data);

    return (
        <div className='mt-10 lg:mt-20 px-4'>
            <header className='flex flex-col lg:flex-row justify-start items-center gap-2 w-full lg:w-10/12 mx-auto mb-4 lg:mb-5'>
                <img src={FEECHARGES} className='w-[100px] lg:w-[125px] aspect-square' alt='Fee Charges' />
                <h2 className='font-semibold text-2xl lg:text-4xl text-center lg:text-left'>Frequently Asked Questions</h2>
            </header>

            <section className='w-full lg:w-10/12 mx-auto'>
                <div
                    onClick={() => toggleActiveIndex(0)}
                    className={`py-4 lg:py-5 px-4 lg:px-5 my-2 lg:my-3 cursor-pointer rounded-lg lg:rounded-l ${activeIndex === 0 ? 'border-[2px] lg:border-[3px] border-[#056E67]' : 'border-[1px] border-black border-opacity-40'}`}
                >
                    <div className='flex justify-start items-start gap-2 lg:gap-3'>
                        <FaQuestionCircle className="text-[20px] lg:text-[25px] flex-shrink-0" />
                        <p className='font-semibold text-lg lg:text-2xl leading-6 lg:leading-8'>How to apply for {Data?.cardData?.cardName}?</p>
                    </div>

                    {activeIndex === 0 && (
                        <div className='py-4 lg:py-5 px-6 lg:px-10'>
                            {Data?.cardData?.howToApply[0]?.instruction ? (
                                <p className='text-base lg:text-lg'>{Data?.cardData?.howToApply[0]?.instruction}</p>
                            ) : (
                                <p className='text-base lg:text-lg'>No instructions available for this card.</p>
                            )}

                            {Data?.cardData?.howToApply[0]?.points ? (
                                <ul className='list-disc pl-5'>
                                    {Data?.cardData?.howToApply[0]?.points.map((item) => (
                                        <li key={item.key} className='text-base lg:text-lg'>{item?.key} : {item?.value}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className='text-base lg:text-lg'>No instructions available for this card.</p>
                            )}

                            {Data?.cardData?.howToApply[0]?.note ? (
                                <p className='text-base lg:text-lg'>{Data?.cardData?.howToApply[0]?.note}</p>
                            ) : (
                                <p className='text-base lg:text-lg'>No instructions available for this card.</p>
                            )}
                        </div>
                    )}
                </div>

                <div
                    onClick={() => toggleActiveIndex(1)}
                    className={`py-4 lg:py-5 px-4 lg:px-5 my-2 lg:my-3 cursor-pointer rounded-lg lg:rounded-l ${activeIndex === 1 ? 'border-[2px] lg:border-[3px] border-[#056E67]' : 'border-[1px] border-black border-opacity-40'}`}
                >
                    <div className='flex justify-start items-start gap-2 lg:gap-3'>
                        <FaQuestionCircle className="text-[20px] lg:text-[25px] flex-shrink-0" />
                        <p className='font-semibold text-lg lg:text-2xl leading-6 lg:leading-8'>{Data?.cardData?.cardName} Eligibility</p>
                    </div>

                    {activeIndex === 1 && (
                        <div className='py-4 lg:py-5 px-6 lg:px-10'>
                            {Data?.cardData?.eligibility[0]?.instruction ? (
                                <p className='text-base lg:text-lg'>{Data?.cardData?.eligibility[0]?.instruction}</p>
                            ) : (
                                <p className='text-base lg:text-lg'>No instructions available for this card.</p>
                            )}

                            {Data?.cardData?.eligibility[0]?.points ? (
                                <ul className='list-disc pl-5'>
                                    {Data?.cardData?.eligibility[0]?.points.map((item) => (
                                        <li key={item.key} className='text-base lg:text-lg'>{item?.key} : {item?.value}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className='text-base lg:text-lg'>No points available for this card.</p>
                            )}

                            {Data?.cardData?.eligibility[0]?.note ? (
                                <p className='text-base lg:text-lg'>{Data?.cardData?.eligibility[0]?.note}</p>
                            ) : (
                                <p className='text-base lg:text-lg'>No note available for this card.</p>
                            )}
                        </div>
                    )}
                </div>

                <div
                    onClick={() => toggleActiveIndex(2)}
                    className={`py-4 lg:py-5 px-4 lg:px-5 my-2 lg:my-3 cursor-pointer rounded-lg lg:rounded-l ${activeIndex === 2 ? 'border-[2px] lg:border-[3px] border-[#056E67]' : 'border-[1px] border-black border-opacity-40'}`}
                >
                    <div className='flex justify-start items-start gap-2 lg:gap-3'>
                        <FaQuestionCircle className="text-[20px] lg:text-[25px] flex-shrink-0" />
                        <p className='font-semibold text-lg lg:text-2xl leading-6 lg:leading-8'>Documents Required For {Data?.cardData?.cardName}</p>
                    </div>

                    {activeIndex === 2 && (
                        <div className='py-4 lg:py-5 px-6 lg:px-10'>
                            <ul className='list-disc pl-5'>
                                <li className='text-base lg:text-lg'>Proof of identity: PAN Card, Aadhaar card, Driver’s License, Passport, Voter’s ID, Overseas Citizen of India Card, Person of Indian Origin Card, Job card issued by NREGA, Letters issued by the UIDAI or any other government-approved photo ID proof.</li>
                                <li className='text-base lg:text-lg'>Proof of Address: Aadhaar card, Driver’s License, Passport, Utility Bill not more than 3 months old, Ration Card, Property Registration Document, Person of Indian Origin Card, Job card issued by NREGA, Bank Account Statement, or any other government-approved address proof.</li>
                                <li className='text-base lg:text-lg'>Proof of Income: Latest one or two salary slips (not more than 3 months old), latest Form 16, and the last 3 months’ bank statement.</li>
                            </ul>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default QuestionsSection;
