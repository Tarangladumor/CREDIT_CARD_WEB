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
    <div className='flex justify-evenly mb-16 mt-10 w-11/12 mx-auto'>
      <div className='flex-1 flex flex-col items-center border-r-4'>
        <img src={img} alt="Phone User" className='w-[425px] h-[300px]' />
      </div>
      <div className='flex-1 flex flex-col items-center text-center border-r-4'>
        <img src={card1?.cardData?.image} alt="Card" height={300} width={300} className='' />
        <p className='text-[#000000ab] font-medium text-1xl'>
          {card1?.cardData?.cardName}
        </p>
        <button className='border-[8px] border-[#159A9C] rounded-full px-5 py-2 shadow-[0px_20px_50px_10px_#00000040] mt-3'>
          <p className='font-medium text-sm'>More Details</p>
        </button>
      </div>
      <div className='flex-1 flex flex-col items-center'>
        <div>
          {!selectedCard ? (
            <>
              <div>
                <p className='text-[#000000ab] text-xl'>Add 2nd Card</p>
              </div>
              <select onChange={handleCardSelect} className='p-3 bg-[#d9d9d97a] rounded-md font-semibold w-[250px] mt-5'>
                <option value="" className='text-[#000000]'>Pick a card</option>
                {allCards && allCards.map((card) => (
                  <option key={card.id} value={card?._id}>{card.cardName}</option>
                ))}
              </select>
            </>
          ) : (
            <div className='flex flex-col items-center'>
              <img src={selectedCard?.cardData?.image} alt="Card" height={300} width={300} className='' />
              <p className='text-[#000000ab] font-medium text-1xl'>
                {selectedCard?.cardData?.cardName}
              </p>
              <button className='border-[8px] border-[#159A9C] rounded-full px-5 py-2 shadow-[0px_20px_50px_10px_#00000040] mt-3'>
                <p className='font-medium text-sm'>More Details</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section_1;
