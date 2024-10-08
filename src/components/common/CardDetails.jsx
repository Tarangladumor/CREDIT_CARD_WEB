import React, { useEffect, useState } from "react";
import LIMITED from "../../assets/limited_offer_img.png";
import ReviewImg from "../../assets/home section img2.jpg";
import { Link } from "react-router-dom";
import ReviewCarousel from "./ReviewCarousel";
import GetAvgRating from "../../utils/avgRating";
import RatingStars from "./RatingStars";

const CardDetails = ({ Data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [avgReviewCount, setAvgReviewCount] = useState(0);

  useEffect(() => {
    const count = GetAvgRating(Data.ratingAndReviews);
    setAvgReviewCount(count);
  }, [Data]);

  // Function to handle toggle effect based on screen size
  const handleClick = () => {
    if (window.innerWidth < 1024) {
      setIsClicked(prev => !prev);
    }
  };

  // Function to handle media query changes
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsClicked(false); // Reset click state on larger screens
    }
  };

  // Set up media query listener for resizing
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    mediaQuery.addEventListener('change', handleResize);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  console.log("DATA", Data);

  return (
    <div className="relative mb-16">
      {(isHovered || isClicked) && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10"></div>
      )}
      <div
        className={`bg-[#D2F4E4] flex flex-col gap-5 rounded-tr-3xl rounded-bl-3xl transition-all duration-300 ease-in-out relative ${isHovered || isClicked ? "h-auto z-20 scale-105 shadow-2xl" : "h-[550px]"}`}
        onMouseEnter={() => window.innerWidth >= 1024 && setIsHovered(true)}
        onMouseLeave={() => window.innerWidth >= 1024 && setIsHovered(false)}
        onClick={handleClick}
      >
        <div className="flex justify-between relative">
          <img
            src={LIMITED}
            width={100}
            height={100}
            className="absolute -top-8 -left-5"
            alt="Limited Offer"
          />
          <p className="absolute right-20 top-10 font-medium text-xl">
            {Data?.bank}
          </p>
        </div>

        <div className="w-full flex justify-center">
          <img
            src={Data?.image}
            height={300}
            width={300}
            className="mt-12"
            alt={`₹{Data?.cardName} Card`}
          />
        </div>

        <div className="flex flex-col gap-2 px-12">
          <div className="flex justify-evenly flex-col gap-y-2"> 
            <p className="font-medium text-xl md:w-auto">{Data?.cardName}</p>
            <p className="font-medium text-xl">
              APR: {Data?.charges[0]?.annualPercentageRate}
            </p>
          </div>
          <p className="font-medium text-xl">Annual Fee: {Data?.charges[0]?.annualFee}</p>
          <p className="text-[#8A8C17] font-medium text-xl">
            Joining Fee: <span className="text-black">{Data?.charges[0]?.joiningFee}</span>
          </p>
        </div>

        {(isHovered || isClicked) && (
          <div
            className={`flex flex-col gap-2 px-12 pb-10 transition-all duration-300 ease-in-out ${isHovered || isClicked ? "max-h-screen" : "max-h-0 overflow-hidden"}`}
          >
            <p className="font-medium text-2xl">
              Reward Point Value: {Data?.charges[0]?.rewardPointValue}
            </p>

            <div className="font-medium text-xl">
              <ul className="list-disc ml-5">
                {Data?.includedBnefits.slice(0, 4).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {(isHovered || isClicked) && (
          <div className="border-[#159A9C] border-b border-[0.5px] w-[82%] mx-auto"></div>
        )}

        <div
          className={`flex flex-col gap-2 px-12 pb-10 transition-all duration-300 ease-in-out ${isHovered || isClicked ? "max-h-screen" : "max-h-auto overflow-hidden"}`}
        >
          <p className="text-xl font-medium">User Reviews and Ratings:</p>
          <RatingStars Review_Count={avgReviewCount} />

          {(isHovered || isClicked) && (
            <div>
              <p>See what our top customer has to say?</p>
              <ReviewCarousel reviews={Data?.ratingAndReviews} />

              <div className="flex gap-5 mt-5">
                <button className="bg-[#F77F00] text-base font-semibold px-5 py-2 rounded-full text-white shadow-[0px_30px_35px_10px_#00000060]">
                  <Link to={Data?.applyLink} target="blank">
                    Apply Now
                  </Link>
                </button>

                <Link to={`/fulldetailsofcard/${Data._id}`}>
                  <button className="border-[5px] rounded-full bg-transparent border-[#159A9C] shadow-[0px_30px_35px_10px_#00000060,inset_0px_7px_30px_0px_#00000060] text-base font-semibold px-5 py-2">
                    More Details
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
