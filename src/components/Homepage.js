import React from "react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import homepagePic from "../../public/images/home.png";
import { BsDownload } from "react-icons/bs";

const Homepage = () => {
  return (
    <div className="sm:px-12 lg:h-screen lg:flex lg:items-starts">
      <div className="flex flex-col items-center justify-between w-full lg:flex-row ">
        <div className="w-1/2">
          <Image
            src={homepagePic}
            alt="Aliaksei Kalupaila"
            className="w-full h-auto rounded-full"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center self-center">
          {/* <h1 className="text-6xl text-left"></h1> */}
          <AnimatedText
            text="Building Digital Experiences with a Creative Twist"
            className="!text-3xl !text-left md:!text-4xl md:text-center lg:!text-5xl "
          />
          <p className="my-4 text-base font-medium">
            As a skilled full-stack developer, I immerse myself in the world of
            coding with unwavering passion and commitment. With each project, I
            pour my heart and soul into crafting elegant, efficient, and
            user-friendly solutions. I stay up-to-date with the latest
            technologies and trends, always seeking to expand my knowledge and
            skills.
          </p>
          <div className="flex items-center self-start mt-2">
            <Link
              className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark"
              href="/Aliaksei_Kalupaila_Resume.pdf"
              target={"_blank"}
              download={true}
            >
              Resume
              <BsDownload className={"w-6 ml-1"} />
            </Link>
            <Link
              href="mailto:alexey2928@gmail.com"
              target={"_blank"}
              className="ml-4 text-lg font-medium capitalize text-dark underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
