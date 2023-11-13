import { useEffect, useState } from "react";
import { getRandomMovie, getAllList } from "../../api";
import SliderMovie from "../Fragments/SliderMovie";
const TopratedMovies = () => {
  const [moviesTop, setMoviesTop] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const pageRandom = ~~(Math.random() * 105 + 1);
      const data = await getAllList("movie/now_playing", pageRandom);
      let filterMovieList = data.filter((movie) => movie.poster_path !== null);
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
        {/* <Carousel show={3.5} slide={2} transition={0.5}>
        </Carousel> */}
        <div className="w-full  leading-normal">
          <SliderMovie movies={moviesTop} />
        </div>
      </div>
    </div>
  );
};

export default TopratedMovies;
