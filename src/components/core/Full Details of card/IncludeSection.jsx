import React, { useEffect, useState } from 'react';
import TRUEIMG from '../../../assets/true_green.png';
import FALSEIMG from '../../../assets/false_red.png';
import { FaHeart } from "react-icons/fa";
import Reviews from './Reviews';
import ReviewCarousel from '../../common/ReviewCarousel';
import { Link } from 'react-router-dom';
import GetAvgRating from '../../../utils/avgRating';
import RatingStars from '../../common/RatingStars';

const IncludeSection = ({ Data }) => {
    const [showModal, setShowModal] = useState(false);
    const [avgReviewCount, setAvgReviewCount] = useState(0);
    console.log("DATA IN INCLUDED SECTION: ", Data);

    const handleAddReviewClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const count = GetAvgRating(Data?.cardData?.ratingAndReviews);
        setAvgReviewCount(count);
      }, [Data]);

    console.log("REVIEWS..............", Data?.cardData?.ratingAndReviews);

    return (
        <div className='w-11/12 lg:w-10/12 mx-auto mt-8 lg:mt-16 rounded-2xl py-6 lg:py-10 px-4 lg:px-14 shadow-[0px_20px_50px_10px_#00000040]'>

            <div className='flex flex-row justify-between'>
                <div>
                    <h1 className='text-2xl lg:text-3xl font-semibold mb-4'>What’s included?</h1>
                    {Data?.cardData?.includedBnefits.map((item, index) => (
                        <div key={index} className='flex gap-x-2 items-center md:ml-6 lg:ml-10'>
                            <img src={TRUEIMG} className='h-8 w-8 lg:h-12 lg:w-12' alt='Included benefit' />
                            <p className='font-medium text-lg lg:text-2xl'>{item}</p>
                        </div>
                    ))}
                </div>

                <div>
                    <h1 className='text-2xl lg:text-3xl font-semibold mb-4'>What’s not included?</h1>
                    {Data?.cardData?.notIncludedBnefits.map((item, index) => (
                        <div key={index} className='flex gap-x-2 items-center md:ml-6 lg:ml-10'>
                            <img src={FALSEIMG} className='h-8 w-8 lg:h-12 lg:w-12' alt='Not included benefit' />
                            <p className='font-medium text-lg lg:text-2xl'>{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='border-[#159A9C] border-b border-[2px] my-6 lg:my-8 mx-auto'></div>

            <div>
                <div className='flex flex-row justify-between gap-6'>
                    <div className='font-semibold text-xl md:text-2xl lg:text-4xl'>
                        What our customers say?
                        <div className='md:hidden mt-2 flex items-center font-medium text-sm md:text-base lg:text-lg gap-2'>
                            <FaHeart color='red' size={20} className='md:hidden' />
                            <FaHeart color='red' size={25} className='hidden md:block' />
                            <p>Liked this card?</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-end'>
                        <div className='text-sm md:text-base lg:text-lg'>
                            <RatingStars Review_Count={avgReviewCount} />
                        </div>
                        <h2 className='font-medium text-base md:text-lg lg:text-2xl mt-2 md:mt-0 md:ml-4'>Overall ratings</h2>
                        <p className='font-medium text-xs md:text-sm lg:text-base opacity-45 mt-1 md:mt-0'>Avg rating by 200+ verified customers</p>
                    </div>
                </div>

                <div className='mt-4'>
                    {/* Review carousel or other content */}
                    <ReviewCarousel reviews={Data?.cardData?.ratingAndReviews} />
                </div>
            </div>

            <div className='mt-10 flex lg:flex-row justify-between items-center gap-4 lg:gap-0'>
                <button className='bg-[#F77F00] text-base md:text-lg lg:text-xl font-semibold px-4 md:px-6 lg:px-10 py-2 rounded-full text-white shadow-[0px_5px_30px_5px_#00000060]'>
                    <Link to={Data?.cardData?.applyLink} target="_blank">
                        Apply Now
                    </Link>
                </button>

                <button
                    onClick={handleAddReviewClick}
                    className='border border-[#F77F00] text-base md:text-lg lg:text-xl font-semibold px-4 md:px-6 lg:px-10 py-2 rounded-full text-black shadow-[0px_5px_30px_5px_#00000060]'>
                    Add review
                </button>

                <div className='hidden md:flex items-center font-medium text-sm md:text-base lg:text-lg gap-2'>
                    <FaHeart color='red' size={20} className='md:hidden' />
                    <FaHeart color='red' size={25} className='hidden md:block' />
                    <p>Liked this card?</p>
                </div>
            </div>

            {showModal && <Reviews handleCloseModal={handleCloseModal} cardData={Data} />}
        </div>
    );
}

export default IncludeSection;
