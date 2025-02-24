import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import NavBar from "./components/NavBar";
import SearchCardRecipe from "./pages/SearchCardRecipe";
import StartHere from "./pages/StartHere";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <div className="w-full h-full bg-green-100">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/starthere/" element= {<StartHere/>}/>
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/searchRecipe/:id" element= {<SearchCardRecipe/>}/>
      </Routes>
    </div>
  );
}

export default App;
