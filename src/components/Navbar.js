import React, { useState } from "react";
import "../components/css/navbar.css";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo"><img src='/assets/Logo-txt.png' alt="sad" /></div>
      <div
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>الرئيسية</a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>عن قدرات</a>
          </li>
          <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>رحلة قدرات </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>الدورات</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>الأسئلة الشائعة</a>
          </li>
      </ul>
          <a className="contact-us" href="#contact">تواصل معنا <i className="fa-solid fa-phone-volume"></i></a>
    </header>
  );
};

export default Navbar;
