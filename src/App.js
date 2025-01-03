import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "./landing.css";
import Landing from "./Landing";
// import ReactLenis from "lenis/react";

const App = () => {
  
  return (
    
    <>
    {/* <ReactLenis root> */}
      {/* Start Navbar */}
    <Navbar />
      {/* End Navbar */}
    <div className="container-page" >
    <Landing/>
    </div>
    {/* </ReactLenis> */}
</>

  );
};

export default App;
