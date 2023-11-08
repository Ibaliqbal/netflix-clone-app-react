import Card from "../Fragments/Card";
import CardTv from "../Fragments/CardTv";
function ListLayout({ movies, tvList }) {
  return (
    <div className="text-white">
      <div className="w-full mt-24">
        <div className="container">
          <h1 className="text-white font-bold text-2xl mb-3">
            Recomandation Movies
          </h1>
          <div className="w-full grid lg:grid-cols-5 place-items-center gap-x-2 md:grid-cols-3 grid-cols-2 leading-normal">
            <Card lists={movies} />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container">
          <h1 className="text-white font-bold text-2xl mb-3">
            Recomandation Tv List
          </h1>
          <div className="w-full grid lg:grid-cols-5 place-items-center gap-x-2 md:grid-cols-3 grid-cols-2 leading-normal">
            <CardTv lists={tvList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListLayout;
