import React, { useContext, useEffect, useState } from "react";
import StartHereTop from "../components/StartHereTop";
import CategoryCard from "../components/CategoryCard";
import breack from "../assets/breackfast.png";
import lunchm from "../assets/lunch.png";
import dinnerm from "../assets/dinner.svg";
import { DataRecipe } from "../ContaxtApi/DataContext";
import Footer from "../components/Footer";
import LoadingImage from "../components/LoadingImage";

function StartHere() {
  const { recipe } = useContext(DataRecipe);

  const [breackFast, setBreackFast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [imageLoad, setimageLoad] = useState(true);

  useEffect(() => {
    const breack = recipe
      .filter(
        (item) =>
          item.mealType[0].toLowerCase() == "breakfast" ||
          item.mealType[0].toLowerCase() == "snack" ||
          item.tags[0].toLowerCase() == "breakfast" ||
          item.tags[0].toLowerCase() == "snack"
      )
      .slice(0, 4);
    setBreackFast(breack);

    const newlunch = recipe
      .filter(
        (item) =>
          item.mealType[0].toLowerCase() == "lunch" ||
          item.tags[0].toLowerCase() == "lunch"
      )
      .slice(0, 4);
    setLunch(newlunch);

    const newDinner = recipe
      .filter(
        (item) =>
          item.name.toLowerCase() == "dinner" ||
          item.mealType[0].toLowerCase() == "dinner" ||
          item.tags[0].toLowerCase() == "dinner"
      )
      .slice(0, 4);
    setDinner(newDinner);

    setTimeout(() => {
      setimageLoad(false);
    },1000);
  }, [recipe]);

  return (
    <>
    {imageLoad && <LoadingImage />}
    {!imageLoad && <div className="bg-green-100 w-screen pt-[5rem]">
      <div>
        <StartHereTop />
      </div>
      <div className="py-4">
        <div className="flex justify-center">
          <div className="flex justify-center gap-2 items-center p-4 bg-white w-full md:w-[70%] ">
            <img src={breack} className="w-[35px]" alt="" />
            <span className="text-green-400 font-bold text-2xl">
              BRACK FAST RECIPE
            </span>
          </div>
        </div>
        <div className="p-5 flex flex-wrap gap-5 justify-center">
          {breackFast.map((item) => (
            <CategoryCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              difficulty={item.difficulty}
            />
          ))}
        </div>
      </div>
      <div className="py-4">
        <div className="flex justify-center">
          <div className="flex justify-center gap-2 items-center p-4 bg-white w-full md:w-[70%] ">
            <img src={lunchm} className="w-[35px]" alt="" />
            <span className="text-green-400 font-bold text-2xl">
              LUNCH RECIPE
            </span>
          </div>
        </div>
        <div className="p-5 flex flex-wrap gap-5 justify-center">
          {lunch.map((item) => (
            <CategoryCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              difficulty={item.difficulty}
            />
          ))}
        </div>
      </div>
      <div className="py-4">
        <div className="flex justify-center">
          <div className="flex justify-center gap-2 items-center p-4 bg-white w-full md:w-[70%] ">
            <img src={dinnerm} className="w-[35px]" alt="" />
            <span className="text-green-400 font-bold text-2xl">
              DINNER RECIPE
            </span>
          </div>
        </div>
        <div className="p-5 flex flex-wrap gap-5 justify-center">
          {dinner.map((item) => (
            <CategoryCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              difficulty={item.difficulty}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>}
    </>
  );
}

export default StartHere;
