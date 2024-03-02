import React from "react";
import Navbar from "./components/Navbar";
import { Work } from "./components/Work";
import { Stripes } from "./components/Stripes";
import { Products } from "./components/Products";
import { Companies } from "./components/Companies";
import { Cards } from "./components/Cards";
import { Footer } from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-screen bg-zinc-900 text-white  font-satoshi">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Companies />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
