import React, { createContext, useEffect, useState } from 'react'

export const DataRecipe = createContext();

function DataContext({children}) {
    const [recipe, setRecipes] = useState([])
    const [searchBar, setSearchBar] = useState(true);
    const [InputSearch, setInputSearch] = useState()
    
    const fetchRecipies = async() => {
        try {
            const response = await fetch("https://dummyjson.com/recipes?limit=50"); // Replace with your API URL
            if (!response.ok) throw new Error("Failed to fetch recipes");
      
            const data = await response.json();
            setRecipes(data.recipes); // Assuming the response has a "recipes" key
          } catch (err) {
            console.log(err.message);
          } 
    }
    
    useEffect(()=> {
        fetchRecipies();
    },[])
    
    const data = {
        recipe,
        setRecipes,
        searchBar,
        setSearchBar,
        InputSearch,
        setInputSearch
    }
  return (
    <div>
      <DataRecipe.Provider value={data}>
        {children}
      </DataRecipe.Provider>
    </div>
  )
}

export default DataContext
