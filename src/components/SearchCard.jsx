import React from "react";
import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { DataRecipe } from "../ContaxtApi/DataContext";

function SearchCard(props) {
  const navigeter = useNavigate();
  const location = useLocation()
  const { searchBar, setSearchBar } = useContext(DataRecipe);


  const handleClick = () => {
    setSearchBar(true)
    if (location.pathname.startsWith("/searchRecipe/")) {
        navigeter(`/recipe/${props.id}`);
        window.scrollTo({top : 0})
      } else {
        navigeter(`/searchRecipe/${props.id}`);
        window.scrollTo({top:0})
      }
}

  return (
    <div
      key={props.id}
      className="flex bg-white rounded-lg flex-col max-w-[10rem] overflow-hidden shadow-lg cursor-pointer"
      onClick={() => handleClick()}
    >
      <div className="w-full h-[7rem] relative overflow-hidden">
        <img
          src={props.image}
          alt="Image Not found"
          className=" object-cover rounded-lg hover:scale-105 duration-200"
        />
        <span className="flex items-center gap-3 absolute right-0 bottom-0 px-2 py-2 bg-white rounded-tl-2xl">
          <FaRegHeart />
          {props.like}
        </span>
      </div>
      <div className="p-2">
        <h1 className="text-zinc-500 text-lg">{props.name}</h1>
      </div>
    </div>
  );
}

export default SearchCard;
