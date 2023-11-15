import { getRandomMovie, getAllList } from "../../api";
import { useState, useEffect } from "react";
import SliderTv from "../Fragments/SliderTvList";
import AOS from "aos";
import "aos/dist/aos.css";
function TvList() {
  const [listTv, setListTv] = useState([]);
  useEffect(() => {
    const getTvLists = async () => {
      const pageRandom = ~~(Math.random() * 500 + 1);
      let data = await getAllList("discover/tv", pageRandom);
      let filterData = data.filter((list) => list.poster_path !== null);
      filterData = getRandomMovie(filterData, 10);
      setListTv(filterData);
    };
    getTvLists();
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="w-full" data-aos="fade-up">
      <div className="container">
        <h1 className="text-white font-bold text-2xl mb-3">
          Recomandation Tv List
        </h1>
        <div className="w-full leading-normal">
          <SliderTv tvList={listTv} />
        </div>
      </div>
    </div>
  );
}

export default TvList;
