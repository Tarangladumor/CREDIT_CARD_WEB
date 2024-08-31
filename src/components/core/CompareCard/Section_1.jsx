import React, { useEffect, useState } from 'react';
import img from '../../../assets/phoneUser.png';
import { fetchAllCard, fetchOneCardDetails } from '../../../services/Operations/cardAPI';

const Section_1 = ({ card1Id, setCard1Data, setSelectedCardData }) => {
  const [allCards, setAllCards] = useState([]);
  const [card1, setCard1] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const cardData = await fetchAllCard();
      setAllCards(cardData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCard1 = async () => {
      const card1Data = await fetchOneCardDetails(card1Id);
      setCard1(card1Data);
      setCard1Data(card1Data); // Update parent component
    };

    if (card1Id) {
      fetchCard1();
    }
  }, [card1Id, setCard1Data]);

  const handleCardSelect = async (event) => {
    const cardId = event.target.value;
    if (cardId) {
      const selectedCardData = await fetchOneCardDetails(cardId);
      setSelectedCard(selectedCardData);
      setSelectedCardData(selectedCardData); // Update parent component
    } else {
      setSelectedCard(null);
      setSelectedCardData(null); // Update parent component
    }
  };

  return (
    <div className="flex flex-row justify-evenly mb-8 lg:mb-16 mt-8 lg:mt-10 w-11/12 mx-auto">
      {/* Hide this image on small screens */}
      <div className="hidden md:flex flex-1 flex-col items-center border-r-4">
        <img src={img} alt="Phone User" className="w-[250px] h-[175px] md:w-[425px] md:h-[300px] sm:w-[325px] sm:h-[200px]" />
      </div>
      <div className="flex-1 flex flex-col items-center text-center border-r-4">
        <img src={card1?.cardData?.image} alt="Card" className="w-[150px] h-[100px] md:w-[300px] md:h-[225px]" />
        <p className="text-[#000000ab] font-medium text-lg md:text-1xl mt-4 md:mt-6">
          {card1?.cardData?.cardName}
        </p>
        <button className="border-[4px] md:border-[8px] border-[#159A9C] rounded-full px-3 py-1 md:px-5 md:py-2 shadow-[0px_10px_25px_5px_#00000020] md:shadow-[0px_20px_50px_10px_#00000040] mt-4 md:mt-6">
          <p className="font-medium text-xs md:text-sm">More Details</p>
        </button>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <div>
          {!selectedCard ? (
            <>
              <div>
                <p className="text-[#000000ab] text-lg md:text-xl">Add 2nd Card</p>
              </div>
              <select onChange={handleCardSelect} className="p-2 md:p-3 bg-[#d9d9d97a] rounded-md font-semibold w-[200px] md:w-[250px] mt-4 md:mt-5">
                <option value="" className="text-[#000000]">Pick a card</option>
                {allCards && allCards.map((card) => (
                  <option key={card.id} value={card?._id}>{card.cardName}</option>
                ))}
              </select>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <img src={selectedCard?.cardData?.image} alt="Card" className="w-[150px] h-[100px] md:w-[300px] md:h-[225px]" />
              <p className="text-[#000000ab] font-medium text-lg md:text-1xl mt-4 md:mt-6">
                {selectedCard?.cardData?.cardName}
              </p>
              <button className="border-[4px] md:border-[8px] border-[#159A9C] rounded-full px-3 py-1 md:px-5 md:py-2 shadow-[0px_10px_25px_5px_#00000020] md:shadow-[0px_20px_50px_10px_#00000040] mt-4 md:mt-6">
                <p className="font-medium text-xs md:text-sm">More Details</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section_1;
