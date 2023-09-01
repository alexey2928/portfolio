import React from "react";
import Layout from "./Layout";
import AnimatedText from "./AnimatedText";
import ProjectItem from "./ProjectItem";
import weatherApp from "../../public/images/weatherApp.png";
import recipeApp from "../../public/images/recipeApp.png";
import lhstudio from "../../public/images/lhstudio.png";
import sportbuddies from "../../public/images/sportbuddies.jpeg";

const Projects = () => {
  return (
    <div id="projects">
      <div className="sm:px-12 lg:pl-24 pb-24">
        <AnimatedText
          text="Projects"
          className="!text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl xl:!text-8xl 
m-16 lg:mt-24"
        />
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Weather App"
            backgroundImg={weatherApp}
            tech="Next JS"
            projectUrl="/weather-app"
          />
          <ProjectItem
            title="Recipe App"
            backgroundImg={recipeApp}
            tech="Next JS & Open AI"
            projectUrl="/recipe-app"
          />
          <ProjectItem
            title="Sportbuddies.us"
            backgroundImg={sportbuddies}
            tech="React & PostgreSQL"
            projectUrl="/sportbuddies-app"
          />
          <ProjectItem
            title="Beauty Salon"
            backgroundImg={lhstudio}
            tech="React & Bootstrap"
            projectUrl="/lhstudio-app"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
