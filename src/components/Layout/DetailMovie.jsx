import { useParams, Link } from "react-router-dom";
import {
  getDetail,
  getAllList,
  getRandomMovie,
  getVideos,
} from "../../api";
import { useEffect, useState } from "react";
import Ratings from "../Elements/RatingsStar";
import { BsPeopleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

function DetailMovie() {
  const [detailMovie, SetDetailMovie] = useState({});
  const [upcomingMovie, setUpcomingMovie] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getMovie = async () => {
      const result = await getDetail("movie", id);
      const randomPage = ~~(Math.random() * 29 + 1);
      const resultUpcoming = await getAllList("movie/upcoming", randomPage);
      let resulFilter = resultUpcoming.filter(result => result.poster_path !== null)
      resulFilter = getRandomMovie(resulFilter, 4);
      setUpcomingMovie(resulFilter);
      SetDetailMovie(result);
    };
    getMovie();
  }, [id]);

  return (
    <>
      <div
        className="w-full bg-cover h-[700px] hero relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${detailMovie.backdrop_path})`,
        }}
      >
        <Link
          to={"/"}
          className="absolute text-white top-7 inline-flex items-center gap-2 text-xl left-8 bg-blue-600 px-3 py-1 rounded-full bg-transparent"
        >
          <BsArrowLeftCircleFill />
          Back
        </Link>
      </div>
      <div className="w-full">
        <div className="container">
          <div className="w-full grid lg:grid-cols-3 place-items-center gap-5 pb-10">
            <img
              src={`https://image.tmdb.org/t/p/w300${detailMovie.poster_path}`}
              alt="Poster"
              className="-mt-[50%] relative"
            />
            <div className="grid gap-8 col-span-2">
              <div className="text-white leading-loose tracking-wide">
                <h1 className="font-bold lg:text-4xl">{detailMovie.title}</h1>
                <h3 className="font-semibold lg:text-xl">
                  {detailMovie.overview}
                </h3>
                <p className="lg:text-lg">
                  Release : {detailMovie.release_date}
                </p>
                <p className="lg:text-lg">
                  Duration : {detailMovie.runtime} minutes
                </p>
                <div className="flex md:items-center gap-3 md:text-lg">
                  <div className="flex items-center lg:gap-2">
                    <p>Rating : {detailMovie.vote_average}</p>
                    <Ratings movie={detailMovie.vote_average} />
                  </div>
                  |
                  <p className="flex items-center md:items-center md:gap-2 gap-1">
                    Popularity : {detailMovie.popularity} <BsPeopleFill />
                  </p>
                </div>
                <button
                  className="inline-flex play-detail border-2 border-red-600 items-center bg-none text-red-600 duration-500 px-6 py-2 rounded-3xl gap-2 mt-4"
                  onClick={() => getVideos("movie", id)}
                >
                  <FaPlay /> P L A Y
                </button>
              </div>
              <div className="text-white">
                <h1>Upcoming Movies</h1>
                <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-x-2 mt-4">
                  {upcomingMovie.map((movie) => (
                    <div key={movie.id}>
                      <Link to={`/movie/${movie.id}`}>
                        <img
                          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                          alt=""
                          className="w-[150px] lg:w-[200px]"
                        />
                      </Link>
                      <h1 className="h-[60px]">
                        {movie.title.slice(0, 10)}...
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailMovie;
