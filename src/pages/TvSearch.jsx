import { getSearchLists } from "../api";
import { useEffect, useState, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import CardTv from "../components/Fragments/CardTv";
function TvSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = decodeURIComponent(searchParams.get("search")) || " ";
  const [tvSearch, setTvSearch] = useState([]);
  const searchRef = useRef(null);
  useEffect(() => {
    searchRef.current.focus();
  }, []);
  useEffect(() => {
    const getMovies = async () => {
      let data = await getSearchLists("search/tv", searchName);
      data = data.filter((movie) => movie.poster_path !== null);
      setTvSearch(data);
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
            {tvSearch.length > 0 ? <CardTv lists={tvSearch} /> : <p className="text-white text-center">Tv List Not Found</p>}
          </div>
        </div>
      </main>
    </section>
  );
}

export default TvSearch;
