import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import "locomotive-scroll/dist/locomotive-scroll.css"; // استيراد أنماط المكتبة
import LocomotiveScroll from "locomotive-scroll"; // استيراد المكتبة

const Landing = () => {
  useEffect(() => {
    // تفعيل LocomotiveScroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"), // العنصر الذي يحتوي على المحتوى
      smooth: true, // تفعيل التمرير السلس
      multiplier: 0.8, // سرعة التمرير (يمكنك تعديل هذه القيمة)
      offset: 2, // يمكنك تغيير هذه القيمة لتغيير التمرير بشكل دقيق
    });

    // تنظيف LocomotiveScroll عند الخروج من الصفحة
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <>
      <main>
        <section id="home">
          <h1>Welcome to Hosme</h1>
        </section>
        <section id="about" >
          <h1>About Us</h1>
        </section>
        <section id="services">
          <h1>Our Services</h1>
        </section>
        <section id="contact">
          <h1>Contact Us</h1>
        </section>
      </main>
    </>
  );
};

export default Landing;
