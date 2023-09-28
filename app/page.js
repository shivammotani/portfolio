"use client";
import NavBar from "./components/NavBar";
import HomeSection from "./components/HomeSection";
import HomeSectioncopy from "./components/HomeSectioncopy";
import SocialLinks from "./components/SocialLinks";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <div>
      {/* <NavBar /> */}
      <HomeSection />
      <Services />
      <Portfolio />
      <SocialLinks />
    </div>
  );
}
