import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";

function Home() {
  const navigate = useNavigate();
  const blogPosts = [
    {
      img: "assets/img/blog/blog_1_1.jpg",
      date: "July 05 2024",
      readTime: "6 min read",
      title: "10 Reasons why you should visit New Jersey",
      link: "/blog-details",
    },
    {
      img: "assets/img/blog/blog_1_2.jpg",
      date: "July 06 2024",
      readTime: "7 min read",
      title: "The best time to visit Japan & enjoy the cherry blossoms",
      link: "/blog-details",
    },
    {
      img: "assets/img/blog/blog_1_3.jpg",
      date: "July 07 2024",
      readTime: "8 min read",
      title: "7 Amazing destinations for adventure seekers",
      link: "/blog-details",
    },
  ];
  const teamMembers = [
    {
      name: "Jacob Jones",
      img: "assets/img/team/team_1_1.jpg",
      designation: "Tourist Guide",
      detailsLink: "/tour-guider-details",
    },
    {
      name: "Jane Cooper",
      img: "assets/img/team/team_1_2.jpg",
      designation: "Tourist Guide",
      detailsLink: "/tour-guider-details",
    },
    {
      name: "Guy Hawkins",
      img: "assets/img/team/team_1_3.jpg",
      designation: "Tourist Guide",
      detailsLink: "/tour-guider-details",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="th-hero-wrapper hero-1" id="hero">
        <div
          className="hero-inner"
          style={{
            position: "relative",
            width: "100%",
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#000",
          }}
        >
          <img
            src="assets/img/photosoftheclientes/capa.jpeg"
            alt="Lisbon Tuk Tuk Cover"
            style={{
              width: "100%",
              height: "60vh",
              objectFit: "cover",
              objectPosition: "center 80%",
              borderRadius: "12px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.35)",
              borderRadius: "12px",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
              color: "#fff",
            }}
          >
            <h1
              style={{
                fontSize: "2.2rem",
                fontWeight: 700,
                marginBottom: "0.7rem",
                textAlign: "center",
              }}
            >
              Welcome to Tuk Tuk Lisbon
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                maxWidth: 500,
                textAlign: "center",
                margin: 0,
                color: "white",
              }}
            >
              Discover Lisbon in a fun, eco-friendly way. Explore our unique tuk
              tuk tours!
            </p>
          </div>
        </div>
      </div>

      {/* Featured Trips - Tuk Tuk Tours */}
      <section
        className="tour-area position-relative bg-top-center overflow-hidden space"
        id="service-sec"
        style={{ backgroundImage: "url('/assets/img/bg/tour_bg_1.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="title-area text-center">
                <span className="sub-title">Featured Tuk Tuk Tours</span>
                <h2 className="sec-title">Our Top Lisbon Experiences</h2>
              </div>
            </div>
          </div>
          <div className="row gy-4 gx-4 justify-content-center">
            {[
              {
                name: "Alfama Old Town Tour",
                img: "assets/img/photosoftheclientes/clientspanteao%20alfama.jpeg",
                desc: "Explore the heart of Lisbon's oldest district, winding alleys, Fado music, and the stunning Panteão Nacional. Perfect for history lovers and first-time visitors.",
                reviews: "4.9 (128 reviews)",
                duration: "1h",
                price: "From €30",
                slug: "alfama",
              },
              {
                name: "Chiado & Bairro Alto Tour",
                img: "assets/img/photosoftheclientes/clinets2.jpeg",
                desc: "Discover Lisbon's bohemian side: vibrant streets, historic cafés, street art, and panoramic viewpoints. Ideal for those who love culture and nightlife.",
                reviews: "4.9 (243 reviews)",
                duration: "1h",
                price: "From €30",
                slug: "chiado-barrio-alto",
              },
              {
                name: "Belém Discovery Tour",
                img: "assets/img/photosoftheclientes/calhambeque.jpeg",
                desc: "Visit the iconic Belém Tower, Jerónimos Monastery, and taste the famous Pastéis de Belém. A must for foodies and history buffs.",
                reviews: "4.9 (312 reviews)",
                duration: "2h",
                price: "From €30",
                slug: "belem",
              },
              {
                name: "Lisbon Full Day Experience",
                img: "assets/img/photosoftheclientes/clinetsfoto.jpeg",
                desc: "See it all! From Alfama to Belém, viewpoints, hidden gems, and local cuisine. The ultimate tuk tuk adventure for explorers.",
                reviews: "4.8 (189 reviews)",
                duration: "6h",
                price: "From €30",
                slug: "lisbon-full-day-experience",
              },
              {
                name: "Lisbon Viewpoints Tour",
                img: "assets/img/photosoftheclientes/calhambeque2.jpeg",
                desc: "Marvel at the best panoramic views of Lisbon from its famous miradouros. Perfect for photographers and romantics.",
                reviews: "4.8 (156 reviews)",
                duration: "2h",
                price: "From €30",
                slug: "lisbon-viewpoints-tour",
              },
              {
                name: "Christmas Lights Tour",
                img: "assets/img/photosoftheclientes/clients.jpeg",
                desc: "Experience the magic of Lisbon's festive illuminations and holiday spirit from the comfort of a tuk tuk. Seasonal (Nov-Jan).",
                reviews: "4.8 (98 reviews)",
                duration: "2h",
                price: "From €30",
                slug: "christmas-lights-tour",
              },
            ].map((tour) => (
              <div className="col-md-6 col-lg-4" key={tour.slug}>
                <div
                  className="tour-box th-ani gsap-cursor"
                  style={{ height: "100%", cursor: "pointer" }}
                  onClick={() => navigate(`/tour-details/${tour.slug}`)}
                  tabIndex={0}
                  role="button"
                  onKeyPress={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      navigate(`/tour-details/${tour.slug}`);
                    }
                  }}
                >
                  <div className="tour-box_img global-img">
                    <img
                      src={tour.img}
                      alt={tour.name}
                      style={{
                        width: "100%",
                        height: 220,
                        objectFit: "cover",
                        borderRadius: 8,
                      }}
                    />
                  </div>
                  <div className="tour-content">
                    <h3 className="box-title">{tour.name}</h3>
                    <div>Lisbon, Portugal</div>
                    <div>{tour.desc}</div>
                    <div style={{ color: "#f7b731", fontWeight: 600 }}>
                      {tour.reviews}
                    </div>
                    <div>Duration: {tour.duration}</div>
                    <div style={{ fontWeight: 700 }}>{tour.price}</div>
                    <button
                      className="th-btn style4 th-icon"
                      style={{
                        marginTop: "14px",
                        background:
                          "linear-gradient(90deg, #f7b731 0%, #ff8c00 100%)",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        padding: "10px 28px",
                        fontWeight: 700,
                        fontSize: "1rem",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                        cursor: "pointer",
                        transition: "background 0.2s",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/tour-details/${tour.slug}#book`);
                      }}
                    >
                      <i
                        className="fa fa-calendar-check"
                        style={{ marginRight: 8 }}
                      ></i>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - positioned above Gallery */}
      <section className="testi-area overflow-hidden space" id="testi-sec">
        <div className="container-fluid p-0">
          <div className="title-area mb-20 text-center">
            <span className="sub-title">Testimonials</span>
            <h2 className="sec-title">What Our Guests Say</h2>
          </div>
          <div className="slider-area">
            <div
              className="swiper th-slider testiSlider1 has-shadow"
              id="testiSlider1"
            >
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ el: ".slider-pagination", clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                initialSlide={0}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  767: { slidesPerView: 2, centeredSlides: true },
                  992: { slidesPerView: 2, centeredSlides: true },
                  1200: { slidesPerView: 3, centeredSlides: true },
                }}
                className="swiper-wrapper"
              >
                {[
                  {
                    name: "Maria & Thomas",
                    image: "assets/img/photosoftheclientes/clients.jpeg",
                    role: "Germany",
                    text: "The best way to see Lisbon! Our driver was so knowledgeable and the tuk-tuk was beautifully decorated with flowers. Alfama tour was the highlight of our trip!",
                  },
                  {
                    name: "Andrew & Family",
                    image: "assets/img/photosoftheclientes/clinets2.jpeg",
                    role: "United Kingdom",
                    text: "Amazing experience for the whole family! Kids loved the open-air ride through Belém. We saw so much in just 2 hours. Highly recommend!",
                  },
                  {
                    name: "Sophie & Friends",
                    image: "assets/img/photosoftheclientes/capa.jpeg",
                    role: "France",
                    text: "We did the Chiado & Bairro Alto tour and it was incredible! The viewpoints at sunset were breathtaking. Best Instagram photos of our entire vacation!",
                  },
                  {
                    name: "John & Emma",
                    image: "assets/img/photosoftheclientes/calhambeque.jpeg",
                    role: "USA",
                    text: "The Christmas Lights tour was pure magic. Lisbon illuminated from a decorated tuk-tuk is something we'll never forget. Already planning to come back!",
                  },
                  {
                    name: "Clara & Miguel",
                    image: "assets/img/photosoftheclientes/clinetsfoto.jpeg",
                    role: "Brazil",
                    text: "As locals visiting Lisbon, we were amazed by the hidden spots our guide showed us. The full day tour covered everything. Worth every euro!",
                  },
                  {
                    name: "Anna & Peter",
                    image: "assets/img/photosoftheclientes/calhambeque2.jpeg",
                    role: "Netherlands",
                    text: "The Viewpoints Tour gave us the most stunning panoramic photos of Lisbon. Our driver knew exactly when and where to stop for the best light.",
                  },
                ].map((testimonial, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <div className="testi-card">
                      <div className="testi-card_wrapper">
                        <div className="testi-card_profile">
                          <div className="testi-card_avater">
                            <img src={testimonial.image} alt="testimonial" />
                          </div>
                          <div className="media-body">
                            <h3 className="box-title">{testimonial.name}</h3>
                            <span className="testi-card_desig">
                              {testimonial.role}
                            </span>
                          </div>
                        </div>
                        <div className="testi-card_review">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <i key={i} className="fa-solid fa-star"></i>
                          ))}
                        </div>
                      </div>
                      <p className="testi-card_text">"{testimonial.text}"</p>
                      <div className="testi-card-quote">
                        <img src="assets/img/icon/testi-quote.svg" alt="img" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="slider-pagination"></div>
            </div>
          </div>
        </div>
        <div
          className="shape-mockup d-none d-xl-block"
          data-bottom="-2%"
          data-right="0%"
        >
          <img src="assets/img/shape/line2.png" alt="shape" />
        </div>
        <div
          className="shape-mockup movingX d-none d-xl-block"
          data-top="30%"
          data-left="5%"
        >
          <img src="assets/img/shape/shape_7.png" alt="shape" />
        </div>
      </section>

      {/* Gallery Section */}
      <div className="gallery-area mt-10" id="gallery">
        <div className="container th-container">
          <div className="title-area text-center mt-10">
            <span className="sub-title">Make Your Tour More Pleasure</span>
            <h2 className="sec-title">Recent Gallery</h2>
          </div>
          <div className="row gy-10 gx-10 justify-content-center align-items-center">
            {[
              "capa.jpeg",
              "clinetsfoto.jpeg",
              "calhambeque.jpeg",
              "clients.jpeg",
              "0389dc11-52a8-4df9-93ea-99a34ae2a493.jpeg",
              "calhambeque2.jpeg",
              "clinets2.jpeg",
              "clientspanteao alfama.jpeg",
            ].map((img) => (
              <div className="col-md-6 col-lg-2" key={img}>
                <div className="gallery-card">
                  <div className="box-img global-img">
                    <a
                      href={`assets/img/photosoftheclientes/${img}`}
                      className="popup-image"
                    >
                      <div className="icon-btn">
                        <i className="fal fa-magnifying-glass-plus"></i>
                      </div>
                      <img
                        src={`assets/img/photosoftheclientes/${img}`}
                        alt="gallery image"
                        style={{
                          width: "100%",
                          aspectRatio: "1/1",
                          height: "auto",
                          maxHeight: "180px",
                          objectFit: "cover",
                          borderRadius: "8px",
                          display: "block",
                          margin: "0 auto",
                          background: "#eee",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="shape-mockup d-none d-xl-block"
            data-top="-25%"
            data-left="0%"
          >
            <img src="assets/img/shape/line.png" alt="shape" />
          </div>
          <div
            className="shape-mockup movingX d-none d-xl-block"
            data-top="30%"
            data-left="-3%"
          >
            <img
              className="gmovingX"
              src="assets/img/shape/shape_4.png"
              alt="shape"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
