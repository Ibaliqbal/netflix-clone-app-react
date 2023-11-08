import HeroSection from "../components/Fragments/HeroSection";
import Navbar from "../components/Layout/Navbar";
import { useEffect, useContext, useRef } from "react";
import { ImageContext } from "../context/ImageContext";
import AllList from "../components/Layout/AllList";
function HomePage({ searchMovies, setSearchMovies }) {
  const { image, setImage } = useContext(ImageContext);
  // const [fetched, setFetched] = useState(false)
  const fetchedRef = useRef(false);
  useEffect(() => {
    const getMovie = async () => {
      const getRandomIndex = ~~(Math.random() * 10);
      const randomPage = ~~(Math.random() * 447 + 1);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=35be43f322b4b2460e0f8264b77f33ef&page=${randomPage}`
      );
      const data = await response.json();
      const poster = data.results.filter(
        (movie, index) => index === getRandomIndex
      );
      console.log(poster);
      setImage(poster);
    };
    if (!fetchedRef.current) {
      getMovie();
      fetchedRef.current = true;
    }
  }, []);
  return (
    <>
      <HeroSection searchMovies={searchMovies}>
        <Navbar setSearchMovies={setSearchMovies} />
      </HeroSection>
      <AllList />
    </>
  );
}

export default HomePage;
