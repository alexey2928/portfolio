import React from "react";
import Link from "next/link";

const AboutSportbuddiesApp = () => {
  return (
    <div className="m-4">
      <h2 className="mb-4 text-center text-lg font-bold uppercase text-dark/75">
        About Project
      </h2>
      <p className="font-medium">
        Sport Buddies is a web application that connects people with similar
        interests in sports.
      </p>
      <p className="font-medium">
        Users can create profiles, search for other users with similar
        interests, and schedule sports events together. The goal of Sport
        Buddies is to help people stay active and make new friends at the same
        time.
      </p>
      <div className="mt-6 flex items-center justify-center">
        <Link href="https://www.youtube.com/watch?v=vu1Oi7plc2M">
          <p className=" bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark">
            Video Demo
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AboutSportbuddiesApp;
