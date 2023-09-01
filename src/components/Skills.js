"use client";

import Html from "../../public/images/icons/html.svg";
import Css from "../../public/images/icons/css.svg";
import Tailwind from "../../public/images/icons/tailwindcss-icon.svg";
import Bootstrap from "../../public/images/icons/bootstrap.svg";
import Javascript from "../../public/images/icons/javascript.svg";
import ReactIcon from "../../public/images/icons/react.svg";
import Redux from "../../public/images/icons/redux.svg";
import Nodejs from "../../public/images/icons/nodejs.svg";
import Expressjs from "../../public/images/icons/expressjs-dark.svg";
import Nextjs from "../../public/images/icons/nextjs.svg";
import Postgresql from "../../public/images/icons/postgresql.svg";
import Sequelize from "../../public/images/icons/sequelize.svg";
import Skill from "@/components/Skill";
import Layout from "./Layout";
import AnimatedText from "./AnimatedText";

const Skills = () => {
  return (
    <div id="skills">
      <div className="sm:px-12 lg:pl-24">
        <AnimatedText
          text="Technologies I work with"
          className="!text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl xl:!text-8xl 
m-16 lg:mt-24"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-8">
          <Skill image={Html} text="Html" />
          <Skill image={Javascript} text="Javascript" />
          <Skill image={ReactIcon} text="React" />
          <Skill image={Css} text="Css" />
          <Skill image={Tailwind} text="Tailwind CSS" />
          <Skill image={Bootstrap} text="Bootstrap" />
          <Skill image={Nextjs} text="Next JS" />
          <Skill image={Nodejs} text="Node JS" />
          <Skill image={Expressjs} text="Express JS" />
          <Skill image={Redux} text="Redux" />
          <Skill image={Postgresql} text="PostgreSQL" />
          <Skill image={Sequelize} text="Sequelize" />
        </div>
      </div>
    </div>
  );
};
export default Skills;
