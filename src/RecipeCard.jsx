import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <h2>{recipe.recipeName}</h2>
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3>Description</h3>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeCard;
