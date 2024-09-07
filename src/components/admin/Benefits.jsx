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
      cashbackBenefit: [{ listData: '', note: '' }],
      revolvingCredit: [{ listData: '', note: '' }],
      interestfreePeriod: [{ listData: '', note: '' }],
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
  
    // Filter out empty benefits (those without listData or note)
    const filteredData = {};
    Object.keys(data).forEach((benefitKey) => {
      if (Array.isArray(data[benefitKey])) {
        const nonEmptyBenefits = data[benefitKey].filter(
          (item) => item.listData.trim() !== '' || item.note.trim() !== ''
        );
        if (nonEmptyBenefits.length > 0) {
          filteredData[benefitKey] = nonEmptyBenefits;
        }
      } else {
        filteredData[benefitKey] = data[benefitKey];
      }
    });
  
    try {
      const token = process.env.REACT_APP_AUTH_TOKEN;
      const response = await addCardBenefitsDetails(filteredData, token);
  
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
              {...register(`${benefitName}[${index}].listData`)}
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

  const welcomeBonus = useFieldArray({ control, name: 'welcomeBonus' });
  const emiBenefit = useFieldArray({ control, name: 'emiBenefit' });
  const fuelSurcharge = useFieldArray({ control, name: 'fuelSurcharge' });
  const rewardPoints = useFieldArray({ control, name: 'rewardPoints' });
  const loungeAccess = useFieldArray({ control, name: 'loungeAccess' });
  const zeroLostCardLiability = useFieldArray({ control, name: 'zeroLostCardLiability' });
  const milestoneBenefit = useFieldArray({ control, name: 'milestoneBenefit' });
  const otherBenefit = useFieldArray({ control, name: 'otherBenefit' });
  const travelBenefit = useFieldArray({ control, name: 'travelBenefit' });
  const diningBenefit = useFieldArray({ control, name: 'diningBenefit' });
  const conciergeServices = useFieldArray({ control, name: 'conciergeServices' });
  const shoppingBenefit = useFieldArray({ control, name: 'shoppingBenefit' });
  const entertainmentBenefit = useFieldArray({ control, name: 'entertainmentBenefit' });
  const insuranceBenefit = useFieldArray({ control, name: 'insuranceBenefit' });
  const cashbackBenefit = useFieldArray({ control, name: 'cashbackBenefit' });
  const revolvingCredit = useFieldArray({ control, name: 'revolvingCredit' });
  const interestfreePeriod = useFieldArray({ control, name: 'interestfreePeriod' });
  

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
        {renderBenefitFields('welcomeBonus', welcomeBonus.fields, welcomeBonus.append)}
        {renderBenefitFields('emiBenefit', emiBenefit.fields, emiBenefit.append)}
        {renderBenefitFields('fuelSurcharge', fuelSurcharge.fields, fuelSurcharge.append)}
        {renderBenefitFields('rewardPoints', rewardPoints.fields, rewardPoints.append)}
        {renderBenefitFields('loungeAccess', loungeAccess.fields, loungeAccess.append)}
        {renderBenefitFields('zeroLostCardLiability', zeroLostCardLiability.fields, zeroLostCardLiability.append)}
        {renderBenefitFields('milestoneBenefit', milestoneBenefit.fields, milestoneBenefit.append)}
        {renderBenefitFields('otherBenefit', otherBenefit.fields, otherBenefit.append)}
        {renderBenefitFields('travelBenefit', travelBenefit.fields, travelBenefit.append)}
        {renderBenefitFields('diningBenefit', diningBenefit.fields, diningBenefit.append)}
        {renderBenefitFields('conciergeServices', conciergeServices.fields, conciergeServices.append)}
        {renderBenefitFields('shoppingBenefit', shoppingBenefit.fields, shoppingBenefit.append)}
        {renderBenefitFields('entertainmentBenefit', entertainmentBenefit.fields, entertainmentBenefit.append)}
        {renderBenefitFields('insuranceBenefit', insuranceBenefit.fields, insuranceBenefit.append)}
        {renderBenefitFields('cashbackBenefit', cashbackBenefit.fields, cashbackBenefit.append)}
        {renderBenefitFields('revolvingCredit', revolvingCredit.fields, revolvingCredit.append)}
        {renderBenefitFields('interestfreePeriod', interestfreePeriod.fields, interestfreePeriod.append)}

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
