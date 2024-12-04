import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common['Authorization'] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTRiZmZkZDk4OWVjMDc2MGM1YjU2YjI4Y2M0ODVmZSIsIm5iZiI6MTczMzM0NjU1My4zNTM5OTk5LCJzdWIiOiI2NzUwYzRmOTIxZTFlYWNhYzZmMDM1ODgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iN4xvXNO4J9hqRSEOa43ZJGjOZv8mMhma3wKH_miIT0";
const API_KEY = "454bffdd989ec0760c5b56b28cc485fe";


/**
 * Fetch function to 4th task
 */

// axios.defaults.baseURL = 'https://api.unsplash.com/';
// axios.defaults.headers.common['Authorization'] = "Client-ID JdGcU6QJv1EKqr5Ph0kv-h4UpuugAtgbrSyOCMpW4KA";

// const  searchImage = async (query, page) => {
// const response = await axios.get(`search/collections?page=${page}&per_page=15&query=${query}`)
// return response.data

// }

// export default searchImage
