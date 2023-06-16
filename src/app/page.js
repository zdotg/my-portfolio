"use client";

import "../styles/globals.css";
import React from "react";
import Head from "next/head";
import NavBar from "@/pages/NavBar";
import Intro from "@/pages/Intro";
import About from "@/pages/About";
import Experience from "@/pages/Experience";
import Skills from "@/pages/Skills";
import Certs from "@/pages/Certs";
import Projects from "@/pages/Projects";
import Contact from "../pages/Contact";
import Footer from "@/pages/Footer";
// Import other components as needed

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zach Gallman Portfolio</title>
        {/* Include other meta tags, stylesheets, or scripts */}
      </Head>
      <NavBar />
      <main>
        <Intro />
        <Experience />
        <About />
        <Skills />
        <Certs />
        <Projects />
        <Contact />
        {/* Render other components */}
      </main>
      <Footer />
      {/* Include a footer component if needed */}
    </div>
  );
}
