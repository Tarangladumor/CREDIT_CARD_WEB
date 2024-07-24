import { apiConnector } from "../apiconnector"
import toast from "react-hot-toast"
import cardEndpoints from "../apis"

const {GET_ALL_CARDS,GET_ALL_CARDS_BY_BANK,GET_ALL_CARDS_BY_NETWORK, GET_ONE_CARD_DETAILS,GET_ALL_CARD_BY_PRIVILEGE,GET_ALL_CARD_BY_INCOME} = cardEndpoints

export const fetchAllCard = async () => {
    let result = []
    try{
        const response = await apiConnector("GET",GET_ALL_CARDS)
        console.log("GET_ALL_CARDS API RESPONSE............", response)
        if(!response?.data?.success) {
            throw new Error("Could Not Fetch All Cards")
        }
        result = response?.data?.data
    }
    catch(error) {
        console.log("GET_ALL_CARDS API ERROR............", error)
        toast.error(error.message)
    }
    return result
}

export const fetchAllCardByBank = async () => {
    let result = []
    try{
        const response = await apiConnector("GET",GET_ALL_CARDS_BY_BANK)
        console.log("GET_ALL_CARDS_BY_BANK API RESPONSE............", response)
        if(!response?.data?.success) {
            throw new Error("Could Not Fetch All Cards By Bank")
        }
        result = response?.data?.data
    }
    catch(error) {
        console.log("GET_ALL_CARDS_BY_BANK API ERROR............", error)
        toast.error(error.message)
    }
    return result
}

export const fetchAllCardByNetwork = async () => {
    let result = []
    try{
        const response = await apiConnector("GET",GET_ALL_CARDS_BY_NETWORK)
        console.log("GET_ALL_CARDS_BY_NETWORK API RESPONSE............", response)
        if(!response?.data?.success) {
            throw new Error("Could Not Fetch All Cards By Network")
        }
        result = response?.data?.data
    }
    catch(error) {
        console.log("GET_ALL_CARDS_BY_NETWORK API ERROR............", error)
        toast.error(error.message)
    }
    return result
}

export const fetchOneCardDetails = async () => {
    let result = []
    try{
        const response = await apiConnector("GET",GET_ONE_CARD_DETAILS)
        console.log("GET_ONE_CARD_DETAILS API RESPONSE............", response)
        if(!response?.data?.success) {
            throw new Error("Could Not Fetch one Card Detail")
        }
        result = response?.data?.data
    }
    catch(error) {
        console.log("GET_ONE_CARD_DETAILS API ERROR............", error)
        toast.error(error.message)
    }
    return result
}

export const fetchAllCardByIncome = async () => {
    let result = []
    try{
        const response = await apiConnector("GET",GET_ALL_CARD_BY_INCOME)
        console.log("GET_ALL_CARD_BY_INCOME API RESPONSE............", response)
        if(!response?.data?.success) {
            throw new Error("Could Not Fetch all Card by income")
        }
        result = response?.data?.data
    }
    catch(error) {
        console.log("GET_ALL_CARD_BY_INCOME API ERROR............", error)
        toast.error(error.message)
    }
    return result
}

export const fetchAllCardByPrivilege = async () => {
    let result = []
    try{
        const response = await apiConnector("GET",GET_ALL_CARD_BY_PRIVILEGE)
        console.log("GET_ALL_CARD_BY_PRIVILEGE API RESPONSE............", response)
        if(!response?.data?.success) {
            throw new Error("Could Not Fetch all Card by privilege")
        }
        result = response?.data?.data
    }
    catch(error) {
        console.log("GET_ALL_CARD_BY_PRIVILEGE API ERROR............", error)
        toast.error(error.message)
    }
    return result
}


