// const BASE_URL = "https://credit-card-web-1.onrender.com/api/v1";
const BASE_URL = process.env.REACT_APP_API_BASE_URL

export const cardEndpoints = {
    GET_ALL_CARDS_BY_BANK : BASE_URL + "/card/getCardByBank",
    GET_ALL_CARDS_BY_NETWORK: BASE_URL + "/card/getCardByNetwork",
    GET_ALL_CARDS : BASE_URL + "/card/getAllCard",
    GET_ONE_CARD_DETAILS : BASE_URL + "/card/getOneCardDetail",
    GET_ALL_CARD_BY_PRIVILEGE : BASE_URL + "/card/getCardByPrivilege",
    GET_ALL_CARD_BY_INCOME : BASE_URL + "/card/getCardByIncome",
    CARD_COMPARISON : BASE_URL + "/card/comparison",
    GET_ALL_NETWORK : BASE_URL + '/card/showAllNetwork',
    GET_ALL_PROVIDER : BASE_URL + '/card/showAllProvider',
    GET_ALL_INCOME : BASE_URL + '/card/showAllIncome',
    GET_ALL_PRIVILEGE : BASE_URL + '/card/showAllPrivilege',
    ADD_COMMENT : BASE_URL + '/card/create-comment',
    GET_ALL_COMMENTS : BASE_URL + '/card/comments',
    CREATE_RATING : BASE_URL + '/card/create-rating',
    ADD_CARD_BASIC_DETAILS : '/admin/addCard',
    ADD_CARD_REWARD_DETAILS : '/admin/addReward',
    ADD_CARD_ELIGIBILITY_DETAILS : '/admin/addEligibility',
    ADD_CARD_HOWTOAPPLY_DETAILS : '/admin/addHowToApply',
    ADD_CARD_BENEFITS_DETAILS : '/admin/add-additional-benefit',
    ADD_CARD_CHARGES_DETAILS : '/admin/addCharges',
    UPDATE_REPLY : BASE_URL + '/card/updatereply',
    GET_REPLIES : BASE_URL + '/card/getreplies',
    ADD_REPLY : BASE_URL + '/card/addreply',
    ADD_NEWSLETTER_SIGN_UP : BASE_URL + '/card/newsletter/signup'
}