import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <Link to={`/recipe-app/recipe/${recipe.id}`}>
        <h2>{recipe.recipeName}</h2>
        <h3>Ingredients</h3>
        <p className="recipe-paragraph">{recipe.ingredients}</p>
        <h3>Description</h3>
        <p className="recipe-paragraph">{recipe.description}</p>
      </Link>
    </div>
  );
};

export default RecipeCard;
