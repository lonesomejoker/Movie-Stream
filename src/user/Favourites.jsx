import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { AiFillDelete } from "react-icons/ai";
import { removeItem } from '../features/FavouriteSlice';
import { useAppContext } from '../components/context/ContextApi';
import { showData } from '../features/DetailSlice';
import { useNavigate } from 'react-router-dom';

const Favourites = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleDetail=(item)=>{
      dispatch(showData([item]));
      navigate("/details")
    }
    const {fav}=useSelector((state)=>state.favourite)
    console.log('fv::',fav);
  return (
    <div>
      <div className=' space-y-4 font-varela'>
      {
        fav.map((item)=>{
            return(
                <div key={item.id} className=' flex items-center gap-x-2'>
                    <div onClick={()=>handleDetail(item)}  className=' flex gap-2 items-center'>
                    <img src={IMAGE_BASE_URL+item.backdrop_path} className=' h-20 max-w-28 rounded-md'/>
                    <section>
                    <h2 className=' text-md text-violet-600 border-b-2 '>{item.title}</h2>
                    <h2 className=' text-sm text-white'>Release Date: {item.release_date}</h2>
                    <h2 className=' text-sm text-blue-700'>Popularity: {item.popularity}</h2>
                    <h2 className=' text-white'> <span className=' text-md text-yellow-300'>
                    IMDB Rating: </span>{item.vote_average}</h2>
                    </section>
                    </div>
                    <section>
                        <AiFillDelete className=' size-5 text-red-600' 
                        onClick={()=>{dispatch(removeItem(item.id))}}/>
                    </section>
                </div>
            )
        })
      }
      </div>
    </div>
  )
}

export default Favourites
