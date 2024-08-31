import React, { useEffect, useState } from 'react';
import IMG from '../assets/two_cards.png';
import FullDetails from '../components/core/Full Details of card';
import { useLocation } from 'react-router-dom';
import { fetchOneCardDetails } from '../services/Operations/cardAPI';

const FullDetailsOfCard = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);

  let location = useLocation();

  const pathParts = location.pathname.split('/');
  const cardId = pathParts[pathParts.length - 1];
  console.log("ID>>>>>>>>>>>>>>", cardId);

  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const cardDetails = await fetchOneCardDetails(cardId);
      setDetails(cardDetails);
    };

    fetchDetails();
  }, [location.pathname]);

  console.log(details);

  return (
    <div>
      <div className="w-full md:w-10/12 mx-auto mt-8 md:mt-16">
        <div className="flex flex-col md:flex-row lg:gap-5 items-center">
          <div className="flex-shrink-0">
            <div>
              <img src={IMG} className="w-32 md:w-[200px] aspect-square" alt="Card" />
            </div>
            <div>
              <div className="border-[#159A9C] border-b-[5px] w-1/2 md:w-[70%] mx-auto"></div>
            </div>
          </div>

          <div className="flex flex-col gap-y-2 mt-4 text-center md:text-left">
            <p className="font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-4 md:mt-6">
              Here’s more <span className="text-[#159A9C]">information !</span>
            </p>
            <p className="font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl opacity-50">
              Get some more detailed information about the credit card!
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-16">
        <FullDetails Details={details} />
      </div>
    </div>
  );
};

export default FullDetailsOfCard;
