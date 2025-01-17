import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#"); // حالة لتخزين الرابط النشط

  const handleLinkClick = (link) => {
    setActiveLink(link); // تعيين الرابط النشط
    setMenuOpen(false); // غلق المينو عند الضغط على أي رابط
  };

  return (
    <>
    <div className="nav-size">

    </div>
    <header className="navbar">
      <div className="logo">
        <img src="/assets/Logo-txt.png" alt="Ausrah-Logo" />
      </div>
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
          <a
            href="#"
            className={activeLink === "#" ? "active" : ""}
            onClick={() => handleLinkClick("#")}
          >
            الرئيسية
          </a>
        </li>
        <li>
          <a
            href="#about-sec"
            className={activeLink === "#about-sec" ? "active" : ""}
            onClick={() => handleLinkClick("#about-sec")}
          >
            عن أُسرة
          </a>
        </li>
        <li>
          <a
            href="#video"
            className={activeLink === "#video" ? "active" : ""}
            onClick={() => handleLinkClick("#video")}
          >
            أراء المستخدمين
          </a>
        </li>
        <li>
          <a
            href="#courses"
            className={activeLink === "#courses" ? "active" : ""}
            onClick={() => handleLinkClick("#courses")}
          >
            المدونة
          </a>
        </li>
        <li>
          <a
            href="#FAQ"
            className={activeLink === "#FAQ" ? "active" : ""}
            onClick={() => handleLinkClick("#FAQ")}
          >
            الأسئلة الشائعة
          </a>
        </li>
      </ul>
      <a
        className="contact-us"
        href="tel:+201040031584"
        onClick={() => handleLinkClick("#contact")}
      >
        تواصل معنا <i className="fa-solid fa-phone-volume"></i>
      </a>
    </header>
        </>
  );
};

export default Navbar;
