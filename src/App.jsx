import React from "react";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Experiance from "./Pages/Experiance";
import Footer from "./Pages/Footer";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
      <div className="min-h-screen text-slate-800 dark:text-slate-100">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Experiance />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  )
}

export default App
