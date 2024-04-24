import React from 'react'
import disney from '../assets/images/disney.png'
import marvel from '../assets/images/marvel.png'
import nationalG from '../assets/images/nationalG.png'
import pixar from '../assets/images/pixar.png'
import starwar from '../assets/images/starwar.png'
 
import starwarV from '../assets/videos/star-wars.mp4'
import disneyV from '../assets/videos/disney.mp4'
import marvelV from '../assets/videos/marvel.mp4'
import nationalGeographicV from '../assets/videos/national-geographic.mp4'
import pixarV from '../assets/videos/pixar.mp4'

const ProductionHouse = () => {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGeographicV
        },

    ]
  return (
    <div className=' flex gap-1 md:gap-5 px-5 md:px-16 py-2'>
      {productionHouseList.map((item,idx)=>{
        return(
            <div className=' border-[2px] border-gray-600 rounded-lg hover:scale-105 transition-all
            duration-300 ease-in shadow-lg shadow-black max-w-56 lg:ml-2 sm:h-24 lg:h-[127px] h-[50px]' key={idx} >
                <img src={item.image} className=' z-10'/>
                <video src={item.video} autoPlay loop playsInline className='relative sm:top-[-64px]
                md:top-[-67px] lg:top-[-125px] 
                rounded-md z-0 opacity-0 hover:opacity-50'/>
            </div>
        )
      })}
      
    </div>
  )
}

export default ProductionHouse
