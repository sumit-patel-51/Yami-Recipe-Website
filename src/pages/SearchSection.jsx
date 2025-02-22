import React, { useContext, useEffect, useState } from "react";
import { DataRecipe } from "../ContaxtApi/DataContext";
import { RxCross1 } from "react-icons/rx";
import SearchCard from "../components/SearchCard";

function SearchSection() {
  const {
    recipe,
    setRecipes,
    InputSearch,
    setInputSearch,
    searchBar,
    setSearchBar,
  } = useContext(DataRecipe);

  const [Search, setSearch] = useState([]);

  useEffect(() => {
    const newSearch = recipe.filter(
      (item) =>
        item.name.includes(InputSearch) ||
        item.name.toLowerCase().includes(InputSearch) ||
        item.cuisine.toLowerCase().includes(InputSearch) ||
        item.cuisine.includes(InputSearch) ||
        item.mealType[0].toLowerCase().includes(InputSearch)||
        item.tags[0].toLowerCase().includes(InputSearch)||
        item.tags[1].toLowerCase().includes(InputSearch)||
        item.tags[1].includes(InputSearch)||
        item.mealType[0].includes(InputSearch)
    );
    setSearch(newSearch);
  }, [InputSearch]);

  const Viewed = (arr) => arr.sort(() => Math.random() - 0.5).slice(0, 8);
  const recently = Viewed(recipe);
  const releted = Viewed(recipe);
  const letest = Viewed(recipe);
  const popupar = Viewed(recipe);
  return (
    <div
      className={`z-50 fixed top-0 w-full h-[100vh] overflow-auto bg-green-200 ${
        searchBar ? "translate-x-full" : "translate-0"
      } transaction all duration-300`}
    >
      <div className="relative">
        <header className="flex justify-between md:justify-center items-center relative bg-white p-[1rem]">
          <input
            value={InputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            type="search"
            placeholder="Search Recipe..."
            className="w-[80%] md:w-[50%] p-2 outline-1 outline-green-400 rounded-xl text-2xl"
          />
          <button
            className=" absolute right-7 text-2xl text-green-400 cursor-pointer"
            onClick={() => {
              setSearchBar(true);
              window.scrollTo({ top: 0 });
            }}
          >
            <RxCross1 />
          </button>
        </header>
        <main className="w-full p-3">
          {Search.length > 0 || !InputSearch ? null:(<div className="text-center font-bold text-2xl pt-6 text-green-500">Item Not Fount</div>)}
          {InputSearch ? (
            <div className="flex gap-2 flex-wrap justify-center">
              {Search.map((item) => (
                <SearchCard
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  like={item.userId}
                />
              ))}
            </div>
          ) : null}
          {!InputSearch ? (
            <div>
              <div className="flex flex-col md:pl-5">
                <div className="py-4 text-green-800">RECENTLY VIEWED</div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 w-full">
                  {recently.map((item) => (
                    <SearchCard
                      id={item.id}
                      image={item.image}
                      name={item.name}
                      like={item.userId}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col md:pl-5">
                <div className="py-4  text-green-800">RELATED</div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 w-full">
                  {releted.map((item) => (
                    <SearchCard
                      id={item.id}
                      image={item.image}
                      name={item.name}
                      like={item.userId}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col md:pl-5">
                <div className="py-4  text-green-800">LATEST</div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 w-full">
                  {letest.map((item) => (
                    <SearchCard
                      id={item.id}
                      image={item.image}
                      name={item.name}
                      like={item.userId}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col md:pl-5">
                <div className="py-4  text-green-800">POPULARE</div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 w-full">
                  {popupar.map((item) => (
                    <SearchCard
                      id={item.id}
                      image={item.image}
                      name={item.name}
                      like={item.userId}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </main>
      </div>
    </div>
  );
}

export default SearchSection;
