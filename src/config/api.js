export const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country="
export const API_KEY = "aa16f1e6aa51c18aafd125b81702be00"
export const endpointPath = (country, category) => `${API_DOMAIN}${country}&category=${category}&apikey=${API_KEY}`;

// f2eb478b0cdb5909364e59fdc321344f
// "aa16f1e6aa51c18aafd125b81702be00"
