"use client";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { headers } from "next/dist/client/components/headers";
import HireMe from "./HireMe";
const NavLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-black/60 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);

  const handleNavBar = () => {
    setNavBar(!navBar);
  };
  return (
    <>
      <header className="hidden w-full px-16 py-8 font-medium lg:flex items-center justify-between bg-light fixed z-[100] xl:px-24 xxl:px-32">
        <nav className="flex items-center">
          <NavLink href="/" title="Home" className="mr-2 xl:mr-4" />
          <NavLink href="/#about" title="About" className="mx-2 xl:mx-4" />
          <NavLink href="/#skills" title="Skills" className="mx-2 xl:mx-4" />
          <NavLink
            href="/#education"
            title="Education"
            className="mx-2 xl:mx-4"
          />
          <NavLink
            href="/#experience"
            title="Experience"
            className="mx-2 xl:mx-4"
          />
          <NavLink
            href="/#projects"
            title="Projects"
            className="ml-2 xl:ml-4"
          />
        </nav>
        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo />
        </div>
        <nav className="flex items-center">
          <motion.div
            className="w-12 h-12 border flex items-center justify-center rounded-full shadow-md text-xl mr-4"
            whileHover={{
              y: -2,
            }}
          >
            <Link href="https://github.com/alexey2928">
              <BsGithub />
            </Link>
          </motion.div>
          <motion.div
            className="w-12 h-12 border flex items-center justify-center rounded-full shadow-md text-xl mx-4"
            whileHover={{
              y: -2,
            }}
          >
            <Link href="https://www.linkedin.com/in/akalupaila/">
              <BsLinkedin />
            </Link>
          </motion.div>
          <motion.div
            className="w-12 h-12 border flex items-center justify-center rounded-full shadow-md text-xl ml-4"
            whileHover={{
              y: -2,
            }}
          >
            <Link href="https://www.instagram.com/aliaksei2928/">
              <BsInstagram />
            </Link>
          </motion.div>
        </nav>
      </header>
      <header className="lg:hidden w-full bg-light font-medium">
        <div className=" bg-light w-full flex items-center justify-between p-4 sm:p-8">
          <div>
            <Logo />
          </div>
          <div
            onClick={handleNavBar}
            className="rounded-full shadow-lg shadow-gray-300 cursor-pointer p-3"
          >
            {navBar ? (
              <AiOutlineMenu size={25} />
            ) : (
              <AiOutlineClose size={25} />
            )}
          </div>
        </div>
        <div
          className={
            !navBar
              ? "lg:hidden left-0 top-0 w-full bg-light h-screen"
              : "hidden"
          }
        >
          <div className="flex flex-col items-center justify-center">
            <NavLink href="/" title="Home" className="my-6" />
            <NavLink href="/#about" title="About" className="my-6" />
            <NavLink href="/#skills" title="Skills" className="my-6" />
            <NavLink href="/#education" title="Education" className="my-6" />
            <NavLink href="/#experience" title="Experience" className="my-6" />
            <NavLink href="/#projects" title="Projects" className="my-6" />
          </div>
          <div className="flex items-center justify-center mt-6">
            <motion.div
              className="w-12 h-12 border flex items-center justify-center rounded-full shadow-md text-xl mr-4"
              whileHover={{
                y: -2,
              }}
            >
              <Link href="https://github.com/alexey2928">
                <BsGithub />
              </Link>
            </motion.div>
            <motion.div
              className="w-12 h-12 border flex items-center justify-center rounded-full shadow-md text-xl mx-4"
              whileHover={{
                y: -2,
              }}
            >
              <Link href="https://www.linkedin.com/in/akalupaila/">
                <BsLinkedin />
              </Link>
            </motion.div>
            <motion.div
              className="w-12 h-12 border flex items-center justify-center rounded-full shadow-md text-xl ml-4"
              whileHover={{
                y: -2,
              }}
            >
              <Link href="https://www.instagram.com/aliaksei2928/">
                <BsInstagram />
              </Link>
            </motion.div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
