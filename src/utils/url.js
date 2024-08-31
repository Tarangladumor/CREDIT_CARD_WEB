const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const TOKEN = process.env.REACT_APP_API_TOKEN;

export const generateUrl = (endpoint, queryParams = {}) => {
    const url = new URL(`${BASE_URL}${endpoint}`);

    // Add the token to the query parameters
    url.searchParams.append('token', TOKEN);

    // Append other query parameters if provided
    Object.keys(queryParams).forEach(key => {
        url.searchParams.append(key, queryParams[key]);
    });

    return url.toString();
};
