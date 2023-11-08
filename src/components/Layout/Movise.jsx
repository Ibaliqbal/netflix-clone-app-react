import React, { useEffect, useState } from "react";
import { getRandomMovie, getAllList } from "../../api";
import Card from "../Fragments/Card";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovie = async () => {
      const pageRandom = ~~(Math.random() * 500 + 1)
      let movieList = await getAllList("discover/movie", pageRandom);
      let filterMovie = movieList.filter(movie => movie.poster_path !== null)
      filterMovie = getRandomMovie(filterMovie, 10);
      setMovies(movieList);
    };
    getMovie();
  }, []);

  return (
    <div className="w-full">
      <div className="container">
        <h1 className="text-white font-bold text-2xl mb-3">Recomandations Movies</h1>
        <div className="w-full grid lg:grid-cols-5 place-items-center gap-x-2 md:grid-cols-3 grid-cols-2 leading-normal">
          <Card lists={movies} />
        </div>
      </div>
    </div>
  );
};
export default Movies;
