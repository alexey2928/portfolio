import React from "react";
import recipeApp from "../../../public/images/recipeApp.png";
import ProjectPage from "@/components/ProjectPage";
import HireMe from "@/components/HireMe";
import AboutRecipeApp from "@/components/AboutRecipeApp";
import Skill from "@/components/Skill";
import ReactIcon from "../../../public/images/icons/react.svg";
import Javascript from "../../../public/images/icons/javascript.svg";
import Expressjs from "../../../public/images/icons/expressjs-dark.svg";
import Bootstrap from "../../../public/images/icons/bootstrap.svg";
import Layout from "@/components/Layout";

const RecipeApp = () => {
  return (
    <main className="bg-light ">
      <Layout>
        <ProjectPage
          title="Recipe App"
          imageUrl={recipeApp}
          demoUrl="https://www.youtube.com/watch?v=mLxR03vkh7w"
          repoUrl="https://github.com/alexey2928/recipe-app-openai.git"
          aboutProject={<AboutRecipeApp />}
          skillSet={
            <>
              <Skill image={ReactIcon} text="React" />
              <Skill image={Javascript} text="Javascript" />
              <Skill image={Expressjs} text="Express JS" />
              <Skill image={Bootstrap} text="Bootstrap" />
            </>
          }
        />
      </Layout>
      <HireMe />
    </main>
  );
};

export default RecipeApp;
