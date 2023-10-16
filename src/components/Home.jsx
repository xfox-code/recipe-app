import React from "react";
import { useEffect, useState } from "react";

import RecipeCard from "./RecipeCard";
import Form from "./Form";

const Home = () => {
  const [renderForm, setRenderForm] = useState(false);
  const [recipesData, setRecipesData] = useState([]);
  const [isFetchError, setIsFetchError] = useState(false);

  useEffect(() => {
    const getDataHandler = async () => {
      await fetch("http://localhost:3000/recipes")
        .then((res) => res.json())
        .then((data) => setRecipesData(data))
        .catch((err) => {
          // App does not have connection to online backend.
          // If error, sets recipes array to dummy data.
          // A not recomended way to make github users see the app.
          // Never use error state this way.
          setRecipesData([
            {
              recipeName: "Melting meatball macaroni",
              ingredients:
                "300g pork mince\n400g beef mince (with around 10% fat)\n½ tsp fennel seeds\n½ tsp chilli flakes\n2 tsp dried oregano\n200g taleggio or mozzarella, chopped into small chunks\n2 tbsp olive oil\n1 large onion, finely chopped\n4 garlic cloves, crushed\n2 tsp tomato purée\n50ml red wine\n2 x 400g cans chopped tomatoes\n500ml passata\n3 bay leaves\n2 tsp golden caster sugar\n400g macaroni or other pasta shape\ncrusty bread, to serve (optional)",
              description:
                "STEP 1\nHeat oven to 200C/180C fan/gas 6. Mix the pork and beef mince with the fennel seeds, chilli, 1 tsp oregano and some seasoning in a large bowl until combined. Divide and shape into 18 meatballs with a nugget or two of taleggio in the middle (save some for the top), then chill for 10 mins.\n\nSTEP 2\nHeat 1 tbsp oil in a large pan (use a flameproof casserole dish if you can – it’ll save on washing up). Add the onion and a pinch of salt and sizzle until softened (about 8 mins). Stir in the garlic and cook for 1 min more, then add the tomato purée, wine, tomatoes, passata, bay leaves, sugar, the remaining oregano and lots of seasoning, then cover with a lid and simmer for 20 mins. Meanwhile, arrange the meatballs on a baking tray lined with foil, drizzle with the remaining oil and bake for 10 mins.\n\nSTEP 3\nCook the pasta in a pan of boiling salted water according to packet instructions, then drain, reserving some water. If the pan isn't ovenproof, tip the sauce into a casserole dish. Stir the pasta into the sauce, along with the liquid from the meatballs and some pasta water if it needs thinning. Turn the grill to a medium-high setting.\n\nSTEP 4\nNestle the meatballs into the pasta, so that they poke out the top. Scatter the remaining taleggio over the top and grill for 5-10 mins until the cheese and meatballs are golden. Serve with crusty bread, if you like.",
              id: "c1696b46-bb63-451e-a8b7-0fd606285b92",
            },
            {
              recipeName: "Lionhead meatball soup",
              ingredients:
                "100ml groundnut oil, for frying\nFor the meatballs\n500g lean pork mince\n4 garlic cloves, finely minced\n2 tbsp grated ginger\n2 spring onions, finely chopped\n1 pinch of ground white pepper\n50ml shaoxing rice wine or dry sherry\n1 tbsp dark soy sauce\n2 tbsp light soy sauce\n1 tbsp toasted sesame oil\n1 egg, beaten\n1 tbsp cornflour\nFor the soup broth\n500ml vegetable stock\n5 dried Chinese mushrooms slices\n200g Chinese leaf, washed, quartered lengthways from leaf to stem\n1 tbsp light soy sauce\n1 tbsp toasted sesame oil\n1 pinch of ground white pepper\n1 tbsp cornflour, mixed with 1 tbsp water\nTo serve\n2 large spring onions, washed, trimmed and sliced, to serve",
              description:
                "STEP 1\nPut all the ingredients for the meatballs into a large bowl and stir to combine well. Using wetted hands, take a golf ball-sized mound and roll into a round shape. Put on a plate and repeat to make 12.\n\nSTEP 2\nPour the groundnut oil into a large wok or pan and set over high heat until a thermometer reads 160C. Put a meatball onto a slotted spoon and gently lower into the oil. Leave to brown for 5-7 mins until golden, then cook all the meatballs. To check if a meatball is cooked, push a skewer through and, if it comes out clean, it’s cooked. Lift the meatballs out, then drain on a plate lined with kitchen paper and set aside.\n\nSTEP 3\nAdd 1 tbsp of the hot oil to a clean wok. Put over a high heat, add the vegetable stock, 850ml water, the mushrooms and Chinese leaf, and cook over a medium heat for 10-12 mins. Add the meatballs and cook for a further 4-5 mins, adjusting the cabbage leaves so they wrap around each meatball – the meatball resembles the ‘lion's head’ and the cabbage resembles the ‘mane’. Season with sesame oil, salt and ground white pepper. To thicken the soup, add 1 tbsp of the cornflour mixture when the broth is boiling. Then turn the heat to low and garnish with the sliced spring onions.\n\nSTEP 4\nLadle a portion into soup bowls, spoon a meatball and with some Chinese leaf and sliced mushrooms, and serve immediately.",
              id: "a23f0704-71d2-4a0d-a6a8-56adf6e23ff1",
            },
          ]);
          setIsFetchError(true);
        });
    };

    getDataHandler();
  }, []);

  const setRecipesDataHandler = (newRecipe) => {
    setRecipesData((prev) => [...prev, newRecipe]);
  };

  return (
    <>
      <h1>MY RECIPES APP</h1>
      <section className="new-recipe">
        <button onClick={() => setRenderForm((prev) => !prev)}>
          {renderForm ? "Cancel Add" : "Add Recipe"}
        </button>
        {(recipesData < 1 || renderForm) && (
          <Form
            isFetchError={isFetchError}
            setRecipesDataHandler={setRecipesDataHandler}
          />
        )}
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
