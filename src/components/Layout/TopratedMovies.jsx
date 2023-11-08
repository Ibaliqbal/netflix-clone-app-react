import { useEffect, useState } from "react";
import { getRandomMovie, getAllList } from "../../api";
import Card from "../Fragments/Card";

const TopratedMovies = () => {
  const [moviesTop, setMoviesTop] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const pageRandom = ~~(Math.random() * 105 + 1)
      let movieList = await getAllList("movie/now_playing", pageRandom);
      let filterMovieList= movieList.filter(movie => movie.poster_path !== null)
      filterMovieList = getRandomMovie(filterMovieList, 15);
      setMoviesTop(filterMovieList);
    };
    getMovie();
  }, []);
  return (
    <div className="w-full mt-4 relative">
      <div className="container">
        <h1 className="text-white mix-blend-difference font-bold text-2xl mb-3">
          Now Playing Movies
        </h1>
        <div className="w-full grid lg:grid-cols-5 gap-x-2 place-items-center md:grid-cols-3 grid-cols-2 leading-normal">
          <Card lists={moviesTop} />
        </div>
      </div>
    </div>
  );
};

export default TopratedMovies;
