import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  const [input, setInput] = useState("");
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const goToSearchMovies = () => {
    if (!input || input.trim() == "") return;
    navigate(`/search/${input}`);
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <h1 className="font-bold mix-blend-difference text-white text-lg block py-6">
              BalsNet
            </h1>
          </div>
          <div className="flex items-center px-4">
            <div className="absolute right-4 lg:hidden text-white cursor-pointer text-2xl">
              {navbar ? (
                <FaTimes onClick={() => setNavbar(!navbar)} />
              ) : (
                <FaBars onClick={() => setNavbar(!navbar)} />
              )}
            </div>
            <nav
              id="navbar-menu"
              className={`${
                navbar ? "" : "hidden"
              } absolute py-5 bg-black shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <NavLink
                    to={`/`}
                    className="mix-blend-difference text-white py-2 mx-8 flex"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="group">
                  <p
                    to={`/`}
                    className="mix-blend-difference cursor-pointer text-white py-2 mx-8 flex items-center gap-1"
                  >
                    Search{" "}
                    <span>
                      {!isOpen ? (
                        <IoIosArrowUp
                          onClick={() => setIsOpen((state) => !state)}
                        />
                      ) : (
                        <IoIosArrowDown
                          onClick={() => setIsOpen((state) => !state)}
                        />
                      )}
                    </span>
                  </p>
                  {isOpen ? (
                    <div className="flex flex-col items-center absolute pb-4 gap-2 text-white mix-blend-difference">
                      <NavLink to={`/${"toprated"}`}>Search Movies</NavLink>
                      <NavLink to={`/${"toprated"}`}>Search Tv List</NavLink>
                    </div>
                  ) : null}
                </li>
                <li className="group">
                  <NavLink
                    to={`/${"popular"}`}
                    className="mix-blend-difference text-white py-2 mx-8 flex"
                  >
                    Popular
                  </NavLink>
                </li>
                <li className="group">
                  <NavLink
                    to={`/${"top_rated"}`}
                    className="mix-blend-difference text-white py-2 mx-8 flex"
                  >
                    Top Rated
                  </NavLink>
                </li>
                <li className="group">
                  <NavLink
                    to={`/${"trending"}`}
                    className="mix-blend-difference text-white py-2 mx-8 flex"
                  >
                    Trending
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
