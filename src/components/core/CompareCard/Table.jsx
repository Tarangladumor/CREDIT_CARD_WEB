import React from 'react'

const Table = ({Data}) => {
  return (
    <div>
        <div className="container mx-auto p-4">

    <table className="min-w-full bg-white border border-gray-300">
    <thead className=' bg-[#159a9c]'>
        <tr>
            <th className="px-6 py-3 text-left text-xl font-semibold text-black uppercase tracking-wider border-b ">Basic Details</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr className="bg-[#159a9c36] border-b">
            <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">CardType</td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">{Data?.cardType}</td>
            <td className="px-6 py-4 whitespace-nowrap"></td>
        </tr>
        <tr className="bg-[#d9d9d93d] border-b">
            <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">Network Type</td>
            <td className="px-6 py-4 whitespace-nowrap">
                <img src={Data?.networkType} alt="" className='w-[70px] h-[30px]' />
            </td>
            <td className="px-6 py-4 whitespace-nowrap"></td>
        </tr>
        <tr className="bg-[#159a9c36] border-b">
            <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">Best for</td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-[17px]">{Data?.bestFor}</td>
            <td className="px-6 py-4 whitespace-nowrap"></td>
        </tr>
    </tbody>
</table>
</div> 
    </div>
  )
}

export default Table