import React from 'react';

const BasicDetails = ({ card1, selectedCard }) => {

  const renderNetwork = (networks) => (
    networks?.map((item, i) => <p key={i}>{item?.name}</p>)
  );

  return (
    <div className='w-full md:w-11/12 mx-auto mt-10 md:mt-20'>
      <table className="table-auto w-full text-sm md:text-lg lg:text-2xl border-collapse">
        <thead className="bg-[#159A9C]">
          <tr>
            <th colSpan="3" className="text-center py-3 md:py-4 lg:py-5 text-base md:text-lg lg:text-2xl">Basic Details</th>
          </tr>
        </thead>
        <tbody>
          {[
            { label: 'Card Type', cardKey: 'type', render: (data) => data },
            { label: 'Network Type', cardKey: 'network', render: renderNetwork },
            { label: 'Best For', cardKey: 'bestFor', render: (data) => data?.name },
          ].map((detail, index) => (
            <tr key={index} className="bg-white odd:bg-[#159A9C36] odd:bg-opacity-25">
              <td className='py-3 md:py-4 lg:py-5 px-2 md:px-4 lg:px-5 opacity-50 font-medium w-1/3 text-xs md:text-sm lg:text-base'>
                {detail.label}
              </td>
              <td className='py-3 md:py-4 lg:py-5 px-2 md:px-4 lg:px-5 opacity-75 font-bold text-center w-1/3 text-xs md:text-sm lg:text-base'>
                {detail.render(card1?.cardData?.[detail.cardKey])}
              </td>
              <td className='py-3 md:py-4 lg:py-5 px-2 md:px-4 lg:px-5 opacity-75 font-bold text-center w-1/3 text-xs md:text-sm lg:text-base'>
                {detail.render(selectedCard?.cardData?.[detail.cardKey])}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BasicDetails;
