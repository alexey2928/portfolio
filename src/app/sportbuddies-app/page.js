import React from "react";
import sportbuddies from "../../../public/images/sportbuddies.jpeg";
import ProjectPage from "@/components/ProjectPage";
import HireMe from "@/components/HireMe";
import AboutSportbuddiesApp from "@/components/AboutSportbuddiesApp";
import Skill from "@/components/Skill";
import Html from "../../../public/images/icons/html.svg";
import ReactIcon from "../../../public/images/icons/react.svg";
import Javascript from "../../../public/images/icons/javascript.svg";
import Expressjs from "../../../public/images/icons/expressjs-dark.svg";
import Bootstrap from "../../../public/images/icons/bootstrap.svg";
import PostgreSQL from "../../../public/images/icons/postgresql.svg";
import Redux from "../../../public/images/icons/redux.svg";
import Sequelize from "../../../public/images/icons/sequelize.svg";
import Layout from "@/components/Layout";

const SportbuddiesApp = () => {
  return (
    <main className="bg-light ">
      <Layout>
        <ProjectPage
          title="Sportbuddies"
          imageUrl={sportbuddies}
          demoUrl="https://www.sportbuddies.us/"
          repoUrl="https://github.com/Capstone-Pac-Man/SportBuddies.git"
          aboutProject={<AboutSportbuddiesApp />}
          skillSet={
            <>
              <Skill image={Html} text="Html" />
              <Skill image={Javascript} text="Javascript" />
              <Skill image={ReactIcon} text="React" />
              <Skill image={Redux} text="Redux" />
              <Skill image={Expressjs} text="Express JS" />
              <Skill image={PostgreSQL} text="PostgreSQL" />
              <Skill image={Sequelize} text="Sequelize" />
              <Skill image={Bootstrap} text="Bootstrap" />
            </>
          }
        />
      </Layout>
      <HireMe />
    </main>
  );
};

export default SportbuddiesApp;
