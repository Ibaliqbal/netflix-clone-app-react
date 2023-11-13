import { getRandomMovie, getAllList } from "../../api";
import { useState, useEffect } from "react";
import CardTv from "../Fragments/CardTv";
import SliderTv from "../Fragments/SliderTvList";
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
  }, []);
  return (
    <div className="w-full">
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
