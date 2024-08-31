import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCardChargesDetails} from '../../services/Operations/cardAPI'; // Adjust import path
import toast from 'react-hot-toast';

const CardFeesForm = () => {
  const { register, handleSubmit, control, setValue, formState: { errors } } = useForm({
    defaultValues: {
      cardId: "",
      joiningFee: "",
      annualFee: "",
      annualPercentageRate: "",
      addOnCardFee: "",
      minimumRepaymentAmount: "",
      cashWithdrawalFee: "",
      cashAdvanceLimit: "",
      cardReplacementFee: "",
      foreignTransactionFee: "",
      overLimitPenalty: "",
      fuelTransactionSurcharge: "",
      rewardPointValue: "",
      points: [{ key: "", value: "" }],
    },
  });

  const { fields: keyValueFields, append: appendKeyValue } = useFieldArray({ control, name: "points" });
  const { editCard } = useSelector((state) => state.card);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editCard?.data?._id) {
      setValue('cardId', editCard.data._id);
    }
  }, [editCard, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const token = process.env.REACT_APP_AUTH_TOKEN; // Replace with actual token logic

      // Construct FormData manually
      const formData = new FormData();
      formData.append('cardId', data.cardId);
      formData.append('joiningFee', data.joiningFee);
      formData.append('annualFee', data.annualFee);
      formData.append('annualPercentageRate', data.annualPercentageRate);
      formData.append('addOnCardFee', data.addOnCardFee);
      formData.append('minimumRepaymentAmount', data.minimumRepaymentAmount);
      formData.append('cashWithdrawalFee', data.cashWithdrawalFee);
      formData.append('cashAdvanceLimit', data.cashAdvanceLimit);
      formData.append('cardReplacementFee', data.cardReplacementFee);
      formData.append('foreignTransactionFee', data.foreignTransactionFee);
      formData.append('overLimitPenalty', data.overLimitPenalty);
      formData.append('fuelTransactionSurcharge', data.fuelTransactionSurcharge);
      formData.append('rewardPointValue', data.rewardPointValue);

      // Append points array
      data.points.forEach((point, index) => {
        formData.append(`points[${index}][key]`, point.key);
        formData.append(`points[${index}][value]`, point.value);
      });

      console.log("form Data", formData)

      const response = await addCardChargesDetails(formData, token);

      if (response?.success) {
        toast.success('Card fees details added successfully!');
        navigate(`/addHowToApply?token=${token}`);
      }
    } catch (error) {
      console.error('Error adding card fees details:', error);
      toast.error('Failed to add card fees details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-teal-50 min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-teal-600 mb-6">Card Fees Form</h2>

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

        {/* Fixed Fields */}
        {[
          'joiningFee', 'annualFee', 'annualPercentageRate', 'addOnCardFee',
          'minimumRepaymentAmount', 'cashWithdrawalFee', 'cashAdvanceLimit',
          'cardReplacementFee', 'foreignTransactionFee', 'overLimitPenalty',
          'fuelTransactionSurcharge', 'rewardPointValue'
        ].map((field) => (
          <div key={field} className="mb-4">
            <label className="block text-teal-700 text-sm font-bold mb-2 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
            <input
              type="text"
              {...register(field, { required: true })}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors[field] ? 'border-red-500' : ''}`}
              placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1')}`}
            />
            {errors[field] && <p className="text-red-500 text-xs italic">Please enter a valid {field.replace(/([A-Z])/g, ' $1')}.</p>}
          </div>
        ))}

        {/* Key-Value Pairs */}
        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2">Additional Key-Value Pairs</label>
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

export default CardFeesForm;
