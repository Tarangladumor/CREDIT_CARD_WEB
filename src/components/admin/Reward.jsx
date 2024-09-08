// import React, { useState, useEffect } from 'react';
// import { useForm, useFieldArray } from "react-hook-form";
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { addCardRewardDetails } from '../../services/Operations/cardAPI'; // Adjust import path
// import toast from 'react-hot-toast';

// const RewardForm = () => {
//   const { register, handleSubmit, control, setValue, formState: { errors } } = useForm({
//     defaultValues: {
//       cardId: "", // Add default value for cardId
//       points: [{ key: "", value: "" }],
//       listData: [""],
//     },
//   });

//   const { fields: keyValueFields, append: appendKeyValue } = useFieldArray({ control, name: "points" });
//   const { fields: listDataFields, append: appendListData } = useFieldArray({ control, name: "listData" });
//   const { editCard } = useSelector((state) => state.card);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (editCard?.data?._id) {
//       setValue('cardId', editCard.data._id); // Set the cardId if available
//     }
//   }, [editCard, setValue]);

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//         const token = process.env.REACT_APP_AUTH_TOKEN; // Replace with actual token logic

//         // Construct FormData manually
//         const formData = new FormData();
//         formData.append('cardId', data.cardId); // Ensure cardId is included
//         formData.append('instruction', data.instruction);
//         formData.append('note', data.note);

//         // Append points array
//         data.points.forEach((point, index) => {
//             formData.append(`points[${index}][key]`, point.key);
//             formData.append(`points[${index}][value]`, point.value);
//         });

//         // Append listData array
//         data.listData.forEach((item, index) => {
//             formData.append(`listData[${index}]`, item);
//         });

//         console.log("FormData before API Call:", Array.from(formData.entries())); // Debugging log
//         console.log("formdata",formData)

//         const response = await addCardRewardDetails(formData, token);

//         if (response?.success) {
//             toast.success('Reward details added successfully!');
//             navigate(`/addEligibility?token=${token}`); // Replace with actual path after form submission
//         }
//     } catch (error) {
//         console.error('Error adding reward details:', error);
//         toast.error('Failed to add reward details.');
//     } finally {
//         setLoading(false);
//     }
// };

//   return (
//     <div className="bg-teal-50 min-h-screen flex items-center justify-center">
//       <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
//         <h2 className="text-2xl font-bold text-teal-600 mb-6">Create a Reward</h2>

//         {/* Card ID */}
//         <div className="mb-4">
//           <label className="block text-teal-700 text-sm font-bold mb-2">Card ID</label>
//           <input
//             type="text"
//             {...register("cardId", { required: true })}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors.cardId ? 'border-red-500' : ''}`}
//             placeholder="Enter Card ID or use default"
//           />
//           {errors.cardId && <p className="text-red-500 text-xs italic">Please enter a card ID.</p>}
//         </div>

//         {/* Instruction */}
//         <div className="mb-4">
//           <label className="block text-teal-700 text-sm font-bold mb-2">Instruction</label>
//           <input
//             type="text"
//             {...register("instruction", { required: true })}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors.instruction ? 'border-red-500' : ''}`}
//           />
//           {errors.instruction && <p className="text-red-500 text-xs italic">Please enter an instruction.</p>}
//         </div>

//         {/* Key-Value Pairs */}
//         <div className="mb-4">
//           <label className="block text-teal-700 text-sm font-bold mb-2">Points (Key-Value Pairs)</label>
//           {keyValueFields.map((item, index) => (
//             <div key={item.id} className="flex gap-2 mb-2">
//               <input
//                 type="text"
//                 placeholder="Key"
//                 {...register(`points[${index}].key`, { required: true })}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//               <input
//                 type="text"
//                 placeholder="Value"
//                 {...register(`points[${index}].value`, { required: true })}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() => appendKeyValue({ key: "", value: "" })}
//             className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
//           >
//             Add New Key-Value Pair
//           </button>
//         </div>

//         {/* List Data */}
//         <div className="mb-4">
//           <label className="block text-teal-700 text-sm font-bold mb-2">List Data</label>
//           {listDataFields.map((item, index) => (
//             <input
//               key={item.id}
//               type="text"
//               placeholder="List Item"
//               {...register(`listData[${index}]`, { required: true })}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
//             />
//           ))}
//           <button
//             type="button"
//             onClick={() => appendListData("")}
//             className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
//           >
//             Add New List Item
//           </button>
//         </div>

//         {/* Note */}
//         <div className="mb-4">
//           <label className="block text-teal-700 text-sm font-bold mb-2">Note</label>
//           <textarea
//             {...register("note")}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           disabled={loading}
//         >
//           {loading ? 'Submitting...' : 'Submit'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RewardForm;

import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCardRewardDetails } from '../../services/Operations/cardAPI';
import toast from 'react-hot-toast';

const RewardForm = () => {
  const { register, handleSubmit, control, setValue, formState: { errors } } = useForm({
    defaultValues: {
      cardId: "",
      points: [{ key: "", value: "" }],
      listData: [""],
      instruction: "", // Ensure instruction is present
      note: "",
    },
  });

  const { fields: keyValueFields, append: appendKeyValue } = useFieldArray({ control, name: "points" });
  const { fields: listDataFields, append: appendListData } = useFieldArray({ control, name: "listData" });
  const { editCard } = useSelector((state) => state.card);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editCard?.data?._id) {
      setValue('cardId', editCard.data._id); // Auto-fill cardId
    }
  }, [editCard, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
        const token = process.env.REACT_APP_AUTH_TOKEN;

        // Construct FormData
        const formData = new FormData();
        formData.append('cardId', data.cardId);
        formData.append('instruction', data.instruction);
        formData.append('note', data.note);

        data.points.forEach((point, index) => {
            formData.append(`points[${index}][key]`, point.key);
            formData.append(`points[${index}][value]`, point.value);
        });

        data.listData.forEach((item, index) => {
            formData.append(`listData[${index}]`, item);
        });

        const response = await addCardRewardDetails(formData, token);

        if (response?.success) {
            toast.success('Reward details added successfully!');
            navigate(`/addEligibility?token=${token}`);
        }
    } catch (error) {
        console.error('Error adding reward details:', error);
        toast.error('Failed to add reward details.');
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="bg-teal-50 min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-teal-600 mb-6">Create a Reward</h2>

        {/* Card ID */}
        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2">Card ID</label>
          <input
            type="text"
            {...register("cardId", { required: true })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors.cardId ? 'border-red-500' : ''}`}
            placeholder="Enter Card ID or use default"
          />
          {errors.cardId && <p className="text-red-500 text-xs italic">Please enter a card ID.</p>}
        </div>

        {/* Instruction */}
        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2">Instruction</label>
          <input
            type="text"
            {...register("instruction")}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors.instruction ? 'border-red-500' : ''}`}
          />
          {errors.instruction && <p className="text-red-500 text-xs italic">Please enter an instruction.</p>}
        </div>

        {/* Key-Value Pairs */}
        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2">Points (Key-Value Pairs)</label>
          {keyValueFields.map((item, index) => (
            <div key={item.id} className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Key"
                {...register(`points[${index}].key`, { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <input
                type="text"
                placeholder="Value"
                {...register(`points[${index}].value`, { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendKeyValue({ key: "", value: "" })}
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
          >
            Add New Key-Value Pair
          </button>
        </div>

        {/* List Data */}
        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2">List Data</label>
          {listDataFields.map((item, index) => (
            <input
              key={item.id}
              type="text"
              placeholder="List Item"
              {...register(`listData[${index}]`, { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
          ))}
          <button
            type="button"
            onClick={() => appendListData("")}
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
          >
            Add New List Item
          </button>
        </div>

        {/* Note */}
        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2">Note</label>
          <textarea
            {...register("note")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default RewardForm;

// import React, { useState, useEffect } from 'react';
// import { useForm, useFieldArray } from "react-hook-form";
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { addCardRewardDetails } from '../../services/Operations/cardAPI';
// import toast from 'react-hot-toast';

// const RewardForm = () => {
//   const { register, handleSubmit, control, setValue, formState: { errors } } = useForm({
//     defaultValues: {
//       cardId: "",
//       points: [{ key: "", value: [""] }],  // Initialize 'value' as an array with one empty string
//       instruction: "",
//       note: "",
//     },
//   });

//   const { fields: keyValueFields, append: appendKeyValue, remove: removeKeyValue } = useFieldArray({
//     control, name: "points"
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   // Pre-fill cardId when editing
//   const { editCard } = useSelector((state) => state.card);
//   useEffect(() => {
//     if (editCard?.data?._id) {
//       setValue('cardId', editCard.data._id);
//     }
//   }, [editCard, setValue]);

//   // Form submission
//   const onSubmit = async (data) => {
//     setLoading(true);

//     // Ensure all points' values are arrays
//     data.points.forEach((point, index) => {
//       if (!Array.isArray(point.value) || point.value.length === 0) {
//         data.points[index].value = [""];
//       }
//     });

//     try {
//       const token = process.env.REACT_APP_AUTH_TOKEN;
//       const formData = new FormData();

//       formData.append('cardId', data.cardId);
//       formData.append('instruction', data.instruction);
//       formData.append('note', data.note);

//       data.points.forEach((point, index) => {
//         formData.append(`points[${index}][key]`, point.key);
//         point.value.forEach((val, valIndex) => {
//           formData.append(`points[${index}][value][${valIndex}]`, val);
//         });
//       });

//       const response = await addCardRewardDetails(formData, token);

//       if (response?.success) {
//         toast.success('Reward details added successfully!');
//         navigate(`/addEligibility?token=${token}`);
//       }
//     } catch (error) {
//       console.error('Error adding reward details:', error);
//       toast.error('Failed to add reward details.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-teal-50 min-h-screen flex items-center justify-center">
//       <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
//         <h2 className="text-2xl font-bold text-teal-600 mb-6">Create a Reward</h2>

//         {/* Card ID */}
//         <div className="mb-4">
//           <label className="block text-teal-700 text-sm font-bold mb-2">Card ID</label>
//           <input
//             type="text"
//             {...register("cardId", { required: true })}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors.cardId ? 'border-red-500' : ''}`}
//             placeholder="Enter Card ID"
//           />
//           {errors.cardId && <p className="text-red-500 text-xs italic">Please enter a card ID.</p>}
//         </div>

//         {/* Instruction */}
//         <div className="mb-4">
//           <label className="block text-teal-700 text-sm font-bold mb-2">Instruction</label>
//           <input
//             type="text"
//             {...register("instruction", { required: true })}
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors.instruction ? 'border-red-500' : ''}`}
//             placeholder="Enter Instruction"
//           />
//           {errors.instruction && <p className="text-red-500 text-xs italic">Please enter an instruction.</p>}
//         </div>

//         {/* Key-Value Pairs */}
//         <div className="mb-4">
//           <label className="block text-teal-700 text-sm font-bold mb-2">Points (Key-Value Pairs)</label>
//           {keyValueFields.map((item, index) => (
//             <div key={item.id} className="mb-4">
//               {/* Key Input */}
//               <input
//                 type="text"
//                 placeholder="Key"
//                 {...register(`points.${index}.key`, { required: true })}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
//               />
//               {errors.points?.[index]?.key && (
//                 <p className="text-red-500 text-xs italic">Key is required</p>
//               )}

//               {/* Values for the Key */}
//               {item.value.map((val, valIndex) => (
//                 <div key={valIndex} className="flex gap-2 mb-2">
//                   <input
//                     type="text"
//                     placeholder="Value"
//                     {...register(`points.${index}.value.${valIndex}`, { required: true })}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline"
//                   />
//                   {errors.points?.[index]?.value?.[valIndex] && (
//                     <p className="text-red-500 text-xs italic">Value is required</p>
//                   )}
//                 </div>
//               ))}

//               {/* Add New Value Button */}
//               <button
//                 type="button"
//                 onClick={() => {
//                   const updatedValues = [...item.value, ""];  // Add an empty string to values array
//                   setValue(`points.${index}.value`, updatedValues);  // Update the value array
//                 }}
//                 className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               >
//                 Add New Value
//               </button>

//               {/* Remove Key-Value Pair */}
//               <button
//                 type="button"
//                 onClick={() => removeKeyValue(index)}
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
//               >
//                 Remove Key
//               </button>
//             </div>
//           ))}

//           {/* Add New Key-Value Pair */}
//           <button
//             type="button"
//             onClick={() => appendKeyValue({ key: "", value: [""] })}  // Initialize new key with an empty value array
//             className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
//           >
//             Add New Key-Value Pair
//           </button>
//         </div>

//         {/* Note */}
//         <div className="mb-4">
//           <label className="block text-teal-700 text-sm font-bold mb-2">Note</label>
//           <textarea
//             {...register("note")}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Add a note"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           disabled={loading}
//         >
//           {loading ? 'Submitting...' : 'Submit'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RewardForm;





