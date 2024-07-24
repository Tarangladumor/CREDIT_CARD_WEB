import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { cardEndpoints } from "../apis";

const {
    GET_ALL_NETWORK
} = cardEndpoints;

export const fetchAllNetwork = async () => {
    let res = [];
    try {
        const response = await apiConnector("GET",GET_ALL_NETWORK)
        console.log("GET_ALL_NETWORK API RESPONSE............", response)
        if(!response?.data?.success) {
            throw new Error("Could Not Fetch All Cards")
        }
        res = response?.data?.data
        return res;
    } catch (error) {
        console.log("GET_ALL_NETWORK............", error)
        toast.error(error.message)
    }
}