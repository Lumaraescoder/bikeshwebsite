import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import "swiper/css/effect-coverflow";

function About() {
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
      detailsLink: "tour-guider-details.html",
    },
    {
      name: "Jane Cooper",
      img: "assets/img/team/team_1_2.jpg",
      designation: "Tourist Guide",
      detailsLink: "tour-guider-details.html",
    },
    {
      name: "Guy Hawkins",
      img: "assets/img/team/team_1_3.jpg",
      designation: "Tourist Guide",
      detailsLink: "tour-guider-details.html",
    },
    {
      name: "Jenny Wilson",
      img: "assets/img/team/team_1_4.jpg",
      designation: "Tourist Guide",
      detailsLink: "tour-guider-details.html",
    },
    {
      name: "Jane Cooper",
      img: "assets/img/team/team_1_2.jpg",
      designation: "Tourist Guide",
      detailsLink: "tour-guider-details.html",
    },
    {
      name: "Guy Hawkins",
      img: "assets/img/team/team_1_3.jpg",
      designation: "Tourist Guide",
      detailsLink: "tour-guider-details.html",
    },
    {
      name: "Jenny Wilson",
      img: "assets/img/team/team_1_4.jpg",
      designation: "Tourist Guide",
      detailsLink: "tour-guider-details.html",
    },
  ];
  return (
    <div>
      <div className="breadcumb-wrapper" style={{ backgroundImage: "url('/assets/img/bg/breadcumb-bg.jpg')" }}>
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">About Tourm</h1>
            <ul className="breadcumb-menu">
              <li><a href="home-travel.html">Home</a></li>
              <li>About Tourm</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="about-area position-relative overflow-hidden overflow-hidden space"
        id="about-sec"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="img-box3">
                <div className="img1">
                  <img src="assets/img/normal/about_3_1.jpg" alt="About" />
                </div>
                <div className="img2">
                  <img src="assets/img/normal/about_3_2.jpg" alt="About" />
                </div>
                <div className="img3 movingX">
                  <img src="assets/img/normal/about_3_3.jpg" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="ps-xl-4">
                <div className="title-area mb-20">
                  <span className="sub-title style1">Welcome To Tourm</span>
                  <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                    We are world reputeted travel agency
                  </h2>
                </div>
                <p className="pe-xl-5">
                  There are many variations of passages of available but the
                  majority have suffered alteration in some form, by injected hum
                  randomised words.
                </p>
                <p className="mb-30 pe-xl-5">
                  Leiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt.
                </p>
                <div className="about-item-wrap">
                  <div className="about-item style2">
                    <div className="about-item_img">
                      <img src="assets/img/icon/about_1_1.svg" alt="" />
                    </div>
                    <div className="about-item_centent">
                      <h5 className="box-title">Exclusive Trip</h5>
                      <p className="about-item_text">
                        There are many variations of passages of available but the
                        majority.
                      </p>
                    </div>
                  </div>
                  <div className="about-item style2">
                    <div className="about-item_img">
                      <img src="assets/img/icon/about_1_2.svg" alt="" />
                    </div>
                    <div className="about-item_centent">
                      <h5 className="box-title">Safety First Always</h5>
                      <p className="about-item_text">
                        There are many variations of passages of available but the
                        majority.
                      </p>
                    </div>
                  </div>
                  <div className="about-item style2">
                    <div className="about-item_img">
                      <img src="assets/img/icon/about_1_3.svg" alt="" />
                    </div>
                    <div className="about-item_centent">
                      <h5 className="box-title">Professional Guide</h5>
                      <p className="about-item_text">
                        There are many variations of passages of available but the
                        majority.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-35">
                  <a href="/contact" className="th-btn style3 th-icon"
                  >Contact With Us</a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="shape-mockup movingX d-none d-xxl-block"
            data-top="0%"
            data-left="-18%"
          >
            <img src="assets/img/shape/shape_2_1.png" alt="shape" />
          </div>
          <div
            className="shape-mockup jump d-none d-xxl-block"
            data-top="28%"
            data-right="-15%"
          >
            <img src="assets/img/shape/shape_2_2.png" alt="shape" />
          </div>
          <div
            className="shape-mockup spin d-none d-xxl-block"
            data-bottom="18%"
            data-left="-112%"
          >
            <img src="assets/img/shape/shape_2_3.png" alt="shape" />
          </div>
          <div
            className="shape-mockup movixgX d-none d-xxl-block"
            data-bottom="18%"
            data-right="-12%"
          >
            <img src="assets/img/shape/shape_2_4.png" alt="shape" />
          </div>
        </div>
      </div>
      <section
        className="position-relative overflow-hidden space-bottom"
        id="destination-sec"
      >
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Services We Offer</span>
            <h2 className="sec-title">Our Amazing services</h2>
          </div>
          <div className="row gy-4 gx-4">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="destination-item th-ani">
                <div className="destination-item_img global-img">
                  <img
                    src="assets/img/destination/destination_4_1.jpg"
                    alt="image"
                  />
                </div>
                <div className="destination-content">
                  <h3 className="box-title">
                    <a href="/service-details">Photo Shoot</a>
                  </h3>
                  <p className="destination-text">20 Listing</p>
                  <a href="/contact" className="th-btn style4 th-icon"
                  >Book Now</a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="destination-item th-ani">
                <div className="destination-item_img global-img">
                  <img
                    src="assets/img/destination/destination_4_2.jpg"
                    alt="image"
                  />
                </div>
                <div className="destination-content">
                  <h3 className="box-title">
                    <a href="/service-details">Tour Guide</a>
                  </h3>
                  <p className="destination-text">22 Listing</p>
                  <a href="/contact" className="th-btn style4 th-icon"
                  >Book Now</a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="destination-item th-ani">
                <div className="destination-item_img global-img">
                  <img
                    src="assets/img/destination/destination_4_3.jpg"
                    alt="image"
                  />
                </div>
                <div className="destination-content">
                  <h3 className="box-title">
                    <a href="/service-details">Cozy Event</a>
                  </h3>
                  <p className="destination-text">23 Listing</p>
                  <a href="/contact" className="th-btn style4 th-icon"
                  >Book Now</a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="destination-item th-ani">
                <div className="destination-item_img global-img">
                  <img
                    src="assets/img/destination/destination_4_4.jpg"
                    alt="image"
                  />
                </div>
                <div className="destination-content">
                  <h3 className="box-title">
                    <a href="/service-details">Interesting Rest</a>
                  </h3>
                  <p className="destination-text">24 Listing</p>
                  <a href="/contact" className="th-btn style4 th-icon"
                  >Book Now</a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="destination-item th-ani">
                <div className="destination-item_img global-img">
                  <img
                    src="assets/img/destination/destination_4_5.jpg"
                    alt="image"
                  />
                </div>
                <div className="destination-content">
                  <h3 className="box-title">
                    <a href="/service-details">Kayaking</a>
                  </h3>
                  <p className="destination-text">25 Listing</p>
                  <a href="/contact" className="th-btn style4 th-icon"
                  >Book Now</a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="destination-item th-ani">
                <div className="destination-item_img global-img">
                  <img
                    src="assets/img/destination/destination_4_6.jpg"
                    alt="image"
                  />
                </div>
                <div className="destination-content">
                  <h3 className="box-title">
                    <a href="/service-details">Safe Flight</a>
                  </h3>
                  <p className="destination-text">26 Listing</p>
                  <a href="/contact" className="th-btn style4 th-icon"
                  >Book Now</a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="destination-item th-ani">
                <div className="destination-item_img global-img">
                  <img
                    src="assets/img/destination/destination_4_7.jpg"
                    alt="image"
                  />
                </div>
                <div className="destination-content">
                  <h3 className="box-title">
                    <a href="/service-details">Entertainment</a>
                  </h3>
                  <p className="destination-text">27 Listing</p>
                  <a href="/contact" className="th-btn style4 th-icon"
                  >Book Now</a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="destination-item th-ani">
                <div className="destination-item_img global-img">
                  <img
                    src="assets/img/destination/destination_4_8.jpg"
                    alt="image"
                  />
                </div>
                <div className="destination-content">
                  <h3 className="box-title">
                    <a href="/service-details">Delicisious Food</a>
                  </h3>
                  <p className="destination-text">28 Listing</p>
                  <a href="/contact" className="th-btn style4 th-icon"
                  >Book Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="elements-sec bg-white overflow-hidden">
        <div className="container-fluid">
          <div className="tags-container relative"></div>
        </div>
      </div>
      <section
        className="team-area3 position-relative bg-top-center space"
         style={{ backgroundImage: "url('/assets/img/bg/team_bg_2.jpg')" }}
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
              {teamMembers.map(({ name, img, designation, detailsLink }, idx) => (
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
                          <a target="_blank" rel="noreferrer" href="https://facebook.com/">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a target="_blank" rel="noreferrer" href="https://twitter.com/">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a target="_blank" rel="noreferrer" href="https://instagram.com/">
                            <i className="fab fa-instagram"></i>
                          </a>
                          <a target="_blank" rel="noreferrer" href="https://linkedin.com/">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <div className="slider-pagination"></div> */}
          </div>
        </div>
      </section>
      <section className="testi-area overflow-hidden space-bottom" id="testi-sec">
        <div className="container-fluid p-0">
          <div className="title-area mb-20 text-center">
            <span className="sub-title">Testimonial</span>
            <h2 className="sec-title">What Client Say About us</h2>
          </div>
          <div className="slider-area">
            <div className="swiper th-slider testiSlider1 has-shadow" id="testiSlider1">
              <Swiper
                modules={[Pagination]}
                pagination={{ el: ".slider-pagination", clickable: true }}
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
                            <span className="testi-card_desig">{testimonial.role}</span>
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
                        stepped into this community, I knew it was where I wanted to
                        live. The commitment to eco-friendly living”
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
      </section>
      <div className="brand-area overflow-hidden">
        <div className="container th-container">
          <div className="brand-slider-wrapper">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              spaceBetween={30}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 6 },
                1400: { slidesPerView: 8 },
              }}
              className="brandSlider1"
            >
              {brands.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="brand-box">
                    <a href="#">
                      <img
                        className="original"
                        src={`assets/img/brand/${img}`}
                        alt="Brand Logo"
                      />
                      <img
                        className="gray"
                        src={`assets/img/brand/${img}`}
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="sidebar-gallery-area space">
        <div className="container-fluid">
          <div className="slider-area">
            <Swiper
              centeredSlides={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
                1300: { slidesPerView: 4 },
              }}
              className="th-slider has-shadow"
            >
              {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 2].map((n, index) => (
                <SwiperSlide key={index}>
                  <div className="gallery-thumb style2 global-img">
                    <img
                      src={`assets/img/gallery/gallery_4_${n}.jpg`}
                      alt="Gallery Image"
                    />
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/"
                      className="gallery-btn"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About