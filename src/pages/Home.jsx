import React, { useContext } from "react";
import { DataRecipe } from "../ContaxtApi/DataContext";
import Cards from "../components/Cards";

function Home() {
  const { recipe, setRecipes } = useContext(DataRecipe);

  console.log(recipe);
  return (
    <>
      <div className="bg-green-100 mt-20">
        <div className="flex justify-center items-center">
          <div className="py-2 text-center md:py-8 text-lg font-bold">SIMPLE RECIPES MADE FOR <span className="font-mono text-green-400 text-2xl">Real, actual, everyday life </span></div>
        </div>
        <Cards />
      </div>
    </>
  );
}

export default Home;
