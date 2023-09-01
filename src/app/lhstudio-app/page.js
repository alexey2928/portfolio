import React from "react";
import lhstudio from "../../../public/images/lhstudio.png";
import ProjectPage from "@/components/ProjectPage";
import HireMe from "@/components/HireMe";
import AboutLHStudioApp from "@/components/AboutLHStudioApp";
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

const LHStudioApp = () => {
  return (
    <main className="bg-light ">
      <Layout>
        <ProjectPage
          title="LH Studio Beauty Salon"
          imageUrl={lhstudio}
          demoUrl="https://www.youtube.com/watch?v=nSWtsXJcD7k"
          repoUrl="https://github.com/alexey2928/LH.git"
          aboutProject={<AboutLHStudioApp />}
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

export default LHStudioApp;
