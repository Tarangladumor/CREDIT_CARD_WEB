import React, { useEffect, useState } from 'react';
import Footer from '../../common/Footer';
import IMG from "../../../assets/check_offers_img.png";
import { useLocation } from 'react-router-dom';
import { fetchAllCardByBank } from '../../../services/Operations/cardAPI';
import CardDetails from '../../common/CardDetails';

const CardsByBank = () => {
  let location = useLocation();

  const pathParts = location.pathname.split('/');
  const providerId = pathParts[pathParts.length - 1];
  console.log("ID>>>>>>>>>>>>>>", providerId);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cardData = await fetchAllCardByBank({ providerId });
      console.log("CARDDAAT...........",cardData);
      setCards(cardData);
    };

    fetchData();
  }, [providerId]);

  console.log("CARDS>>>>>>>>>>>>>>>>>>>>",cards);

  return (
    <div>
      <div className="w-10/12 mx-auto mt-16">
        <div className="flex gap-5 justify-center items-center">
          <div>
            <div>
              <img src={IMG} className="w-[150px] aspect-square" />
            </div>
            <div>
              <div className="border-[#159A9C] border-b border-[5px] w-[70%] mx-auto"></div>
            </div>
          </div>
          <div>
            <p className="font-black text-6xl mt-6">Find great deals here!</p>
            <p className="font-medium text-3xl max-w-[85%] opacity-50">
              Discover exclusive deals and special discounts available for a limited time.
            </p>
          </div>
        </div>
        <div className="w-11/12 mx-auto mt-20">
          <div className="grid grid-cols-2 gap-y-16 gap-x-24">
            {cards.map((card, index) => (
              
              <CardDetails Data={card} key={index} />
))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CardsByBank;
