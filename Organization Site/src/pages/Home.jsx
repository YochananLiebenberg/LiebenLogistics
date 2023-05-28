import React from 'react';

import HeaderNavBar from '../partials/Header-Nav-Bar';
import HeroHome from '../partials/Hero Section/HeroHome';
import Footer from '../partials/Footer Section/Footer';
import About from '../partials/About Section/About';
import ProjectsSection from "../partials/Project Section/ProjectsSection";
import FeaturedSection from "../partials/Featured Section/FeaturedSection";
import NavBar from "../partials/Nav Bar/NavBar";
import Contact from "../partials/Contact Section/Contact";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}


      {/*  Page content */}
      <main className="grow">

        <NavBar/>


        {/*  Page sections */}
        <HeaderNavBar />
        <HeroHome />
        <FeaturedSection/>
        <About />
        <ProjectsSection />
        <Contact/>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;