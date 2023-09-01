"use client";
import React, { useRef } from "react";
import Layout from "./Layout";
import AnimatedText from "./AnimatedText";
import { motion, useScroll } from "framer-motion";

const Details = ({ title, company, location, skills }) => {
  return (
    <li>
      <div className="flex flex-wrap items-center ml-6 my-6">
        <div className="mx-6">
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <div className="mx-6">
          <h4 className="text-lg text-dark/75">{company}</h4>
          <p>{location}</p>
          <p>
            <b>Skills: </b>
            <br />
            <i>{skills}</i>
          </p>
        </div>
      </div>
    </li>
  );
};

const Time = ({ time }) => {
  return (
    <li>
      <h2 className="mr-6 my-6 text-center text-lg font-bold text-dark/75">
        {time}
      </h2>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  return (
    <div id="experience" className="sm:px-12 lg:pl-24">
      <AnimatedText
        text="Experience"
        className="!text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl xl:!text-8xl 
m-16 lg:mt-24"
      />
      <div className="relative w-full" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute w-[4px] h-full left-[27%] md:left-[50%] top-0 bg-dark origin-top text-center"
        />
        <div>
          <ul className="flex items-center">
            <div className="w-[25%] md:w-[50%]">
              <Time time="Nov 2022 - Apr 2023" />
            </div>
            <div className="w-[75%] md:w-[50%]">
              <Details
                title="Fullstack Software Development Student"
                company="Fullstack Academy"
                location="NYC, United States"
                skills="JavaScript · React.js · PostgreSQL · Git · Web Development · Data Structures · Algorithms · Bootstrap · Express.js · Redux.js · Sequelize.js · HTML · Cascading Style Sheets (CSS)"
              />
            </div>
          </ul>

          <ul className="flex items-center">
            <div className="w-[25%] md:w-[50%]">
              <Time time="Jun 2018 - Jan 2023" />
            </div>
            <div className="w-[75%] md:w-[50%]">
              <Details
                title="Waiter"
                company="Avenue Le Club"
                location="Long Branch, NJ, United States"
                skills="High Pressure Environment · Sales · Organization Skills · Skilled Multi-tasker · Time Management · Teamwork"
              />
            </div>
          </ul>
          <ul className="flex items-center 3">
            <div className="w-[25%] md:w-[50%]">
              <Time time="Jul 2016 - Jun 2018" />
            </div>
            <div className="w-[75%] md:w-[50%]">
              <Details
                title="Accountant"
                company="NewProdest"
                location="Minsk, Belarus"
                skills="Analytical Skills · Problem Solving · Critical Thinking · Financial Analysis · Corporate Communications"
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
