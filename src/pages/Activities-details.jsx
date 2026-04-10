import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Thumbs } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";

function Activitiesdetails() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
   const images = [
    "assets/img/tour/tour_inner_2_1.jpg",
    "assets/img/tour/tour_inner_2_2.jpg",
    "assets/img/tour/tour_inner_2_3.jpg",
    "assets/img/tour/tour_inner_2_4.jpg",
  ];
  return (
    <div>
      <div className="breadcumb-wrapper"style={{ backgroundImage: "url('/assets/img/bg/breadcumb-bg.jpg')" }}>
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Activity Single</h1>
            <ul className="breadcumb-menu">
              <li><a href="home-travel.html">Home</a></li>
              <li>Activity Single</li>
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
    effect="fade"
    loop={true}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    thumbs={{ swiper: thumbsSwiper }}
    modules={[EffectFade, Thumbs, Autoplay]}
    className="swiper th-slider mb-4"
  >
    {[
      "assets/img/tour/tour_inner_2_1.jpg",
      "assets/img/tour/tour_inner_2_2.jpg",
      "assets/img/tour/tour_inner_2_3.jpg",
      "assets/img/tour/tour_inner_2_4.jpg",
    ].map((src, index) => (
      <SwiperSlide key={index}>
        <div className="tour-slider-img">
          <img src={src} alt={`Slide ${index + 1}`} />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Thumbnails Swiper */}
  <Swiper
    onSwiper={setThumbsSwiper}
    spaceBetween={10}
    loop={true}
    slidesPerView={3}
    modules={[Thumbs]}
    breakpoints={{
      0: { slidesPerView: 2 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 3 },
    }}
    className="swiper th-slider tour-thumb-slider"
  >
    {[
      "assets/img/tour/tour_inner_2_1.jpg",
      "assets/img/tour/tour_inner_2_2.jpg",
      "assets/img/tour/tour_inner_2_3.jpg",
      "assets/img/tour/tour_inner_2_4.jpg",
      "assets/img/tour/tour_inner_2_1.jpg",
      "assets/img/tour/tour_inner_2_2.jpg",
      "assets/img/tour/tour_inner_2_3.jpg",
      "assets/img/tour/tour_inner_2_4.jpg",
    ].map((src, index) => (
      <SwiperSlide key={index}>
        <div className="tour-slider-img">
          <img src={src} alt={`Thumb ${index + 1}`} />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
                  <button
                    data-slider-prev="#tourSlider4"
                    className="slider-arrow style3 slider-prev"
                  >
                    <img src="assets/img/icon/hero-arrow-left.svg" alt="" />
                  </button>
                  <button
                    data-slider-next="#tourSlider4"
                    className="slider-arrow style3 slider-next"
                  >
                    <img src="assets/img/icon/hero-arrow-right.svg" alt="" />
                  </button>
                </div>
                <div className="page-content">
                  <div className="page-meta mb-45">
                    <a className="page-tag" href="/tour">Featured</a>
                    <span className="ratting"
                    ><i className="fa-sharp fa-solid fa-star"></i><span>4.8</span></span>
                  </div>
                  <h2 className="box-title">Explore the Beauty of Maldives Costal</h2>
                  <p className="box-text mb-30">
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci velit, sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore magnam
                    aliquam quaerat voluptatem. Quis autem vel eum iure
                    reprehenderit qui in ea voluptate velit esse quam nihil
                    molestiae consequatur, vel illum qui dolorem eum fugiat quo
                    voluptas nulla pariatur
                  </p>
                  <p className="box-text mb-50">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur
                  </p>
                  <div className="tour-snapshot">
                    <h4 className="box-title">Tour Snapshot</h4>
                    <div className="tour-snap-wrapp">
                      <div className="tour-snap">
                        <div className="icon"><i className="fa-light fa-clock"></i></div>
                        <div className="content">
                          <span className="title">Duration:</span> <span>8h</span>
                        </div>
                      </div>
                      <div className="tour-snap">
                        <div className="icon">
                          <img src="assets/img/icon/guide2.svg" alt="" />
                        </div>
                        <div className="content">
                          <span className="title">Group Size:</span> <span>12</span>
                        </div>
                      </div>
                      <div className="tour-snap">
                        <div className="icon">
                          <img src="assets/img/icon/ship.svg" alt="" />
                        </div>
                        <div className="content">
                          <span className="title">Near Public</span>
                          <span>Transportation</span>
                        </div>
                      </div>
                      <div className="tour-snap">
                        <div className="icon">
                          <img src="assets/img/icon/01.svg" alt="" />
                        </div>
                        <div className="content">
                          <span className="title">Free Cancellation</span>
                          <a href="#" className="line-btn">Learn more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="box-title">Overview</h2>
                  <p className="box-text mb-50">
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci velit, sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore magnam
                    aliquam quaerat voluptatem. Quis autem vel eum iure
                    reprehenderit qui in ea voluptate velit esse quam nihil
                    molestiae consequatur, vel illum qui dolorem eum fugiat quo
                    voluptas nulla pariatur.
                  </p>
                  <h2 className="box-title">Highlights</h2>
                  <p className="box-text mb-30">
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci.
                  </p>
                  <div className="checklist mb-50">
                    <ul>
                      <li>Visit most popular location of Maldives</li>
                      <li>
                        Buffet Breakfast for all traveler with good quality.
                      </li>
                      <li>
                        Expert guide always guide you and give informations.
                      </li>
                      <li>Best Hotel for all also great food.</li>
                      <li>Helping all traveler for Money Exchange.</li>
                      <li>
                        Buffet Breakfast for all traveler with good quality..
                      </li>
                      <li>
                        Buffet Breakfast for all traveler with good quality.
                      </li>
                    </ul>
                  </div>
                  <h2 className="box-title">Important Information</h2>
                  <p className="blog-text mb-35">
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci.
                  </p>
                  <div className="activities-checklist mb-50">
                    <div className="checklist style2">
                      <ul>
                        <li>Expert guide</li>
                        <li>Admission to Windsor Castle</li>
                        <li>Wi-Fi and USB Charging On-board</li>
                        <li>Admission to Stonehenge</li>
                        <li>Departure Date</li>
                        <li>Hotel pick-up and drop-off</li>
                      </ul>
                    </div>
                    <div className="checklist style2">
                      <ul>
                        <li>
                          Departures from 01st April 2024: Tour departs at 8 am
                        </li>
                        <li>
                          boarding at 7.30 am, Victoria Coach Station Gate 1-5
                        </li>
                        <li>Duration: 11h</li>
                        <li>Mobile tickets accepted</li>
                        <li>Instant confirmation</li>
                      </ul>
                    </div>
                  </div>
                  <h2 className="box-title">Included and Excluded</h2>
                  <p className="blog-text mb-35">
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci.
                  </p>
                  <div className="destination-checklist">
                    <div className="checklist style2 style4">
                      <ul>
                        <li>Hotel Fair</li>
                        <li>Transportation</li>
                        <li>Breakfast</li>
                        <li>Sightseeing</li>
                        <li>Travel Tax</li>
                        <li>Seasonal Food</li>
                      </ul>
                    </div>
                    <div className="checklist style5">
                      <ul>
                        <li>WIFI</li>
                        <li>Swimming Pool</li>
                        <li>GYM</li>
                        <li>Travel Insurance</li>
                        <li>Family Expenses</li>
                        <li>Family Expenses</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="location-map">
                  <h3 className="page-title mt-45 mb-30">Activity Location</h3>
                  <div className="contact-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                    <div className="contact-icon">
                      <img src="assets/img/icon/location-dot3.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="th-comments-wrap style2">
                  <h2 className="blog-inner-title h4">Reviews (3)</h2>
                  <ul className="comment-list">
                    <li className="th-comment-item">
                      <div className="th-post-comment">
                        <div className="comment-avater">
                          <img
                            src="assets/img/blog/comment-author-1.jpg"
                            alt="Comment Author"
                          />
                        </div>
                        <div className="comment-content">
                          <h3 className="name">Adam Jhon</h3>
                          <div className="commented-wrapp">
                            <span className="commented-on">20 Jun, 2024</span>
                            <span className="commented-time">08:56pm </span><span className="comment-review"
                            ><i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i></span>
                          </div>
                          <p className="text">
                            Credibly pontificate transparent quality vectors with
                            quality mindshare. Efficiently architect worldwide
                            strategic theme areas after user.
                          </p>
                          <div className="reply_and_edit">
                            <i className="fa-solid fa-thumbs-up"></i>
                          </div>
                        </div>
                      </div>
                      <ul className="children">
                        <li className="th-comment-item">
                          <div className="th-post-comment">
                            <div className="comment-avater">
                              <img
                                src="assets/img/blog/comment-author-4.jpg"
                                alt="Comment Author"
                              />
                            </div>
                            <div className="comment-content">
                              <div className="">
                                <h3 className="name">Maria Willson</h3>
                                <div className="commented-wrapp">
                                  <span className="commented-on">23 Jun, 2024</span>
                                  <span className="commented-time">08:56pm </span><span className="comment-review"
                                  ><i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i></span>
                                </div>
                              </div>
                              <p className="text">
                                It is different from airport transfer or port
                                transfer, which are services that pick you up
                              </p>
                              <div className="reply_and_edit">
                                <i className="fa-solid fa-thumbs-up"></i>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="th-comment-item">
                      <div className="th-post-comment">
                        <div className="comment-avater">
                          <img
                            src="assets/img/blog/comment-author-5.jpg"
                            alt="Comment Author"
                          />
                        </div>
                        <div className="comment-content">
                          <div className="">
                            <h3 className="name">Michel Edwards</h3>
                            <div className="commented-wrapp">
                              <span className="commented-on">27 Jun, 2024</span>
                              <span className="commented-time">08:56pm </span><span className="comment-review"
                              ><i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i></span>
                            </div>
                          </div>
                          <p className="text">
                            Credibly pontificate transparent quality vectors with
                            quality mindshare. Efficiently architect worldwide
                            strategic theme areas after user.
                          </p>
                          <div className="reply_and_edit">
                            <i className="fa-solid fa-thumbs-up"></i>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="th-comment-form">
                  <div className="row">
                    <h3 className="blog-inner-title h4 mb-2">Leave a Reply</h3>
                    <p className="mb-25">
                      Your email address will not be published. Required fields
                      are marked
                    </p>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Full Name*"
                        className="form-control"
                        required
                      />
                      <i className="far fa-user"></i>
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Your Email*"
                        className="form-control"
                        required
                      />
                      <i className="far fa-envelope"></i>
                    </div>
                    <div className="col-12 form-group">
                      <input
                        type="text"
                        placeholder="Website"
                        className="form-control"
                        required
                      />
                      <i className="far fa-globe"></i>
                    </div>
                    <div className="col-12 form-group">
                      <textarea
                        placeholder="Comment*"
                        className="form-control"
                      ></textarea>
                      <i className="far fa-pencil"></i>
                    </div>
                    <div className="col-12 form-group">
                      <input type="checkbox" id="html" />
                      <label for="html"
                      >Save my name, email, and website in this browser for the
                        next time I comment.</label>
                    </div>
                    <div className="col-12 form-group mb-0">
                      <button className="th-btn">
                        Send Message<img
                          src="assets/img/icon/plane2.svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area style2">
                <div className="widget widget_search">
                  <form className="search-form">
                    <input type="text" placeholder="Search" />
                    <button type="submit"><i className="far fa-search"></i></button>
                  </form>
                </div>
                <div className="widget widget_categories">
                  <h3 className="widget_title">Categories</h3>
                  <ul>
                    <li>
                      <a href="/blog"
                      ><img src="assets/img/theme-img/map.svg" alt="" />City
                        Tour</a>
                      <span>(8)</span>
                    </li>
                    <li>
                      <a href="/blog"
                      ><img src="assets/img/theme-img/map.svg" alt="" />Beach
                        Tours</a>
                      <span>(6)</span>
                    </li>
                    <li>
                      <a href="/blog"
                      ><img src="assets/img/theme-img/map.svg" alt="" />Wildlife
                        Tours</a>
                      <span>(2)</span>
                    </li>
                    <li>
                      <a href="/blog"
                      ><img src="assets/img/theme-img/map.svg" alt="" />News &
                        Tips</a>
                      <span>(7)</span>
                    </li>
                    <li>
                      <a href="/blog"
                      ><img
                          src="assets/img/theme-img/map.svg"
                          alt=""
                        />Adventure Tours</a>
                      <span>(9)</span>
                    </li>
                    <li>
                      <a href="/blog"
                      ><img src="assets/img/theme-img/map.svg" alt="" />Mountain
                        Tours</a>
                      <span>(10)</span>
                    </li>
                  </ul>
                </div>
                <div className="widget tour-booking">
                  <p className="widget_subtitle">
                    From <span className="widget_price">$75.00</span>
                  </p>
                  <div className="info-list">
                    <ul>
                      <li>
                        <strong>Date </strong><span>sun 15 June - Fri 20 July</span>
                      </li>
                      <li>
                        <strong>Number of travelers</strong>
                        <span>2 adults - 1 childeren - 1 room</span>
                      </li>
                    </ul>
                  </div>
                  <a href="/contact" className="th-btn th-icon">Book Now</a>
                  <span className="review"
                  ><i className="fa-light fa-heart"></i> 88% of travelers recommend
                    this experience</span>
                </div>
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
                <div
                  className="widget widget_offer"
                   style={{ backgroundImage: "url('/assets/img/bg/widget_bg_1.jpg')" }}
                >
                  <div className="offer-banner">
                    <div className="offer">
                      <h6 className="box-title">
                        Need Help? We Are Here To Help You
                      </h6>
                      <div className="banner-logo">
                        <img src="assets/img/logo2.svg" alt="Tourm" />
                      </div>
                      <div className="offer">
                        <h6 className="offer-title">You Get Online support</h6>
                        <a className="offter-num" href="%2b256214203215.html"
                        >+256 214 203 215</a>
                      </div>
                      <a href="/contact" className="th-btn style2 th-icon"
                      >Read More</a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Activitiesdetails