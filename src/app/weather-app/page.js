import React from "react";
import weatherApp from "../../../public/images/weatherApp.png";
import ProjectPage from "@/components/ProjectPage";
import HireMe from "@/components/HireMe";
import AboutWeatherApp from "@/components/AboutWeatherApp";
import Skill from "@/components/Skill";
import ReactIcon from "../../../public/images/icons/react.svg";
import Javascript from "../../../public/images/icons/javascript.svg";
import Nextjs from "../../../public/images/icons/nextjs.svg";
import Tailwind from "../../../public/images/icons/tailwindcss-icon.svg";
import Layout from "@/components/Layout";

const WeatherApp = () => {
  return (
    <main className="bg-light min-h-screen">
      <Layout>
        <ProjectPage
          title="Weather App"
          imageUrl={weatherApp}
          demoUrl="https://weather-app-nextjs-alexk.vercel.app/"
          repoUrl="https://github.com/alexey2928/weather-app-nextjs.git"
          aboutProject={<AboutWeatherApp />}
          skillSet={
            <>
              <Skill image={ReactIcon} text="React" />
              <Skill image={Javascript} text="Javascript" />
              <Skill image={Nextjs} text="Next JS" />
              <Skill image={Tailwind} text="Tailwind CSS" />
            </>
          }
        />
      </Layout>
      <HireMe />
    </main>
  );
};

export default WeatherApp;
