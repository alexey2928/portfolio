import React from "react";
import Image from "next/image";

const Skill = ({ image, text }) => {
  return (
    <div className="p-6 flex flex-wrap items-center text-center justify-between shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div>
        <Image src={image} width={64} height={64} alt={text} />
      </div>
      <div>
        <h3 className="text-xl uppercase">{text}</h3>
      </div>
    </div>
  );
};

export default Skill;
