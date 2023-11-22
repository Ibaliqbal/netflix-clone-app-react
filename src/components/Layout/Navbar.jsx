import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = ({ setSearchParams, searchRef }) => {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <header
      className={`bg-transparent ${
        location.pathname == "/movies" || location.pathname == "/tv"
          ? ""
          : "absolute"
      } top-0 left-0 w-full flex items-center z-10 shadow-lg`}
    >
      <section className="container">
        <div className="flex items-center justify-between relative">
          <section className="px-4">
            <h1 className="font-bold mix-blend-difference text-white text-3xl block py-6">
              BalsNet
            </h1>
          </section>
          {location.pathname == "/movies" || location.pathname == "/tv" ? (
            <nav className="text-white">
              <form
                action=""
                className="flex bg-white rounded-full px-3 lg:w-[300px] w-[200px] py-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  const encodeQuery = encodeURIComponent(e.target.search.value);
                  if (
                    !e.target.search.value ||
                    e.target.search.value.trim() === ""
                  )
                    return;
                  setSearchParams({ search: encodeQuery });
                }}
                encType="application/x-www-form-urlencoded"
              >
                <input
                  type="text"
                  className="text-black lg:w-5/6 w-4/5 px-1 py-1 rounded-full focus:outline-none"
                  name="search"
                  placeholder={
                    location.pathname == "/movies"
                      ? "Search movies ... "
                      : "Search Tv ...."
                  }
                  ref={searchRef}
                />
                <button type="submit" className="text-black lg:w-1/6 w-1/5 px-3">
                  <IoSearchOutline />
                </button>
              </form>
            </nav>
          ) : (
            <div className="flex items-center px-4">
              <section className="absolute right-4 lg:hidden text-white cursor-pointer text-2xl">
                {navbar ? (
                  <FaTimes onClick={() => setNavbar(!navbar)} />
                ) : (
                  <FaBars onClick={() => setNavbar(!navbar)} />
                )}
              </section>
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
                  <li
                    className="group relative"
                    onClick={() => setIsOpen((state) => !state)}
                  >
                    <p
                      to={`/`}
                      className="mix-blend-difference cursor-pointer text-white py-2 mx-8 flex items-center gap-1"
                    >
                      Search{" "}
                      <span>
                        <IoIosArrowUp className={`${isOpen ? "rotate-180" : null} transition-transform duration-300 ease-linear`} />
                      </span>
                    </p>
                    <section className={`flex flex-col transition-all duration-300 ease-liniear ${isOpen ? "top-full" : "top-0 -z-50 opacity-0"} shadow-lg px-8 lg:items-center absolute pb-4 pt-2 gap-2 text-white mix-blend-difference`}>
                      <NavLink to={`/${"movies"}`}>Search Movies</NavLink>
                      <NavLink to={`/${"tv"}`}>Search Tv List</NavLink>
                    </section>
                  </li>
                  <li className={`group lg:mt-0 ${isOpen ? "mt-16": null} transition-all duration-300 ease-linear`}>
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
          )}
        </div>
      </section>
    </header>
  );
};

export default Navbar;
