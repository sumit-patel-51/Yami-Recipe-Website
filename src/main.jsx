import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import DataContext from "./ContaxtApi/DataContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DataContext>
      <App />
    </DataContext>
  </BrowserRouter>
);
