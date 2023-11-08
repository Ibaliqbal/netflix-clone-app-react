import { useParams } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import MoviesSearch from "./MoviesSearch";
import { getMoviesSearchDisplay } from "./api";
import { useEffect } from "react";
import { MdOutlineFindInPage } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import HeroSection from "./components/Fragments/HeroSection";
function SearchMoviesList({ searchMovies, setSearchMovies }) {
  const { search } = useParams();
  useEffect(() => {
    const getMovie = async () => {
      const movieList = await getMoviesSearchDisplay("search/movie", search);
      setSearchMovies(movieList);
    };
    getMovie();
  }, [search]);
  return searchMovies.length > 0 ? (
    <>
      <Navbar />
      <MoviesSearch searchMovies={searchMovies} />
    </>
  ) : (
    <>
      <Navbar />
      <div className="w-full">
        <div className="container">
          <Link
            to={"/"}
            className="absolute text-white top-7 inline-flex items-center gap-2 text-xl left-8 bg-blue-600 px-3 py-1 rounded-full bg-transparent"
          >
            <BsArrowLeftCircleFill />
            Back
          </Link>
          <div className="text-white flex items-center justify-center mt-3 w-full text-3xl mb-4 gap-3">
            <p className="">Movie Not Found</p>
            <MdOutlineFindInPage />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchMoviesList;
