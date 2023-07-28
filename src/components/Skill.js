import React from "react";
import Image from "next/image";

const Skill = ({ image, text }) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 items-center justify-center">
        <div className="m-auto">
          <Image src={image} width={64} height={64} alt={text} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl uppercase">{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default Skill;
