import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { destinations } from "../data/destinations.js";

const PRICE_TABLE = {
  1: { 1: 30, 2: 60, 3: 90, 4: 120, 5: 150, 6: 180 },
  2: { 1: 60, 2: 120, 3: 180, 4: 240, 5: 300, 6: 360 },
  3: { 1: 90, 2: 180, 3: 270, 4: 360, 5: 450, 6: 540 },
  4: { 1: 120, 2: 240, 3: 360, 4: 480, 5: 500, 6: 600 },
  5: { 1: 150, 2: 300, 3: 450, 4: 500, 5: 600, 6: 700 },
  6: { 1: 180, 2: 300, 3: 500, 4: 600, 5: 700, 6: 800 },
  7: { 1: 200, 2: 350, 3: 500, 4: 600, 5: 700, 6: 800 },
};

function getBookingPrice(people, hours) {
  return PRICE_TABLE[people]?.[hours] ?? 0;
}

function Tourdetails() {
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [people, setPeople] = useState(1);
  const [hours, setHours] = useState(1);
  const [startTime, setStartTime] = useState("");
  const totalPrice = getBookingPrice(people, hours);

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
                {/* Slider */}
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
                              maxHeight:
                                window.innerWidth > 767 ? "500px" : "350px",
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
                    <img src="/assets/img/icon/hero-arrow-left.svg" alt="" />
                  </button>
                  <button className="slider-arrow style3 slider-next">
                    <img src="/assets/img/icon/hero-arrow-right.svg" alt="" />
                  </button>
                </div>

                {/* Content */}
                <div className="page-content">
                  <div className="page-meta mb-45">
                    <a className="page-tag" href="/tour">
                      Tuk Tuk Tour
                    </a>
                    <span className="ratting">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <span>{rating}</span>
                    </span>
                  </div>

                  <h2 className="box-title">{shortDesc}</h2>
                  <h4 className="tour-price">
                    <span className="currency">{price}</span> / Per Person /
                    hour
                  </h4>

                  <p className="box-text mb-30">{longDesc}</p>

                  <h2 className="box-title">Tour Highlights</h2>
                  <div className="checklist mb-50">
                    <ul>
                      {highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  <h2 className="box-title">Tour Information</h2>
                  <div className="destination-checklist mb-50">
                    <div className="checklist style2">
                      <ul>
                        <li>Destination</li>
                        <li>Language</li>
                        <li>Currency</li>
                        <li>Best Time to Visit</li>
                        <li>Duration</li>
                        <li>Price Per Person</li>
                      </ul>
                    </div>
                    <div className="checklist style2">
                      <ul>
                        <li>{location}</li>
                        <li>{language}</li>
                        <li>{currency}</li>
                        <li>{bestTime}</li>
                        <li>{duration}</li>
                        <li>{price}</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="box-title">What's Included & Not Included</h2>
                  <p className="blog-text mb-35">
                    All our tuk tuk tours include a friendly and knowledgeable
                    local guide who will take you through the most iconic and
                    hidden corners of Lisbon. We handle everything so you can
                    just sit back, enjoy the breeze and fall in love with the
                    city. Some personal expenses are not included.
                  </p>
                  <div className="destination-checklist">
                    <div className="checklist style2 style4">
                      <ul>
                        <li>Private Tuk Tuk</li>
                        <li>Local Expert Guide</li>
                        <li>Hotel / Meeting Point Pickup</li>
                        <li>Scenic Photo Stops</li>
                        <li>Customisable Route</li>
                        <li>Bottled Water</li>
                      </ul>
                    </div>
                    <div className="checklist style5">
                      <ul>
                        <li>Meals & Drinks</li>
                        <li>Museum Entry Tickets</li>
                        <li>Travel Insurance</li>
                        <li>Personal Expenses</li>
                        <li>Gratuities (optional)</li>
                        <li>Hotel Drop-off</li>
                      </ul>
                    </div>
                  </div>

                  {/* Booking Form */}
                  <section id="contact" className="space-top mb-50">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-12">
                          <div className="section-header style2 text-center">
                            <h2 className="section-title">
                              Book This Tuk Tuk Tour
                            </h2>
                            <p>
                              {title} — {duration} &nbsp;|&nbsp; {price} per
                              person
                            </p>
                            <p style={{ fontSize: "14px", color: "#888" }}>
                              Free cancellation up to 24 hours before the tour.
                              Instant confirmation.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 mx-auto">
                          <form
                            className="tour-book-form"
                            action="https://formspree.io/f/mlgznboo"
                            method="POST"
                            onSubmit={(e) => {
                              // basic validation: ensure required booking fields are present
                              if (!people || !hours || !startTime) {
                                e.preventDefault();
                                alert(
                                  "Please select number of people, hours and a start time before submitting.",
                                );
                              }
                            }}
                          >
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="name"
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
                                    name="email"
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
                                    name="phone"
                                    className="form-control"
                                    placeholder="Phone / WhatsApp Number"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="date"
                                    name="date"
                                    className="form-control"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label style={{ fontSize: "14px" }}>
                                    Number of Passengers
                                  </label>
                                  <select
                                    name="people"
                                    className="form-control"
                                    required
                                    value={people}
                                    onChange={(e) =>
                                      setPeople(Number(e.target.value))
                                    }
                                  >
                                    <option value={1}>1 Passenger</option>
                                    <option value={2}>2 Passengers</option>
                                    <option value={3}>3 Passengers</option>
                                    <option value={4}>4 Passengers</option>
                                    <option value={5}>5 Passengers</option>
                                    <option value={6}>6 Passengers</option>
                                    <option value={7}>7 Passengers</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label style={{ fontSize: "14px" }}>
                                    Hours
                                  </label>
                                  <select
                                    name="hours"
                                    className="form-control"
                                    required
                                    value={hours}
                                    onChange={(e) =>
                                      setHours(Number(e.target.value))
                                    }
                                  >
                                    <option value={1}>1 hour</option>
                                    <option value={2}>2 hours</option>
                                    <option value={3}>3 hours</option>
                                    <option value={4}>4 hours</option>
                                    <option value={5}>5 hours</option>
                                    <option value={6}>6 hours</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label style={{ fontSize: "14px" }}>
                                    Start Time
                                  </label>
                                  <input
                                    type="time"
                                    name="start_time"
                                    className="form-control"
                                    required
                                    value={startTime}
                                    onChange={(e) =>
                                      setStartTime(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label style={{ fontSize: "14px" }}>
                                    Pick up
                                  </label>
                                  <input
                                    type="text"
                                    name="pickup"
                                    className="form-control"
                                    placeholder="Pick up"
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group">
                                  <textarea
                                    name="message"
                                    className="form-control"
                                    rows="4"
                                    placeholder="Special requests, accessibility needs or anything you'd like us to know..."
                                  ></textarea>
                                </div>
                              </div>
                              <div className="col-12">
                                <input
                                  type="hidden"
                                  name="_subject"
                                  value={`New Tuk Tuk Booking — ${title}`}
                                />
                                <input
                                  type="hidden"
                                  name="total_price"
                                  value={`${totalPrice} €`}
                                />

                                <div style={{ marginBottom: 12 }}>
                                  <strong>Total:</strong> {totalPrice} € •{" "}
                                  <strong>Duration:</strong> {hours}h •{" "}
                                  <strong>Time:</strong> {startTime || "—"}
                                </div>

                                <button type="submit" className="th-btn w-100">
                                  Book Tour — {totalPrice} €
                                </button>
                                <p
                                  style={{
                                    textAlign: "center",
                                    fontSize: "13px",
                                    color: "#999",
                                    marginTop: "12px",
                                  }}
                                >
                                  We'll confirm your booking by email within 2
                                  hours. No payment required now.
                                </p>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area">
                <div className="widget widget_tag_cloud">
                  <h3 className="widget_title">Tour Tags</h3>
                  <div className="tagcloud">
                    <a href="/tour">Tuk Tuk</a>
                    <a href="/tour">Lisbon</a>
                    <a href="/tour">Alfama</a>
                    <a href="/tour">Belém</a>
                    <a href="/tour">Sightseeing</a>
                    <a href="/tour">Private Tour</a>
                    <a href="/tour">Family Friendly</a>
                    <a href="/tour">City Tour</a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tourdetails;
