import CardList from "./CardList";
import Card from "./Card";
import CardLayout from "../CardLayout";
function CardMovies({ api, title }) {
  return (
    <CardLayout title={title}>
      {/* {api.map((list) => (
        <CardList list={list} key={list.id} />
      ))} */}
      <Card api={api} />
    </CardLayout>
  );
}

export default CardMovies;
