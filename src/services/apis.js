const BASE_URL = "http://localhost:4000/api/v1";

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
    ADD_COMMENT : BASE_URL + '/card/create-comment'
}