import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='17dda473dae98381acf697436278df82'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=17dda473dae98381acf697436278df82';

//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

const getSeries=axios.get("https://www.episodate.com/api/most-popular?page=1")

export default{
    getTrendingVideos,
    getMovieByGenreId,
    getSeries
}