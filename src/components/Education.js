import React from "react";
import Layout from "./Layout";
import AnimatedText from "./AnimatedText";

const Education = () => {
  return (
    <div id="education">
      <Layout>
        <div className="flex items-center justify-center">
          <AnimatedText text="Education" />
        </div>
        <div></div>
      </Layout>
    </div>
  );
};

export default Education;
