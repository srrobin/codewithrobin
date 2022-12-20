import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ShowCode from "./components/ShowCode";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ShowCode/>
    </div>
  );
};

export default App;
