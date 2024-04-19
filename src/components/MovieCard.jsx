import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { useDispatch } from "react-redux";
import { addToFav,showDetails } from '../features/FavouriteSlice';
import { useNavigate } from 'react-router-dom';


const MovieCard = ({movie}) => {
  const navigate=useNavigate();
  const handleDetail=(movie)=>{
    dispatch(showDetails([movie]));
    navigate("/details")
     
  }
  const dispatch=useDispatch();
  return (
    <div>
      <section  onClick={()=>handleDetail(movie)}>
      <img src={IMAGE_BASE_URL+movie.poster_path} className=' w-28 md:w-64 rounded-md
      hover:border-[3px] hover:scale-105
       border-color-gray-300 transition-all duration-150 ease-in'/>
       </section>
      <button className="bg-gray-500 w-28 md:w-64 my-2 rounded-lg 
       py-2 opacity-65 backdrop-blur-md font-madimi text-[8px] md:text-[16px] "
       onClick={()=>dispatch(addToFav(movie))}>Add to Favourites</button>
    </div>
  )
}

export default MovieCard
