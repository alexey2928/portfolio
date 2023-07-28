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
      <Layout className="">
        <AnimatedText text="Projects" className="mb-16" />
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Weather App"
            backgroundImg={weatherApp}
            tech="Next JS"
            projectUrl="/weather"
          />
          <ProjectItem
            title="Recipe App"
            backgroundImg={recipeApp}
            tech="Next JS & Open AI"
            projectUrl="https://www.youtube.com/watch?v=mLxR03vkh7w"
          />
          <ProjectItem
            title="Sportbuddies"
            backgroundImg={sportbuddies}
            tech="React & PostgreSQL"
            projectUrl="https://sportbuddies.us"
          />
          <ProjectItem
            title="Beauty Salon"
            backgroundImg={lhstudio}
            tech="React & Bootstrap"
            projectUrl="https://www.youtube.com/watch?v=nSWtsXJcD7k"
          />
        </div>
      </Layout>
    </div>
  );
};

export default Projects;
