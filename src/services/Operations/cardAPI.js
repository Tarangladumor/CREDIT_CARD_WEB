import { apiConnector } from "../apiconnector"
import toast from "react-hot-toast"
import { cardEndpoints } from "../apis"
import { generateUrl } from "../../utils/url"
import axios from 'axios';

const { GET_ALL_CARDS, GET_ALL_CARDS_BY_BANK, GET_ALL_CARDS_BY_NETWORK, GET_ONE_CARD_DETAILS, GET_ALL_CARD_BY_PRIVILEGE, GET_ALL_CARD_BY_INCOME, GET_ALL_INCOME,
    GET_ALL_PROVIDER, GET_ALL_PRIVILEGE, CARD_COMPARISON, ADD_COMMENT, CREATE_RATING, ADD_CARD_BASIC_DETAILS, ADD_CARD_REWARD_DETAILS, ADD_CARD_ELIGIBILITY_DETAILS, ADD_CARD_HOWTOAPPLY_DETAILS, ADD_CARD_BENEFITS_DETAILS, ADD_CARD_CHARGES_DETAILS, GET_ALL_COMMENTS, ADD_REPLY
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
        result = response?.data?.data
    } catch (error) {
        console.log("GET_ALL_CARDS_BY_NETWORK API ERROR............", error);
        toast.error(error.message);
    }
    return result;
};

export const fetchAllCardByIncome = async ({ incomeId }) => {
    let result = []
    try {
        const response = await apiConnector("GET", GET_ALL_CARD_BY_INCOME, null, null, { incomeId })
        console.log("GET_ALL_CARD_BY_INCOME API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch all Card by income")
        }
        result = response?.data?.data
    }
    catch (error) {
        console.log("GET_ALL_CARD_BY_INCOME API ERROR............", error)
        toast.error(error.message)
    }
    return result
}

export const fetchAllCardByPrivilege = async ({ privilegeId }) => {
    let result = []
    try {
        const response = await apiConnector("GET", GET_ALL_CARD_BY_PRIVILEGE, null, null, { privilegeId })
        console.log("GET_ALL_CARD_BY_PRIVILEGE API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch all Card by privilege")
        }
        result = response?.data?.data
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
        const response = await apiConnector("GET", GET_ALL_PRIVILEGE)
        console.log("GET_ALL_PRIVILEGE API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch All Privilege")
        }
        res = response?.data?.data
        return res;
    } catch (error) {
        console.log("GET_ALL_PRIVILEGE............", error)
        toast.error(error.message)
    }
}
// export const fetchAllComments = async() => {
//     let res = [];
//     try {

//     } catch(error) {
//         const response = await apiConnector("GET",GET_ALL_COMMENTS);
//     }
// }

export const comparison = async (cardId1, cardId2) => {
    let res = [];
    try {
        const response = await apiConnector("POST", CARD_COMPARISON, {
            cardId1, cardId2
        });
        console.log("CARD_COMPARISON_RESPONSE..........", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch All Privilege")
        }
        res = response?.data?.data;

        return res;
    } catch (error) {
        console.log("COMPARE_CARDS_ERROR ...........", error);
        toast.error(error.message);
    }
}

export const addComment = async (data) => {
    const toastId = toast.loading("Loading....")
    let res = [];
    try {
        const response = await apiConnector("POST", ADD_COMMENT, data);
        console.log("ADD_COMMENT_RESPONSE..........", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Send Comment")
        }
        res = response?.data;
        toast.success("Comment Add successfully");
    } catch (error) {
        console.log("ADD_COMMENT_ERROR ...........", error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return res;
}

export const addReview = async (data) => {
    const toastId = toast.loading("Loading....")
    let res = [];
    try {
        const response = await apiConnector("POST", CREATE_RATING, data);
        console.log("ADD_REVIEW_RESPONSE..........", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Send Review")
        }
        res = response?.data;
        toast.success("Review Add successfully");
    } catch (error) {
        console.log("ADD_REVIEW_ERROR ...........", error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return res;
}

// export const addCardDetails = async (data,token) => {
//     const url = generateUrl(ADD_CARD_BASIC_DETAILS)
//     let result = null
//     const toastId = toast.loading("Loading...")
//     console.log("Card Data : ",data);
//     console.log("token : ",token);
//     try{
//         const response = await apiConnector("POST",url,data, {
//                 headers: {
//         "Content-Type": "multipart/form-data",
//         Authorization: `Bearer ${token}`,
//     },
//         })
//         console.log("CREATE CARD API RESPONSE............", response)
//         if(!response?.data?.success) {
//             throw new Error("Could Not Add Card Details")
//         }
//         toast.success("Card Details Added Successfully")
//         result = response?.data
//     }
//     catch(error) {
//         console.log("CREATE CARD API ERROR............", error)
//         toast.error(error.message)
//     }
//     toast.dismiss(toastId)
//     return result
// }

export const addCardDetails = async (data, token) => {
    const url = generateUrl(ADD_CARD_BASIC_DETAILS);
    let result = null;
    const toastId = toast.loading("Loading...");

    console.log("Card Data:", data);
    console.log("Token:", token);

    try {
        if (!token) {
            throw new Error("Token is undefined or null");
        }

        const response = await axios.post(url, data, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `${token}`,
            },
        });

        console.log("CREATE CARD API RESPONSE............", response);

        if (!response?.data?.success) {
            throw new Error("Could Not Add Card Details");
        }

        toast.success("Card Details Added Successfully");
        result = response?.data;
    } catch (error) {
        console.log("CREATE CARD API ERROR............", error);
        toast.error(error.message || "An error occurred while adding card details");
    } finally {
        toast.dismiss(toastId);
    }

    return result;
};

export const addCardRewardDetails = async (data, token) => {
    const url = generateUrl(ADD_CARD_REWARD_DETAILS);
    let result = null;
    const toastId = toast.loading("Loading...");

    console.log("Card Data:", data);
    console.log("Token:", token);

    try {
        if (!token) {
            throw new Error("Token is undefined or null");
        }

        const response = await axios.post(url, data, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `${token}`,
            },
        });

        console.log("CREATE CARD REWARD API RESPONSE............", response);

        if (!response?.data?.success) {
            throw new Error("Could Not Add Card REWARD Details");
        }

        toast.success("Card Reward Details Added Successfully");
        result = response?.data;
    } catch (error) {
        console.log("CREATE CARD REWARD API ERROR............", error);
        toast.error(error.message || "An error occurred while adding card reward details");
    } finally {
        toast.dismiss(toastId);
    }

    return result;
};

export const addCardEligibilityDetails = async (data, token) => {
    const url = generateUrl(ADD_CARD_ELIGIBILITY_DETAILS);
    let result = null;
    const toastId = toast.loading("Loading...");

    console.log("Card Data:", data);
    console.log("Token:", token);

    try {
        if (!token) {
            throw new Error("Token is undefined or null");
        }

        const response = await axios.post(url, data, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `${token}`,
            },
        });

        console.log("CREATE CARD ELIGIBILITY API RESPONSE............", response);

        if (!response?.data?.success) {
            throw new Error("Could Not Add Card ELIGIBILITY Details");
        }

        toast.success("Card ELIGIBILITY Details Added Successfully");
        result = response?.data;
    } catch (error) {
        console.log("CREATE CARD ELIGIBILITY API ERROR............", error);
        toast.error(error.message || "An error occurred while adding card eligibility details");
    } finally {
        toast.dismiss(toastId);
    }

    return result;
};

export const addCardHowToApplyDetails = async (data, token) => {
    const url = generateUrl(ADD_CARD_HOWTOAPPLY_DETAILS);
    let result = null;
    const toastId = toast.loading("Loading...");

    console.log("Card Data:", data);
    console.log("Token:", token);

    try {
        if (!token) {
            throw new Error("Token is undefined or null");
        }

        const response = await axios.post(url, data, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `${token}`,
            },
        });

        console.log("CREATE CARD HOWTOAPPLY API RESPONSE............", response);

        if (!response?.data?.success) {
            throw new Error("Could Not Add Card HOWTOAPPLY Details");
        }

        toast.success("Card HOWTOAPPLY Details Added Successfully");
        result = response?.data;
    } catch (error) {
        console.log("CREATE CARD HOWTOAPPLY API ERROR............", error);
        toast.error(error.message || "An error occurred while adding card HOWTOAPPLY details");
    } finally {
        toast.dismiss(toastId);
    }

    return result;
};

export const addCardBenefitsDetails = async (data, token) => {
    console.log("data.....", data)
    const url = generateUrl(ADD_CARD_BENEFITS_DETAILS);
    let result = null;
    const toastId = toast.loading("Loading...");

    console.log("Card Data:", data);
    console.log("Token:", token);

    try {
        if (!token) {
            throw new Error("Token is undefined or null");
        }

        const response = await axios.post(url, data, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `${token}`,
            },
        });

        console.log("CREATE CARD BENEFITS API RESPONSE............", response);

        if (!response?.data?.success) {
            throw new Error("Could Not Add Card BENEFITS  Details");
        }

        toast.success("Card BENEFITS  Details Added Successfully");
        result = response?.data;
    } catch (error) {
        console.log("CREATE CARD BENEFITS  API ERROR............", error);
        toast.error(error.message || "An error occurred while adding card BENEFITS  details");
    } finally {
        toast.dismiss(toastId);
    }

    return result;
};

export const addCardChargesDetails = async (data, token) => {
    const url = generateUrl(ADD_CARD_CHARGES_DETAILS);
    let result = null;
    const toastId = toast.loading("Loading...");

    console.log("Card Data:", data);
    console.log("Token:", token);

    try {
        if (!token) {
            throw new Error("Token is undefined or null");
        }

        const response = await axios.post(url, data, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `${token}`,
            },
        });

        console.log("CREATE CARD CHARGES API RESPONSE............", response);

        if (!response?.data?.success) {
            throw new Error("Could Not Add Card CHARGES Details");
        }

        toast.success("Card CHARGES Details Added Successfully");
        result = response?.data;
    } catch (error) {
        console.log("CREATE CARD CHARGES API ERROR............", error);
        toast.error(error.message || "An error occurred while adding card CHARGES details");
    } finally {
        toast.dismiss(toastId);
    }

    return result;
};

export const addReply = async (data) => {
    console.log("REPLY DATA...........",data);
    const toastId = toast.loading("Loading...");
    let result = null;
    try {
        // const res = await apiConnector("POST", ADD_REPLY, data);
        const res = await axios.post(ADD_REPLY, data);

        console.log("ADD REPLY RESPONSE............", res);

        if (!res?.data?.success) {
            throw new Error("Could not add reply");
        }

        toast.success("Reply successfully");
        result = res?.data;
    } catch (error) {
        console.log("ADD REPLY ERROR.....",error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
}

// export const getReplies = async () => {
//     let result = null;
//     try {
//         const res = await apiConnector("POST", ADD_REPLY, data);

//         console.log("ADD REPLY RESPONSE............", response);

//         if (!response?.data?.success) {

//         }
//     } catch (error) {
//     }
// }