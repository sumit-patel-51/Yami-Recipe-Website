import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import NavBar from "./components/NavBar";
import SearchCardRecipe from "./pages/SearchCardRecipe";
import StartHere from "./pages/StartHere";

function App() {
  return (
    <div className="w-full h-full bg-green-100">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/searchRecipe/:id" element= {<SearchCardRecipe/>}/>
        <Route path="/starthere/" element= {<StartHere/>}/>
      </Routes>
    </div>
  );
}

export default App;
