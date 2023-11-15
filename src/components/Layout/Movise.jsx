import React, { useEffect, useState } from "react";
import { getRandomMovie, getAllList } from "../../api";
import SliderMovie from "../Fragments/SliderMovie";
import AOS from "aos"
import "aos/dist/aos.css"
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
    AOS.init({
      duration: 2000,
      offset: 200
    })
  }, []);

  return (
    <section className="w-full" data-aos="fade-down">
      <div className="container">
        <h1 className="text-white font-bold text-2xl mb-3">Recomandations Movies</h1>
        <div className="w-full leading-normal">
          <SliderMovie movies={movies} />
        </div>
      </div>
    </section>
  );
  // grid lg:grid-cols-5 place-items-center gap-x-2 md:grid-cols-3 grid-cols-2 
};
export default Movies;
