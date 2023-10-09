"use client";
import NavBar from "./components/NavBar";
import HomeSection from "./components/HomeSection";
// import HomeSectioncopy from "./components/HomeSectioncopy";
import SocialLinks from "./components/SocialLinks";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomeSection />
      {/* <Services /> */}
      <Portfolio />
      <SocialLinks />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
