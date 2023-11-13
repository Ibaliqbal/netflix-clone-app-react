import { getAllList, getRandomMovie } from "../../api";
import { useState, useEffect } from "react";
import CardTv from "../Fragments/CardTv";
import SliderTv from "../Fragments/SliderTvList";
function HotsTvLists() {
  const [listsTv, setListsTv] = useState([]);
  useEffect(() => {
    const getList = async () => {
      const pageRandom = ~~(Math.random() * 65 + 1);
      let tvLists = await getAllList("tv/on_the_air", pageRandom);
      let filterTvLists = tvLists.filter(list => list.poster_path !== null)
      filterTvLists = getRandomMovie(filterTvLists, 15);
      setListsTv(filterTvLists);
    };
    getList();
  }, []);
  return (
    <div className="w-full">
      <div className="container">
        <h1 className="text-white font-bold text-2xl mb-3">
          Hots List Tv
        </h1>
        <div className="w-full leading-normal">
          <SliderTv tvList={listsTv} />
        </div>
      </div>
    </div>
  );
  // grid lg:grid-cols-5 place-items-center gap-x-2 md:grid-cols-3 grid-cols-2 
}

export default HotsTvLists;
