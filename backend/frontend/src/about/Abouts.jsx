import React from "react";
import Navbar from "../components/Navbar";
import About from "../Components/About";
import Footer from "../components/Footer";

function Abouts() {
  return (
    <>
      <Navbar />
     <div className="mt-20">
     <About/>
     </div>
      <Footer/>
    </>
  );
}

export default Abouts;
