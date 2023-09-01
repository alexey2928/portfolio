import Image from "next/image";
import text from "./../../public/images/text-nobackground.png";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="sm:left-4 sm:bottom-4 sm:flex sm:fixed items-center justify-center overflow-hidden ">
      <div className="w-40 h-auto lg:w-60 lg:h-auto flex items-center justify-center relative">
        <Image
          src={text}
          className="animate-spin-slow flex items-center justify-center"
          alt="hire me"
        />
        <Link
          href="mailto:alexey2928@gmail.com"
          target={"_blank"}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-16 h-16 lg:w-20 lg:h-20 rounded-full hover:bg-light hover:text-dark"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};
export default HireMe;
