import CardLayout from "../CardLayout";
import CardTv from "./CardTv";
import CardListTv from "./CardListTv";
function CardTvList({ api, title }) {
  return (
    <CardLayout title={title}>
      {/* {api.map((list) => (
        <CardListTv list={list} key={list.id} />
      ))} */}
      <CardTv api={api} />
    </CardLayout>
  );
}

export default CardTvList;
