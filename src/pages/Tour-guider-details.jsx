import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import "swiper/css/effect-coverflow";

function Tourguiderdetails() {
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
          <h1 className="breadcumb-title">Tour Guide Details</h1>
          <ul className="breadcumb-menu">
            <li><a href="/">Home</a></li>
            <li>Guide Details</li>
          </ul>
        </div>
      </div>
    </div>
    <section className="space">
      <div className="container">
        <div className="team-details">
          <div className="row gy-5 mb-3 mb-xl-5 pb-xl-4">
            <div className="col-xl-4">
              <div className="th-team team-grid">
                <div className="team-img">
                  <img src="assets/img/team/team_img_3.jpg" alt="Team" />
                </div>
                <div className="team-img2">
                  <img src="assets/img/team/team_1_3.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <div className="media-body">
                    <h3 className="box-title">
                      <a href="team-details.html">Jacob Jones</a>
                    </h3>
                    <span className="team-desig">Tourist Guide</span>
                    <div className="th-social">
                      <a target="_blank" href="https://facebook.com/"
                        ><i className="fab fa-facebook-f"></i></a>
                      <a target="_blank" href="https://twitter.com/"
                        ><i className="fab fa-twitter"></i></a>
                      <a target="_blank" href="https://linkedin.com/"
                        ><i className="fab fa-linkedin-in"></i></a>
                      <a target="_blank" href="https://youtube.com/"
                        ><i className="fab fa-youtube"></i></a>
                      <a target="_blank" href="https://instagram.com/"
                        ><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 ps-3 ps-xl-5 pe-xl-4">
              <div className="team-about">
                <h2 className="team-about_title">About Me</h2>
                <p className="team-about_text mb-25">
                  Venenatis purus egestas lorem aenean enim bibendum. Ac
                  pharetra egestas eget gravida turpis senectus. Sed blandit
                  ipsum orci odio egestas egestas sed bibendum. Rhoncus est
                  proin euismod condimentum eget a tristique integer viverra.
                  Enim sed nunc magna consequat consectetur vestibulum odio
                  posuere. Mattis nisl aenean auctor morbi suspendisse diam
                  adipiscing. Tellus egestas amet tellus phasellus.
                </p>
                <p className="team-about_text mb-25">
                  Ornare aliquam ac a pellentesque ante. Morbi maecenas odio
                  integer adipiscing ridiculus mauris. Ornare in sit et tortor
                  orci massa eu ultricies. Sit fermentum faucibu.
                </p>
                <h5 className="box-title">5 Years of Experiences</h5>
                <p className="team-about_text mb-25">
                  Venenatis purus egestas lorem aenean enim bibendum. Ac
                  pharetra egestas eget gravida turpis senectus. Sed blandit
                  ipsum orci odio egestas egestas sed bibendum. Rhoncus est
                  proin euismod condimentum eget a tristique integer viverra.
                </p>
                <div className="counter-box-wrap">
                  <div className="counter-box">
                    <h2 className="counter-box_number">
                      <span className="counter-number">2</span>K+
                    </h2>
                    <span className="counter-box_title">Total Guide</span>
                  </div>
                  <div className="counter-box">
                    <h2 className="counter-box_number">
                      <span className="counter-number">65</span>+
                    </h2>
                    <span className="counter-box_title">Total Services</span>
                  </div>
                  <div className="counter-box">
                    <h2 className="counter-box_number">
                      <span className="counter-number">79</span>+
                    </h2>
                    <span className="counter-box_title">Award Won</span>
                  </div>
                  <div className="counter-box">
                    <h2 className="counter-box_number">
                      <span className="counter-number">120</span>+
                    </h2>
                    <span className="counter-box_title">Total Event</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="box-title mb-30">Contact With Me</h2>
          <div className="row gy-4 justify-content-center">
            <div className="col-xl-4 col-lg-6">
              <div className="about-contact-grid style2">
                <div className="about-contact-icon">
                  <img src="assets/img/icon/location-dot2.svg" alt="" />
                </div>
                <div className="about-contact-details">
                  <h6 className="box-title">Our Address</h6>
                  <p className="about-contact-details-text">
                    2690 Hiltona Street Victoria
                  </p>
                  <p className="about-contact-details-text">
                    Road, New York, Canada
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="about-contact-grid">
                <div className="about-contact-icon">
                  <img src="assets/img/icon/call.svg" alt="" />
                </div>
                <div className="about-contact-details">
                  <h6 className="box-title">Phone Number</h6>
                  <p className="about-contact-details-text">
                    <a href="tel:01234567890">+01 234 567 890</a>
                  </p>
                  <p className="about-contact-details-text">
                    <a href="tel:01234567890">+09 876 543 210</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="about-contact-grid">
                <div className="about-contact-icon">
                  <img src="assets/img/icon/mail.svg" alt="" />
                </div>
                <div className="about-contact-details">
                  <h6 className="box-title">Email Address</h6>
                  <p className="about-contact-details-text">
                    <a href="mailto:mailinfo00@tourm.com"
                      >mailinfo00@tourm.com</a>
                  </p>
                  <p className="about-contact-details-text">
                    <a href="mailto:support24@tourm.com">support24@tourm.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="team-area3 position-relative bg-top-center space"
         style={{ backgroundImage: "url('/assets/img/bg/team_bg_2.jpg')" }}
    >
      <div className="container z-index-common">
        <div className="title-area text-center">
          <span className="sub-title">Meet with Guide</span>
          <h2 className="sec-title">Meet with Tour Guide</h2>
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
    </div>
  )
}

export default Tourguiderdetails