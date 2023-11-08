import { AiFillStar } from "react-icons/ai";
const Ratings = ({ movie }) => {
  const starElements = [];

  for (let i = 1; i <= Math.round(movie / 2); i++) {
    starElements.push(<AiFillStar key={i} />);
  }

  return (
    <span className="text-lg text-yellow-400 inline-flex">{starElements}</span>
  );
};

export default Ratings;