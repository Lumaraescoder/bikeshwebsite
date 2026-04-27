import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { destinations } from "../data/destinations.js";

function Tourdetails() {
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const found = destinations.find((d) => d.slug === slug);
    setDestination(found || destinations[0]);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!destination) {
    return <div>Loading...</div>;
  }

  const {
    title,
    heroImg,
    backgroundImage,
    shortDesc,
    longDesc,
    duration,
    price,
    rating,
    reviews,
    location,
    visa,
    language,
    currency,
    bestTime,
    highlights,
    gallery,
  } = destination;

  const sliderImages = gallery.length > 0 ? gallery : [heroImg];

  return (
    <div>
      <div
        className="breadcumb-wrapper"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">{title}</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Tour Details</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="space">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="tour-page-single">
                <div className="slider-area tour-slider1">
                  <Swiper
                    modules={[Navigation, EffectFade, Thumbs]}
                    effect="fade"
                    loop={true}
                    thumbs={{
                      swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                          ? thumbsSwiper
                          : null,
                    }}
                    navigation={{
                      prevEl: ".slider-prev",
                      nextEl: ".slider-next",
                    }}
                    className="swiper th-slider mb-4"
                  >
                    {sliderImages.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="tour-slider-img">
                          <img
                            src={"/" + img}
                            alt={title}
                            style={{
                              width: "100%",
                              maxHeight: "500px",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Swiper
                    modules={[Thumbs]}
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={10}
                    breakpoints={{
                      0: { slidesPerView: 2 },
                      576: { slidesPerView: 2 },
                      768: { slidesPerView: 3 },
                      992: { slidesPerView: 3 },
                      1200: { slidesPerView: 3 },
                    }}
                    className="swiper th-slider tour-thumb-slider"
                  >
                    {sliderImages.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="tour-slider-img">
                          <img src={"/" + img} alt={title} />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <button className="slider-arrow style3 slider-prev">
                    <img src="assets/img/icon/hero-arrow-left.svg" alt="" />
                  </button>
                  <button className="slider-arrow style3 slider-next">
                    <img src="assets/img/icon/hero-arrow-right.svg" alt="" />
                  </button>
                </div>
                <div className="page-content">
                  <div className="page-meta mb-45">
                    <a className="page-tag" href="/tour">
                      Featured
                    </a>
                    <span className="ratting">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <span>{rating}</span>
                    </span>
                  </div>
                  <h2 className="box-title">{shortDesc}</h2>
                  <h4 className="tour-price">
                    <span className="currency">{price}</span>/Person
                  </h4>
                  <p className="box-text mb-30">{longDesc}</p>
                  <h2 className="box-title">Highlights</h2>
                  <div className="checklist mb-50">
                    <ul>
                      {highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                  <h2 className="box-title">Basic Information</h2>
                  <div className="destination-checklist mb-50">
                    <div className="checklist style2">
                      <ul>
                        <li>Destination</li>
                        <li>Visa Requirements</li>
                        <li>Language</li>
                        <li>Currency Used</li>
                        <li>Best Time</li>
                        <li>Duration</li>
                        <li>Per Person</li>
                      </ul>
                    </div>
                    <div className="checklist style2">
                      <ul>
                        <li>{location}</li>
                        <li>{visa}</li>
                        <li>{language}</li>
                        <li>{currency}</li>
                        <li>{bestTime}</li>
                        <li>{duration}</li>
                        <li>{price}</li>
                      </ul>
                    </div>
                  </div>
                  <h2 className="box-title">Included and Excluded</h2>
                  <p className="blog-text mb-35">
                    This tour includes the best of Lisbon with expert local
                    guides, comfortable tuk-tuk transport, and unforgettable
                    experiences. Some personal expenses and travel insurance are
                    not included.
                  </p>
                  <div className="destination-checklist">
                    <div className="checklist style2 style4">
                      <ul>
                        <li>Expert Local Guide</li>
                        <li>Tuk-Tuk Transport</li>
                        <li>Photo Stops</li>
                        <li>Sightseeing</li>
                        <li>Route Planning</li>
                        <li>Local Tips</li>
                      </ul>
                    </div>
                    <div className="checklist style5">
                      <ul>
                        <li>Meals</li>
                        <li>Entry Tickets</li>
                        <li>Travel Insurance</li>
                        <li>Personal Expenses</li>
                        <li>Gratuities</li>
                        <li>Hotel Pickup</li>
                      </ul>
                    </div>
                  </div>

                  {/* Booking Form Section */}
                  <section id="book" className="space-top mb-50">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-12">
                          <div className="section-header style2 text-center">
                            <h2 className="section-title">Book This Tour</h2>
                            <p>
                              {title} - {duration} | {price} per person
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 mx-auto">
                          <form className="tour-book-form">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Full Name"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email Address"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Phone Number"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="date"
                                    className="form-control"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <select className="form-control" required>
                                    <option>Number of People</option>
                                    <option>1 Person</option>
                                    <option>2 People</option>
                                    <option>3+ People</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    rows="4"
                                    placeholder="Special Requirements"
                                  ></textarea>
                                </div>
                              </div>
                              <div className="col-12">
                                <button type="submit" className="th-btn w-100">
                                  Book Now - {price}
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </section>

                  <h3 className="page-title mt-50 mb-0">Tour Plan</h3>
                  <ul className="nav nav-tabs tour-tab mt-10" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="day-tab1"
                        data-bs-toggle="tab"
                        data-bs-target="#day-tab1-pane"
                        type="button"
                        role="tab"
                        aria-controls="day-tab1-pane"
                        aria-selected="true"
                      >
                        Part 01
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="day-tab2"
                        data-bs-toggle="tab"
                        data-bs-target="#day-tab2-pane"
                        type="button"
                        role="tab"
                        aria-controls="day-tab2-pane"
                        aria-selected="false"
                      >
                        Part 02
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="day-tab3"
                        data-bs-toggle="tab"
                        data-bs-target="#day-tab3-pane"
                        type="button"
                        role="tab"
                        aria-controls="day-tab3-pane"
                        aria-selected="false"
                      >
                        Part 03
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="day-tab1-pane"
                      role="tabpanel"
                      aria-labelledby="day-tab1"
                      tabindex="0"
                    >
                      <div className="tour-grid-plan">
                        <div className="checklist">
                          <ul>
                            <li>Meet your guide and board the tuk-tuk</li>
                            <li>Start the tour with a brief introduction</li>
                            <li>Visit the first iconic landmark</li>
                            <li>Enjoy scenic photo opportunities</li>
                            <li>Learn about local history and culture</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="day-tab2-pane"
                      role="tabpanel"
                      aria-labelledby="day-tab2"
                      tabindex="0"
                    >
                      <div className="tour-grid-plan">
                        <div className="checklist">
                          <ul>
                            <li>Continue through historic neighborhoods</li>
                            <li>Stop at panoramic viewpoints</li>
                            <li>Discover hidden gems and local stories</li>
                            <li>Experience authentic Lisbon atmosphere</li>
                            <li>Take a short break for refreshments</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="day-tab3-pane"
                      role="tabpanel"
                      aria-labelledby="day-tab3"
                      tabindex="0"
                    >
                      <div className="tour-grid-plan">
                        <div className="checklist">
                          <ul>
                            <li>Visit the final highlights of the tour</li>
                            <li>Capture last memorable photos</li>
                            <li>Receive local recommendations</li>
                            <li>Return to the starting point</li>
                            <li>Say goodbye to your guide</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area">
                <div className="widget widget_tag_cloud">
                  <h3 className="widget_title">Popular Tags</h3>
                  <div className="tagcloud">
                    <a href="/blog">Tour</a>
                    <a href="/blog">Adventure</a>
                    <a href="/blog">Rent</a> <a href="/blog">Innovate</a>
                    <a href="/blog">Hotel</a> <a href="/blog">Modern</a>
                    <a href="/blog">Luxury</a> <a href="/blog">Travel</a>
                  </div>
                </div>
              </aside>
            </div>
          </div>

          <div className="location-map">
            <h3 className="page-title mt-45 mb-30">Location</h3>
            <div className="contact-map style3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.979956374462!2d-9.142685923699003!3d38.72224937175854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4e33b%3A0x400ebbde49036d0!2sLisbon%2C%20Portugal!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
              <div className="contact-icon">
                <img src="assets/img/icon/location-dot3.svg" alt="" />
              </div>
            </div>
          </div>
          <div
            className="shape-mockup about-shape movingX d-none d-xxl-block"
            data-bottom="40%"
            data-right="0%"
          >
            <img src="assets/img/normal/about-slide-img.png" alt="shape" />
          </div>
          <div
            className="shape-mockup about-rating d-none d-xxl-block"
            data-bottom="48%"
            data-right="-12%"
          >
            <i className="fa-sharp fa-solid fa-star"></i>
            <span>4.9k</span>
          </div>
          <div
            className="shape-mockup about-emoji d-none d-xxl-block"
            data-bottom="45%"
            data-right="20%"
          >
            <img src="assets/img/icon/emoji.png" alt="" />
          </div>
          <div
            className="shape-mockup shape1 d-none d-xxl-block"
            data-bottom="55%"
            data-right="-12%"
          >
            <img src="assets/img/shape/shape_1.png" alt="shape" />
          </div>
          <div
            className="shape-mockup shape2 d-none d-xl-block"
            data-bottom="51%"
            data-right="-8%"
          >
            <img src="assets/img/shape/shape_2.png" alt="shape" />
          </div>
          <div
            className="shape-mockup shape3 d-none d-xxl-block"
            data-bottom="53%"
            data-right="-5%"
          >
            <img src="assets/img/shape/shape_3.png" alt="shape" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tourdetails;
