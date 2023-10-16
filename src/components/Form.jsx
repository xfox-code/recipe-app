import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");

  const clickHandler = async () => {
    const newRecipe = {
      recipeName,
      ingredients,
      description,
    };
    if (props.isFetchError) {
      return props.setRecipesDataHandler(newRecipe);
    }
    await fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...newRecipe, id: uuidv4() }),
    });
    window.location.reload();
  };

  return (
    <>
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
    </>
  );
};

export default Form;
