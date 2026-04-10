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
// import "./BrandSlider.css"; // Custom CSS for hover

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
  const brands = [
    "brand_1_1.svg",
    "brand_1_2.svg",
    "brand_1_3.svg",
    "brand_1_4.svg",
    "brand_1_5.svg",
    "brand_1_6.svg",
    "brand_1_7.svg",
    "brand_1_8.svg",
    "brand_1_4.svg",
    "brand_1_3.svg",
    "brand_1_2.svg",
    "brand_1_1.svg",
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
            {/* Tours array for easier mapping */}
            {[
              {
                name: "Alfama Old Town Tour",
                img: "assets/img/photosoftheclientes/clientspanteao%20alfama.jpeg",
                desc: "Explore the heart of Lisbon's oldest district, winding alleys, Fado music, and the stunning Panteão Nacional. Perfect for history lovers and first-time visitors.",
                reviews: "4.9 (128 reviews)",
                duration: "1h",
                price: "From €30",
                slug: "alfama-old-town-tour",
              },
              {
                name: "Chiado & Bairro Alto Tour",
                img: "assets/img/photosoftheclientes/clinets2.jpeg",
                desc: "Discover Lisbon's bohemian side: vibrant streets, historic cafés, street art, and panoramic viewpoints. Ideal for those who love culture and nightlife.",
                reviews: "4.9 (243 reviews)",
                duration: "1h",
                price: "From €30",
                slug: "chiado-bairro-alto-tour",
              },
              {
                name: "Belém Discovery Tour",
                img: "assets/img/photosoftheclientes/calhambeque.jpeg",
                desc: "Visit the iconic Belém Tower, Jerónimos Monastery, and taste the famous Pastéis de Belém. A must for foodies and history buffs.",
                reviews: "4.9 (312 reviews)",
                duration: "2h",
                price: "From €30",
                slug: "belem-discovery-tour",
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
                  onClick={() => navigate(`/destination-details/${tour.slug}`)}
                  tabIndex={0}
                  role="button"
                  onKeyPress={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      navigate(`/destination-details/${tour.slug}`);
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
                        navigate(`/destination-details/${tour.slug}#book`);
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

      {/* About section removed as requested */}

      {/* Seções de categorias, destinos e carrossel duplicado removidas. Apenas Featured trips e Recent Gallery permanecem. */}

      <div className="gallery-area">
        <div className="container th-container">
          <div className="title-area text-center">
            <span className="sub-title">Make Your Tour More Pleasure</span>
            <h2 className="sec-title">Recent Gallery</h2>
          </div>
          <div className="row gy-10 gx-10 justify-content-center align-items-center">
            {/* Mixed gallery using photosoftheclientes */}
            {[
              "capa.jpeg",
              "clinetsfoto.jpeg",
              "calhambeque.jpeg",
              "clients.jpeg",
              "0389dc11-52a8-4df9-93ea-99a34ae2a493.jpeg",
              "calhambeque2.jpeg",
              "clinets2.jpeg",
              "clientspanteao alfama.jpeg",
            ].map((img, idx) => (
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
                          aspectRatio: "1/1", // Mantém quadrado
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

      {/*       
      <div className="counter-area space">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xl-3 counter-card-wrap">
              <div className="counter-card">
                <div className="counter-shape">
                  <span></span>
                </div>
                <div className="media-body">
                  <h3 className="box-number">
                    <span className="counter-number">12</span>
                  </h3>
                  <h6 className="counter-title">Years Experience</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 counter-card-wrap">
              <div className="counter-card">
                <div className="counter-shape">
                  <span></span>
                </div>
                <div className="media-body">
                  <h3 className="box-number">
                    <span className="counter-number">97</span>%
                  </h3>
                  <h6 className="counter-title">Retention Rate</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 counter-card-wrap">
              <div className="counter-card">
                <div className="counter-shape">
                  <span></span>
                </div>
                <div className="media-body">
                  <h3 className="box-number">
                    <span className="counter-number">8</span>k
                  </h3>
                  <h6 className="counter-title">Tour Completed</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 counter-card-wrap">
              <div className="counter-card">
                <div className="counter-shape">
                  <span></span>
                </div>
                <div className="media-body">
                  <h3 className="box-number">
                    <span className="counter-number">19</span>k
                  </h3>
                  <h6 className="counter-title">Happy Travellers</h6>
                </div>
              </div>
            </div>
          </div>
          <div
            className="shape-mockup shape1 d-none d-xl-block"
            data-top="30%"
            data-left="-15%"
          >
            <img src="assets/img/shape/shape_1.png" alt="shape" />
          </div>
          <div
            className="shape-mockup shape2 d-none d-xl-block"
            data-top="45%"
            data-left="-13%"
          >
            <img src="assets/img/shape/shape_2.png" alt="shape" />
          </div>
          <div
            className="shape-mockup shape3 d-none d-xl-block"
            data-top="32%"
            data-left="-7%"
          >
            <img src="assets/img/shape/shape_3.png" alt="shape" />
          </div>
          <div
            className="shape-mockup d-none d-xl-block"
            data-bottom="-24%"
            data-left="-15%"
          >
            <img src="assets/img/shape/shape_6.png" alt="shape" />
          </div>
          <div
            className="shape-mockup jump d-none d-xl-block"
            data-top="5%"
            data-right="-10%"
          >
            <img src="assets/img/shape/shape_5.png" alt="shape" />
          </div>
        </div>
      </div> */}

      {/* <section
        className="bg-smoke space overflow-hidden"
        style={{ backgroundImage: "url('/assets/img/bg/team_bg_1.png')" }}
      >
        <div className="container z-index-common">
          <div className="title-area text-center">
            <span className="sub-title">Meet with Guide</span>
            <h2 className="sec-title">Tour Guide</h2>
          </div>
          <div className="slider-area">
            <Swiper
              modules={[Navigation, Pagination]}
              className="swiper th-slider teamSlider1 has-shadow"
              id="teamSlider1"
              spaceBetween={30}
              slidesPerView={4}
              pagination={{ clickable: true, el: ".slider-pagination" }}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
            >
              {teamMembers.map(
                ({ name, img, designation, detailsLink }, idx) => (
                  <SwiperSlide key={idx} className="swiper-slide">
                    <div className="th-team team-box">
                      <div className="team-img">
                        <img src={img} alt="Team" />
                      </div>
                      <div className="team-content">
                        <div className="media-body">
                          <h3 className="box-title">
                            <a href={detailsLink}>{name}</a>
                          </h3>
                          <span className="team-desig">{designation}</span>
                          <div className="th-social">
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://facebook.com/"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://twitter.com/"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://instagram.com/"
                            >
                              <i className="fab fa-instagram"></i>
                            </a>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://linkedin.com/"
                            >
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        </div>
      </section> */}

      {/* <section className="testi-area overflow-hidden space" id="testi-sec">
        <div className="container-fluid p-0">
          <div className="title-area mb-20 text-center">
            <span className="sub-title">Testimonial</span>
            <h2 className="sec-title">What Client Say About us</h2>
          </div>
          <div className="slider-area">
            <div
              className="swiper th-slider testiSlider1 has-shadow"
              id="testiSlider1"
            >
              <Swiper
                modules={[Pagination]}
                pagination={{ el: ".slider-pagination", clickable: true }}
                initialSlide={2}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  767: { slidesPerView: 2, centeredSlides: true },
                  992: { slidesPerView: 2, centeredSlides: true },
                  1200: { slidesPerView: 2, centeredSlides: true },
                  1400: { slidesPerView: 3, centeredSlides: true },
                }}
                className="swiper-wrapper"
              >
                {[
                  {
                    name: "Maria Doe",
                    image: "assets/img/testimonial/testi_1_1.jpg",
                    role: "Traveller",
                  },
                  {
                    name: "Andrew Simon",
                    image: "assets/img/testimonial/testi_1_2.jpg",
                    role: "Traveller",
                  },
                  {
                    name: "Alex Jordan",
                    image: "assets/img/testimonial/testi_1_1.jpg",
                    role: "Traveller",
                  },
                  {
                    name: "Maria Doe",
                    image: "assets/img/testimonial/testi_1_2.jpg",
                    role: "Traveller",
                  },
                  {
                    name: "Angelina Rose",
                    image: "assets/img/testimonial/testi_1_1.jpg",
                    role: "Traveller",
                  },
                  {
                    name: "Maria Doe",
                    image: "assets/img/testimonial/testi_1_1.jpg",
                    role: "Traveller",
                  },
                  {
                    name: "Andrew Simon",
                    image: "assets/img/testimonial/testi_1_2.jpg",
                    role: "Traveller",
                  },
                  {
                    name: "Alex Jordan",
                    image: "assets/img/testimonial/testi_1_1.jpg",
                    role: "Traveller",
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
                      <p className="testi-card_text">
                        “A home that perfectly blends sustainability with luxury
                        until I discovered Ecoland Residence. From the moment I
                        stepped into this community, I knew it was where I
                        wanted to live. The commitment to eco-friendly living”
                      </p>
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
      </section> */}

      {/* Brand/company carousel removed as requested */}

      {/* <section
        className="bg-smoke overflow-hidden space overflow-hidden"
        id="blog-sec"
      >
        <div className="container">
          <div className="mb-30 text-center text-md-start">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7">
                <div className="title-area mb-md-0">
                  <span className="sub-title">About Us Restaurant</span>
                  <h2 className="sec-title">News & Articles From Tourm</h2>
                </div>
              </div>
              <div className="col-md-auto">
                <a href="/blog" className="th-btn style4 th-icon">
                  See More Articles
                </a>
              </div>
            </div>
          </div>
          <div className="slider-area">
            <div className="swiper th-slider has-shadow" id="blogSlider1">
              <Swiper
                modules={[Navigation]}
                navigation
                // pagination={{ clickable: true }}
                spaceBetween={30}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  576: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                }}
              >
                {blogPosts.map((post, index) => (
                  <SwiperSlide key={index}>
                    <div className="blog-box th-ani">
                      <div className="blog-img global-img">
                        <img src={post.img} alt="blog image" />
                      </div>
                      <div className="blog-box_content">
                        <div className="blog-meta">
                          <a className="author" href="/blog">
                            {post.date}
                          </a>
                          <a href="/blog">{post.readTime}</a>
                        </div>
                        <h3 className="box-title">
                          <a href={post.link}>{post.title}</a>
                        </h3>
                        <a href={post.link} className="th-btn style4 th-icon">
                          Read More
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div
            className="shape-mockup shape1 d-none d-xxl-block"
            data-bottom="20%"
            data-left="-17%"
          >
            <img src="assets/img/shape/shape_1.png" alt="shape" />
          </div>
          <div
            className="shape-mockup shape2 d-none d-xl-block"
            data-bottom="5%"
            data-left="-17%"
          >
            <img src="assets/img/shape/shape_2.png" alt="shape" />
          </div>
          <div
            className="shape-mockup shape3 d-none d-xxl-block"
            data-bottom="12%"
            data-left="-10%"
          >
            <img src="assets/img/shape/shape_3.png" alt="shape" />
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Home;
