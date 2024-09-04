import React, { useEffect, useState } from 'react';
import visa from "../../../assets/Visa_1.png";
import rupay from "../../../assets/Rupay.png";
import diner from "../../../assets/dinersClub.png";
import master from "../../../assets/master.png";
import american from "../../../assets/americanExpress.png";
import Card from './Card';
import { fetchAllNetwork } from '../../../services/Operations/networkAPI';

const CardSection = () => {
  const [networks, setNetworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchAllNetwork();
      setNetworks(res);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-[#f7f5fd] p-5 md:p-10'>
      <div className=''>
        <div className='text-[#159a9c] text-lg md:text-xl w-full md:w-10/12 lg:w-9/12 mx-auto'>
          <p>Most opted card network</p>
          <div className='w-[20%] md:w-[13%] mt-[-25px] md:mt-[-35px]'>
            <div className='border-[#159A9C] border-b border-[1px] my-8 md:my-12'></div>
          </div>
        </div>
        <div className='w-full md:w-10/12 lg:w-9/12 mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-24 gap-y-8'>
            {networks.slice(0, 2).map((data, i) => (
              <Card key={i} data={data} />
            ))}
          </div>
        </div>
      </div>

      <div className='mt-10'>
        <div className='text-[#159a9c] text-lg md:text-xl w-full md:w-10/12 lg:w-9/12 mx-auto'>
          <p>All card networks</p>
          <div className='w-[20%] md:w-[13%] mt-[-25px] md:mt-[-35px]'>
            <div className='border-[#159A9C] border-b border-[1px] my-8 md:my-12'></div>
          </div>
        </div>
        <div className='w-full md:w-10/12 lg:w-9/12 mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-24 gap-y-8 md:gap-y-16'>
            {networks.map((data, i) => (
              <Card key={i} data={data} />
            ))}
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default CardSection;
