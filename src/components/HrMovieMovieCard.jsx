import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const HrMovieMovieCard = ({ movie }) => {
  return (
    <div>
      <img src={IMAGE_BASE_URL + movie.backdrop_path}
        className=" w-28 md:w-64 rounded-md 
    border-color-gray-300 hover:border-[3px] hover:scale-105 transition-all 
    duration-150 ease-in"/>
      <h2 className=" text-center text-white font-varela text-[10px] md:text-[16px]">
        {movie.title}
      </h2>
      <button className="bg-black w-28 md:w-64 my-2 rounded-lg text-white 
     py-2 opacity-80 backdrop-blur-md font-madimi text-[8px] md:text-[16px] ">
        Add to Favourites
      </button>
    </div>
  );
};

export default HrMovieMovieCard;
