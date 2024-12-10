import axios from "axios";


const apiToken = import.meta.env.VITE_TOKEN;
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const options = {
  headers: {
    Authorization:
      `Bearer ${apiToken}`,
  },
};


export const fetchTrendingMovies = async (page) => {
  const response = await axios.get(`trending/movie/day?page=${page}`, options);

  return response.data;
};

export const fetchSerchQuery = async (query, page) => {
  const response = await axios.get(
    `search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
    options
  );
  return response.data;
};
export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`movie/${id}?language=en-US`, options);
  return response.data;
};
export const fetchMovieCredits = async (id) => {
  const response = await axios.get(
    `movie/${id}/credits?language=en-US`,
    options
  );
  return response.data.cast;
};
export const fetchMovieReviews = async (id) => {
  const response = await axios.get(
    `movie/${id}/reviews?language=en-US`,
    options
  );
  return response.data.results;
};

/**
 * Fetch function to 4th task
 */

// axios.defaults.baseURL = 'https://api.unsplash.com/';
// const secretKey = import.meta.env.VITE_SECRET_KEY;
// axios.defaults.headers.common['Authorization'] = `Client-ID ${secretKey}`;

// const  searchImage = async (query, page) => {
// const response = await axios.get(`search/collections?page=${page}&per_page=15&query=${query}`)
// return response.data

// }

// export default searchImage
