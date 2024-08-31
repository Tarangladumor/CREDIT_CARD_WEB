// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { MdClose } from "react-icons/md"

// const ChipInput = ({ label, name, register, errors, setValue }) => {
//     const { editCard, card } = useSelector((state) => state.card)

//     const [chips, setChips] = useState([])

//     useEffect(() => {
//         if (editCard && card[name]) {
//             setChips(card[name]); // Set initial chips from the card being edited
//         } else {
//             setChips([]); // Clear chips when reset
//         }
//         register(name, { required: true, validate: (value) => value.length > 0 });
//     }, [editCard, card, name, register, reset]);
    
//     useEffect(() => {
//         setValue(name, chips);
//     }, [chips, name, setValue]);
    

//     const handleKeyDown = (event) => {
//         if (event.key === "Enter" || event.key === ",") {
//             event.preventDefault()
//             const chipValue = event.target.value.trim()
//             if (chipValue && !chips.includes(chipValue)) {
//                 const newChips = [...chips, chipValue]
//                 setChips(newChips)
//                 event.target.value = ""
//             }
//         }
//     }

//     const handleDeleteChip = (chipIndex) => {
//         const newChips = chips.filter((_, index) => index !== chipIndex)
//         setChips(newChips)
//     }

//     return (
//         <div className="mb-4">
//             <label className="block text-teal-700 text-sm font-bold mb-2">
//                 {label} <sup className='text-pink-200'>*</sup>
//             </label>
//             <div className='flex flex-wrap gap-2'>
//                 {chips.map((chip, index) => (
//                     <div key={index} className='flex items-center bg-teal-700 text-white rounded-full px-2 py-1 text-sm'>
//                         {chip}
//                         <button 
//                             type='button' 
//                             onClick={() => handleDeleteChip(index)} 
//                             className='ml-2 focus:outline-none'>
//                             <MdClose className="text-sm" />
//                         </button>
//                     </div>
//                 ))}
//                 <input
//                     id={name}
//                     name={name}
//                     type="text"
//                     onKeyDown={handleKeyDown}
//                     className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors[name] ? 'border-red-500' : ''}`}
//                 />
//             </div>
//             {errors[name] && (
//                 <span className='text-red-500 text-xs italic mt-2'>{label} is required</span>
//             )}
//         </div>
//     )
// }

// export default ChipInput

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MdClose } from "react-icons/md";

const ChipInput = ({ label, name, register, errors, setValue, resetTrigger }) => {
    const { editCard, card } = useSelector((state) => state.card);
    const [chips, setChips] = useState([]);

    useEffect(() => {
        if (editCard && card[name]) {
            setChips(card[name]); // Set initial chips from the card being edited
        } else {
            setChips([]); // Clear chips when reset or no card is being edited
        }
        register(name, { required: true, validate: (value) => value.length > 0 });
    }, [editCard, card, name, register]);

    useEffect(() => {
        setValue(name, chips);
    }, [chips, name, setValue]);

    useEffect(() => {
        if (resetTrigger) {
            setChips([]); // Clear chips when form is reset
        }
    }, [resetTrigger]);

    const handleKeyDown = (event) => {
        if (event.key === "Enter" || event.key === ",") {
            event.preventDefault();
            const chipValue = event.target.value.trim();
            if (chipValue && !chips.includes(chipValue)) {
                const newChips = [...chips, chipValue];
                setChips(newChips);
                event.target.value = "";
            }
        }
    };

    const handleDeleteChip = (chipIndex) => {
        const newChips = chips.filter((_, index) => index !== chipIndex);
        setChips(newChips);
    };

    return (
        <div className="mb-4">
            <label className="block text-teal-700 text-sm font-bold mb-2">
                {label} <sup className='text-pink-200'>*</sup>
            </label>
            <div className='flex flex-wrap gap-2'>
                {chips.map((chip, index) => (
                    <div key={index} className='flex items-center bg-teal-700 text-white rounded-full px-2 py-1 text-sm'>
                        {chip}
                        <button 
                            type='button' 
                            onClick={() => handleDeleteChip(index)} 
                            className='ml-2 focus:outline-none'>
                            <MdClose className="text-sm" />
                        </button>
                    </div>
                ))}
                <input
                    id={name}
                    name={name}
                    type="text"
                    onKeyDown={handleKeyDown}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors[name] ? 'border-red-500' : ''}`}
                />
            </div>
            {errors[name] && (
                <span className='text-red-500 text-xs italic mt-2'>{label} is required</span>
            )}
        </div>
    );
}

export default ChipInput;

