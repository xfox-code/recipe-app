import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Recipe from "./components/Recipe";

function App() {
  return (
    <Routes>
      <Route path="/recipe-app" element={<Home />} />
      <Route path="/recipe-app/recipe/:rid" element={<Recipe />} />
    </Routes>
  );
}

export default App;
