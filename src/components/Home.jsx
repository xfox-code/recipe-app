import React from "react";
import { useEffect, useState } from "react";

import RecipeCard from "./RecipeCard";
import Form from "./Form";

const Home = () => {
  const [renderForm, setRenderForm] = useState(false);
  const [recipesData, setRecipesData] = useState([]);

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
        <button onClick={() => setRenderForm((prev) => !prev)}>
          {renderForm ? "Cancel Add" : "Add Recipe"}
        </button>
        {renderForm && <Form />}
      </section>
      <section>
        <h1>RECIPES</h1>
        <div className="recipes-wrapper">
          {recipesData.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
