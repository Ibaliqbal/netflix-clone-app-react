import { useSearchParams, Link } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import { getSearchLists } from "../api";
import { useEffect, useState, useRef } from "react";
import Card from "../components/Fragments/Card";
function MoviesSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = decodeURIComponent(searchParams.get("search")) || " ";
  const [moviesSearch, setMoviesSearch] = useState([]);
  const searchRef = useRef(null);
  useEffect(() => {
    searchRef.current.focus();
  }, []);
  useEffect(() => {
    const getMovies = async () => {
      let data = await getSearchLists("search/movie", searchName);
      data = data.filter((movie) => movie.poster_path !== null);
      setMoviesSearch(data);
    };
    getMovies();
  }, [searchName]);
  return (
    <section className="w-full">
      <Navbar setSearchParams={setSearchParams} searchRef={searchRef} />
      <main className="w-full">
        <div className="container">
          <Link to={"/"} className="text-white font-bold text-2xl">
            Back
          </Link>
            <div className="w-full mt-3 grid lg:grid-cols-5 place-items-center gap-x-2 md:grid-cols-3 grid-cols-2 leading-normal">
              {moviesSearch.length > 0 ? <Card lists={moviesSearch} /> : <p className="text-white font-bold text-xl">Movie Not Found</p>}
            </div>
        </div>
      </main>
    </section>
  );
}

export default MoviesSearch;
