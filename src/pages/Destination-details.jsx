import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useParams } from "react-router-dom";
import { destinations } from "../data/destinations.js";

function Destinationdetails() {
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    const found = destinations.find((d) => d.slug === slug);
    setDestination(found || destinations[0]); // fallback to first
  }, [slug]);

  if (!destination) {
    return <div>Loading...</div>;
  }

  const {
    title,
    heroImg,
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

  return (
    <div>
      <div
        className="breadcumb-wrapper"
        style={{ backgroundImage: `url('${destination.backgroundImage}')` }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">{title}</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Destination Details</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="space">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="page-single">
                <div className="service-img">
                  <img src={"/" + heroImg} alt={title} />
                </div>
                <div className="page-content d-block">
                  <div className="page-meta mt-50 mb-45">
                    <a className="page-tag" href="/tour">
                      Featured
                    </a>
                    <span className="ratting">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <span>{rating}</span>
                    </span>
                  </div>
                  <h2 className="box-title">{shortDesc}</h2>
                  <p className="blog-text mb-30">{longDesc}</p>
                  <h2 className="box-title">Basic Information</h2>
                  <div className="destination-checklist">
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
                  <h2 className="box-title">Highlights</h2>
                  <div className="checklist">
                    <ul>
                      {highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="destination-gallery-wrapper">
                  <h3 className="page-title mt-30 mb-30">From our gallery</h3>
                  <Swiper
                    modules={[Navigation, Pagination, EffectFade]}
                    className="destination-gallery-carousel"
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    effect="fade"
                    loop={true}
                  >
                    {gallery.map((img, i) => (
                      <SwiperSlide key={i}>
                        <div className="gallery-slide">
                          <img
                            src={"/" + img}
                            alt="gallery image"
                            className="img-fluid w-100"
                            style={{ height: "400px", objectFit: "cover" }}
                          />
                          <a
                            href={"/" + img}
                            className="icon-btn popup-image position-absolute top-50 start-50 translate-middle"
                          >
                            <i className="fal fa-magnifying-glass-plus"></i>
                          </a>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <section id="book" className="space-top">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <div className="section-header style2 text-center">
                          <h2 className="section-title">Book This Tour</h2>
                          <p>
                            {title} - {duration} | {price} per person
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8 mx-auto">
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
                <div className="th-comments-wrap style2">
                  <h2 className="blog-inner-title h4">Reviews ({reviews})</h2>
                  {/* static reviews keep */}
                  <ul className="comment-list">
                    {/* keep existing reviews */}
                    <li className="th-comment-item">
                      {/* ... keep all comment JSX ... */}
                    </li>
                    {/* ... */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-5">{/* keep sidebar */}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Destinationdetails;
