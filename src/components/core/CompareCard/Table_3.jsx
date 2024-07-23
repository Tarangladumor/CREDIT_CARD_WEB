import React from 'react'

const Table_3 = ({feature}) => {
  return (
    <div>
     <div className="container mx-auto p-4">

        <table className="min-w-full bg-white border border-gray-300">
        <thead className=' bg-[#159a9c]'>
            <tr>
                <th className="px-6 py-3 text-left text-xl font-semibold text-black uppercase tracking-wider border-b ">Features and Benefits</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-[#159a9c36] border-b">
                <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">Dining Benefits</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]"><img src={feature?.diningBenefits} alt="" className='h-[40px] w-[40px]' /></td>
                <td className="px-6 py-4 whitespace-nowrap"></td>
            </tr>
            
            <tr className="bg-[#d9d9d93d] border-b">
                <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">Travel Benefits</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]"><img src={feature?.travelBenifits} alt="" className='h-[40px] w-[40px]' /></td>
                <td className="px-6 py-4 whitespace-nowrap"></td>
            </tr>

            <tr className="bg-[#159a9c36] border-b">
                <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">Shooping Benefits</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]"><img src={feature?.shoppingBenifits} alt="" className='h-[40px] w-[40px]' /></td>
                <td className="px-6 py-4 whitespace-nowrap"></td>
            </tr>

            <tr className="bg-[#d9d9d93d] border-b">
                <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">Insurance Buying</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]"><img src={feature?.insuranceBuying} alt="" className='h-[40px] w-[40px]' /></td>
                <td className="px-6 py-4 whitespace-nowrap"></td>
            </tr>

            <tr className="bg-[#159a9c36] border-b">
                <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">Interest Free Period</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]"><img src={feature?.intrestFreePeriod} alt="" className='h-[40px] w-[40px]' /></td>
                <td className="px-6 py-4 whitespace-nowrap"></td>
            </tr>

            <tr className="bg-[#d9d9d93d] border-b">
                <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">Milestone Benifits</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]"><img src={feature?.milestone} alt="" className='h-[40px] w-[40px]' /></td>
                <td className="px-6 py-4 whitespace-nowrap"></td>
            </tr>

            
        </tbody>
        </table>
        </div> 
    </div>
  )
}

export default Table_3
