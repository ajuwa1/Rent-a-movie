import axios from 'axios';

const OMDB_API_KEY = '8ec88833';

export const fetchMovies = async (searchValue) => {
    try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=${OMDB_API_KEY}`);
        return response.data.Search || [];
        } catch (error){
            console.error('Error fetching movies:', error.message);
            return [];
        }
};

