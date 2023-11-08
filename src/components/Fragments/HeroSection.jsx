import { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { getVideos } from "../../api";
import { ImageContext } from "../../context/ImageContext";
const HeroSection = ({ children, searchMovies }) => {
  const { image } = useContext(ImageContext);

  return image.length > 0 ? (
    image.map((movie) => (
      <div
        className={`w-full bg-cover ${
          searchMovies.length > 0 ? "pb-4" : "h-[700px]"
        } hero relative flex flex-col items-center lg:gap-44 gap-20 leading-normal`}
        style={{
          backgroundImage:
            searchMovies.length > 0
              ? ``
              : `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
        }}
        key={movie.id}
      >
        {children}
        {searchMovies.length > 0 ? (
          <></>
        ) : (
          <div className="w-full mt-48">
            <div className="container text-white">
              <h1 className="text-2xl font-bold mix-blend-difference">
                {movie.title}
              </h1>
              <p className="text-xl font-semibold mix-blend-difference">
                {movie.overview}
              </p>
              <div className="flex items-center gap-3">
                <p className="font-semibold text-lg mix-blend-difference gap-1">
                  Ratings : {movie.vote_average.toFixed(2)}{" "}
                </p>
                <Ratings movie={movie.vote_average} />
              </div>
              <p className="mix-blend-difference">
                Release : {movie.release_date}
              </p>
              <button
                className="inline-flex play border-2 border-red-600 items-center bg-none text-red-600 duration-500 px-4 py-2 rounded-3xl gap-2 mt-4"
                onClick={() => getVideos("movie", movie.id)}
              >
                <FaPlay /> P L A Y
              </button>
            </div>
          </div>
        )}
      </div>
    ))
  ) : (
    <p>Image cannot</p>
  );
};

const Ratings = ({ movie }) => {
  const starElements = [];

  for (let i = 1; i <= Math.round(movie / 2); i++) {
    starElements.push(<AiFillStar key={i} />);
  }

  return (
    <span className="text-lg text-yellow-400 inline-flex">{starElements}</span>
  );
};

export default HeroSection;
