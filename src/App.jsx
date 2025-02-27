import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import PortFolio from "./Components/PortFolios";
import Experiance from "./Components/Experiance";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
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
