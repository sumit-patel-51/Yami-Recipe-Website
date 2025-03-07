import React, { useContext, useEffect, useState } from "react";
import { DataRecipe } from "../ContaxtApi/DataContext";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import LoadingImage from "../components/LoadingImage";

function Cards() {
  const { recipe, setRecipes } = useContext(DataRecipe);
  const navigoter = useNavigate();
  const [loading, setLoading] = useState(true); // New loading state
  const [imageLoad, setimageLoad] = useState(true);

  useEffect(() => {
    if (recipe.length > 0) {
      setLoading(false); // Stop loading when recipes are fetched
    }

    setTimeout(() => {
      setimageLoad(false);
    }, 2000);
  }, [recipe]);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen bg-green-100">
        <div className="loader"></div>
      </div>
    );
  }

  const handleClick = (id) => {
    navigoter(`/recipe/${id}`);
    window.scrollTo({ top: 0 });
  };

  console.log(recipe);
  return (
    <div className="flex justify-center flex-wrap items-center gap-3 p-2.5 pt-0 w-full h-full bg-green-100">
      {recipe.map((item) => (
        <div
          key={item.id}
          className="flex  flex-col bg-white max-w-[20rem] overflow-hidden rounded-lg  shadow-xl"
        >
          <div className="overflow-hidden w-[100%] ">
            <div className="relative overflow-hidden w-full h-[250px]">
              {imageLoad && <LoadingImage />}
              {!imageLoad && <img src={item.image} />}
            </div>
          </div>
          <div className="flex justify-between items-center p-2 w-full">
            <h2 className="font-bold text-lg w-[70%] overflow-hidden truncate">
              {item.name}
            </h2>
            <span className="flex items-center gap-1 pl-3 pr-2 pt-1 pb-1 bg-green-400 text-white rounded-lg">
              {item.rating}
              <FaStar />
            </span>
          </div>
          <div className="flex justify-between items-center px-2 w-full">
            <h2 className="w-[70%] overflow-hidden truncate">
            Difficulty : {item.difficulty}
            </h2>
            <span className="flex items-center gap-1 pl-3 pr-2 pt-1 pb-1">
              {item.cuisine}
            </span>
          </div>
          <button
            className="bg-green-400 m-2 p-2 rounded-lg text-white cursor-pointer hover:bg-green-300 transition duration-200"
            onClick={() => handleClick(item.id)}
          >
            Recipe
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cards;
