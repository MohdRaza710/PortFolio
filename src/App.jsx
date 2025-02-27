import React from "react";
import Navbar from "./Components/Navbar"
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./Components/PortFolios";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
        <div>
          <Navbar />
          <Home />
          <About />
          <PortFolio />
          <Experiance />
          <Contact />
          <Footer />
        </div>
        <Toaster/>
    </>
  )
}

export default App
