import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function CardList({ list }) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div
      className="flex flex-col md:max-w-xs max-w-sm gap-3 border-2 pb-4 border-white mb-4 overflow-hidden"
      data-aos="fade-up"
    >
      <Link to={`/movie/${list.id}`} className="cursor-pointer group relative">
        {list.poster_path ? (
          <img
            src={`${import.meta.env.VITE_API_URL_IMAGE}${list.poster_path}`}
            className="group-hover:scale-105 transition-transform duration-300 ease-in-out object-cover lg:w-[500px] h-[300px] w-[384px] md:h-[345px] md:w-[250px]"
            alt="Poster"
          />
        ) : (
          <div className="lg:w-[290px] w-[170px] lg:h-[345px] h-[300px] flex text-white items-center justify-center font-bold">
            <p>Poster not Found</p>
          </div>
        )}
      </Link>
      <div className="text-white mt-2 ml-3 leading-relaxed">
        <h1 className="font-bold lg:text-xl text-sm h-[50px]">
          {list.title.slice(0, 50)}...
        </h1>
        <p className="text-sm font-semibold lg:text-md h-[60px]">
          {list.overview.slice(0, 60)}...
        </p>
        <div className="flex gap-2 mt-3">
          <div className="flex items-center text-sm gap-1">
            <span>{list.vote_average.toFixed(2)}</span>
            <AiFillStar className="text-yellow-400" />
          </div>
          <div className="flex items-center text-sm gap-1">
            <span>{list.popularity}</span>
            <BsPeopleFill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardList;
