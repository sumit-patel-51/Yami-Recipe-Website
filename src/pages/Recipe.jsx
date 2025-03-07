import React, { useContext, useEffect, useState } from "react";
import RecipeTop from "../components/RecipeTop";
import image from "../assets/trophy.jpg";
import RecipeCard from "../components/RecipeCard";
import { DataRecipe } from "../ContaxtApi/DataContext";
import Footer from "../components/Footer";
import LoadingImage from "../components/LoadingImage";

function Recipe() {
  const { recipe, setRecipes } = useContext(DataRecipe);
  const [AllRecipe, setAllRecipe] = useState([]);
  const [recipeSort, setrecipeSort] = useState(true)
    const [imageLoad, setimageLoad] = useState(true);

  useEffect(() => {
    if (recipe.length > 0) {
      const newList = recipe.sort((a, b) => b.reviewCount - a.reviewCount);
      recipeSort ? setAllRecipe(newList.slice(0, 9)) : setAllRecipe(newList);
    }
    setTimeout(() => {
      setimageLoad(false);
    },1000);
  }, [recipe, recipeSort]);

  const handleClick = () => {
    recipeSort ? setrecipeSort(false) : setrecipeSort(true)
  }

  return (
    <>
    {imageLoad && <LoadingImage />}
    {!imageLoad && <div className="pt-[5rem]">
      <div>
        <RecipeTop />
      </div>
      <div>
        <div className="pt-15 md:pt-20 pb-5 md:pb-10">
          <div className="flex items-center justify-center">
            <img src={image} alt="" className="w-[5rem] bg-none mix-blend-multiply" />{" "}
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
        <div className="pb-10 flex justify-center flex-wrap gap-2">
          {AllRecipe.map((item) => (
            <RecipeCard
              id={item.id}
              name={item.name}
              image={item.image}
              reviews={item.reviewCount}
              average={item.rating}
            />
          ))}
        </div>
        <div className="text-center w-full pb-10">
          <button className="px-4 py-2 min-w-[30%] bg-green-500 text-green-100 font-bold text-lg cursor-pointer hover:scale-101 hover:bg-green-400 transition-all duration-300" onClick={()=> handleClick()}>
            <span className="mr-2 text-xl">{recipeSort ? "+" : "-"}</span>{recipeSort ? "VIEW ALL RECIPES" : "VIEW LESS RECIPE"}
          </button>
        </div>
      </div>
      <Footer />
    </div>}
    </>
  );
}

export default Recipe;
