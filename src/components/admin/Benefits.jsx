import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { addCardBenefitsDetails } from '../../services/Operations/cardAPI';

const CardBenefitsForm = () => {
  const { register, handleSubmit, control, formState: { errors } ,reset} = useForm({
    defaultValues: {
      cardId: "",
      benefits: []
    }
  });

  const { fields: benefitFields, append: appendBenefit } = useFieldArray({
    control,
    name: "benefits",
  });

  const [benefitLists, setBenefitLists] = useState({});
  

  const addListData = (benefitIndex) => {
    setBenefitLists((prev) => ({
      ...prev,
      [benefitIndex]: [...(prev[benefitIndex] || []), ""]
    }));
  };

  const onSubmit = async (addListData) => {
    const token = process.env.REACT_APP_AUTH_TOKEN;
    console.log(addListData);
    try {
      console.log("Submitted Data: ", addListData);
      const response = await addCardBenefitsDetails(addListData,token);
      if (response?.success) {
        alert('Benefits submitted successfully!');
        reset();
      }
    } catch (error) {
      console.error('Error submitting benefits:', error);
      alert('Failed to submit benefits.');
    }
  };

  return (
    <div className="bg-teal-50 min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-teal-600 mb-6">Add Card Benefits</h2>

        {/* Card ID */}
        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2">Card ID</label>
          <input
            type="text"
            {...register("cardId", { required: true })}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors.cardId ? 'border-red-500' : ''}`}
            placeholder="Enter Card ID"
          />
          {errors.cardId && <p className="text-red-500 text-xs italic">Please enter a card ID.</p>}
        </div>

        {/* Benefits Section */}
        {benefitFields.map((benefit, benefitIndex) => (
          <div key={benefit.id} className="mb-6">
            <label className="block text-teal-700 text-sm font-bold mb-2">Select Main Benefit</label>
            <select
              {...register(`benefits.${benefitIndex}.type`, { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="welcomeBonus">Welcome Bonus</option>
              <option value="emiBenefit">EMI Benefit</option>
              <option value="fuelSurcharge">Fuel Surcharge</option>
              {/* Add more options here */}
            </select>

            {/* Existing List Data */}
            {benefitLists[benefitIndex] && benefitLists[benefitIndex].map((_, listIndex) => (
              <div key={listIndex} className="mt-4">
                <input
                  type="text"
                  {...register(`benefits.${benefitIndex}.listData.${listIndex}`, { required: true })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder={`List Data ${listIndex + 1}`}
                />
              </div>
            ))}

            {/* Add New List Data Button */}
            <button
              type="button"
              onClick={() => addListData(benefitIndex)}
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            >
              Add New List Data
            </button>

            {/* Note Field */}
            <div className="mt-4">
              <label className="block text-teal-700 text-sm font-bold mb-2">Note</label>
              <input
                type="text"
                {...register(`benefits.${benefitIndex}.note`)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter note"
              />
            </div>
          </div>
        ))}

        {/* Add New Benefit Button */}
        <button
          type="button"
          onClick={() => appendBenefit({ type: "", listData: [], note: "" })}
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6"
        >
          Add New Benefit
        </button>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CardBenefitsForm;
