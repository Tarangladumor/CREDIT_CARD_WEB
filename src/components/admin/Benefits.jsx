import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { addCardBenefitsDetails } from '../../services/Operations/cardAPI';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AdditionalBenefitsForm = () => {
  const { register, control, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      cardId: '',
      welcomeBonus: [{ listData: '', note: '' }],
      emiBenefit: [{ listData: '', note: '' }],
      fuelSurcharge: [{ listData: '', note: '' }],
      rewardPoints: [{ listData: '', note: '' }],
      loungeAccess: [{ listData: '', note: '' }],
      zeroLostCardLiability: [{ listData: '', note: '' }],
      milestoneBenefit: [{ listData: '', note: '' }],
      otherBenefit: [{ listData: '', note: '' }],
      travelBenefit: [{ listData: '', note: '' }],
      diningBenefit: [{ listData: '', note: '' }],
      conciergeServices: [{ listData: '', note: '' }],
      shoppingBenefit: [{ listData: '', note: '' }],
      entertainmentBenefit: [{ listData: '', note: '' }],
      insuranceBenefit: [{ listData: '', note: '' }],
    },
  });

  const { editCard } = useSelector((state) => state.card);
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
      const token = process.env.REACT_APP_AUTH_TOKEN;
      const response = await addCardBenefitsDetails(data, token);

      if (response?.success) {
        toast.success('Card benefits details added successfully!');
        navigate(`/addCharges?token=${token}`);
      }
    } catch (error) {
      console.error('Error adding card benefits details:', error);
      toast.error('Failed to add card benefits details.');
    } finally {
      setLoading(false);
    }
  };

  const renderBenefitFields = (benefitName, fields, append) => (
    <div key={benefitName} className="mb-4">
      <label className="block text-teal-700 text-sm font-bold mb-2 capitalize">
        {benefitName.replace(/([A-Z])/g, ' $1').trim()}
      </label>
      <Controller
        name={`${benefitName}[0].note`}
        control={control}
        render={({ field }) => (
          <textarea
            {...field}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors[`${benefitName}[0].note`] ? 'border-red-500' : ''}`}
            placeholder="Note"
          />
        )}
      />
      <div className="mt-2">
        {fields.map((item, index) => (
          <div key={item.id} className="flex gap-2 mb-2">
            <input
              type="text"
              {...register(`${benefitName}[${index}].listData`, { required: true })}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors[`${benefitName}[${index}].listData`] ? 'border-red-500' : ''}`}
              placeholder={`List Data ${index + 1}`}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => append({ listData: '', note: '' })}
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
        >
          + Add List Data
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-teal-50 min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-teal-600 mb-6">Additional Benefits Form</h2>

        {/* Card ID */}
        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2">Card ID</label>
          <input
            type="text"
            {...register('cardId', { required: true })}
            disabled={!!editCard?.data?._id}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors.cardId ? 'border-red-500' : ''}`}
            placeholder="Enter Card ID"
          />
          {errors.cardId && <p className="text-red-500 text-xs italic">Please enter a card ID.</p>}
        </div>

        {/* Benefit Fields */}
        {renderBenefitFields('welcomeBonus', useFieldArray({ control, name: 'welcomeBonus' }).fields, useFieldArray({ control, name: 'welcomeBonus' }).append)}
        {renderBenefitFields('emiBenefit', useFieldArray({ control, name: 'emiBenefit' }).fields, useFieldArray({ control, name: 'emiBenefit' }).append)}
        {renderBenefitFields('fuelSurcharge', useFieldArray({ control, name: 'fuelSurcharge' }).fields, useFieldArray({ control, name: 'fuelSurcharge' }).append)}
        {renderBenefitFields('rewardPoints', useFieldArray({ control, name: 'rewardPoints' }).fields, useFieldArray({ control, name: 'rewardPoints' }).append)}
        {renderBenefitFields('loungeAccess', useFieldArray({ control, name: 'loungeAccess' }).fields, useFieldArray({ control, name: 'loungeAccess' }).append)}
        {renderBenefitFields('zeroLostCardLiability', useFieldArray({ control, name: 'zeroLostCardLiability' }).fields, useFieldArray({ control, name: 'zeroLostCardLiability' }).append)}
        {renderBenefitFields('milestoneBenefit', useFieldArray({ control, name: 'milestoneBenefit' }).fields, useFieldArray({ control, name: 'milestoneBenefit' }).append)}
        {renderBenefitFields('otherBenefit', useFieldArray({ control, name: 'otherBenefit' }).fields, useFieldArray({ control, name: 'otherBenefit' }).append)}
        {renderBenefitFields('travelBenefit', useFieldArray({ control, name: 'travelBenefit' }).fields, useFieldArray({ control, name: 'travelBenefit' }).append)}
        {renderBenefitFields('diningBenefit', useFieldArray({ control, name: 'diningBenefit' }).fields, useFieldArray({ control, name: 'diningBenefit' }).append)}
        {renderBenefitFields('conciergeServices', useFieldArray({ control, name: 'conciergeServices' }).fields, useFieldArray({ control, name: 'conciergeServices' }).append)}
        {renderBenefitFields('shoppingBenefit', useFieldArray({ control, name: 'shoppingBenefit' }).fields, useFieldArray({ control, name: 'shoppingBenefit' }).append)}
        {renderBenefitFields('entertainmentBenefit', useFieldArray({ control, name: 'entertainmentBenefit' }).fields, useFieldArray({ control, name: 'entertainmentBenefit' }).append)}
        {renderBenefitFields('insuranceBenefit', useFieldArray({ control, name: 'insuranceBenefit' }).fields, useFieldArray({ control, name: 'insuranceBenefit' }).append)}

        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit Benefits'}
        </button>
      </form>
    </div>
  );
};

export default AdditionalBenefitsForm;
