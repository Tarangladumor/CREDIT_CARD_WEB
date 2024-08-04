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
        <div className='mt-20'>
            <header className='flex justify-start items-center gap-2 w-10/12 mx-auto mb-5'>
                <img src={FEECHARGES} className='w-[125px] aspect-square' alt='Fee Charges' />
                <h2 className='font-semibold text-[40px]'>Frequently Asked Questions</h2>
            </header>

            <section className='w-10/12 mx-auto'>
                <div
                    onClick={() => toggleActiveIndex(0)}
                    className={`py-5 px-5 my-3 cursor-pointer rounded-l ${activeIndex === 0 ? 'border-[3px] border-[#056E67]' : 'border-[1px] border-black border-opacity-40'}`}
                >
                    <div className='flex justify-start items-center gap-3'>
                        <FaQuestionCircle size={25} />
                        <p className='font-semibold text-3xl'>How to apply for {Data?.cardData?.cardName}?</p>
                    </div>

                    {activeIndex === 0 && (
                        <div className='py-5 px-10'>
                            {Data?.cardData?.howToApply[0]?.instruction ? (
                                <p>{Data?.cardData?.howToApply[0]?.instruction}</p>
                            ) : (
                                <p>No instructions available for this card.</p>
                            )}

                            {Data?.cardData?.howToApply[0]?.points ? (
                                <ul>
                                    {
                                        Data?.cardData?.howToApply[0]?.points.map((item) => (
                                            <li key={item.key} className=' list-disc'>{item?.key} : {item?.value}</li>
                                        ))
                                    }
                                </ul>
                            ) : (
                                <p>No instructions available for this card.</p>
                            )}

                            {Data?.cardData?.howToApply[0]?.note ? (
                                <p>{Data?.cardData?.howToApply[0]?.note}</p>
                            ) : (
                                <p>No instructions available for this card.</p>
                            )}
                        </div>
                    )}
                </div>

                <div
                    onClick={() => toggleActiveIndex(1)}
                    className={`py-5 px-5 my-3 cursor-pointer rounded-l ${activeIndex === 1 ? 'border-[3px] border-[#056E67]' : 'border-[1px] border-black border-opacity-40'}`}
                >
                    <div className='flex justify-start items-center gap-3'>
                        <FaQuestionCircle size={25} />
                        <p className='font-semibold text-3xl'>{Data?.cardData?.cardName} Eligibility</p>
                    </div>

                    {activeIndex === 1 && (
                        <div className='py-5 px-10'>
                            {Data?.cardData?.eligibility[0]?.instruction ? (
                                <p>{Data?.cardData?.eligibility[0]?.instruction}</p>
                            ) : (
                                <p>No instructions available for this card.</p>
                            )}

                            {Data?.cardData?.eligibility[0]?.points ? (
                                <ul>
                                    {
                                        Data?.cardData?.eligibility[0]?.points.map((item) => (
                                            <li key={item.key} className=' list-disc'>{item?.key} : {item?.value}</li>
                                        ))
                                    }
                                </ul>
                            ) : (
                                <p>No points available for this card.</p>
                            )}

                            {Data?.cardData?.eligibility[0]?.note ? (
                                <p>{Data?.cardData?.eligibility[0]?.note}</p>
                            ) : (
                                <p>No note available for this card.</p>
                            )}
                        </div>
                    )}
                </div>

                <div
                    onClick={() => toggleActiveIndex(2)}
                    className={`py-5 px-5 my-3 cursor-pointer rounded-l ${activeIndex === 2 ? 'border-[3px] border-[#056E67]' : 'border-[1px] border-black border-opacity-40'}`}
                >
                    <div className='flex justify-start items-center gap-3'>
                        <FaQuestionCircle size={25} />
                        <p className='font-semibold text-3xl'>Documents Required For {Data?.cardData?.cardName}</p>
                    </div>

                    {activeIndex === 2 && (
                        <div className='py-5 px-10'>
                            <ul className=' list-disc'>
                                <li>Proof of identity: PAN Card, Aadhaar card, Driver’s License, Passport, Voter’s ID, Overseas Citizen of India Card, Person of Indian Origin Card, Job card issued by NREGA, Letters issued by the UIDAI or any other government-approved photo ID proof.</li>
                                <li>Proof of Address: Aadhaar card, Driver’s License, Passport, Utility Bill not more than 3 months old, Ration Card, Property Registration Document, Person of Indian Origin Card, Job card issued by NREGA, Bank Account Statement, or any other government-approved address proof.</li>
                                <li>Proof of Income: Latest one or two salary slips (not more than 3 months old), latest Form 16, and the last 3 months’ bank statement.</li>
                            </ul>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default QuestionsSection;
