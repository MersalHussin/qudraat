import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import "locomotive-scroll/dist/locomotive-scroll.css"; // استيراد أنماط المكتبة
import LocomotiveScroll from "locomotive-scroll"; // استيراد المكتبة
import "./App.css";
import "./landing.css";
import Landing from "./Landing";

const App = () => {
  return (
<>
      {/* Start Navbar */}
    <Navbar />
      {/* End Navbar */}
    <div className="container-page" data-scroll-container>
    <Landing/>
    </div>
</>

  );
};

export default App;
