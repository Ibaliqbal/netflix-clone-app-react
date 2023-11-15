import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/404";
import ImageContextProvider from "./context/ImageContext";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
import TvSearch from "./pages/TvSearch";
const MoviesSearch = lazy(() => import("./pages/MoviesSearch"));
const HomePage = lazy(() => import("./pages/HomePage"));
const Layout = lazy(() => import("././components/Layout/Layout"));
const DetailMovie = lazy(() => import("././components/Layout/DetailMovie"));
const DetailTv = lazy(() => import("././components/Layout/DetailTv"));
function App() {
  const [searchMovies, setSearchMovies] = useState([]);
  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loader />}>
          <HomePage
            searchMovies={searchMovies}
            setSearchMovies={setSearchMovies}
          />
        </Suspense>
      ),
      errorElement: <Error />,
    },
    {
      path: "/:keyword",
      element: (
        <Suspense fallback={<Loader />}>
          <Layout />
        </Suspense>
      ),
    },
    {
      path: "/movie/:id",
      element: (
        <Suspense fallback={<Loader />}>
          <DetailMovie />
        </Suspense>
      ),
    },
    {
      path: "/tv/:id",
      element: (
        <Suspense fallback={<Loader />}>
          <DetailTv />
        </Suspense>
      ),
    },
    {
      path: "/movies",
      element: (
        <Suspense fallback={<Loader />}>
          <MoviesSearch />
        </Suspense>
      ),
    },
    {
      path: "/tv",
      element: (
        <Suspense fallback={<Loader />}>
          <TvSearch />
        </Suspense>
      ),
    },
  ]);
  return (
    <ImageContextProvider>
      <RouterProvider router={route} />
    </ImageContextProvider>
  );
}

export default App;
