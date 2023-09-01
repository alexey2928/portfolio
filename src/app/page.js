import Layout from "@/components/Layout";
import HireMe from "@/components/HireMe";
import Homepage from "@/components/Homepage";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <main className=" bg-light">
        <Layout>
          <Homepage className="min-h-screen" />
          <About className="min-h-screen" />
          <Skills className="min-h-screen" />
          <Education className="min-h-screen" />
          <Experience className="min-h-screen" />
          <Projects className="min-h-screen" />
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
