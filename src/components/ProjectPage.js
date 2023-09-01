import React from "react";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import Link from "next/link";

const ProjectPage = ({
  title,
  imageUrl,
  demoUrl,
  repoUrl,
  aboutProject,
  skillSet,
}) => {
  return (
    <div className="sm:px-12 lg:pl-24">
      <AnimatedText
        text={title}
        className="!text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl xl:!text-8xl 
mx-16 mb-8 "
      />
      {/* <div className="grid md:grid-cols-2 gap-8 pl-32"> */}
      <div className="flex flex-col xl:flex-row items-center justify-center m-4">
        <div>
          <Image src={imageUrl} alt={title} className="w-full rounded-lg" />
        </div>
        {aboutProject}
      </div>
      {/* </div> */}
      <div className="flex items-center justify-center gap-4">
        <Link href={demoUrl}>
          <p className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark">
            Demo
          </p>
        </Link>

        <Link href={repoUrl}>
          <p className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark">
            Repo
          </p>
        </Link>
      </div>
      <div>
        <h2 className="pt-6 text-center text-lg font-bold uppercase text-dark/75">
          Tech Stack
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 xxl:grid-cols-4 gap-4">
          {skillSet}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
