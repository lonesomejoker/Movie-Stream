import "./App.css";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import MultipleSlide from "./components/MultipleSlide";
import ProductionHouse from "./components/ProductionHouse";
import Series from "./components/Series";

const App = () => {
  return (
    <div className=" bg-gradient-to-r from-gray-500 via-slate-600 to-black 
    font-varela scrollbar-hide max-w-full">
      <Header />
      <MultipleSlide />
      <ProductionHouse/>
      <GenreMovieList/>
      
    </div>
  );
};

export default App;
