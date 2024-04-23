import React from "react";
import Slider from "react-slick";
import GlobalApi from "../services/GlobalApi";
import { useState, useEffect } from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MultipleSlide = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <div className=" my-4">
      <Slider {...settings} className=" max-w-[300px] sm:max-w-[590px] md:w-10/12
      lg:max-w-[1200px] mx-auto">
        {movieList.map((item,idx) => (
          <div className=" px-0.5" key={idx}>
            <img
              src={IMAGE_BASE_URL + item.backdrop_path}
              className="md:h-[200px] lg:h-[240px] object-cover
              rounded-md hover:border-[4px] sm:h-[120px]
            border-gray-400 transition-all duration-100 ease-in"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MultipleSlide;
