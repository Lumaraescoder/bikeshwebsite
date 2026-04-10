import React from 'react'

function Homeforest() {
  return (
    <div>
    <div
      class="th-hero-wrapper hero-8"
      id="hero"
      data-bg-src="assets/img/bg/hero_bg_8_1.png"
    >
      <div
        class="swiper th-slider hero-slider-5"
        id="heroSlide1"
        data-slider-options='{"effect":"fade","menu": ["", "", ""],"heroSlide1": {"swiper-container": {"pagination": {"el": ".swiper-pagination", "clickable": true }}}}'
      >
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="hero-inner">
              <div class="container">
                <div class="hero-style8">
                  <span
                    class="sub-title style1 text-white"
                    data-ani="slideinleft"
                    data-ani-delay="0.4s"
                    >Enjoy WildLife</span
                  >
                  <h1
                    class="hero-title text-white"
                    data-ani="slideinleft"
                    data-ani-delay="0.5s"
                  >
                    Discover Joy and Peace in Forest Paths
                  </h1>
                  <div
                    class="btn-group"
                    data-ani="slideinleft"
                    data-ani-delay="0.6s"
                  >
                    <a href="tour.html" class="th-btn style1 th-icon"
                      >Explore Tours</a
                    >
                  </div>
                </div>
              </div>
              <div class="th-hero-image">
                <div
                  class="hero-img"
                  data-ani="slideinright"
                  data-ani-delay="0.8s"
                >
                  <img src="assets/img/hero/hero_8_1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hero-inner">
              <div class="container">
                <div class="hero-style8">
                  <span
                    class="sub-title style1 text-white"
                    data-ani="slideinleft"
                    data-ani-delay="0.4s"
                    >Enjoy WildLife</span
                  >
                  <h1
                    class="hero-title text-white"
                    data-ani="slideinleft"
                    data-ani-delay="0.5s"
                  >
                    Practical Tips for Enjoying Forest Paths
                  </h1>
                  <div
                    class="btn-group"
                    data-ani="slideinleft"
                    data-ani-delay="0.6s"
                  >
                    <a href="tour.html" class="th-btn style1 th-icon"
                      >Explore Tours</a
                    >
                  </div>
                </div>
              </div>
              <div class="th-hero-image">
                <div
                  class="hero-img"
                  data-ani="slideinright"
                  data-ani-delay="0.8s"
                >
                  <img src="assets/img/hero/hero_8_2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hero-inner">
              <div class="container">
                <div class="hero-style8">
                  <span
                    class="sub-title style1 text-white"
                    data-ani="slideinleft"
                    data-ani-delay="0.4s"
                    >Enjoy WildLife</span
                  >
                  <h1
                    class="hero-title text-white"
                    data-ani="slideinleft"
                    data-ani-delay="0.5s"
                  >
                    Embracing Peace on Forest Paths
                  </h1>
                  <div
                    class="btn-group"
                    data-ani="slideinleft"
                    data-ani-delay="0.6s"
                  >
                    <a href="tour.html" class="th-btn style1 th-icon"
                      >Explore Tours</a
                    >
                  </div>
                </div>
              </div>
              <div class="th-hero-image">
                <div
                  class="hero-img"
                  data-ani="slideinright"
                  data-ani-delay="0.8s"
                >
                  <img src="assets/img/hero/hero_8_3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="booking-sec">
        <div class="container">
          <form
            action="https://html.themeholy.com/tourm/demo/mail.php"
            method="POST"
            class="booking-form style3 ajax-contact"
          >
            <div class="input-wrap">
              <div class="row align-items-center justify-content-between">
                <div class="form-group col-md-6 col-lg-auto">
                  <div class="booking-client-box mb-sm-0 mb-3">
                    <div class="client-thumb-group">
                      <div class="thumb">
                        <img
                          src="assets/img/shape/client-img-1-1.png"
                          alt="avater"
                        />
                      </div>
                      <div class="thumb">
                        <img
                          src="assets/img/shape/client-img-1-2.png"
                          alt="avater"
                        />
                      </div>
                      <div class="thumb">
                        <img
                          src="assets/img/shape/client-img-1-3.png"
                          alt="avater"
                        />
                      </div>
                      <div class="thumb icon">
                        <i class="fa-light fa-plus"></i>
                      </div>
                    </div>
                    <h4 class="cilent-box_counter">
                      <span class="counter-number">2</span>k+ people Booked
                    </h4>
                  </div>
                </div>
                <div class="form-group col-md-6 col-lg-auto">
                  <div class="icon"><i class="fa-light fa-route"></i></div>
                  <div class="search-input">
                    <label>Destination</label>
                    <select
                      name="subject"
                      id="subject"
                      class="form-select nice-select"
                    >
                      <option
                        value="Select Destination"
                        selected="selected"
                        disabled="disabled"
                      >
                        Select Destination
                      </option>
                      <option value="Australia">Australia</option>
                      <option value="Dubai">Dubai</option>
                      <option value="England">England</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Egypt">Egypt</option>
                      <option value="Saudi Arab">Saudi Arab</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Scandinavia">Scandinavia</option>
                      <option value="Western Europe">Western Europe</option>
                      <option value="Indonesia">Indonesia</option>
                      <option class="Italy">Italy</option>
                    </select>
                  </div>
                </div>
                <div class="form-group col-md-6 col-lg-auto">
                  <div class="icon">
                    <i class="fa-regular fa-person-hiking"></i>
                  </div>
                  <div class="search-input">
                    <label>Type</label>
                    <select class="nice-select" name="Adventure" id="Adventure">
                      <option
                        value="Adventure"
                        selected="selected"
                        disabled="disabled"
                      >
                        Adventure
                      </option>
                      <option value="Beach">Beach</option>
                      <option value="Group Tour">Group Tour</option>
                      <option value="Couple Tour">Couple Tour</option>
                      <option value="Family Tour">Family Tour</option>
                    </select>
                  </div>
                </div>
                <div class="form-group col-md-6 col-lg-auto">
                  <div class="icon"><i class="fa-light fa-clock"></i></div>
                  <div class="search-input">
                    <label>Duration</label>
                    <select
                      class="form-select nice-select"
                      name="Duration"
                      id="Duration"
                    >
                      <option
                        value="Normal"
                        selected="selected"
                        disabled="disabled"
                      >
                        Duration
                      </option>
                      <option value="1">1 days</option>
                      <option value="2">2 days</option>
                      <option value="3">3 days</option>
                      <option value="4">4 days</option>
                      <option value="5">5 days</option>
                      <option value="6">6 days</option>
                      <option value="7">7 days</option>
                    </select>
                  </div>
                </div>
                <div class="form-btn col-md-12 col-lg-auto">
                  <button class="th-btn style3">
                    <img src="assets/img/icon/search.svg" alt="" />Search
                  </button>
                </div>
              </div>
              <p class="form-messages mb-0 mt-3"></p>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div
      class="about-area position-relative overflow-hidden space"
      id="about-sec"
    >
      <div class="container">
        <div class="row">
          <div class="col-xl-6">
            <div class="title-area mb-20">
              <span class="sub-title style1">Who We Are</span>
              <h2 class="sec-title mb-20">
                Discover why Tourm is your ultimate forest escape
              </h2>
              <p class="sec-text mb-50">
                At Tourm, our passion for the wilderness is the heart of
                everything we do. We believe that everyone deserves to
                experience the magic of the forest. Our expert guides are
                committed to creating unforgettable adventures tailored to your
                desires. From thrilling hikes to peaceful retreats, we offer a
                diverse range of tours that cater to all ages and interests.
              </p>
            </div>
            <div class="img-box7">
              <div class="img1 global-img">
                <img src="assets/img/normal/about_7_1.jpg" alt="About" />
              </div>
              <div class="img2 global-img">
                <img src="assets/img/normal/about_7_2.jpg" alt="About" />
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="img-box8">
              <div class="img3 global-img">
                <img src="assets/img/normal/about_7_3.jpg" alt="About" />
              </div>
              <div class="about-item-wrap">
                <div class="about-item">
                  <div class="about-item_img">
                    <img src="assets/img/icon/map3.svg" alt="" />
                  </div>
                  <div class="about-item_centent">
                    <h5 class="box-title">Exclusive Trip</h5>
                    <p class="about-item_text">
                      There are many variations of passages of available but the
                      majority.
                    </p>
                  </div>
                </div>
                <div class="about-item">
                  <div class="about-item_img">
                    <img src="assets/img/icon/guide.svg" alt="" />
                  </div>
                  <div class="about-item_centent">
                    <h5 class="box-title">Professional Guide</h5>
                    <p class="about-item_text">
                      There are many variations of passages of available but the
                      majority.
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-35">
                <a href="about.html" class="th-btn style3 th-icon"
                  >Learn More</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section
      class="position-relative bg-smoke overflow-hidden space"
      id="service-sec"
      data-bg-src="assets/img/bg/shape_bg_1.png"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 offset-lg-3">
            <div class="title-area text-center">
              <span class="sub-title">Immerse Yourself in Nature</span>
              <h2 class="sec-title">Your perfect forest adventure</h2>
              <p class="sec-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div class="slider-area tour-slider">
          <div
            class="swiper th-slider has-shadow slider-drag-wrap"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"},"1300":{"slidesPerView":"4"}}}'
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="tour-box style4 th-ani gsap-cursor">
                  <div class="tour-box_img global-img">
                    <img src="assets/img/tour/tour_8_1.jpg" alt="image" />
                  </div>
                  <div class="tour-content">
                    <h3 class="box-title">
                      <a href="tour-details.html">Adventure Tours</a>
                    </h3>
                    <div class="tour-rating">
                      <div
                        class="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span style="width: 100%"
                          >Rated <strong class="rating">5.00</strong> out of 5
                          based on <span class="rating">4.8</span>(4.8
                          Rating)</span
                        >
                      </div>
                      <a
                        href="tour-details.html"
                        class="woocommerce-review-link"
                        >(<span class="count">4.8</span> Rating)</a
                      >
                    </div>
                    <h4 class="tour-box_price">
                      <span class="currency">$980.00</span>/Person
                    </h4>
                    <div class="tour-action">
                      <span><i class="fa-light fa-clock"></i>7 Days</span>
                      <a
                        href="tour-guider-details.html"
                        class="th-btn style4 th-icon"
                        >Book Now</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="tour-box style4 th-ani gsap-cursor">
                  <div class="tour-box_img global-img">
                    <img src="assets/img/tour/tour_8_2.jpg" alt="image" />
                  </div>
                  <div class="tour-content">
                    <h3 class="box-title">
                      <a href="tour-details.html">Wildlife Safaris</a>
                    </h3>
                    <div class="tour-rating">
                      <div
                        class="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span style="width: 100%"
                          >Rated <strong class="rating">5.00</strong> out of 5
                          based on <span class="rating">4.8</span>(4.8
                          Rating)</span
                        >
                      </div>
                      <a
                        href="tour-details.html"
                        class="woocommerce-review-link"
                        >(<span class="count">4.8</span> Rating)</a
                      >
                    </div>
                    <h4 class="tour-box_price">
                      <span class="currency">$980.00</span>/Person
                    </h4>
                    <div class="tour-action">
                      <span><i class="fa-light fa-clock"></i>7 Days</span>
                      <a
                        href="tour-guider-details.html"
                        class="th-btn style4 th-icon"
                        >Book Now</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="tour-box style4 th-ani gsap-cursor">
                  <div class="tour-box_img global-img">
                    <img src="assets/img/tour/tour_8_3.jpg" alt="image" />
                  </div>
                  <div class="tour-content">
                    <h3 class="box-title">
                      <a href="tour-details.html">Relaxation Retreats</a>
                    </h3>
                    <div class="tour-rating">
                      <div
                        class="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span style="width: 100%"
                          >Rated <strong class="rating">5.00</strong> out of 5
                          based on <span class="rating">4.8</span>(4.8
                          Rating)</span
                        >
                      </div>
                      <a
                        href="tour-details.html"
                        class="woocommerce-review-link"
                        >(<span class="count">4.8</span> Rating)</a
                      >
                    </div>
                    <h4 class="tour-box_price">
                      <span class="currency">$980.00</span>/Person
                    </h4>
                    <div class="tour-action">
                      <span><i class="fa-light fa-clock"></i>7 Days</span>
                      <a
                        href="tour-guider-details.html"
                        class="th-btn style4 th-icon"
                        >Book Now</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="tour-box style4 th-ani gsap-cursor">
                  <div class="tour-box_img global-img">
                    <img src="assets/img/tour/tour_8_4.jpg" alt="image" />
                  </div>
                  <div class="tour-content">
                    <h3 class="box-title">
                      <a href="tour-details.html">Customized Experiences</a>
                    </h3>
                    <div class="tour-rating">
                      <div
                        class="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span style="width: 100%"
                          >Rated <strong class="rating">5.00</strong> out of 5
                          based on <span class="rating">4.8</span>(4.8
                          Rating)</span
                        >
                      </div>
                      <a
                        href="tour-details.html"
                        class="woocommerce-review-link"
                        >(<span class="count">4.8</span> Rating)</a
                      >
                    </div>
                    <h4 class="tour-box_price">
                      <span class="currency">$980.00</span>/Person
                    </h4>
                    <div class="tour-action">
                      <span><i class="fa-light fa-clock"></i>7 Days</span>
                      <a
                        href="tour-guider-details.html"
                        class="th-btn style4 th-icon"
                        >Book Now</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="tour-box style4 th-ani gsap-cursor">
                  <div class="tour-box_img global-img">
                    <img src="assets/img/tour/tour_8_1.jpg" alt="image" />
                  </div>
                  <div class="tour-content">
                    <h3 class="box-title">
                      <a href="tour-details.html">Adventure Tours</a>
                    </h3>
                    <div class="tour-rating">
                      <div
                        class="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span style="width: 100%"
                          >Rated <strong class="rating">5.00</strong> out of 5
                          based on <span class="rating">4.8</span>(4.8
                          Rating)</span
                        >
                      </div>
                      <a
                        href="tour-details.html"
                        class="woocommerce-review-link"
                        >(<span class="count">4.8</span> Rating)</a
                      >
                    </div>
                    <h4 class="tour-box_price">
                      <span class="currency">$980.00</span>/Person
                    </h4>
                    <div class="tour-action">
                      <span><i class="fa-light fa-clock"></i>7 Days</span>
                      <a
                        href="tour-guider-details.html"
                        class="th-btn style4 th-icon"
                        >Book Now</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="tour-box style4 th-ani gsap-cursor">
                  <div class="tour-box_img global-img">
                    <img src="assets/img/tour/tour_8_2.jpg" alt="image" />
                  </div>
                  <div class="tour-content">
                    <h3 class="box-title">
                      <a href="tour-details.html">Wildlife Safaris</a>
                    </h3>
                    <div class="tour-rating">
                      <div
                        class="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span style="width: 100%"
                          >Rated <strong class="rating">5.00</strong> out of 5
                          based on <span class="rating">4.8</span>(4.8
                          Rating)</span
                        >
                      </div>
                      <a
                        href="tour-details.html"
                        class="woocommerce-review-link"
                        >(<span class="count">4.8</span> Rating)</a
                      >
                    </div>
                    <h4 class="tour-box_price">
                      <span class="currency">$980.00</span>/Person
                    </h4>
                    <div class="tour-action">
                      <span><i class="fa-light fa-clock"></i>7 Days</span>
                      <a
                        href="tour-guider-details.html"
                        class="th-btn style4 th-icon"
                        >Book Now</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="position-relative overflow-hidden bg-top-center space-top"
      id="destination-sec"
      data-bg-src="assets/img/bg/destination_bg_1.png"
    >
      <div class="container">
        <div class="title-area text-center">
          <span class="sub-title text-white">Top Spot</span>
          <h2 class="sec-title text-white">Discover Our Destinations</h2>
        </div>
        <div class="slider-area">
          <div
            class="swiper th-slider has-shadow"
            id="destinationSlider6"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"},"1300":{"slidesPerView":"3"}}}'
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="destination-item2 th-ani">
                  <div class="box-img global-img">
                    <img
                      src="assets/img/destination/destination_7_1.jpg"
                      alt="image"
                    />
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">
                      <a href="destination-details.html">Costa Rica Forest</a>
                    </h3>
                    <p class="box-text">25 Listing</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="destination-item2 th-ani">
                  <div class="box-img global-img">
                    <img
                      src="assets/img/destination/destination_7_2.jpg"
                      alt="image"
                    />
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">
                      <a href="destination-details.html"
                        >Black Forest, Germany</a
                      >
                    </h3>
                    <p class="box-text">25 Listing</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="destination-item2 th-ani">
                  <div class="box-img global-img">
                    <img
                      src="assets/img/destination/destination_7_3.jpg"
                      alt="image"
                    />
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">
                      <a href="destination-details.html">Amazon Jungle</a>
                    </h3>
                    <p class="box-text">25 Listing</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="destination-item2 th-ani">
                  <div class="box-img global-img">
                    <img
                      src="assets/img/destination/destination_7_1.jpg"
                      alt="image"
                    />
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">
                      <a href="destination-details.html">Costa Rica Forest</a>
                    </h3>
                    <p class="box-text">25 Listing</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="destination-item2 th-ani">
                  <div class="box-img global-img">
                    <img
                      src="assets/img/destination/destination_7_2.jpg"
                      alt="image"
                    />
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">
                      <a href="destination-details.html"
                        >Black Forest, Germany</a
                      >
                    </h3>
                    <p class="box-text">25 Listing</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="destination-item2 th-ani">
                  <div class="box-img global-img">
                    <img
                      src="assets/img/destination/destination_7_3.jpg"
                      alt="image"
                    />
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">
                      <a href="destination-details.html">Amazon Jungle</a>
                    </h3>
                    <p class="box-text">25 Listing</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              data-slider-prev="#destinationSlider6"
              class="slider-arrow slider-prev"
            >
              <img src="assets/img/icon/right-arrow2.svg" alt="" />
            </button>
            <button
              data-slider-next="#destinationSlider6"
              class="slider-arrow slider-next"
            >
              <img src="assets/img/icon/left-arrow2.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
    <div class="brand-area overflow-hidden space">
      <div class="container th-container">
        <div
          class="swiper th-slider brandSlider1"
          id="brandSlider1"
          data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"6"},"1400":{"slidesPerView":"8"}}}'
        >
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_1.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_1.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_2.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_2.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_3.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_3.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_4.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_4.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_5.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_5.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_6.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_6.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_7.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_7.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_8.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_8.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_4.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_4.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_3.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_3.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_2.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_2.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="brand-box">
                <a href="#"
                  ><img
                    class="original"
                    src="assets/img/brand/brand_1_1.svg"
                    alt="Brand Logo" />
                  <img
                    class="gray"
                    src="assets/img/brand/brand_1_1.svg"
                    alt="Brand Logo"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section
      class="testi-area7 bg-smoke overflow-hidden space"
      id="testi-sec"
      data-bg-src="assets/img/bg/map.png"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6">
            <div class="title-area mb-40">
              <span class="sub-title">Testimonial</span>
              <h2 class="sec-title">What Our Clients Think</h2>
            </div>
            <div
              class="swiper th-slider testiSlide5"
              id="testiSlide7"
              data-slider-options='{"effect":"slide","loop":false,"thumbs":{"swiper":".testi-grid2-thumb"}}'
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="testi-grid2">
                    <div class="box-content">
                      <p class="box-text">
                        “A home that perfectly blends sustainability with luxury
                        until I discovered Ecoland Residence. From the moment I
                        stepped into this community, I knew it was where I
                        wanted to live. The commitment to eco-friendly living”
                      </p>
                      <h6 class="box-title">Sarah Rahman</h6>
                      <span class="box-desig">Traveller</span>
                      <div class="box-review">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="testi-grid2">
                    <div class="box-content">
                      <p class="box-text">
                        “The home boasts sleek, contemporary architecture with
                        clean lines and expansive windows, allowing natural
                        light to flood the interiors architecture with clean
                        lines and expansive It incorporates passive design
                        principles”
                      </p>
                      <h6 class="box-title">Angelina Rose</h6>
                      <span class="box-desig">Traveller</span>
                      <div class="box-review">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="testi-grid2">
                    <div class="box-content">
                      <p class="box-text">
                        “Solar panels adorn the roof, harnessing renewable
                        energy to power the home and even feed excess
                        electricity back into the grid. harnessing renewable
                        energy to power the High-performance insulation and
                        triple-glazed”
                      </p>
                      <h6 class="box-title">Michel Smith</h6>
                      <span class="box-desig">Traveller</span>
                      <div class="box-review">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="testi-grid2">
                    <div class="box-content">
                      <p class="box-text">
                        A sophisticated rainwater harvesting system collects and
                        filters rainwater for irrigation and non-potable uses,
                        reducing reliance on municipal water sources. rainwater
                        harvesting system collects and Greywater systems
                      </p>
                      <h6 class="box-title">Jesmen</h6>
                      <span class="box-desig">Traveller</span>
                      <div class="box-review">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="testi-grid2">
                    <div class="box-content">
                      <p class="box-text">
                        Throughout the interior, eco-friendly materials like
                        reclaimed wood, bamboo flooring, and recycled glass
                        countertops create a luxurious yet interior eco-friendly
                        materials like reclaimed wood, sustainable ambiance.
                      </p>
                      <h6 class="box-title">Sarah Rahman</h6>
                      <span class="box-desig">Traveller</span>
                      <div class="box-review">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="testi-grid2">
                    <div class="box-content">
                      <p class="box-text">
                        “A home that perfectly blends sustainability with luxury
                        until I discovered Ecoland Residence. From the moment I
                        stepped into this community, I knew it was where I
                        wanted to live. The commitment to eco-friendly living”
                      </p>
                      <h6 class="box-title">Angelina Rose</h6>
                      <span class="box-desig">Traveller</span>
                      <div class="box-review">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="swiper th-slider testi-grid2-thumb style2"
              data-slider-options='{"effect":"slide","slidesPerView":"6","spaceBetween":7,"loop":false}'
            >
              <div class="icon-box">
                <button
                  data-slider-prev="#testiSlide7"
                  class="slider-arrow default"
                >
                  <img src="assets/img/icon/right-arrow2.svg" alt="" />
                </button>
                <button
                  data-slider-next="#testiSlide7"
                  class="slider-arrow default"
                >
                  <img src="assets/img/icon/left-arrow2.svg" alt="" />
                </button>
              </div>
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="box-img">
                    <img
                      src="assets/img/testimonial/testi_4_1.png"
                      alt="Image"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="box-img">
                    <img
                      src="assets/img/testimonial/testi_4_2.png"
                      alt="Image"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="box-img">
                    <img
                      src="assets/img/testimonial/testi_4_3.png"
                      alt="Image"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="box-img">
                    <img
                      src="assets/img/testimonial/testi_4_4.png"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="testi-image-wrapp2">
              <div
                class="testi-img"
                data-mask-src="assets/img/testimonial/testi_shape_1.png"
              >
                <img src="assets/img/testimonial/testi-img1.jpg" alt="" />
              </div>
              <div class="testi-shape2">
                <img src="assets/img/testimonial/testi_shape_1.png" alt="" />
              </div>
              <div class="testi-img2">
                <img src="assets/img/testimonial/testi-img2.jpg" alt="" />
              </div>
              <div class="testi-shape">
                <img src="assets/img/testimonial/testi_shape_2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="shape-mockup z-index-3 d-none d-xl-block"
        data-bottom="0%"
        data-right="0%"
      >
        <img src="assets/img/shape/shape_21.png" alt="shape" />
      </div>
    </section>
    <section class="space">
      <div class="container z-index-common">
        <div class="title-area text-center">
          <span class="sub-title">Meet with Guide</span>
          <h2 class="sec-title">Our Experienced Guide</h2>
        </div>
        <div class="slider-area">
          <div
            class="swiper th-slider teamSlider5 has-shadow"
            id="teamSlider5"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="th-team team-box style2">
                  <div class="team-img">
                    <img src="assets/img/team/team_1_1.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">Jacob Jones</a>
                      </h3>
                      <span class="team-desig">Tourist Guide</span>
                      <div class="th-social">
                        <a target="_blank" href="https://facebook.com/"
                          ><i class="fab fa-facebook-f"></i
                        ></a>
                        <a target="_blank" href="https://twitter.com/"
                          ><i class="fab fa-twitter"></i
                        ></a>
                        <a target="_blank" href="https://instagram.com/"
                          ><i class="fab fa-instagram"></i
                        ></a>
                        <a target="_blank" href="https://linkedin.com/"
                          ><i class="fab fa-linkedin-in"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="th-team team-box style2">
                  <div class="team-img">
                    <img src="assets/img/team/team_1_2.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">Jane Cooper</a>
                      </h3>
                      <span class="team-desig">Tourist Guide</span>
                      <div class="th-social">
                        <a target="_blank" href="https://facebook.com/"
                          ><i class="fab fa-facebook-f"></i
                        ></a>
                        <a target="_blank" href="https://twitter.com/"
                          ><i class="fab fa-twitter"></i
                        ></a>
                        <a target="_blank" href="https://instagram.com/"
                          ><i class="fab fa-instagram"></i
                        ></a>
                        <a target="_blank" href="https://linkedin.com/"
                          ><i class="fab fa-linkedin-in"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="th-team team-box style2">
                  <div class="team-img">
                    <img src="assets/img/team/team_1_3.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">Guy Hawkins</a>
                      </h3>
                      <span class="team-desig">Tourist Guide</span>
                      <div class="th-social">
                        <a target="_blank" href="https://facebook.com/"
                          ><i class="fab fa-facebook-f"></i
                        ></a>
                        <a target="_blank" href="https://twitter.com/"
                          ><i class="fab fa-twitter"></i
                        ></a>
                        <a target="_blank" href="https://instagram.com/"
                          ><i class="fab fa-instagram"></i
                        ></a>
                        <a target="_blank" href="https://linkedin.com/"
                          ><i class="fab fa-linkedin-in"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="th-team team-box style2">
                  <div class="team-img">
                    <img src="assets/img/team/team_1_4.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">Jenny Wilson</a>
                      </h3>
                      <span class="team-desig">Tourist Guide</span>
                      <div class="th-social">
                        <a target="_blank" href="https://facebook.com/"
                          ><i class="fab fa-facebook-f"></i
                        ></a>
                        <a target="_blank" href="https://twitter.com/"
                          ><i class="fab fa-twitter"></i
                        ></a>
                        <a target="_blank" href="https://instagram.com/"
                          ><i class="fab fa-instagram"></i
                        ></a>
                        <a target="_blank" href="https://linkedin.com/"
                          ><i class="fab fa-linkedin-in"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="th-team team-box style2">
                  <div class="team-img">
                    <img src="assets/img/team/team_1_1.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">Jacob Jones</a>
                      </h3>
                      <span class="team-desig">Tourist Guide</span>
                      <div class="th-social">
                        <a target="_blank" href="https://facebook.com/"
                          ><i class="fab fa-facebook-f"></i
                        ></a>
                        <a target="_blank" href="https://twitter.com/"
                          ><i class="fab fa-twitter"></i
                        ></a>
                        <a target="_blank" href="https://instagram.com/"
                          ><i class="fab fa-instagram"></i
                        ></a>
                        <a target="_blank" href="https://linkedin.com/"
                          ><i class="fab fa-linkedin-in"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="th-team team-box style2">
                  <div class="team-img">
                    <img src="assets/img/team/team_1_2.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">Jane Cooper</a>
                      </h3>
                      <span class="team-desig">Tourist Guide</span>
                      <div class="th-social">
                        <a target="_blank" href="https://facebook.com/"
                          ><i class="fab fa-facebook-f"></i
                        ></a>
                        <a target="_blank" href="https://twitter.com/"
                          ><i class="fab fa-twitter"></i
                        ></a>
                        <a target="_blank" href="https://instagram.com/"
                          ><i class="fab fa-instagram"></i
                        ></a>
                        <a target="_blank" href="https://linkedin.com/"
                          ><i class="fab fa-linkedin-in"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="th-team team-box style2">
                  <div class="team-img">
                    <img src="assets/img/team/team_1_3.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">Guy Hawkins</a>
                      </h3>
                      <span class="team-desig">Tourist Guide</span>
                      <div class="th-social">
                        <a target="_blank" href="https://facebook.com/"
                          ><i class="fab fa-facebook-f"></i
                        ></a>
                        <a target="_blank" href="https://twitter.com/"
                          ><i class="fab fa-twitter"></i
                        ></a>
                        <a target="_blank" href="https://instagram.com/"
                          ><i class="fab fa-instagram"></i
                        ></a>
                        <a target="_blank" href="https://linkedin.com/"
                          ><i class="fab fa-linkedin-in"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="th-team team-box style2">
                  <div class="team-img">
                    <img src="assets/img/team/team_1_4.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">Jenny Wilson</a>
                      </h3>
                      <span class="team-desig">Tourist Guide</span>
                      <div class="th-social">
                        <a target="_blank" href="https://facebook.com/"
                          ><i class="fab fa-facebook-f"></i
                        ></a>
                        <a target="_blank" href="https://twitter.com/"
                          ><i class="fab fa-twitter"></i
                        ></a>
                        <a target="_blank" href="https://instagram.com/"
                          ><i class="fab fa-instagram"></i
                        ></a>
                        <a target="_blank" href="https://linkedin.com/"
                          ><i class="fab fa-linkedin-in"></i
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slider-pagination"></div>
          </div>
        </div>
      </div>
    </section>
    <div class="bg-smoke overflow-hidden space">
      <div class="container">
        <div class="row gy-4 align-items-center">
          <div class="col-lg-6">
            <div class="title-area">
              <span class="sub-title style1">Why Choose Us</span>
              <h2 class="sec-title">Why Choose Us for Your Forest Tour?</h2>
            </div>
            <div class="choose-about wow fadeInUp">
              <div class="choose-about_icon">
                <img src="assets/img/icon/choose_1_1.svg" alt="image" />
              </div>
              <div class="media-body">
                <h3 class="box-title">Top-notch Security</h3>
                <p class="choose-about_text">
                  Tourm is driven by a set of core values and principles that
                  place unwavering focus on our commitment.
                </p>
              </div>
            </div>
            <div class="choose-about wow fadeInUp">
              <div class="choose-about_icon">
                <img src="assets/img/icon/choose_1_2.svg" alt="image" />
              </div>
              <div class="media-body">
                <h3 class="box-title">Budget Efficiency</h3>
                <p class="choose-about_text">
                  Tourm is driven by a set of core values and principles that
                  place unwavering focus on our commitment.
                </p>
              </div>
            </div>
            <div class="choose-about wow fadeInUp">
              <div class="choose-about_icon">
                <img src="assets/img/icon/choose_1_3.svg" alt="image" />
              </div>
              <div class="media-body">
                <h3 class="box-title">Global Pathway</h3>
                <p class="choose-about_text">
                  Tourm is driven by a set of core values and principles that
                  place unwavering focus on our commitment.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="choose-wrapp">
              <div class="img1 global-img">
                <img src="assets/img/normal/choose_1.jpg" alt="Choose" />
              </div>
              <div class="img1 global-img">
                <img src="assets/img/normal/choose_2.jpg" alt="Choose" />
              </div>
              <div class="img1 global-img">
                <img src="assets/img/normal/choose_3.jpg" alt="Choose" />
              </div>
              <div class="img1 global-img">
                <img src="assets/img/normal/choose_4.jpg" alt="Choose" />
              </div>
            </div>
          </div>
        </div>
        <div
          class="shape-mockup d-none d-xxl-block"
          data-top="5%"
          data-right="-20%"
        >
          <img src="assets/img/shape/shape_19.png" alt="" />
        </div>
        <div
          class="shape-mockup d-none d-xxl-block"
          data-bottom="-17%"
          data-left="-20%"
        >
          <img src="assets/img/shape/shape_20.png" alt="" />
        </div>
      </div>
    </div>
    <div class="counter-sec2 space">
      <div class="container">
        <div class="row gy-4 align-items-center justify-content-center">
          <div class="col-md-6 col-xl-3">
            <div class="counter-card style3">
              <div class="counter-shape"><span></span></div>
              <div class="media-body">
                <h3 class="box-number">
                  <span class="counter-number">12</span>
                </h3>
                <h6 class="counter-title">Years Experience</h6>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-3">
            <div class="counter-card style3">
              <div class="counter-shape"><span></span></div>
              <div class="media-body">
                <h3 class="box-number">
                  <span class="counter-number">97</span>%
                </h3>
                <h6 class="counter-title">Retention Rate</h6>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-3">
            <div class="counter-card style3">
              <div class="counter-shape"><span></span></div>
              <div class="media-body">
                <h3 class="box-number">
                  <span class="counter-number">8</span>k
                </h3>
                <h6 class="counter-title">Tour Completed</h6>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-3">
            <div class="counter-card style3">
              <div class="counter-shape"><span></span></div>
              <div class="media-body">
                <h3 class="box-number">
                  <span class="counter-number">19</span>k
                </h3>
                <h6 class="counter-title">Happy Travellers</h6>
              </div>
            </div>
          </div>
        </div>
        <div
          class="shape-mockup shape1 d-none d-xl-block"
          data-top="40%"
          data-left="-17%"
        >
          <img src="assets/img/shape/shape_1.png" alt="shape" />
        </div>
        <div
          class="shape-mockup shape2 d-none d-xl-block"
          data-top="55%"
          data-left="-18%"
        >
          <img src="assets/img/shape/shape_2.png" alt="shape" />
        </div>
        <div
          class="shape-mockup shape3 d-none d-xl-block"
          data-top="47%"
          data-left="-10%"
        >
          <img src="assets/img/shape/shape_3.png" alt="shape" />
        </div>
        <div
          class="shape-mockup spin d-none d-xl-block"
          data-bottom="-15%"
          data-left="-15%"
        >
          <img src="assets/img/shape/shape_2_3.png" alt="shape" />
        </div>
        <div
          class="shape-mockup jump d-none d-xl-block"
          data-top="30%"
          data-right="-14%"
        >
          <img src="assets/img/shape/shape_2_2.png" alt="shape" />
        </div>
        <div
          class="shape-mockup spin d-none d-xl-block"
          data-bottom="-10%"
          data-right="-14%"
        >
          <img src="assets/img/shape/shape_2_5.png" alt="shape" />
        </div>
      </div>
    </div>
    <div
      class="bg-top-center position-relative overflow-hidden"
      data-bg-src="assets/img/bg/contact_bg_7.jpg"
    >
      <div class="container">
        <div
          class="row gy-4 justify-content-between align-items-center flex-row-reverse"
        >
          <div class="col-lg-6">
            <div class="video-box4 style2">
              <a
                href="https://www.youtube.com/watch?v=cQfIUPw72Dk"
                class="play-btn popup-video"
                ><i class="fa-sharp fa-solid fa-play"></i
              ></a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="contact-form-area">
              <form
                action="https://html.themeholy.com/tourm/demo/mail.php"
                method="POST"
                class="contact-form2 ajax-contact"
              >
                <div class="row">
                  <div class="form-group col-12">
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="name3"
                      placeholder="First Name"
                    />
                    <img src="assets/img/icon/user.svg" alt="" />
                  </div>
                  <div class="form-group col-12">
                    <input
                      type="email"
                      class="form-control"
                      name="email3"
                      id="email3"
                      placeholder="Your Mail"
                    />
                    <img src="assets/img/icon/mail.svg" alt="" />
                  </div>
                  <div class="form-group col-12">
                    <select
                      name="subject"
                      id="subject"
                      class="form-select nice-select"
                    >
                      <option
                        value="Select Tour Type"
                        selected="selected"
                        disabled="disabled"
                      >
                        Select Tour Type
                      </option>
                      <option value="Africa Adventure">Africa Adventure</option>
                      <option value="Africa Wild">Africa Wild</option>
                      <option value="Asia">Asia</option>
                      <option value="Scandinavia">Scandinavia</option>
                      <option value="Western Europe">Western Europe</option>
                    </select>
                  </div>
                  <div class="form-group col-12">
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="3"
                      class="form-control"
                      placeholder="Your Message"
                    ></textarea>
                    <img src="assets/img/icon/chat.svg" alt="" />
                  </div>
                </div>
                <p class="form-messages mb-0 mt-3"></p>
              </form>
              <div class="form-btn-wrapp">
                <div class="form-btn">
                  <button class="th-btn white-btn">
                    Send Message <img src="assets/img/icon/plane3.svg" alt="" />
                  </button>
                </div>
                <div class="contact-info">
                  <p class="contact-info_link">
                    <a href="tel:+0123456789">+012 345 6789</a>
                  </p>
                  <div class="contact-info_icon">
                    <a href="tel:+0123456789"
                      ><img src="assets/img/icon/call.svg" alt=""
                    /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="overflow-hidden space">
      <div class="container">
        <div
          class="row justify-content-lg-between justify-content-center align-items-end"
        >
          <div class="col-lg">
            <div class="title-area text-center text-lg-start">
              <span class="sub-title">Blog and Article</span>
              <h2 class="sec-title">News & Update of Tourm</h2>
            </div>
          </div>
          <div class="col-lg-auto d-none d-lg-block">
            <div class="sec-btn">
              <a href="blog.html" class="th-btn style4 th-icon"
                >See More Articles</a
              >
            </div>
          </div>
        </div>
        <div class="row gx-24 gy-30">
          <div class="col-xl-5">
            <div class="blog-grid th-ani">
              <div class="blog-img global-img">
                <img src="assets/img/blog/blog_8_1.jpg" alt="blog image" />
              </div>
              <div class="blog-grid_content">
                <div class="blog-meta">
                  <a class="author" href="blog.html">July 05, 2024</a>
                  <a href="blog.html">6 min read</a>
                </div>
                <h3 class="box-title">
                  <a href="blog-details.html"
                    >10 Remarkable Wildlife Travel Experiences That Will Take
                    You on Unforgettable Adventures.</a
                  >
                </h3>
                <a href="blog-details.html" class="th-btn style4 th-icon"
                  >Read More</a
                >
              </div>
            </div>
          </div>
          <div class="col-xl-7">
            <div class="blog-grid style2 th-ani">
              <div class="blog-img global-img">
                <img src="assets/img/blog/blog_8_2.jpg" alt="blog image" />
              </div>
              <div class="blog-grid_content">
                <div class="blog-meta">
                  <a class="author" href="blog.html">July 07, 2024</a>
                  <a href="blog.html">7 min read</a>
                </div>
                <h3 class="box-title">
                  <a href="blog-details.html"
                    >Exploring the Wonders of the Wild: Forest Tour
                    Highlights</a
                  >
                </h3>
                <a href="blog-details.html" class="th-btn style4 th-icon"
                  >Read More</a
                >
              </div>
            </div>
            <div class="blog-grid th-ani style2 mt-24">
              <div class="blog-img global-img">
                <img src="assets/img/blog/blog_8_3.jpg" alt="blog image" />
              </div>
              <div class="blog-grid_content">
                <div class="blog-meta">
                  <a class="author" href="blog.html">July 10, 2024</a>
                  <a href="blog.html">8 min read</a>
                </div>
                <h3 class="box-title">
                  <a href="blog-details.html"
                    >The Forest Gazette: Recent Highlights and Future Tour
                    Plans</a
                  >
                </h3>
                <a href="blog-details.html" class="th-btn style4 th-icon"
                  >Read More</a
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="shape-mockup shape1 d-none d-xxl-block"
          data-top="14%"
          data-right="-9%"
        >
          <img src="assets/img/shape/shape_1.png" alt="shape" />
        </div>
        <div
          class="shape-mockup shape2 d-none d-xl-block"
          data-top="25%"
          data-right="-14%"
        >
          <img src="assets/img/shape/shape_2.png" alt="shape" />
        </div>
        <div
          class="shape-mockup shape3 d-none d-xxl-block"
          data-top="15%"
          data-right="-15%"
        >
          <img src="assets/img/shape/shape_3.png" alt="shape" />
        </div>
        <div
          class="shape-mockup movingX d-none d-xxl-block"
          data-bottom="-17%"
          data-right="-10%"
        >
          <img src="assets/img/shape/shape_9.png" alt="shape" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Homeforest