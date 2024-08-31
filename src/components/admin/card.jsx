import React,{useState,useEffect} from 'react'
import { useForm } from "react-hook-form";
import ChipInput from '../common/ChipInput';
import { useSelector } from 'react-redux';
import { fetchAllNetwork } from '../../services/Operations/networkAPI';
import { addCardDetails, fetchAllIncome, fetchAllPrivilege, fetchAllProvider } from '../../services/Operations/cardAPI';
import { setCard, setEditCard } from '../../slices/cardSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CardForm = () => {
  const token = process.env.REACT_APP_AUTH_TOKEN;
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { card, editCard } = useSelector((state) => state.card);
  const [loading, setLoading] = useState(false);
  const [cardNetwork, setCardNetwork] = useState([]);
  const [cardProvider, setCardProvider] = useState([]);
  const [cardIncome, setCardIncome] = useState([]);
  const [cardPrivilege, setCardPrivilege] = useState([]);
  const [resetTrigger, setResetTrigger] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        reset
      } = useForm();

      useEffect(() => {
        const getnetwork = async () => {
          setLoading(true);
          const network = await fetchAllNetwork();
          console.log(network);
          if (network.length > 0) {
            setCardNetwork(network);
          }
          setLoading(false);
        };
        const getprovider = async () => {
          setLoading(true);
          const provider = await fetchAllProvider();
          console.log(provider);
          if (provider.length > 0) {
            setCardProvider(provider);
          }
          setLoading(false);
        };
        const getprivilege = async () => {
          setLoading(true);
          const privilege = await fetchAllPrivilege();
          console.log(privilege);
          if (privilege.length > 0) {
            setCardPrivilege(privilege);
          }
          setLoading(false);
        };
        const getincome = async () => {
          setLoading(true);
          const income = await fetchAllIncome();
          console.log(income);
          if (income.length > 0) {
            setCardIncome(income);
          }
          setLoading(false);
        };
        getnetwork();
        getincome();
        getprivilege();
        getprovider();
      }, []);



  const onSubmit = async (data) => {
    console.log("data",data)
    const formData = new FormData();
    formData.append("cardName", data.cardName);
    formData.append("description", data.description);
    formData.append("type", data.type);
    formData.append("includedBnefits", JSON.stringify(data.cardincludedBnefits));
    formData.append("notIncludedBnefits", JSON.stringify(data.cardNotIncludedBnefits));
    formData.append("provider", data.provider);
    formData.append("network", data.network);
    formData.append("bestFor", data.bestFor);
    formData.append("income", data.income);
    formData.append("applyLink", data.applyLink);
    if (data.cardimage.length > 0) {
      formData.append("cardImage", data.cardimage[0]);
    }
    console.log("Form Data : ", formData);
    setLoading(true);
    try {
      const result = await addCardDetails(formData, token);
      console.log("API Result:", result);
      if (result) {
        dispatch(setCard(result));
        dispatch(setEditCard(result));
        reset();
        setResetTrigger(!resetTrigger);
        Navigate(`/addReward?token=${token}`)
      }
    } catch (error) {
      console.error("Error in API call:", error);
    } finally {
      setLoading(false);
    }
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
            {...register("cardimage", { required: true })} 
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
            {...register("provider", {
              required: true,
              
            })}
            defaultValue=""
            id="provider"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors.provider ? 'border-red-500' : ''}`} 
          >
            <option value="" disabled>
              Choose a Provider
            </option>
            {!loading &&
              cardProvider?.map((provider, index) => (
                <option key={index} value={provider?._id}>
                  {provider?.name}
                </option>
              ))}
          </select>
          {errors.provider && <p className="text-red-500 text-xs italic">Please select a provider.</p>}
        </div>

        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2">Network</label>
          <select
            {...register("network", {
              required: true,
              
            })}
            defaultValue=""
            id="network"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors.network ? 'border-red-500' : ''}`} 
          >
            <option value="" disabled>
              Choose a Network
            </option>
            {!loading &&
              cardNetwork?.map((network, index) => (
                <option key={index} value={network?._id}>
                  {network?.name}
                </option>
              ))}
          </select>
          {errors.network && <p className="text-red-500 text-xs italic">Please select a network.</p>}
        </div>

        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2">Best For</label>
          <select
            {...register("bestFor", {
              required: true,
              
            })}
            defaultValue=""
            id="bestFor"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors.bestFor ? 'border-red-500' : ''}`} 
          >
            <option value="" disabled>
              Choose a Privilege
            </option>
            {!loading &&
              cardPrivilege?.map((bestFor, index) => (
                <option key={index} value={bestFor?._id}>
                  {bestFor?.name}
                </option>
              ))}
          </select>
          {errors.bestFor && <p className="text-red-500 text-xs italic">Please select a category.</p>}
        </div>

        <div className="mb-4">
          <label className="block text-teal-700 text-sm font-bold mb-2">Income</label>
          <select
            {...register("income", {
              required: true,
              
            })}
            defaultValue=""
            id="income"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline ${errors.income ? 'border-red-500' : ''}`} 
          >
            <option value="" disabled>
              Choose a Income
            </option>
            {!loading &&
              cardIncome?.map((income, index) => (
                <option key={index} value={income?._id}>
                  {income?.name}
                </option>
              ))}
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

        <ChipInput
          label="Included Benefits"
          name="cardincludedBnefits"
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          resetTrigger={resetTrigger}
        />

        <ChipInput
          label="Not Included Benefits"
          name="cardNotIncludedBnefits"
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          resetTrigger={resetTrigger}
        />

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

export default CardForm