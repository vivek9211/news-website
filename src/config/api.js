export const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country="
export const API_KEY = "aa16f1e6aa51c18aafd125b81702be00"
export const endpointPath = (country, category) => `${API_DOMAIN}${country}&category=${category}&apikey=${API_KEY}`;

