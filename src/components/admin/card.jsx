import React from 'react'
import { useForm } from "react-hook-form";

const card = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="bg-teal-50 min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-teal-600 mb-6">Create a New Card</h2>
        
        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2">Card Name</label>
          <input 
            type="text" 
            {...register("cardName", { required: true })} 
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors.cardName ? 'border-red-500' : ''}`} 
          />
          {errors.cardName && <p className="text-red-500 text-xs italic">Please enter a card name.</p>}
        </div>

        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2">Image</label>
          <input 
            type="file" 
            {...register("image", { required: true })} 
            className="w-full text-teal-700"
          />
        </div>

        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2">Description</label>
          <textarea 
            {...register("description", { required: true })} 
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors.description ? 'border-red-500' : ''}`} 
          />
          {errors.description && <p className="text-red-500 text-xs italic">Please enter a description.</p>}
        </div>

        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2">Type</label>
          <input 
            type="text" 
            {...register("type", { required: true })} 
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors.type ? 'border-red-500' : ''}`} 
          />
          {errors.type && <p className="text-red-500 text-xs italic">Please enter the card type.</p>}
        </div>

        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2">Provider</label>
          <select 
            {...register("provider", { required: true })} 
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors.provider ? 'border-red-500' : ''}`} 
          >
            <option value="visa">Visa</option>
            <option value="mastercard">MasterCard</option>
            {/* Add more options as needed */}
          </select>
          {errors.provider && <p className="text-red-500 text-xs italic">Please select a provider.</p>}
        </div>

        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2">Network</label>
          <select 
            {...register("network", { required: true })} 
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors.network ? 'border-red-500' : ''}`} 
          >
            <option value="visa">Visa</option>
            <option value="mastercard">MasterCard</option>
            {/* Add more options as needed */}
          </select>
          {errors.network && <p className="text-red-500 text-xs italic">Please select a network.</p>}
        </div>

        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2">Best For</label>
          <select 
            {...register("bestFor", { required: true })} 
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors.bestFor ? 'border-red-500' : ''}`} 
          >
            <option value="rewards">Rewards</option>
            <option value="travel">Travel</option>
            {/* Add more options as needed */}
          </select>
          {errors.bestFor && <p className="text-red-500 text-xs italic">Please select a category.</p>}
        </div>

        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2">Income</label>
          <select 
            {...register("income", { required: true })} 
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors.income ? 'border-red-500' : ''}`} 
          >
            <option value="low">Low Income</option>
            <option value="medium">Medium Income</option>
            <option value="high">High Income</option>
          </select>
          {errors.income && <p className="text-red-500 text-xs italic">Please select an income level.</p>}
        </div>

        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2">Apply Link</label>
          <input 
            type="url" 
            {...register("applyLink", { required: true })} 
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors.applyLink ? 'border-red-500' : ''}`} 
          />
          {errors.applyLink && <p className="text-red-500 text-xs italic">Please enter a valid link.</p>}
        </div>

        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2">Included Benefits</label>
          <textarea 
            {...register("includedBenefits", { required: true })} 
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors.includedBenefits ? 'border-red-500' : ''}`} 
          />
          {errors.includedBenefits && <p className="text-red-500 text-xs italic">Please enter the included benefits.</p>}
        </div>

        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2">Not Included Benefits</label>
          <textarea 
            {...register("notIncludedBenefits", { required: true })} 
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors.notIncludedBenefits ? 'border-red-500' : ''}`} 
          />
          {errors.notIncludedBenefits && <p className="text-red-500 text-xs italic">Please enter the non-included benefits.</p>}
        </div>

        <button 
          type="submit" 
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default card