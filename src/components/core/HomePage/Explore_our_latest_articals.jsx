import React from 'react'
import img from "../../../assets/check_offers_img.png"
import IMG1 from "../../../assets/home Section 1 image.jpg"
import IMG2 from "../../../assets/home section img2.jpg"
import { Link } from 'react-router-dom'

const Explore_our_latest_articals = () => {
    return (
        <div className=' mx-auto'>
            <div className='flex justify-center items-center font-extrabold text-5xl mt-10'>
                <h1>Explore our latest Articles!</h1>
            </div>
            <div className=' w-[10%] mx-auto' >
                <div className=' border-[#159A9C] border-b border-[5px] my-8'></div>
            </div>
            <div className=" overflow-hidden w-full relative">
                <div className="flex animate-scrollleft">
                    <div className='flex justify-evenly items-center p-5 flex-shrink-0 gap-8'>
                        <div className='border border-[#056e67] rounded-3xl w-[35%] flex flex-col py-7 gap-8 p-4'>
                            <p className='font-extrabold text-4xl'>Credit Cards</p>
                            <p className='text-xl text-[#0000008a]'>Credit Card: What It Is, How It Works, and How to Get One</p>
                            <div className='flex items-center'>
                                <div className='flex relative'>
                                    <img src={IMG1} height={45} width={45} className='rounded-full aspect-square' alt="User 1" />
                                    <img src={IMG2} height={45} width={45} className='rounded-full aspect-square relative z-10 -left-8' alt="User 2" />
                                </div>
                                <Link to='https://www.investopedia.com/terms/c/creditcard.asp' target='_blank'><p className='text-sm'>More Details</p></Link>
                            </div>
                        </div>
                        <div className='border border-[#056e67] bg-[#056e67] rounded-3xl w-[40%] flex flex-col gap-6 py-10 p-4'>
                            <div className='flex flex-col gap-1'>
                                <p className='font-extrabold text-4xl text-white'>New</p>
                                <p className='font-extrabold text-4xl text-white'>credit card,</p>
                                <p className='font-extrabold text-4xl text-white'>debit card rules</p>
                            </div>
                            <Link to='https://economictimes.indiatimes.com/wealth/spend/new-credit-card-debit-card-rules-changes-hdfc-bank-icici-bank-idfc-first-bank-cardholders-should-know/articleshow/112195643.cms' target='_blank'><p className='text-[#deefe7]'>Choose the right card, use bonuses, and avoid interest charges</p></Link>
                        </div>
                        <div className='border border-[#056e67] rounded-3xl w-[35%] flex flex-col gap-8 py-7 p-4'>
                            <p className='font-extrabold text-4xl'>Credit Cards</p>
                            <p className='text-[17px] text-[#0000008a]'>Credit Card: What It Is, How It Works, and How to Get One.</p>
                            <div className='flex items-center'>
                                <div className='flex relative'>
                                    <img src={IMG1} height={45} width={45} className='rounded-full aspect-square' alt="User 1" />
                                    <img src={IMG2} height={45} width={45} className='rounded-full aspect-square relative z-10 -left-8' alt="User 2" />
                                </div>
                                <Link to='https://www.investopedia.com/terms/c/creditcard.asp' target='_blank'><p className='text-sm'>More Details</p></Link>
                            </div>
                        </div>
                        <div className='border border-[#056e67] bg-[#056e67] rounded-3xl w-[40%] flex flex-col gap-6 py-10 p-4'>
                            <div className='flex flex-col gap-1'>
                                <p className='font-extrabold text-4xl text-white'>New</p>
                                <p className='font-extrabold text-4xl text-white'>credit card,</p>
                                <p className='font-extrabold text-4xl text-white'>debit card rules</p>
                            </div>
                            <Link to='https://economictimes.indiatimes.com/wealth/spend/new-credit-card-debit-card-rules-changes-hdfc-bank-icici-bank-idfc-first-bank-cardholders-should-know/articleshow/112195643.cms' target='_blank'><p className='text-[#deefe7]'>Choose the right card, use bonuses, and avoid interest charges</p></Link>
                        </div>
                        <div className='border border-[#056e67] rounded-3xl w-[35%] flex flex-col gap-8 py-7 p-4'>
                            <p className='font-extrabold text-4xl'>Credit Cards</p>
                            <p className='text-[17px] text-[#0000008a]'>people purchase cards everyday across the world and get benefits.</p>
                            <div className='flex items-center'>
                                <div className='flex relative'>
                                    <img src={IMG1} height={45} width={45} className='rounded-full aspect-square' alt="User 1" />
                                    <img src={IMG2} height={45} width={45} className='rounded-full aspect-square relative z-10 -left-8' alt="User 2" />
                                </div>
                                <Link to='https://www.investopedia.com/terms/c/creditcard.asp' target='_blank'><p className='text-sm'>More Details</p></Link>
                            </div>
                        </div>
                        <div className='border border-[#056e67] bg-[#056e67] rounded-3xl w-[40%] flex flex-col gap-6 py-10 p-4'>
                            <div className='flex flex-col gap-1'>
                                <p className='font-extrabold text-4xl text-white'>New</p>
                                <p className='font-extrabold text-4xl text-white'>credit card,</p>
                                <p className='font-extrabold text-4xl text-white'>debit card rules</p>
                            </div>
                            <Link to='https://economictimes.indiatimes.com/wealth/spend/new-credit-card-debit-card-rules-changes-hdfc-bank-icici-bank-idfc-first-bank-cardholders-should-know/articleshow/112195643.cms' target='_blank'><p className='text-[#deefe7]'>Choose the right card, use bonuses, and avoid interest charges</p></Link>
                        </div>
                        <div className='border border-[#056e67] rounded-3xl w-[35%] flex flex-col gap-8 py-7 p-4'>
                            <p className='font-extrabold text-4xl'>Credit Cards</p>
                            <p className='text-[17px] text-[#0000008a]'>people purchase cards everyday across the world and get benefits.</p>
                            <div className='flex items-center'>
                                <div className='flex relative'>
                                    <img src={IMG1} height={45} width={45} className='rounded-full aspect-square' alt="User 1" />
                                    <img src={IMG2} height={45} width={45} className='rounded-full aspect-square relative z-10 -left-8' alt="User 2" />
                                </div>
                                <Link to='https://www.investopedia.com/terms/c/creditcard.asp' target='_blank'><p className='text-sm'>More Details</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden w-full relative">
                <div className="flex animate-scrollright">
                    <div className=' flex justify-evenly items-center p-5 flex-shrink-0 gap-8'>
                    <div className='border border-[#056e67] rounded-3xl w-[35%] flex flex-col gap-8 py-7 p-4'>
                            <p className='font-extrabold text-4xl'>Credit Cards</p>
                            <p className='text-[17px] text-[#0000008a]'>Credit Card: What It Is, How It Works, and How to Get One.</p>
                            <div className='flex items-center'>
                                <div className='flex relative'>
                                    <img src={IMG1} height={45} width={45} className='rounded-full aspect-square' alt="User 1" />
                                    <img src={IMG2} height={45} width={45} className='rounded-full aspect-square relative z-10 -left-8' alt="User 2" />
                                </div>
                                <Link to='https://www.investopedia.com/terms/c/creditcard.asp' target='_blank'><p className='text-sm'>More Details</p></Link>
                            </div>
                        </div>
                        <div className='border border-[#056e67] bg-[#056e67] rounded-3xl w-[40%] flex flex-col gap-6 py-10 p-4'>
                            <div className='flex flex-col gap-1'>
                                <p className='font-extrabold text-4xl text-white'>New</p>
                                <p className='font-extrabold text-4xl text-white'>credit card,</p>
                                <p className='font-extrabold text-4xl text-white'>debit card rules</p>
                            </div>
                            <Link to='https://economictimes.indiatimes.com/wealth/spend/new-credit-card-debit-card-rules-changes-hdfc-bank-icici-bank-idfc-first-bank-cardholders-should-know/articleshow/112195643.cms' target='_blank'><p className='text-[#deefe7]'>Choose the right card, use bonuses, and avoid interest charges</p></Link>
                        </div>
                        <div className='border border-[#056e67] rounded-3xl w-[35%] flex flex-col gap-8 py-7 p-4'>
                            <p className='font-extrabold text-4xl'>Credit Cards</p>
                            <p className='text-[17px] text-[#0000008a]'>Credit Card: What It Is, How It Works, and How to Get One.</p>
                            <div className='flex items-center'>
                                <div className='flex relative'>
                                    <img src={IMG1} height={45} width={45} className='rounded-full aspect-square' alt="User 1" />
                                    <img src={IMG2} height={45} width={45} className='rounded-full aspect-square relative z-10 -left-8' alt="User 2" />
                                </div>
                                <Link to='https://www.investopedia.com/terms/c/creditcard.asp' target='_blank'><p className='text-sm'>More Details</p></Link>
                            </div>
                        </div>
                        <div className='border border-[#056e67] bg-[#056e67] rounded-3xl w-[40%] flex flex-col gap-6 py-10 p-4'>
                            <div className='flex flex-col gap-1'>
                                <p className='font-extrabold text-4xl text-white'>New</p>
                                <p className='font-extrabold text-4xl text-white'>credit card,</p>
                                <p className='font-extrabold text-4xl text-white'>debit card rules</p>
                            </div>
                            <Link to='https://economictimes.indiatimes.com/wealth/spend/new-credit-card-debit-card-rules-changes-hdfc-bank-icici-bank-idfc-first-bank-cardholders-should-know/articleshow/112195643.cms' target='_blank'><p className='text-[#deefe7]'>Choose the right card, use bonuses, and avoid interest charges</p></Link>
                        </div>
                        <div className='border border-[#056e67] rounded-3xl w-[35%] flex flex-col gap-8 py-7 p-4'>
                            <p className='font-extrabold text-4xl'>Credit Cards</p>
                            <p className='text-[17px] text-[#0000008a]'>Credit Card: What It Is, How It Works, and How to Get One.</p>
                            <div className='flex items-center'>
                                <div className='flex relative'>
                                    <img src={IMG1} height={45} width={45} className='rounded-full aspect-square' alt="User 1" />
                                    <img src={IMG2} height={45} width={45} className='rounded-full aspect-square relative z-10 -left-8' alt="User 2" />
                                </div>
                                <Link to='https://www.investopedia.com/terms/c/creditcard.asp' target='_blank'><p className='text-sm'>More Details</p></Link>
                            </div>
                        </div>
                        <div className='border border-[#056e67] bg-[#056e67] rounded-3xl w-[40%] flex flex-col gap-6 py-10 p-4'>
                            <div className='flex flex-col gap-1'>
                                <p className='font-extrabold text-4xl text-white'>New</p>
                                <p className='font-extrabold text-4xl text-white'>credit card,</p>
                                <p className='font-extrabold text-4xl text-white'>debit card rules</p>
                            </div>
                            <Link to='https://economictimes.indiatimes.com/wealth/spend/new-credit-card-debit-card-rules-changes-hdfc-bank-icici-bank-idfc-first-bank-cardholders-should-know/articleshow/112195643.cms' target='_blank'><p className='text-[#deefe7]'>Choose the right card, use bonuses, and avoid interest charges</p></Link>
                        </div>
                        <div className='border border-[#056e67] rounded-3xl w-[35%] flex flex-col gap-8 py-7 p-4'>
                            <p className='font-extrabold text-4xl'>Credit Cards</p>
                            <p className='text-[17px] text-[#0000008a]'>Credit Card: What It Is, How It Works, and How to Get One.</p>
                            <div className='flex items-center'>
                                <div className='flex relative'>
                                    <img src={IMG1} height={45} width={45} className='rounded-full aspect-square' alt="User 1" />
                                    <img src={IMG2} height={45} width={45} className='rounded-full aspect-square relative z-10 -left-8' alt="User 2" />
                                </div>
                                <Link to='https://www.investopedia.com/terms/c/creditcard.asp' target='_blank'><p className='text-sm'>More Details</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore_our_latest_articals
