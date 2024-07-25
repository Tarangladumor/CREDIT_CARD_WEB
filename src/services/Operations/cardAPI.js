import { apiConnector } from "../apiconnector"
import toast from "react-hot-toast"
import { cardEndpoints } from "../apis"

const { GET_ALL_CARDS, GET_ALL_CARDS_BY_BANK, GET_ALL_CARDS_BY_NETWORK, GET_ONE_CARD_DETAILS, GET_ALL_CARD_BY_PRIVILEGE, GET_ALL_CARD_BY_INCOME,GET_ALL_INCOME,
    GET_ALL_PROVIDER,GET_ALL_PRIVILEGE
} = cardEndpoints

export const fetchAllCard = async () => {
    let result = []
    try {
        const response = await apiConnector("GET", GET_ALL_CARDS)
        console.log("GET_ALL_CARDS API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch All Cards")
        }
        result = response?.data?.data
    }
    catch (error) {
        console.log("GET_ALL_CARDS API ERROR............", error)
        toast.error(error.message)
    }
    return result
}

export const fetchAllCardByBank = async ({ providerId }) => {
    let result = [];
    try {
        const response = await apiConnector("GET", GET_ALL_CARDS_BY_BANK, null, null, { providerId });
        console.log("GET_ALL_CARDS_BY_BANK API RESPONSE............", response);
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch All Cards By Bank");
        }
        result = response?.data?.data?.card;
    } catch (error) {
        console.log("GET_ALL_CARDS_BY_BANK API ERROR............", error);
        toast.error(error.message);
    }
    return result;
};


export const fetchAllCardByNetwork = async ({ networkId }) => {
    let result = [];
    try {
        const response = await apiConnector("GET", GET_ALL_CARDS_BY_NETWORK, null, null, { networkId });
        console.log("GET_ALL_CARDS_BY_NETWORK API RESPONSE............", response);
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch All Cards By Network");
        }
        result = response?.data?.data?.card;
    } catch (error) {
        console.log("GET_ALL_CARDS_BY_NETWORK API ERROR............", error);
        toast.error(error.message);
    }
    return result;
};

export const fetchAllCardByIncome = async ({incomeId}) => {
    let result = []
    try {
        const response = await apiConnector("GET", GET_ALL_CARD_BY_INCOME, null, null, {incomeId})
        console.log("GET_ALL_CARD_BY_INCOME API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch all Card by income")
        }
        result = response?.data?.data?.card
    }
    catch (error) {
        console.log("GET_ALL_CARD_BY_INCOME API ERROR............", error)
        toast.error(error.message)
    }
    return result
}

export const fetchAllCardByPrivilege = async ({privilegeId}) => {
    let result = []
    try {
        const response = await apiConnector("GET", GET_ALL_CARD_BY_PRIVILEGE, null, null, {privilegeId})
        console.log("GET_ALL_CARD_BY_PRIVILEGE API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch all Card by privilege")
        }
        result = response?.data?.data?.card
    }
    catch (error) {
        console.log("GET_ALL_CARD_BY_PRIVILEGE API ERROR............", error)
        toast.error(error.message)
    }
    return result
}

export const fetchAllProvider = async () => {
    let res = [];
    try {
        const response = await apiConnector("GET", GET_ALL_PROVIDER)
        console.log("GET_ALL_PROVIDER API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch All Provider")
        }
        res = response?.data?.data
        return res;
    } catch (error) {
        console.log("GET_ALL_PROVIDER............", error)
        toast.error(error.message)
    }
}

export const fetchOneCardDetails = async (cardId) => {
    let result = null
    console.log("CARDID..........", cardId);
    try {
        const response = await apiConnector("GET", GET_ONE_CARD_DETAILS, null, null, { cardId })
        console.log("GET_ONE_CARD_DETAILS API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch one Card Detail")
        }
        result = response?.data?.data

        return result;
    }
    catch (error) {
        console.log("GET_ONE_CARD_DETAILS API ERROR............", error)
        toast.error(error.message)
    }
    return result
}


export const fetchAllIncome = async () => {
    let res = [];
    try {
        const response = await apiConnector("GET", GET_ALL_INCOME)
        console.log("GET_ALL_INCOME API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch All Income")
        }
        res = response?.data?.data
        return res;
    } catch (error) {
        console.log("GET_ALL_INCOME............", error)
        toast.error(error.message)
    }
}

export const fetchAllPrivilege = async () => {
    let res = [];
    try {
        const response = await apiConnector("GET",GET_ALL_PRIVILEGE)
        console.log("GET_ALL_PRIVILEGE API RESPONSE............", response)
        if(!response?.data?.success) {
            throw new Error("Could Not Fetch All Privilege")
        }
        res = response?.data?.data
        return res;
    } catch (error) {
        console.log("GET_ALL_PRIVILEGE............", error)
        toast.error(error.message)
    }
}