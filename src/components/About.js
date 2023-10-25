"use client";
import React, { useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Layout from "@/components/Layout";
import aboutPic from "../../public/images/about.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <div id="about" className="sm:px-12 lg:pl-24">
      <AnimatedText
        text="About Aliaksei"
        className="!text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl xl:!text-8xl 
m-16 lg:mt-24"
      />
      <div className="xl:grid w-full xl:grid-cols-6 xl:gap-16">
        <div className="col-span-3 flex flex-col items-start justify-start">
          <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
            About Me
          </h2>
          <p className="font-medium">
            I am a software engineer with a passion for creating user-friendly
            web applications. I have played a mission-critical role in the
            development lifecycle process, ensuring that projects are executed
            efficiently and effectively.
          </p>
          <h2 className="my-4 text-lg font-bold uppercase text-dark/75">
            Experise
          </h2>
          <p className="font-medium">
            Throughout my career, I have honed my expertise in various Software
            Development Life Cycle methodologies, including Waterfall and Agile.
            This versatility allows me to adapt to the specific needs of each
            project, ensuring the best outcomes for my team and clients. My
            skill set includes a wide range of capabilities, spanning both
            frontend and core backend development. I am highly proficient in
            tasks such as third-party API integration, website maintenance, REST
            API development, and much more. I utilize a diverse set of
            technologies, drawn from a variety of frameworks, software,
            operating systems, and programming languages.
          </p>
          <h2 className="my-4 text-lg font-bold uppercase text-dark/75">
            Design and Development
          </h2>
          <p className="font-medium">
            One of my passions is designing, programming, and debugging various
            web technologies. I have a proven track record in creating user
            interfaces with HTML5, CSS3, and JavaScript, seamlessly integrating
            them with Bootstrap and Tailwind for an exceptional user experience.
            I specialize in creating application software user interfaces (UIs)
            using client-side languages and frameworks like JavaScript, jQuery,
            and React.js, in addition to server-side languages such as Node.js.
            My comprehensive knowledge of data structures and algorithms ensures
            efficient and elegant solutions to complex problems.
          </p>
          <h2 className="my-4 text-lg font-bold uppercase text-dark/75">
            Team Player
          </h2>
          <p className="font-medium">
            I bring excellent interpersonal qualities, strong communication
            skills, efficient time management, and collaborative team skills to
            any project. I am always willing to go the extra mile to meet
            project deadlines, even in tight situations.
          </p>
          <h2 className="my-4 text-lg font-bold uppercase text-dark/75">
            Let&apos;s Connect
          </h2>
          <p className="font-medium mb-4">
            If you&apos;re looking for a dedicated software engineer, I would
            love to connect and explore potential collaborations. Please feel
            free to reach out to me, and let&apos;s work together to bring your
            projects to life. Thank you for visiting my portfolio!
          </p>
        </div>
        <div className="hidden xl:grid col-span-2 relative h-max rounded-2xl border-2 border-solid - border-dark bg-light p-4">
          <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
          <Image
            src={aboutPic}
            className="w-full h-auto rounded-2xl"
            alt="Aliaksei Kalupaila"
          />
        </div>
        <div className="col-span-1 flex flex-col items-end justify-start">
          <div className="flex flex-col items-end justify-center mb-12">
            <span className="inline-block text-7xl font-bold">
              <AnimatedNumbers value={10} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75">
              projects completed
            </h2>
          </div>

          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-7xl font-bold">
              <AnimatedNumbers value={3} />+
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75">
              years of experience
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
