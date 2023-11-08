import { BsPeopleFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";
const MoviesSearch = ({ searchMovies }) => {
  return (
    <div className="w-full">
      <div className="container">
        <Link
          to={"/"}
          className="text-white inline-flex items-center gap-2 text-xl bg-blue-600 px-3 py-1 rounded-full bg-transparent"
        >
          <BsArrowLeftCircleFill />
          Back
        </Link>
        <div className="w-full grid lg:grid-cols-4 place-items-center gap-4 mt-5 md:grid-cols-2 leading-normal">
          {searchMovies.map((movie) => (
            <div
              key={movie.id}
              className="lg:max-w-xs flex flex-col items-center gap-3 border-2 pb-4 border-white mb-4 overflow-hidden"
            >
              <Link
                to={`/movie/${movie.id}`}
                className="cursor-pointer group relative"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="transition-transform group-hover:scale-105 duration-300 ease-in-out object-cover"
                  alt=""
                />
              </Link>
              <div className="text-white mt-2 ml-3 leading-relaxed">
                <h1 className="font-bold text-xl">
                  {movie.title.slice(0, 15)}...
                </h1>
                <p className="font-semibold text-md h-[60px]">
                  {movie.overview.slice(0, 50)}...
                </p>
                <div className="flex gap-5">
                  <div className="flex items-center gap-2 mt-3">
                    <span>{movie.vote_average}</span>
                    <AiFillStar />
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <span>{movie.popularity}</span>
                    <BsPeopleFill />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesSearch;
