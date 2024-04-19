import { Layout } from 'antd'
import { useSelector } from 'react-redux'
import Header from '../components/Header';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";


const Details = () => {
  const {fav}=useSelector((state)=>state.favourite)
  console.log("detail",fav);
  
  return (
   
    <div className=' font-varela bg-gradient-to-r from-zinc-600 via-neutral-800 to-black min-h-screen'>
      <Header/>
      <h1 className=' pt-14 px-10 text-center text-3xl text-white'>Details</h1>
      <div className=' px-10 pt-4'>
      { fav.map((item)=>{
        return(
          <div key={item.id} className=' md:flex gap-x-5'>
      <img src={IMAGE_BASE_URL+item.backdrop_path} className=' md:h-80 h-52 rounded mx-auto '/>
      <section className=' space-y-1'>
        <h1 className=' text-2xl text-violet-500'>{item.title}</h1>
        <h1 className=' text-lg text-white '>Language: {item.original_language}</h1>
        <h1 className=' text-md text-lime-600'>Release Date: {item.release_date}</h1>
        <h1 className=' text-lg text-white'>Overview: {item.overview}</h1>
        <h1 className=' text-lg text-blue-600'>Popularity: {item.popularity}K</h1>
        <h1 className=' text-lg text-yellow-500'>IMDB rating: {item.vote_average}</h1>
      </section> 

          </div>
        )
      })}
      </div>
    </div>
  
  )
}

export default Details
