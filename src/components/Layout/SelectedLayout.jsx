import CardMovies from "../Elements/CardMovies";
import CardTvList from "../Elements/CardTvLists";
function ListLayout({ movies, tvList }) {
  return (
    <section className="text-white">
      <div className="w-full mt-24">
        <CardMovies api={movies} title="Recomendation Movies" />
      </div>
      <div className="w-full">
        <CardTvList api={tvList} title="Recomendation Tv" />
      </div>
    </section>
  );
}

export default ListLayout;
