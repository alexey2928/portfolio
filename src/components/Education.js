"use client";
import React, { useRef } from "react";
import Layout from "./Layout";
import AnimatedText from "./AnimatedText";
import bseu from "../../public/images/bseu.png";
import brookdale from "../../public/images/brookdale.png";
import fullstack from "../../public/images/fullstack.png";
import qa from "../../public/images/test_planet.jpeg";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

const Details = ({ school, schoolImage, schoolUrl, degree, major }) => {
  return (
    <li>
      <div className="flex flex-wrap items-center ml-6 my-6">
        <div className="mx-6">
          <Image
            src={schoolImage}
            width="64px"
            height="64px"
            alt={school}
            className="w-full rounded-lg"
          />
        </div>
        <div className="mx-6">
          <Link href={schoolUrl}>
            <h3 className="font-bold text-lg cursor-pointer">{school}</h3>
          </Link>
          <p>{degree}</p>
          <p>{major}</p>
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

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div id="education" className="sm:px-12 lg:pl-24">
      <AnimatedText
        text="Education"
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
                school="Fullstack Academy"
                schoolImage={fullstack}
                schoolUrl="https://www.fullstackacademy.com/"
                degree="Certificate"
                major="Web Development - Software Engineering Immersive"
              />
            </div>
          </ul>

          <ul className="flex items-center">
            <div className="w-[25%] md:w-[50%]">
              <Time time="Sep 2019 - Dec 2021" />
            </div>
            <div className="w-[75%] md:w-[50%]">
              <Details
                school="Brookdale Community College"
                schoolImage={brookdale}
                schoolUrl="https://www.brookdalecc.edu/"
                degree="Associate of Science - AS"
                major="Computer Science"
              />
            </div>
          </ul>
          <ul className="flex items-center">
            <div className="w-[25%] md:w-[50%]">
              <Time time="Aug 2016 - Oct 2016" />
            </div>
            <div className="w-[75%] md:w-[50%]">
              <Details
                school="Test Planet"
                schoolImage={qa}
                schoolUrl="https://test-planet.by/"
                degree="Certificate"
                major="Software Testing"
              />
            </div>
          </ul>
          <ul className="flex items-center 3">
            <div className="w-[25%] md:w-[50%]">
              <Time time="Sep 2012 - Jun 2016" />
            </div>
            <div className="w-[75%] md:w-[50%]">
              <Details
                school="Belarusian State Economic University"
                schoolImage={bseu}
                schoolUrl="http://bseu.by/"
                degree="Bachelor's degree"
                major="Accounting and Economics"
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
