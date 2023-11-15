import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, A11y } from "swiper/modules";
function SliderMovie({ movies }) {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={10}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination, A11y]}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
    >
      {movies.map((movie) => (
        <SwiperSlide
          className="border-2 flex flex-col md:max-w-xs max-w-sm gap-3 pb-4 border-white mb-4 overflow-hidden"
          key={movie.id}
        >
          <Link to={`/movie/${movie.id}`}>
            <img
              src={`${import.meta.env.VITE_API_URL_IMAGE}${movie.poster_path}`}
              alt=""
              className="group-hover:scale-105 transition-transform duration-300 ease-in-out object-cover lg:w-[500px] h-[300px] w-[384px] md:h-[345px] md:w-[250px]"
            />
          </Link>
          <div className="text-white mt-2 ml-3 leading-relaxed">
            <h1 className="font-bold lg:text-xl text-sm h-[50px]">
              {movie.title.slice(0, 15)}...
            </h1>
            <p className="text-sm font-semibold lg:text-md h-[60px]">
              {movie.overview.slice(0, 60)}...
            </p>
            <div className="flex gap-2 mt-3">
              <div className="flex items-center text-sm gap-1">
                <span>{movie.vote_average.toFixed(2)}</span>
                <AiFillStar className="text-yellow-400" />
              </div>
              <div className="flex items-center text-sm gap-1">
                <span>{movie.popularity}</span>
                <BsPeopleFill />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderMovie;
