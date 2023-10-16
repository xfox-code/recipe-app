import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const params = useParams();
  console.log(params);

  const getData = async (rid) => {
    await fetch(`http://localhost:3000/recipes/${rid}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  };

  useEffect(() => {
    getData(params.rid);
  }, []);

  return (
    <article className="recipe-page-wrapper">
      <h1>{recipe.recipeName && recipe?.recipeName.toUpperCase()}</h1>
      <h3>INGREDIENTS</h3>
      <p>{recipe?.ingredients}</p>
      <h3>DESCRIPTION</h3>
      <p>{recipe?.description}</p>
    </article>
  );
};

export default Recipe;
