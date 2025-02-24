import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import SearchSection from "../pages/SearchSection";
import React from "react";
import { DataRecipe } from "../ContaxtApi/DataContext";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

function NavBar() {
  const { searchBar, setSearchBar } = useContext(DataRecipe);
  const [menu, setMenu] = useState(false)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/")
    window.scrollTo({top:0, behavior:"smooth"})
  }
  return (
    <>
      <div className="fixed flex items-center px-5 md:px-20 justify-between top-0 bg-white w-full h-[5rem] shadow-lg z-40">
        <div>
          <div className="text-2xl cursor-pointer" onClick={() => handleClick()}>Yami <span className="text-green-400 border-2 px-2 py-1 font-mono font-semibold">Recipe</span></div>
        </div>
        <div className={`nav-link md:flex md:text-center gap-10 md:translate-0 font-bold text-sm ${menu ? "translate-0" : "translate-x-[-100%]"} duration-300`}>
          <Link to="/" className="hover:text-green-400">
            HOME
          </Link>
          <Link to="/recipe" className="hover:text-green-400">
            RECIPES
          </Link>
          <Link to="/starthere" className="hover:text-green-400">
            START HEARE
          </Link>
        </div>
        <div className="flex gap-5">
          <button
            className="p-4 rounded-4xl shadow-lg cursor-pointer text-green-400 font-bold"
            onClick={() => {setSearchBar(false); window.scrollTo({top:0})}}
          >
            <CiSearch className="text-2xl" />
          </button>
          <button className="flex md:hidden items-center p-4 rounded-4xl shadow-lg cursor-pointer text-green-400 font-extrabold" onClick={()=> menu ? setMenu(false) : setMenu(true)}>
            {menu ? <RxCross1 className="text-xl"/> : <CiMenuFries className="text-xl" />}
          </button>
        </div>
      </div>
      <SearchSection />
    </>
  );
}

export default NavBar;
