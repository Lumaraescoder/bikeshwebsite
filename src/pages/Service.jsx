import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import "swiper/css/effect-coverflow";

function Service() {
  
  const tourPackages = [
  {
    id: 1,
    title: "Caravan Trip Package",
    image: "assets/img/tour/tour_box_13.jpg",
    rating: 4.8,
    price: 980,
    duration: "7 Days",
  },
  {
    id: 2,
    title: "Sleeper Buses Package",
    image: "assets/img/tour/tour_box_14.jpg",
    rating: 4.8,
    price: 980,
    duration: "7 Days",
  },
  {
    id: 3,
    title: "Trips by Train Package",
    image: "assets/img/tour/tour_box_15.jpg",
    rating: 4.8,
    price: 980,
    duration: "7 Days",
  },
  {
    id: 4,
    title: "Travel by Air Flight Package",
    image: "assets/img/tour/tour_box_16.jpg",
    rating: 4.8,
    price: 980,
    duration: "7 Days",
  },
  {
    id: 5,
    title: "Cruise Transports Package",
    image: "assets/img/tour/tour_box_17.jpg",
    rating: 4.8,
    price: 980,
    duration: "7 Days",
  },
  {
    id: 6,
    title: "Travel by Air Flight Package",
    image: "assets/img/tour/tour_box_18.jpg",
    rating: 4.8,
    price: 980,
    duration: "7 Days",
  },
  {
    id: 7,
    title: "Sleeper Buses Package",
    image: "assets/img/tour/tour_box_19.jpg",
    rating: 4.8,
    price: 980,
    duration: "7 Days",
  },
  {
    id: 8,
    title: "Trips by Train Package",
    image: "assets/img/tour/tour_box_20.jpg",
    rating: 4.8,
    price: 980,
    duration: "7 Days",
  },
];

const tours = [
  {
    img: "assets/img/tour/tour_box_5.jpg",
    title: "The Plaza, New York",
    price: "$980.00",
    days: 7,
    rating: 5,
    ratingCount: 4.8,
  },
  {
    img: "assets/img/tour/tour_box_6.jpg",
    title: "Hotel Ritz Paris",
    price: "$970.00",
    days: 7,
    rating: 5,
    ratingCount: 4.8,
  },
  {
    img: "assets/img/tour/tour_box_7.jpg",
    title: "Claridge’s, London",
    price: "$960.00",
    days: 7,
    rating: 5,
    ratingCount: 4.8,
  },
  {
    img: "assets/img/tour/tour_box_8.jpg",
    title: "Taj Mahal Palace, India",
    price: "$940.00",
    days: 7,
    rating: 5,
    ratingCount: 4.8,
  },
  {
    img: "assets/img/tour/tour_box_9.jpg",
    title: "Peninsula Hong Kong",
    price: "$970.00",
    days: 7,
    rating: 5,
    ratingCount: 4.8,
  },
  {
    img: "assets/img/tour/tour_box_10.jpg",
    title: "The Ritz Hotel London",
    price: "$940.00",
    days: 7,
    rating: 5,
    ratingCount: 4.8,
  },
  {
    img: "assets/img/tour/tour_box_11.jpg",
    title: "The Shelbourne Hotel, Dublin",
    price: "$990.00",
    days: 7,
    rating: 5,
    ratingCount: 4.8,
  },
  {
    img: "assets/img/tour/tour_box_12.jpg",
    title: "Beverly Hills Hotel",
    price: "$950.00",
    days: 7,
    rating: 5,
    ratingCount: 4.8,
  },
];
  return (
    <div>
    <div className="breadcumb-wrapper" style={{ backgroundImage: "url('/assets/img/bg/breadcumb-bg.jpg')" }}>
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">Services</h1>
          <ul className="breadcumb-menu">
            <li><a href="/">Home</a></li>
            <li>Services</li>
          </ul>
        </div>
      </div>
    </div>
    <section
      className="position-relative overflow-hidden space"
      id="destination-sec"
    >
      <div className="container">
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
        <div
          className="shape-mockup shape1 d-none d-xxl-block"
          data-bottom="17%"
          data-right="-9%"
        >
          <img src="assets/img/shape/shape_1.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape2 d-none d-xl-block"
          data-bottom="8%"
          data-right="-8%"
        >
          <img src="assets/img/shape/shape_2.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape3 d-none d-xxl-block"
          data-bottom="15%"
          data-right="-4%"
        >
          <img src="assets/img/shape/shape_3.png" alt="shape" />
        </div>
      </div>
    </section>
    <section
      className="tour-area3 position-relative bg-top-center overflow-hidden space"
      id="service-sec"
     style={{ backgroundImage: "url('/assets/img/bg/tour_bg_1.jpg')" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center">
              <span className="sub-title">Best Experience</span>
              <h2 className="sec-title">Amazing Travel Experience</h2>
            </div>
          </div>
        </div>
        <div className="nav nav-tabs tour-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link th-btn active"
            id="nav-step1-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-step1"
            type="button"
          >
            <img src="assets/img/icon/tour_icon_1.svg" alt="" />Tour Package
          </button>
          <button
            className="nav-link th-btn"
            id="nav-step2-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-step2"
            type="button"
          >
            <img src="assets/img/icon/tour_icon_2.svg" alt="" />Hotel
          </button>
          <button
            className="nav-link th-btn"
            id="nav-step3-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-step3"
            type="button"
          >
            <img src="assets/img/icon/tour_icon_3.svg" alt="" />Transport
          </button>
        </div>
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade active show" id="nav-step1" role="tabpanel">
              <div className="slider-area tour-slider">
            <Swiper
              modules={[Navigation]}
              navigation
              // pagination={{ clickable: true }}
              spaceBetween={20}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
                1300: { slidesPerView: 4 },
              }}
              className="th-slider has-shadow slider-drag-wrap"
            >
              {[ // Create an array for your tours, then map over it:
                {
                  img: 'assets/img/tour/tour_box_1.jpg',
                  title: 'Greece Tour Package',
                  rating: 5,
                  ratingCount: 4.8,
                  price: '$980.00',
                  days: 7,
                },
                {
                  img: 'assets/img/tour/tour_box_2.jpg',
                  title: 'Italy Tour package',
                  rating: 5,
                  ratingCount: 4.8,
                  price: '$980.00',
                  days: 7,
                },
                {
                  img: 'assets/img/tour/tour_box_3.jpg',
                  title: 'Dubai Tour Package',
                  rating: 5,
                  ratingCount: 4.8,
                  price: '$980.00',
                  days: 7,
                },
                {
                  img: 'assets/img/tour/tour_box_3.jpg',
                  title: 'Dubai Tour Package',
                  rating: 5,
                  ratingCount: 4.8,
                  price: '$980.00',
                  days: 7,
                },
                {
                  img: 'assets/img/tour/tour_box_3.jpg',
                  title: 'Dubai Tour Package',
                  rating: 5,
                  ratingCount: 4.8,
                  price: '$980.00',
                  days: 7,
                },
                {
                  img: 'assets/img/tour/tour_box_3.jpg',
                  title: 'Dubai Tour Package',
                  rating: 5,
                  ratingCount: 4.8,
                  price: '$980.00',
                  days: 7,
                },
                {
                  img: 'assets/img/tour/tour_box_3.jpg',
                  title: 'Dubai Tour Package',
                  rating: 5,
                  ratingCount: 4.8,
                  price: '$980.00',
                  days: 7,
                },
                {
                  img: 'assets/img/tour/tour_box_3.jpg',
                  title: 'Dubai Tour Package',
                  rating: 5,
                  ratingCount: 4.8,
                  price: '$980.00',
                  days: 7,
                },
                {
                  img: 'assets/img/tour/tour_box_4.jpg',
                  title: 'Switzerland',
                  rating: 5,
                  ratingCount: 4.8,
                  price: '$980.00',
                  days: 7,
                },
                // Add more if needed
              ].map(({ img, title, rating, ratingCount, price, days }, index) => (
                <SwiperSlide key={index}>
                  <div className="tour-box th-ani gsap-cursor">
                    <div className="tour-box_img global-img">
                      <img src={img} alt={title} />
                    </div>
                    <div className="tour-content">
                      <h3 className="box-title">
                        <a href="/tour-details">{title}</a>
                      </h3>
                      <div className="tour-rating">
                        <div className="star-rating" role="img" aria-label={`Rated ${rating} out of 5`}>
                          <span style={{ width: `${(rating / 5) * 100}%` }}>
                            Rated <strong className="rating">{rating.toFixed(2)}</strong> out of 5 based on{' '}
                            <span className="rating">{ratingCount}</span>(4.8 Rating)
                          </span>
                        </div>
                        <a href="/tour-details" className="woocommerce-review-link">
                          (<span className="count">{ratingCount}</span> Rating)
                        </a>
                      </div>
                      <h4 className="tour-box_price">
                        <span className="currency">{price}</span>/Person
                      </h4>
                      <div className="tour-action">
                        <span>
                          <i className="fa-light fa-clock"></i>
                          {days} Days
                        </span>
                        <a href="/contact" className="th-btn style4 th-icon">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          </div>
          <div className="tab-pane fade" id="nav-step2" role="tabpanel">
              <div className="slider-area tour-slider">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
            1300: { slidesPerView: 4 },
          }}
          className="th-slider has-shadow slider-drag-wrap"
        >
          {tours.map(({ img, title, price, days, rating, ratingCount }, index) => (
            <SwiperSlide key={index}>
              <div className="tour-box th-ani gsap-cursor">
                <div className="tour-box_img global-img">
                  <img src={img} alt={title} />
                </div>
                <div className="tour-content">
                  <h3 className="box-title">
                    <a href="/tour-details">{title}</a>
                  </h3>
                  <div className="tour-rating">
                    <div
                      className="star-rating"
                      role="img"
                      aria-label={`Rated ${rating} out of 5`}
                    >
                      <span style={{ width: "100%" }}>
                        Rated <strong className="rating">{rating.toFixed(2)}</strong> out of 5 based on{" "}
                        <span className="rating">{ratingCount}</span>(4.8 Rating)
                      </span>
                    </div>
                    <a href="/tour-details" className="woocommerce-review-link">
                      (<span className="count">{ratingCount}</span> Rating)
                    </a>
                  </div>
                  <h4 className="tour-box_price">
                    <span className="currency">{price}</span>/Person
                  </h4>
                  <div className="tour-action">
                    <span>
                      <i className="fa-light fa-clock"></i>
                      {days} Days
                    </span>
                    <a href="/tour-guider-details" className="th-btn style4 th-icon">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
          </div>
          <div className="tab-pane fade" id="nav-step3" role="tabpanel">
             <div className="slider-area tour-slider slider-drag-wrap">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        pagination={{ el: ".slider-pagination", clickable: true }}
        navigation={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 3 },
          1400: { slidesPerView: 4 },
        }}
        className="th-slider has-shadow"
      >
        {tourPackages.map((tour) => (
          <SwiperSlide key={tour.id}>
            <div className="tour-box th-ani gsap-cursor">
              <div className="tour-box_img global-img">
                <img src={tour.image} alt={tour.title} />
              </div>
              <div className="tour-content">
                <h3 className="box-title">
                  <a href="/tour-details">{tour.title}</a>
                </h3>
                <div className="tour-rating">
                  <div
                    className="star-rating"
                    role="img"
                    aria-label={`Rated 5.00 out of 5`}
                  >
                    <span style={{ width: "100%" }}>
                      Rated <strong className="rating">5.00</strong> out of 5
                      based on <span className="rating">{tour.rating}</span> (
                      {tour.rating} Rating)
                    </span>
                  </div>
                  <a
                    href="/tour-details"
                    className="woocommerce-review-link"
                  >
                    (<span className="count">{tour.rating}</span> Rating)
                  </a>
                </div>
                <h4 className="tour-box_price">
                  <span className="currency">${tour.price.toFixed(2)}</span>
                  /Person
                </h4>
                <div className="tour-action">
                  <span>
                    <i className="fa-light fa-clock"></i> {tour.duration}
                  </span>
                  <a
                    href="/tour-guider-details"
                    className="th-btn style4 th-icon"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="slider-pagination"></div>
      </Swiper>
    </div>
          </div>
        </div>
      </div>
    </section>
    <section className="position-relative space-bottom">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Let’s Checkin</span>
          <h2 className="sec-title">Affordable Pricing plans</h2>
        </div>
        <div className="row gy-4 justify-content-center">
          <div className="col-xl-4 col-md-6">
            <div className="price-card">
              <div className="offer-tag">Popular</div>
              <div className="price-card_wrapp">
                <div className="price-card_icon">
                  <img src="assets/img/icon/price_1_1.svg" alt="img" />
                </div>
                <h3 className="box-title">Basic Plan</h3>
              </div>
              <div className="price-card_content">
                <h4 className="price-card_price">
                  $785.00<span className="duration">/Per Night</span>
                </h4>
                <p className="price-card_text">
                  Essential services for basic and signle person seeking.
                </p>
                <div className="checklist">
                  <ul>
                    <li>Up to 2 members</li>
                    <li>Room Service Fees</li>
                    <li>Driver Service Feet</li>
                    <li>Tour management</li>
                    <li>Collaboration</li>
                    <li>Entrance Fees</li>
                    <li>Guide Fees in Destination</li>
                  </ul>
                </div>
              </div>
              <div className="price-btn">
                <a href="/contact" className="th-btn style3 w-100"
                  >Get Started</a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="price-card active">
              <div className="offer-tag">Popular</div>
              <div className="price-card_wrapp">
                <div className="price-card_icon">
                  <img src="assets/img/icon/price_1_2.svg" alt="img" />
                </div>
                <h3 className="box-title">Advanced Plan</h3>
              </div>
              <div className="price-card_content">
                <h4 className="price-card_price">
                  $980.00<span className="duration">/Per Night</span>
                </h4>
                <p className="price-card_text">
                  Essential services for basic and signle person seeking.
                </p>
                <div className="checklist">
                  <ul>
                    <li>Up to 2 members</li>
                    <li>Room Service Fees</li>
                    <li>Driver Service Feet</li>
                    <li>Tour management</li>
                    <li>Collaboration</li>
                    <li>Entrance Fees</li>
                    <li>Auto refresh ads</li>
                  </ul>
                </div>
              </div>
              <div className="price-btn">
                <a href="/contact" className="th-btn style3 w-100"
                  >Get Started</a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="price-card">
              <div className="offer-tag">Popular</div>
              <div className="price-card_wrapp">
                <div className="price-card_icon">
                  <img src="assets/img/icon/price_1_3.svg" alt="img" />
                </div>
                <h3 className="box-title">Premium Plan</h3>
              </div>
              <div className="price-card_content">
                <h4 className="price-card_price">
                  $1580.00<span className="duration">/Per Night</span>
                </h4>
                <p className="price-card_text">
                  Essential services for basic and signle person seeking.
                </p>
                <div className="checklist">
                  <ul>
                    <li>Up to 2 members</li>
                    <li>Room Service Fees</li>
                    <li>Driver Service Feet</li>
                    <li>Tour management</li>
                    <li>Collaboration</li>
                    <li>Entrance Fees</li>
                    <li>Auto refresh ads</li>
                  </ul>
                </div>
              </div>
              <div className="price-btn">
                <a href="/contact" className="th-btn style3 w-100"
                  >Get Started</a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="shape-mockup movingX d-none d-xxl-block"
          data-bottom="0%"
          data-right="-18%"
        >
          <img
            className="gmovingX"
            src="assets/img/normal/about-slide-img.png"
            alt="shape"
          />
        </div>
        <div
          className="shape-mockup d-none d-xl-block"
          data-bottom="-13%"
          data-left="-16%"
        >
          <img src="assets/img/shape/shape_6.png" alt="shape" />
        </div>
        <div
          className="shape-mockup jump d-none d-xl-block"
          data-top="15%"
          data-left="-10%"
        >
          <img src="assets/img/shape/shape_2_2.png" alt="shape" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Service