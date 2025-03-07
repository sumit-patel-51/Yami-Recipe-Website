import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataRecipe } from "../ContaxtApi/DataContext";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import LoadingImage from "../components/LoadingImage";

function SearchCardRecipe() {
  const { id } = useParams();
  const { recipe, setRecipes } = useContext(DataRecipe);
  const navigoter = useNavigate();
  const [related, setRelated] = useState([]);
  const [getByIdData, setGetByIdData] = useState([]);
  const [imageLoad, setimageLoad] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data = await response.json();
      setGetByIdData(data);
      console.log(getByIdData);
    } catch (err) {}
  };
  useEffect(() => {
    getData();
    setTimeout(() => {
      setimageLoad(false);
    }, 1000);
  }, []);

  const peopleAlsoSee = (arr) =>
    arr.sort(() => Math.random() - 0.5).slice(0, 5);
  const radomFive = peopleAlsoSee(recipe);

  return (
    <>
    {imageLoad && <LoadingImage/>}
      {!imageLoad && <div className="flex flex-col gap-7 justify-center mt-20 bg-green-100 w-full h-full  p-5 md:p-[3rem] relative">
        <div className="flex flex-col w-[100%] h-5rem md:w-[100%] md:flex-row rounded-2xl overflow-hidden shadow-lg relative">
          <span className="flex items-center gap-1 absolute top-0 pl-3 pr-2 pt-1 pb-1 bg-green-400/70 text-white rounded-br-lg">
            {getByIdData.rating}
            <FaStar />
          </span>
          <div className="w-full md:w-[35%] overflow-hidden">
            <img
              src={getByIdData.image}
              alt="Image"
              className="w-full h-full md:h-[100%] object-cover hover:scale-105 transition all duration-200"
            />
          </div>
          <div className="flex justify-center items-center p-3 md:p-10 w-full md:w-[60%]">
            <div>
              <span className=" absolute top-0 right-0 p-3 bg-green-400/70 rounded-bl-2xl text-white">
                {getByIdData.mealType}
              </span>
              <h1 className="text-3xl font-bold">{getByIdData.name}</h1>
              <p>{getByIdData.cuisine}</p>
              <p>Difficulty : {getByIdData.difficulty}</p>
              <p>Cookie Time : {getByIdData.cookTimeMinutes} Minutes</p>
              <h1 className="text-2xl pt-4">Ingredients</h1>
              <p>{getByIdData.ingredients}</p>
              <h1 className="text-2xl pt-4">Instructions</h1>
              <p>{getByIdData.instructions}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="p-[1rem] text-2xl font-semibold border-green-400 border-1 rounded-lg">
            People Also Search
          </div>
          <div className="flex justify-center gap-10 flex-wrap ">
            {radomFive.map((item) => (
              <div className="flex flex-col w-[100%] h-5rem md:w-[100%] md:flex-row rounded-2xl overflow-hidden shadow-lg relative">
                <span className="flex items-center gap-1 absolute top-0 pl-3 pr-2 pt-1 pb-1 bg-green-400/70 text-white rounded-br-lg">
                  {item.rating}
                  <FaStar />
                </span>
                <div className="w-full md:w-[35%] overflow-hidden">
                  <img
                    src={item.image}
                    alt="Image Not Found"
                    className="w-full h-full md:h-[100%] object-cover hover:scale-105 transition all duration-200"
                  />
                </div>
                <div className="flex justify-center items-center p-4 md:p-10 w-full md:w-[60%]">
                  <div>
                    <span className=" absolute top-0 right-0 p-3 bg-green-400/70 rounded-bl-2xl text-white">
                      {item.mealType}
                    </span>
                    <h1 className="text-3xl font-bold">{item.name}</h1>
                    <p>{item.cuisine}</p>
                    <p>Difficulty : {item.difficulty}</p>
                    <p>Cookie Time : {item.cookTimeMinutes} Minutes</p>
                    <h1 className="text-2xl pt-4">Ingredients</h1>
                    <p>{item.ingredients}</p>
                    <h1 className="text-2xl pt-4">Instructions</h1>
                    <p>{item.instructions}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>}
    </>
  );
}

export default SearchCardRecipe;
