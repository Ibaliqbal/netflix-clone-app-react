import { useParams, Link } from "react-router-dom";
import { getAllList, getRandomMovie, getDetail, getVideos } from "../../api";
import { useEffect, useState } from "react";
import Ratings from "../Elements/RatingsStar";
import { BsPeopleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

function DetailTv() {
  const [detailTv, SetDetailTv] = useState({});
  const [AiringTodayTv, setAiringTvToday] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getMovie = async () => {
      const result = await getDetail("tv", id);
      const randomPage = ~~(Math.random() * 11 + 1);
      const resultAiring = await getAllList("tv/airing_today", randomPage);
      let filterResult = resultAiring.filter(result => result.poster_path !== null)
      filterResult = getRandomMovie(filterResult, 4);
      setAiringTvToday(filterResult);
      SetDetailTv(result);
    };
    getMovie();
  }, [id]);

  return (
    <>
      <div
        className="w-full bg-cover h-[700px] hero relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${detailTv.backdrop_path})`,
        }}
      >
        <Link
          to={"/"}
          className="absolute text-white top-7 inline-flex items-center gap-2 text-xl left-8 bg-blue-600 px-3 py-1 rounded-full bg-transparent mix-blend-difference"
        >
          <BsArrowLeftCircleFill />
          Back
        </Link>
      </div>
      <div className="w-full">
        <div className="container">
          <div className="w-full grid lg:grid-cols-3 lg:place-items-center md:justify-items-start gap-5 pb-10">
            <img
              src={`https://image.tmdb.org/t/p/w300${detailTv.poster_path}`}
              alt="Poster"
              className="-mt-[50%] relative"
            />
            <div className="grid gap-8 col-span-2 justify-items-start">
              <div className="text-white leading-loose tracking-wide">
                <h1 className="font-bold lg:text-4xl">{detailTv.name}</h1>
                <h3 className="font-semibold lg:text-xl">
                  {detailTv.overview}
                </h3>
                <p className="lg:text-lg">
                  Firts Air Date : {detailTv.first_air_date}
                </p>
                <p className="lg:text-lg">
                  Last Air Date : {detailTv.last_air_date}
                </p>
                <p className="lg:text-lg">
                  Episodes : {detailTv.episode_run_time}
                </p>
                <div className="flex lg:items-center gap-3 lg:text-lg">
                  <div className="flex items-center md:gap-2">
                    <p>Rating : {detailTv.vote_average}</p>
                    <Ratings movie={detailTv.vote_average} />
                  </div>
                  |
                  <div className="md:flex md:items-center block md:gap-2 gap-1">
                    <p>Popularity : {detailTv.popularity}</p>
                    <BsPeopleFill />
                  </div>
                </div>
                <button
                  className="inline-flex play-detail border-2 border-red-600 items-center bg-none text-red-600 duration-500 px-6 py-2 rounded-3xl gap-2 mt-4"
                  onClick={() => getVideos("tv", id)}
                >
                  <FaPlay /> P L A Y
                </button>
              </div>
              <div className="text-white">
                <h1>Upcoming Tv List</h1>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-x-2 mt-4">
                  {AiringTodayTv.map((tv) => (
                    <div key={tv.id}>
                      <Link to={`/tv/${tv.id}`}>
                        <img
                          src={`https://image.tmdb.org/t/p/w300${tv.poster_path}`}
                          alt=""
                          className="w-[150px] lg:w-[200px]"
                        />
                      </Link>
                      <h1 className="h-[60px]">{tv.name.slice(0, 10)}...</h1>
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

export default DetailTv;
