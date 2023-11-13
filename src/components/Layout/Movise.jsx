import React, { useEffect, useState } from "react";
import { getRandomMovie, getAllList } from "../../api";
import Card from "../Fragments/Card";
import SliderMovie from "../Fragments/SliderMovie";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovie = async () => {
      const pageRandom = ~~(Math.random() * 500 + 1)
      const data = await getAllList("discover/movie", pageRandom)
      let filterMovie = data.filter(movie => movie.poster_path !== null)
      filterMovie = getRandomMovie(filterMovie, 10);
      setMovies(filterMovie);
    };
    getMovie();
  }, []);

  return (
    <div className="w-full">
      <div className="container">
        <h1 className="text-white font-bold text-2xl mb-3">Recomandations Movies</h1>
        <div className="w-full leading-normal">
          <SliderMovie movies={movies} />
        </div>
      </div>
    </div>
  );
  // grid lg:grid-cols-5 place-items-center gap-x-2 md:grid-cols-3 grid-cols-2 
};
export default Movies;
