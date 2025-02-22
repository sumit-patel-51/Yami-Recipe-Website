import React from "react";
import image from "../assets/3.webp";

function StartHereTop() {
  return (
    <div>
      <div className="p-5 md:p-10">
        <div className="flex flex-col w-[100%] h-5rem md:w-[100%] md:flex-row overflow-hidden relative">
          <div className="w-full md:w-[35%] overflow-hidden">
            <img
              src={image}
              alt="Image Not Found"
              className="w-full h-full md:h-[100%] object-cover hover:scale-105 transition all duration-200"
            />
          </div>
          <div className="flex justify-center items-center p-3 md:p-10 w-full md:w-[60%]">
            <div>
              {/* <span className=" absolute top-0 right-0 p-3 bg-green-400/70 rounded-bl-2xl text-white"></span> */}
              <h1 className="text-4xl font-bold text-green-400">
                Welcome to Yami Recipe
              </h1>
              <p className="pt-4 text-lg">
                <span className="font-bold">Let’s talk food </span>
                <span className="font-mono text-3xl text-green-300">
                  shall we?
                </span>
              </p>
              <h1 className="text-lg pt-4 text-green-900">
                Well, we hope that’s why you’re here. Our recipes are designed
                for real, actual, every day life, and we try to focus on real
                foods and healthy recipes (which honestly means a lot of
                different things to us, including the perfect chocolate chip
                cookie and cheese on cheese on cheese, because health is all
                about balance, right?).
              </h1>
              <h1 className="text-lg pt-4 text-green-900">
                This is the place to find those recipes — everything from our
                most popular, to meal prep, to Instant Pot recipes, or if you
                just, like, have some sad greens in your fridge to use up and
                you need some inspiration.
              </h1>
              <p className="text-lg pt-4 text-green-900">
                You’re here! Have fun. We hope you find something (many things)
                you love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartHereTop;
