import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // استيراد أنماط المكتبة
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";



const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const discoverItems = [
    {
      title: "اكتشاف القدرات",
      imageSrc: "/assets/explore.png",
      className: "frist",
      details: "جلسة تفاعلية مع كوتش متخصص تساعدك على تحديد ميولك المهنية",
    },
    {
      title: "تعلم المهارات",
      imageSrc: "/assets/skills.png",
      className: "second",
      details:
        "بناءً على ميولك، نقدم لك تدريبًا على المهارات التي تحتاجها مثل البرمجة التصميم وغيرها",
    },
    {
      title: "توظيف المهارات",
      imageSrc: "/assets/growth.png",
      className: "third",
      details:
        "تعلم كيف توظف ما تعلمته لتبدأ أولى الخطوات في عالم ريادة الأعمال",
    },
  ];

  const courses = [
    {
      title: "نينجا جين",
      instructor: "د. محمود دويدار",
      imageSrc: "/assets/C1.png",
    },
    {
      title: "اكتشاف الميول للأطفال",
      instructor: "كوتش شيماء سعيد",
      imageSrc: "/assets/C2.png",
    },
    {
      title: "اكتشف نفسك",
      instructor: "د",
      imageSrc: "/assets/video.png",
    },
  ];

  const [activeVideo, setActiveVideo] = useState(null); // لتتبع الفيديو النشط

  const videos = [
    {
      id: 1,
      title: "فيديو 1",
      thumbnail: "/assets/video.png",
      videoSrc: "https://www.youtube.com/embed/lqN82bblk9Q?si=kniQMR1GJGZBeRBy",
    },
    {
      id: 2,
      title: "فيديو 2",
      thumbnail: "/assets/C1.png",
      videoSrc: "https://www.youtube.com/embed/lqN82bblk9Q?si=kniQMR1GJGZBeRBy",
    },
    {
      id: 3,
      title: "فيديو 3",
      thumbnail: "/assets/C2.png",
      videoSrc: "https://www.youtube.com/embed/lqN82bblk9Q?si=kniQMR1GJGZBeRBy",
    },
    {
      id: 4,
      title: "فيديو 3",
      thumbnail: "/assets/video.png",
      videoSrc: "https://www.youtube.com/embed/lqN82bblk9Q?si=kniQMR1GJGZBeRBy",
    },
  ];

  const handleVideoClick = (videoSrc) => {
    setActiveVideo(videoSrc); // تعيين الفيديو النشط
  };

  const closeVideo = () => {
    setActiveVideo(null); // إغلاق الفيديو
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "ما هي قدرات؟",
      answer:
        "قدرات هي شركة تهدف إلى تمكين الشباب ليصبحوا رواد أعمال من خلال نظام ASK الذي يعتمد على اكتشاف الميول، تعلم المهارات، وتطبيق المعرفة.",
    },
    {
      question: "لمن تقدم قدرات خدماتها؟",
      answer: "قدرات تقدم خدماتها للأطفال والشباب من عمر 8 إلى 18 عامًا.",
    },
    {
      question: "كيف يمكنني التسجيل؟",
      answer:
        "يمكنك التسجيل بسهولة من خلال موقعنا الإلكتروني عبر الضغط على زر 'سجل الآن' واتباع الخطوات المطلوبة.",
    },
    {
      question: "ما هي المهارات التي يمكن تعلمها؟",
      answer:
        "من المهارات التي يمكن تعلمها البرمجة، التصميم، الروبوت، وإدارة المشاريع.",
    },
    {
      question: "هل التدريب عبر الإنترنت أم حضوري؟",
      answer:
        "تقدم قدرات التدريب عبر الإنترنت مع توفير جلسات تفاعلية مباشرة مع المدربين.",
    },
    {
      question: "ما هي مدة الرحلة التعليمية؟",
      answer:
        "الرحلة التعليمية تختلف حسب البرنامج، لكنها عادةً تتراوح بين 3 إلى 6 أشهر.",
    },
    {
      question: "هل هناك شهادات معتمدة؟",
      answer:
        "نعم، تقدم قدرات شهادات معتمدة عند إتمام البرامج التعليمية بنجاح.",
    },
  ];

  return (
    <>
      <main>
        <section className="landing" id="landing">
            <a href="about-sec" className="scroll-down">
              <i className="fa-solid fa-angle-down"></i>
            </a>
          <div className="container">
            <div className="landing-box-txt">
              <h1 className="heading-landing">
                {" "}
                نبني اليوم رواد <span>تكنولوجيا </span>الغد
              </h1>
              <ul className="features">
                <li>
                  {" "}
                  جلسات مع متخصصين <span>اكتشاف ميول طفلك المهنية</span>
                </li>
                <li>
                  {" "}
                  مناهج تعليمية متطورة تربط بين <span>الشغف وسوق العمل</span>
                </li>
                <li>
                  {" "}
                  التعرف على التسويق و إدارة المشاريع{" "}
                  <span>لبناء رائد أعمال</span>
                </li>
              </ul>

              <div className="btn-container">
                <a className="btn explore" href="#about">
                  أكتشف أكتر
                </a>
                <a className="btn chat" href="#about">
                  تحدث معانا <i className="fa-solid fa-comments"></i>
                </a>
              </div>
            </div>
            <img src="/assets/Qudraat-Website.png" alt="image" />
          </div>
        </section>
        <section id="about-sec">
          <div className="container">
            <div className="about-txt">
              <h1 className="title">عن قدرات</h1>
              <p className="about-data">
                قدرات تهدف إلى تمكين الشباب والأطفال ليصبحوا رواد أعمال
                من خلال رحلة فريدة تبدأ باكتشاف شغفهم وتنتهي بتحقيق أحلامهم
              </p>
              {/* <a href="#about">نزل الكتالوج</a> */}
            </div>
            <img src="/assets/Logo.png" alt="about" />
          </div>
        </section>
        <section id="video">
          <img
            src="/assets/video.png"
            alt="video-img"
            onClick={openModal}
            style={{ cursor: "pointer" }}
          />
          {isModalOpen && (
            <div className="modal-overlay" onClick={closeModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-modal" onClick={closeModal}>
                  &times;
                </button>
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/UFMrRBpcPS4?si=QPw7-qkfCwks59cO"
                  title="Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </section>

        <section id="journy">
          <div className="container">
            <div className="journy-txt">
              <h1 className="title">رحلة قدرات</h1>
              <p>
                رحلتك مع <span>قدرات</span> تتكون من 3 مراحل مميزة
              </p>
            </div>
            <div className="journies-container">
              <div>
                {discoverItems.map((journy, index) => (
                  <div
                    key={index}
                    className={`journy-data ${journy.className}`}
                  >
                    <h2>{journy.title}</h2>
                    <div className="image-journy-cont">
                      <img
                        src={journy.imageSrc}
                        alt={`journy-icon-${journy.title}`}
                      />
                    </div>
                    <p>{journy.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="CTA">
          <h1>جاهز لاكتشاف قدراتك الحقيقية</h1>
          <a href="#Tell">أبدا رحلتك الان</a>
        </section>

        <section id="courses">
          <div className="container">
            <h1 className="title">الدورات</h1>
            <div className="courses-container">
              {courses.map((course, index) => (
                <a key={index} href={`# ${course.title}`}>
                  <div className="course-box">
                    <img src={course.imageSrc} alt={course.title} />
                    <h1>{course.title}</h1>
                    <p>{course.instructor}</p>
                  </div>
                </a>
              ))}
            </div>
            <a className="btn explore" href="#more">
              {" "}
              أكتشف المزيد
            </a>
          </div>
        </section>

        <section id="Certifcate">
          <div className="container">
            <img src="/assets/Qudraat Certifacte.png"></img>
          </div>
        </section>

        (
    <section id="Feedback">
      {activeVideo && (
        <div className="video-overlay" onClick={closeVideo}>
          <div className="video-container">
            <button className="close-button">&times;</button>
            <iframe
              width="1080px"
              height="607px"
              src={activeVideo}
              title="Active Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <div className="reels-container">
        <h1 className="title">اراء الأهالي</h1>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation={true} // تفعيل الـ Navigation
          modules={[Navigation]} // إضافة Navigation كـ Module
          breakpoints={{
            900: { slidesPerView: 3 },
            480: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div
                className="reel-card"
                onClick={() => handleVideoClick(video.videoSrc)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="thumbnail"
                />
                <h3 className="video-title">{video.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>  
        <section id="FAQ">
          <div className="container">
            <h1 className="title">الأسئلة الشائعة</h1>
            <div className="FAQ-box">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <div
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <span className="icon">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </div>
                  <div
                    className="faq-answer"
                    style={{
                      display: activeIndex === index ? "block" : "none",
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <a href="#mail-to" className="email">
              <h2>راسلنا دلوقتي على</h2>
              <h1>info.qudraat.com</h1>
            </a>
            <a href="#phone-to" className="phone">
              <h2>اتصل بنا على </h2>
              <h1>01040031584</h1>
            </a>
            <div>
              <a className="btn chat" href="#about">
                تحدث معانا <i className="fa-solid fa-comments"></i>
              </a>
            </div>
          </div>
        </section>

        <footer id="footer">
          <div className="logo-footer">
            <img
              src="/assets/Qudraat White.png"
              alt="logo-footer"
              className="logo-qudraat"
            />
          </div>
          <div className="social-media">
            <a href="#">
              <img src="/assets/Youtube.svg" alt="Youtube" />
            </a>
            <a href="#">
              <img src="/assets/Tiktok.svg" alt="Tiktok" />
            </a>
            <a href="#">
              <img src="/assets/Facebook.svg" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/assets/Insta.svg" alt="Insta" />
            </a>
            <a href="#">
              <img src="/assets/Whatsapp.svg" alt="Whatsapp" />
            </a>
          </div>
          <div className="line"></div>
          <div className="copyright">جميع الحقوق محفوظة لـ قدرات © 2025</div>
        </footer>
      </main>
    </>
  );
};

export default Landing;
