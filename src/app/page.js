import Image from "next/image";
import homepagePic from "../../public/images/home.png";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { BsDownload } from "react-icons/bs";
import HireMe from "@/components/HireMe";
import Homepage from "@/components/Homepage";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <main className=" bg-light">
        <Layout>
          <Homepage className="min-h-screen " />
          <About className="min-h-screen" />
          <Skills className="min-h-screen" />
          <Education className="min-h-screen" />
          <Projects className="min-h-screen" />
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
