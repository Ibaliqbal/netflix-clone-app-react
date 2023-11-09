import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getMoviesAndTvLists,
  getRandomMovie,
  getMoviesAndTvListsTrending,
} from "../../api";
import Navbar from "./Navbar";
import ListLayout from "../Fragments/ListLayout";
function Layout() {
  const { keyword } = useParams();
  const [tvList, setTvList] = useState([]);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (keyword !== "trending") {
      const getAllList = async () => {
        let dataMovies = await getMoviesAndTvLists("movie", keyword);
        let dataTv = await getMoviesAndTvLists("tv", keyword);
        let filterDataMovies = dataMovies.filter(
          (movie) => movie.poster_path !== null
        );
        let filterDataTv = dataTv.filter((tv) => tv.poster_path !== null);
        filterDataMovies = getRandomMovie(filterDataMovies, 15);
        filterDataTv = getRandomMovie(filterDataTv, 15);
        setMovies(filterDataMovies);
        setTvList(filterDataTv);
      };
      getAllList();
    } else {
      const getAllList = async () => {
        let dataMovies = await getMoviesAndTvListsTrending("movie", keyword);
        let dataTv = await getMoviesAndTvListsTrending("tv", keyword);
        dataMovies = getRandomMovie(dataMovies, 15);
        dataTv = getRandomMovie(dataTv, 15);
        setMovies(dataMovies);
        setTvList(dataTv);
      };
      getAllList();
    }
  }, [keyword]);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <ListLayout movies={movies} tvList={tvList} />
    </>
  );
}

export default Layout;
