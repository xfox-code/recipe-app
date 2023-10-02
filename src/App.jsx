import { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import RecipeCard from "./RecipeCard";

function App() {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [recipesData, setRecipesData] = useState([]);

  const clickHandler = async () => {
    const newRecipe = {
      recipeName,
      ingredients,
      description,
    };
    let response = await fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...newRecipe, id: uuidv4() }),
    });
  };

  useEffect(() => {
    const getDataHandler = async () => {
      await fetch("http://localhost:3000/recipes")
        .then((res) => res.json())
        .then((data) => setRecipesData(data));
    };

    getDataHandler();
  }, []);

  return (
    <>
      <h1>MY RECIPES APP</h1>
      <section className="new-recipe">
        <label htmlFor="recipeName">
          <h3>Recipe Name:</h3>
          <input
            type="text"
            name="recipeName"
            onChange={(event) => setRecipeName(event.target.value)}
            placeholder="Recipe Name"
          />
        </label>
        <label htmlFor="Ingredientes">
          <h3>Ingredients:</h3>
          <textarea
            placeholder="Ingredients"
            name="Ingredientes"
            onChange={(event) => setIngredients(event.target.value)}
            id=""
            cols="30"
            rows="8"
          ></textarea>
        </label>
        <label htmlFor="Description">
          <h3>Description:</h3>
          <textarea
            name="Description"
            placeholder="Description"
            onChange={(event) => setDescription(event.target.value)}
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </label>
        <button onClick={clickHandler}>Save</button>
      </section>
      <section>
        <h1>RECIPES</h1>
        {recipesData.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </section>
    </>
  );
}

export default App;
