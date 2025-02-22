import React from "react";
import { useNavigate } from "react-router-dom";

function CategoryCard(props) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    window.scrollTo({ top: 0 });
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="flex flex-col grow... max-w-[45%] md:max-w-[35rem] bg-white h-5rem md:flex-row overflow-hidden shadow-lg relative">
      <div className="w-full md:w-[35%] overflow-hidden">
        <img
          src={props.image}
          alt="Image Not Found"
          className="w-full h-full md:h-[100%] object-cover hover:scale-105 transition all duration-200"
        />
      </div>
      <div className="flex flex-col justify-evenly items-start p-2 md:p-3 w-full md:w-[65%]">
        <h1 className="text-lg font-bold text-green-400 w-full">{props.name}</h1>
        <h1 className="text-sm text-green-900">
          Difficulty : {props.difficulty}
        </h1>
        <button
          className="p-2 w-full bg-green-400 mt-4 text-white hover:bg-green-950 duration-600 cursor-pointer "
          onClick={() => handleClick(props.id)}
        >
          Make This Recipe
        </button>
      </div>
    </div>
  );
}

export default CategoryCard;
