import React from 'react'

const Table_4 = ({card}) => {
  return (
    <div>
      <div className="container mx-auto p-4">

    <table className="min-w-full bg-white border border-gray-300">
    <thead className=' bg-[#159a9c]'>
        <tr>
            <th className="px-6 py-3 text-left text-xl font-semibold text-black uppercase tracking-wider border-b ">Credit Card Charges</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr className="bg-[#159a9c36] border-b">
            <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">Anual Fee</td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">{card?.anualFees}</td>
            <td className="px-6 py-4 whitespace-nowrap"></td>
        </tr>
        
        <tr className="bg-[#d9d9d93d] border-b">
            <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">joining Fee</td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">{card?.joingFrees}</td>
            <td className="px-6 py-4 whitespace-nowrap"></td>
        </tr>

        <tr className="bg-[#159a9c36] border-b">
            <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">APR</td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">{card?.apr}</td>
            <td className="px-6 py-4 whitespace-nowrap"></td>
        </tr>

        <tr className="bg-[#d9d9d93d] border-b">
            <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">Add on Card Fee</td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">{card?.addOnCardFree}</td>
            <td className="px-6 py-4 whitespace-nowrap"></td>
        </tr>

        <tr className="bg-[#159a9c36] border-b">
            <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">Minimum Repayment Amt</td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">{card?.minimumRePayment}</td>
            <td className="px-6 py-4 whitespace-nowrap"></td>
        </tr>

        <tr className="bg-[#d9d9d93d] border-b">
            <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">Cash Advance Limit</td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">{card?.cashAdvance}</td>
            <td className="px-6 py-4 whitespace-nowrap"></td>
        </tr>

    </tbody>
    </table>
    </div> 
    </div>
  )
}

export default Table_4
