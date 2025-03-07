import React, { useEffect, useState } from "react";
import image5 from "../assets/5star.png";
import image45 from "../assets/4.5star.png";
import { useNavigate } from "react-router-dom";
function RecipeCard(props) {
  const [image, setImage] = useState("");
  const navigator = useNavigate();

  useEffect(() => {
    if (props.average > 4 && props.average < 5) {
      setImage(image45);
    } else {
      setImage(image5);
    }
  }, []);

  const handleClick = (id) => {
    navigator(`/recipe/${id}`);
    window.scrollTo({ top: 0 });
  };

  return (
    <div
      className="flex flex-col grow... max-w-[45%] md:max-w-[25rem] bg-white h-5rem md:flex-row overflow-hidden shadow-lg relative cursor-pointer"
      key={props.id}
      onClick={() => handleClick(props.id)}
    >
      <div className="w-full md:w-[35%] overflow-hidden">
        <img
          src={props.image}
          alt="Image"
          className="w-full h-full md:h-[100%] object-cover hover:scale-105 transition all duration-200"
        />
      </div>
      <div className="flex flex-col g-2 items-start p-2 md:p-3 w-full md:w-[65%]">
        <h1 className="text-lg font-bold text-green-400 w-full">
          {props.name}
        </h1>
        <img src={image} alt="" className="w-[70%]" />
        <div className="flex items-center gap-1 text-green-900 pt-2">
          <h1 className="text-sm text-center">{props.reviews} REVIEWS</h1> /
          <h1 className="text-sm text-center">{props.average} AVERAGE</h1>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
