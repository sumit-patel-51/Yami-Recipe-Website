import React, { useContext, useEffect, useState } from "react";
import RecipeTop from "../components/RecipeTop";
import image from "../assets/trophy1.png";
import RecipeCard from "../components/RecipeCard";
import { DataRecipe } from "../ContaxtApi/DataContext";

function Recipe() {
  const { recipe } = useContext(DataRecipe);
  const [AllRecipe, setAllRecipe] = useState([]);

  useEffect(() => {
    const newList = recipe.sort((a, b) => b.reviewCount - a.reviewCount);
    setAllRecipe(newList);
  }, []);
  return (
    <div className="pt-[5rem]">
      <div>
        <RecipeTop />
      </div>
      <div>
        <div className="pt-15 md:pt-20 pb-5 md:pb-10">
          <div className="flex items-center justify-center">
            <img src={image} alt="" className="w-[5rem] bg-none" />{" "}
            <span className="text-2xl font-bold text-green-400">
              TOP RATED RECIPES
            </span>
          </div>
          <div className="w-full flex justify-center p-4">
            <p className="w-[80%] md:w-[50%] text-center text-green-900">
              Out of all the many recipes on Yami Recipe, these are our shining
              stars - the recipes we come back to again and again (and again).
            </p>
          </div>
        </div>
        <div className="pb-20 flex justify-center flex-wrap gap-2">
          {AllRecipe.map((item) => (
            <RecipeCard id = {item.id} name = {item.name} image = {item.image} reviews = {item.reviewCount} average = {item.rating}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recipe;
