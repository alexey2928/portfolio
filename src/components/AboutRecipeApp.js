import React from "react";

const AboutRecipeApp = () => {
  return (
    <div className="m-4">
      <h2 className="mb-4 text-center text-lg font-bold uppercase text-dark/75">
        About Project
      </h2>
      <p className="font-medium">
        A cutting-edge recipe application that combines the power of React,
        Express.js, Bootstrap, and the OpenAI API.
      </p>
      <p className="font-medium">
        The Recipe App includes the following features:
      </p>
      <ul className="font-medium px-4">
        <li className="list-disc">
          AI-Generated Recipes based on Ingredients: RecipeApp introduces an
          innovative feature that allows users to input their available
          ingredients, and using the power of AI, it generates five unique and
          fully curated recipes. Leveraging the OpenAI API, generates
          step-by-step recipes that make the most of the available ingredients.
          Along with the detailed recipes, the app also provides visually
          appealing images of each dish, giving users a mouth-watering preview
          of what they can create with their ingredients.
        </li>
        <li className="list-disc">
          Responsive and Intuitive Design: With its implementation of React and
          Bootstrap, RecipeApp offers a sleek and responsive design that adapts
          seamlessly to different screen sizes.
        </li>
        <li className="list-disc">
          Recipe Collections and Organization: RecipeApp empowers users to
          create personalized recipe collections and organize their favorite
          dishes in a convenient and efficient manner.
        </li>
      </ul>
    </div>
  );
};

export default AboutRecipeApp;
