import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = "Client-ID JdGcU6QJv1EKqr5Ph0kv-h4UpuugAtgbrSyOCMpW4KA";

const  searchImage = async (query, page) => {
const response = await axios.get(`search/collections?page=${page}&per_page=15&query=${query}`)
return response.data

}

export default searchImage