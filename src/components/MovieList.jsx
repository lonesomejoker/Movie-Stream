import React, { useEffect,useRef } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieMovieCard from './HrMovieMovieCard';


const MovieList = ({genreId,index_}) => {
  const[movieList,setMovieList]=React.useState([]);
  const elementRef=useRef(null);
  useEffect(()=>{
     getMovieByGenreId();
  },[])

  const getMovieByGenreId=()=>{
    GlobalApi.getMovieByGenreId(genreId).then(resp=>{
      //console.log('resp',resp.data.results);
      setMovieList(resp.data.results)

    })
  }
  const slideRight =(element)=>{
    element.scrollLeft+=500;
  }
  const slideLeft =(element)=>{
    element.scrollLeft-=500;
  }
  return (
    <div className=' relative'>
     <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white hidden absolute md:block p-2 
          z-10 cursor-pointer ${index_%3==0?'mt-[60px]':'mt-[150px]'} `}/>
    <div ref={elementRef} className=' flex gap-x-3 overflow-x-auto scrollbar-hide 
    scroll-smooth py-5 px-3 '>
      {
        movieList.map((item,idx)=>(
          <div key={idx}>
          {(index_%3==0)?<HrMovieMovieCard movie={item}/>:
          <MovieCard movie={item}/> }
          </div>
        ))
      }
    </div>
    <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 
            absolute right-0 ${index_%3==0?' top-16':' top-36'}`}/> 

    </div>
  )
}

export default MovieList
