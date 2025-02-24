import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { DataRecipe } from "../ContaxtApi/DataContext";

function RecipeTop() {
  const { searchBar, setSearchBar } = useContext(DataRecipe);
  return (
    <div className="flex flex-col items-center gap-5 md:gap-10 p-4 md:pb-20 pb-20 md:p-6 bg-green-400 relative">
      <div className="flex items-center font-bold text-green-200">
        <Link to="/" className="hover:underline">
          Yami Recipe{" "}
        </Link>
        <IoIosArrowForward className=" pt-1" />
        <span>Recipe</span>
      </div>
      <h1 className="text-4xl font-bold text-white">Recipes</h1>
      <p className="w-full md:w-[50%] text-green-200 text-center text-xl">
        We’ve organized these recipes every way we could think of so you don't
        have to! Dietary restrictions, weeknight dinners, meal prep recipes,
        some of our most tried-and-true… no matter how you browse, we’re sure
        you’ll find just what you were looking for.
      </p>
      <div
        className="absolute bottom-[-27px] cursor-pointer flex items-center px-2 bg-white w-[80%] border-1 border-zinc-400"
        onClick={() => setSearchBar(false)}
      >
        <IoSearch className="text-green-400 text-2xl" />
        <p className="py-4 px-2 text-zinc-500">Search by keyword</p>
      </div>
    </div>
  );
}

export default RecipeTop;
