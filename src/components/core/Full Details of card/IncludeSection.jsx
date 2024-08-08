import React, { useState } from 'react'
import TRUEIMG from '../../../assets/true_green.png'
import FALSEIMG from '../../../assets/false_red.png'
import Review from '../../../assets/home section img2.jpg'
import { FaHeart } from "react-icons/fa";
import Reviews from './Reviews';
import ReviewCarousel from '../../common/ReviewCarousel';
import { Link } from 'react-router-dom';

const incluted = [
    "Lounge facilities",
    "Welcome bonus",
    "Welcome bonus",
    "Fueling Facilities"
]

const notIncluted = [
    "Fueling Facilities",
    "Fueling Facilities"
]

const IncludeSection = ({ Data }) => {
    const [showModal, setShowModal] = useState(false);

    const handleAddReviewClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    console.log("REVIEWS..............", Data?.cardData?.ratingAndReviews)


    return (
        <div className='w-10/12 mx-auto  mt-16 rounded-2xl py-10 px-14 shadow-[0px_20px_50px_10px_#00000040]'>

            <div className=' flex justify-between'>

                <div>

                    <h1 className=' text-3xl font-semibold mb-4'>What’s included?</h1>

                    {
                        Data?.cardData?.includedBnefits.map((item, index) => (
                            <div key={index} className='flex gap-x-1 items-center ml-10'>
                                <img src={TRUEIMG} className=' h-12 w-12' />
                                <p className=' font-medium text-2xl'>{item}</p>
                            </div>
                        ))
                    }

                </div>

                <div>

                    <h1 className=' text-3xl font-semibold mb-4'>What’s not included?</h1>

                    {
                        Data?.cardData?.notIncludedBnefits.map((item, index) => (
                            <div key={index} className='flex gap-x-1 items-center ml-10'>
                                <img src={FALSEIMG} className=' h-12 w-12' />
                                <p className='font-medium text-2xl'>{item}</p>
                            </div>
                        ))
                    }

                </div>
            </div>

            <div className=' border-[#159A9C] border-b border-[2px] my-8 mx-auto'></div>

            <div>

                <div className='flex justify-between'>
                    <div className=' font-semibold text-4xl'>What our customers’ say?</div>

                    <div>
                        <div>Starts</div>
                        <h2 className=' font-medium text-2xl'>Overall ratings</h2>
                        <p className=' font-medium text-sm opacity-45'>Avg rating by 200+ verified customer</p>
                    </div>
                </div>

                <div className=''>

                    {/* <div>
                        <img src={Review} className=' h-14 w-14 rounded-full' />
                        <div className=' flex items-center absolute -bottom-2 left-8'>
                            <img className='  h-6 w-6' src={TRUEIMG} />
                        </div>
                    </div> */}


                    <ReviewCarousel reviews={Data?.cardData?.ratingAndReviews} />

                </div>


            </div>

            <div className='mt-10 flex justify-between items-center'>
                <button className='bg-[#F77F00] text-xl font-semibold px-10 py-2 rounded-full text-white shadow-[0px_5px_30px_5px_#00000060]'>
                    <Link to={Data?.cardData?.applyLink} target="blank">
                        Apply Now
                    </Link>
                </button>

                <button 
                onClick={handleAddReviewClick}
                className='border border-[#F77F00] text-xl font-semibold px-10 py-2 rounded-full text-black shadow-[0px_5px_30px_5px_#00000060]'>
                    Add review
                </button>

                <div className='flex items-center font-medium text-lg gap-2'>
                    <FaHeart color='red' size={25} />
                    <p>Liked this card?</p>
                </div>
            </div>
            {
                showModal && <Reviews handleCloseModal={handleCloseModal} />
            }

        </div>
    )
}

export default IncludeSection
