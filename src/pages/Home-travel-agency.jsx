import React from 'react'

function Hometravelagency() {
  return (
    <div>
    <div class="hero-12" id="hero">
      <div
        class="swiper th-slider overflow-hidden"
        id="heroSlide12"
        data-slider-options='{"effect":"fade","autoHeight":true}'
      >
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="hero-inner">
              <div
                class="th-hero-bg"
                data-bg-src="assets/img/hero/hero_2_1.jpg"
              ></div>
              <div class="container">
                <div class="hero-style12">
                  <h1
                    class="hero-title text-white"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    Discover the Joy of Seamless Travel
                  </h1>
                  <p
                    class="hero-desc"
                    data-ani="slideinup"
                    data-ani-delay="0.5s"
                  >
                    Tourm an international travel management company with 25
                    years of experience, specializing in business and maritime
                    travel.
                  </p>
                  <div
                    class="btn-group"
                    data-ani="slideinup"
                    data-ani-delay="0.6s"
                  >
                    <a href="tour.html" class="th-btn style1 th-icon"
                      >Explore Tours</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hero-inner">
              <div
                class="th-hero-bg"
                data-bg-src="assets/img/hero/hero_2_2.jpg"
              ></div>
              <div class="container">
                <div class="hero-style12">
                  <h1
                    class="hero-title text-white"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    discover The world with our guide
                  </h1>
                  <p
                    class="hero-desc"
                    data-ani="slideinup"
                    data-ani-delay="0.5s"
                  >
                    Tourm an international travel management company with 25
                    years of experience, specializing in business and maritime
                    travel.
                  </p>
                  <div
                    class="btn-group"
                    data-ani="slideinup"
                    data-ani-delay="0.6s"
                  >
                    <a href="tour.html" class="th-btn style1 th-icon"
                      >Explore Tours</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="hero-inner">
              <div
                class="th-hero-bg"
                data-bg-src="assets/img/hero/hero_2_3.jpg"
              ></div>
              <div class="container">
                <div class="hero-style12">
                  <h1
                    class="hero-title text-white"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    Discover the Joy of Seamless Travel
                  </h1>
                  <p
                    class="hero-desc"
                    data-ani="slideinup"
                    data-ani-delay="0.5s"
                  >
                    Tourm an international travel management company with 25
                    years of experience, specializing in business and maritime
                    travel.
                  </p>
                  <div
                    class="btn-group"
                    data-ani="slideinup"
                    data-ani-delay="0.6s"
                  >
                    <a href="tour.html" class="th-btn style1 th-icon"
                      >Explore Tours</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button data-slider-prev="#heroSlide12" class="slider-arrow slider-prev">
        <img src="assets/img/icon/right-arrow2.svg" alt="" />
      </button>
      <button data-slider-next="#heroSlide12" class="slider-arrow slider-next">
        <img src="assets/img/icon/left-arrow2.svg" alt="" />
      </button>
    </div>
    <div class="booking-sec style2 position-relative">
      <div class="container">
        <form
          action="https://html.themeholy.com/tourm/demo/mail.php"
          method="POST"
          class="booking-form style8 ajax-contact"
        >
          <div class="input-wrap">
            <div class="row align-items-center justify-content-between">
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
                <button class="th-btn">
                  <img src="assets/img/icon/search.svg" alt="" />Search
                </button>
              </div>
            </div>
            <p class="form-messages mb-0 mt-3"></p>
          </div>
        </form>
        <div class="package-area">
          <h3 class="box-title mb-35">Travel to Choose Country</h3>
          <div class="slider-area">
            <div
              class="swiper th-slider slider-drag-wrap has-shadow"
              id="packageSlide"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="package-card gsap-cursor">
                    <h3 class="box-title">
                      <img src="assets/img/icon/location-dot4.svg" alt="" /><a
                        href="destination-details.html"
                        >Thailand</a
                      >
                    </h3>
                    <div class="box-img global-img">
                      <img
                        src="assets/img/category/package_1_1.jpg"
                        alt="Image"
                      />
                    </div>
                    <div class="package-action">
                      <div>
                        <p class="box-desc">Water Bungalows</p>
                        <h4 class="box-price">
                          <span class="currency">$856.00</span>
                        </h4>
                      </div>
                      <a class="th-btn style4 th-icon" href="destination.html"
                        >Book Now</a
                      >
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="package-card gsap-cursor">
                    <h3 class="box-title">
                      <img src="assets/img/icon/location-dot4.svg" alt="" /><a
                        href="destination-details.html"
                        >Switzerland</a
                      >
                    </h3>
                    <div class="box-img global-img">
                      <img
                        src="assets/img/category/package_1_2.jpg"
                        alt="Image"
                      />
                    </div>
                    <div class="package-action">
                      <div>
                        <p class="box-desc">Garibaldi Lake</p>
                        <h4 class="box-price">
                          <span class="currency">$856.00</span>
                        </h4>
                      </div>
                      <a class="th-btn style4 th-icon" href="destination.html"
                        >Book Now</a
                      >
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="package-card gsap-cursor">
                    <h3 class="box-title">
                      <img src="assets/img/icon/location-dot4.svg" alt="" /><a
                        href="destination-details.html"
                        >Maldives</a
                      >
                    </h3>
                    <div class="box-img global-img">
                      <img
                        src="assets/img/category/package_1_3.jpg"
                        alt="Image"
                      />
                    </div>
                    <div class="package-action">
                      <div>
                        <p class="box-desc">Sok national park</p>
                        <h4 class="box-price">
                          <span class="currency">$856.00</span>
                        </h4>
                      </div>
                      <a class="th-btn style4 th-icon" href="destination.html"
                        >Book Now</a
                      >
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="package-card gsap-cursor">
                    <h3 class="box-title">
                      <img src="assets/img/icon/location-dot4.svg" alt="" /><a
                        href="destination-details.html"
                        >Wildlife</a
                      >
                    </h3>
                    <div class="box-img global-img">
                      <img
                        src="assets/img/category/package_1_1.jpg"
                        alt="Image"
                      />
                    </div>
                    <div class="package-action">
                      <div>
                        <p class="box-desc">Water Bungalows</p>
                        <h4 class="box-price">
                          <span class="currency">$856.00</span>
                        </h4>
                      </div>
                      <a class="th-btn style4 th-icon" href="destination.html"
                        >Book Now</a
                      >
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="package-card gsap-cursor">
                    <h3 class="box-title">
                      <img src="assets/img/icon/location-dot4.svg" alt="" /><a
                        href="destination-details.html"
                        >Walking</a
                      >
                    </h3>
                    <div class="box-img global-img">
                      <img
                        src="assets/img/category/package_1_2.jpg"
                        alt="Image"
                      />
                    </div>
                    <div class="package-action">
                      <div>
                        <p class="box-desc">Garibaldi Lake</p>
                        <h4 class="box-price">
                          <span class="currency">$856.00</span>
                        </h4>
                      </div>
                      <a class="th-btn style4 th-icon" href="destination.html"
                        >Book Now</a
                      >
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="package-card gsap-cursor">
                    <h3 class="box-title">
                      <img src="assets/img/icon/location-dot4.svg" alt="" /><a
                        href="destination-details.html"
                        >Cruises</a
                      >
                    </h3>
                    <div class="box-img global-img">
                      <img
                        src="assets/img/category/package_1_3.jpg"
                        alt="Image"
                      />
                    </div>
                    <div class="package-action">
                      <div>
                        <p class="box-desc">Sok national park</p>
                        <h4 class="box-price">
                          <span class="currency">$856.00</span>
                        </h4>
                      </div>
                      <a class="th-btn style4 th-icon" href="destination.html"
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
    </div>
    <section class="category-area7 space space-extra-bottom">
      <div class="container">
        <div class="title-area text-center mb-35">
          <span class="sub-title style2">Wornderful Place For You</span>
          <h2 class="sec-title style1">Tour Categories</h2>
        </div>
        <div class="slider-area">
          <div
            class="swiper th-slider has-shadow"
            id="categorySlide7"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"4"},"1200":{"slidesPerView":"5"},"1300":{"slidesPerView":"6"}}}'
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="category-card style5 single2">
                  <div class="box-img global-img">
                    <img
                      src="assets/img/category/category_1_1.jpg"
                      alt="Image"
                    />
                  </div>
                  <h3 class="box-title">
                    <a href="destination.html">Cruises</a>
                  </h3>
                  <a class="line-btn" href="destination.html">See more</a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="category-card style5 single2">
                  <div class="box-img global-img">
                    <img
                      src="assets/img/category/category_1_2.jpg"
                      alt="Image"
                    />
                  </div>
                  <h3 class="box-title">
                    <a href="destination.html">Hiking</a>
                  </h3>
                  <a class="line-btn" href="destination.html">See more</a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="category-card style5 single2">
                  <div class="box-img global-img">
                    <img
                      src="assets/img/category/category_1_3.jpg"
                      alt="Image"
                    />
                  </div>
                  <h3 class="box-title">
                    <a href="destination.html">Airbirds</a>
                  </h3>
                  <a class="line-btn" href="destination.html">See more</a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="category-card style5 single2">
                  <div class="box-img global-img">
                    <img
                      src="assets/img/category/category_1_4.jpg"
                      alt="Image"
                    />
                  </div>
                  <h3 class="box-title">
                    <a href="destination.html">Wildlife</a>
                  </h3>
                  <a class="line-btn" href="destination.html">See more</a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="category-card style5 single2">
                  <div class="box-img global-img">
                    <img
                      src="assets/img/category/category_1_5.jpg"
                      alt="Image"
                    />
                  </div>
                  <h3 class="box-title">
                    <a href="destination.html">Walking</a>
                  </h3>
                  <a class="line-btn" href="destination.html">See more</a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="category-card style5 single2">
                  <div class="box-img global-img">
                    <img
                      src="assets/img/category/category_1_1.jpg"
                      alt="Image"
                    />
                  </div>
                  <h3 class="box-title">
                    <a href="destination.html">Cruises</a>
                  </h3>
                  <a class="line-btn" href="destination.html">See more</a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="category-card style5 single2">
                  <div class="box-img global-img">
                    <img
                      src="assets/img/category/category_1_2.jpg"
                      alt="Image"
                    />
                  </div>
                  <h3 class="box-title">
                    <a href="destination.html">Hiking</a>
                  </h3>
                  <a class="line-btn" href="destination.html">See more</a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="category-card style5 single2">
                  <div class="box-img global-img">
                    <img
                      src="assets/img/category/category_1_3.jpg"
                      alt="Image"
                    />
                  </div>
                  <h3 class="box-title">
                    <a href="destination.html">Airbirds</a>
                  </h3>
                  <a class="line-btn" href="destination.html">See more</a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="category-card style5 single2">
                  <div class="box-img global-img">
                    <img
                      src="assets/img/category/category_1_4.jpg"
                      alt="Image"
                    />
                  </div>
                  <h3 class="box-title">
                    <a href="destination.html">Wildlife</a>
                  </h3>
                  <a class="line-btn" href="destination.html">See more</a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="category-card style5 single2">
                  <div class="box-img global-img">
                    <img
                      src="assets/img/category/category_1_5.jpg"
                      alt="Image"
                    />
                  </div>
                  <h3 class="box-title">
                    <a href="destination.html">Walking</a>
                  </h3>
                  <a class="line-btn" href="destination.html">See more</a>
                </div>
              </div>
            </div>
          </div>
          <button
            data-slider-prev="#categorySlide7"
            class="slider-arrow style6 slider-prev"
          >
            <img src="assets/img/icon/right-arrow2.svg" alt="" />
          </button>
          <button
            data-slider-next="#categorySlide7"
            class="slider-arrow style6 slider-next"
          >
            <img src="assets/img/icon/left-arrow2.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
    <div
      class="about-area10 position-relative overflow-hidden space"
      id="about-sec"
    >
      <div class="shadow-title">Travel Agency</div>
      <div class="container">
        <div class="row gy-4 align-items-start">
          <div class="col-xl-6">
            <div class="img-box13">
              <div class="img1">
                <img src="assets/img/normal/about_11_1.png" alt="About" />
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="">
              <div class="title-area mb-20">
                <span class="sub-title style1">About The Tourm</span>
                <h2 class="sec-title mb-20">
                  We Take You Places, You Make the Memories
                </h2>
                <p class="sec-text2 mb-50">
                  A worldwide tour is the ultimate dream for many travelers—a
                  chance to explore the diverse cultures, landscapes, and
                  wonders of every corner of the globe. Whether it's a
                  meticulously planned journey.
                </p>
              </div>
              <div class="about-item-wrap style3">
                <div class="about-item style3">
                  <div class="about-item_img">
                    <img src="assets/img/icon/map4.svg" alt="" />
                  </div>
                  <div class="about-item_centent">
                    <h5 class="box-title">Exclusive Trip</h5>
                    <p class="about-item_text">
                      There are many variations of passages of available but the
                      majority.
                    </p>
                  </div>
                </div>
                <div class="about-item style3">
                  <div class="about-item_img">
                    <img src="assets/img/icon/baloon.svg" alt="" />
                  </div>
                  <div class="about-item_centent">
                    <h5 class="box-title">Safety First</h5>
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
        <div
          class="shape-mockup movingX d-none d-xl-block"
          data-top="8%"
          data-left="-15%"
        >
          <img src="assets/img/shape/shape_2_1.png" alt="shape" />
        </div>
        <div
          class="shape-mockup jump d-none d-xl-block"
          data-top="23%"
          data-right="-14%"
        >
          <img src="assets/img/shape/shape_2_2.png" alt="shape" />
        </div>
        <div
          class="shape-mockup spin d-none d-xl-block"
          data-bottom="-4%"
          data-left="-18%"
        >
          <img src="assets/img/shape/shape_2_3.png" alt="shape" />
        </div>
        <div
          class="shape-mockup movingX d-none d-xl-block"
          data-bottom="12%"
          data-right="-14%"
        >
          <img src="assets/img/shape/shape_2_4.png" alt="shape" />
        </div>
      </div>
    </div>
    <div class="">
      <div class="container">
        <div class="counter-sec7">
          <div class="row gy-5 align-items-center justify-content-center">
            <div class="col-md-6 col-xl-3">
              <div class="counter-item">
                <div class="counter-shape"></div>
                <div class="media-body">
                  <h3 class="box-number">
                    <span class="counter-number">12</span>
                  </h3>
                  <h6 class="counter-title">Years Experience</h6>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-3">
              <div class="counter-item">
                <div class="counter-shape"></div>
                <div class="media-body">
                  <h3 class="box-number">
                    <span class="counter-number">97</span>%
                  </h3>
                  <h6 class="counter-title">Retention Rate</h6>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-3">
              <div class="counter-item">
                <div class="counter-shape"></div>
                <div class="media-body">
                  <h3 class="box-number">
                    <span class="counter-number">8</span>k
                  </h3>
                  <h6 class="counter-title">Tour Completed</h6>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-3">
              <div class="counter-item">
                <div class="counter-shape"></div>
                <div class="media-body">
                  <h3 class="box-number">
                    <span class="counter-number">19</span>k
                  </h3>
                  <h6 class="counter-title">Happy Travellers</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section
      class="position-relative overflow-hidden space"
      id="destination-sec"
    >
      <div class="container">
        <div class="title-area text-center">
          <span class="sub-title">Top Destination</span>
          <h2 class="sec-title">Popular Destination</h2>
        </div>
        <div class="slider-area">
          <div
            class="swiper th-slider destinationSlide9 has-shadow"
            id="destinationSlide9"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"},"1300":{"slidesPerView":"4"}}}'
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="destination-item4 th-ani">
                  <div
                    class="destination-item4_img global-img"
                    data-mask-src="assets/img/destination/shape.png"
                  >
                    <img
                      src="assets/img/destination/destination_9_1.jpg"
                      alt="image"
                    />
                  </div>
                  <div class="destination-content">
                    <h3 class="box-title">
                      <a href="destination-details.html"
                        ><img
                          src="assets/img/icon/location-dot4.svg"
                          alt=""
                        />Thailand</a
                      >
                    </h3>
                  </div>
                  <a href="contact.html" class="icon-btn"
                    ><img src="assets/img/icon/left-arrow4.svg" alt=""
                  /></a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="destination-item4 th-ani">
                  <div
                    class="destination-item4_img global-img"
                    data-mask-src="assets/img/destination/shape.png"
                  >
                    <img
                      src="assets/img/destination/destination_9_2.jpg"
                      alt="image"
                    />
                  </div>
                  <div class="destination-content">
                    <h3 class="box-title">
                      <a href="destination-details.html"
                        ><img
                          src="assets/img/icon/location-dot4.svg"
                          alt=""
                        />Belgium</a
                      >
                    </h3>
                  </div>
                  <a href="contact.html" class="icon-btn"
                    ><img src="assets/img/icon/left-arrow4.svg" alt=""
                  /></a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="destination-item4 th-ani">
                  <div
                    class="destination-item4_img global-img"
                    data-mask-src="assets/img/destination/shape.png"
                  >
                    <img
                      src="assets/img/destination/destination_9_3.jpg"
                      alt="image"
                    />
                  </div>
                  <div class="destination-content">
                    <h3 class="box-title">
                      <a href="destination-details.html"
                        ><img
                          src="assets/img/icon/location-dot4.svg"
                          alt=""
                        />Island</a
                      >
                    </h3>
                  </div>
                  <a href="contact.html" class="icon-btn"
                    ><img src="assets/img/icon/left-arrow4.svg" alt=""
                  /></a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="destination-item4 th-ani">
                  <div
                    class="destination-item4_img global-img"
                    data-mask-src="assets/img/destination/shape.png"
                  >
                    <img
                      src="assets/img/destination/destination_9_4.jpg"
                      alt="image"
                    />
                  </div>
                  <div class="destination-content">
                    <h3 class="box-title">
                      <a href="destination-details.html"
                        ><img
                          src="assets/img/icon/location-dot4.svg"
                          alt=""
                        />Maldives</a
                      >
                    </h3>
                  </div>
                  <a href="contact.html" class="icon-btn"
                    ><img src="assets/img/icon/left-arrow4.svg" alt=""
                  /></a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="destination-item4 th-ani">
                  <div
                    class="destination-item4_img global-img"
                    data-mask-src="assets/img/destination/shape.png"
                  >
                    <img
                      src="assets/img/destination/destination_9_1.jpg"
                      alt="image"
                    />
                  </div>
                  <div class="destination-content">
                    <h3 class="box-title">
                      <a href="destination-details.html"
                        ><img
                          src="assets/img/icon/location-dot4.svg"
                          alt=""
                        />Thailand</a
                      >
                    </h3>
                  </div>
                  <a href="contact.html" class="icon-btn"
                    ><img src="assets/img/icon/left-arrow4.svg" alt=""
                  /></a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="destination-item4 th-ani">
                  <div
                    class="destination-item4_img global-img"
                    data-mask-src="assets/img/destination/shape.png"
                  >
                    <img
                      src="assets/img/destination/destination_9_2.jpg"
                      alt="image"
                    />
                  </div>
                  <div class="destination-content">
                    <h3 class="box-title">
                      <a href="destination-details.html"
                        ><img
                          src="assets/img/icon/location-dot4.svg"
                          alt=""
                        />Belgium</a
                      >
                    </h3>
                  </div>
                  <a href="contact.html" class="icon-btn"
                    ><img src="assets/img/icon/left-arrow4.svg" alt=""
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <button
            data-slider-prev="#destinationSlide9"
            class="slider-arrow style6 slider-prev"
          >
            <img src="assets/img/icon/right-arrow2.svg" alt="" />
          </button>
          <button
            data-slider-next="#destinationSlide9"
            class="slider-arrow style6 slider-next"
          >
            <img src="assets/img/icon/left-arrow2.svg" alt="" />
          </button>
        </div>
        <div class="destination-btn text-center mt-50">
          <a href="destination.html" class="th-btn style3 th-icon">View All</a>
        </div>
      </div>
    </section>
    <div
      class="video-area3 overflow-hidden"
      data-bg-src="assets/img/bg/video_bg_3.jpg"
    >
      <div class="container th-container">
        <div class="video-box2">
          <div class="video-shape">
            <div class="discount-wrapp">
              <a
                href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                class="play-btn popup-video"
                ><i class="fa-solid fa-play"></i
              ></a>
              <div class="discount-tag">
                <span class="discount-anime">travel Agency since in 1996.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-hidden space-extra2-top space">
      <div class="container th-container">
        <div class="choose-item_wrapper">
          <div class="choose-item style3">
            <div class="box-icon">
              <img src="assets/img/icon/choose_4_1.svg" alt="image" />
            </div>
            <div class="media-body">
              <h3 class="box-title">A Lot of Discount</h3>
              <p class="box-text">
                Tour and travel agencies play a crucial role in simplifying
                travel planning, offering expertise
              </p>
            </div>
          </div>
          <div class="choose-item style3">
            <div class="box-icon">
              <img src="assets/img/icon/choose_4_2.svg" alt="image" />
            </div>
            <div class="media-body">
              <h3 class="box-title">Best Guide</h3>
              <p class="box-text">
                Tour and travel agencies play a crucial role in simplifying
                travel planning, offering expertise
              </p>
            </div>
          </div>
          <div class="choose-item style3">
            <div class="box-icon">
              <img src="assets/img/icon/choose_4_3.svg" alt="image" />
            </div>
            <div class="media-body">
              <h3 class="box-title">24/7 Hours Support</h3>
              <p class="box-text">
                Tour and travel agencies play a crucial role in simplifying
                travel planning, offering expertise
              </p>
            </div>
          </div>
          <div class="choose-item style3">
            <div class="box-icon">
              <img src="assets/img/icon/choose_4_4.svg" alt="image" />
            </div>
            <div class="media-body">
              <h3 class="box-title">Best Management</h3>
              <p class="box-text">
                Tour and travel agencies play a crucial role in simplifying
                travel planning, offering expertise
              </p>
            </div>
          </div>
          <div class="choose-item style3">
            <div class="box-icon">
              <img src="assets/img/icon/choose_4_5.svg" alt="image" />
            </div>
            <div class="media-body">
              <h3 class="box-title">Easy Booking</h3>
              <p class="box-text">
                Tour and travel agencies play a crucial role in simplifying
                travel planning, offering expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section
      class="position-relative overflow-hidden space-bottom"
      id="service-sec"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 offset-lg-3">
            <div class="title-area text-center">
              <span class="sub-title">Best Experience</span>
              <h2 class="sec-title">Popular Tour Package</h2>
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
                    <img src="assets/img/tour/tour_12_1.jpg" alt="image" />
                  </div>
                  <div class="tour-content">
                    <h3 class="box-title">
                      <a href="tour-details.html">Belgium Guggenheim Forest</a>
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
                    <img src="assets/img/tour/tour_12_2.jpg" alt="image" />
                  </div>
                  <div class="tour-content">
                    <h3 class="box-title">
                      <a href="tour-details.html">Italy Forest Tour package</a>
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
                    <img src="assets/img/tour/tour_12_3.jpg" alt="image" />
                  </div>
                  <div class="tour-content">
                    <h3 class="box-title">
                      <a href="tour-details.html">Dubai Zoo Tour Package</a>
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
                    <img src="assets/img/tour/tour_12_4.jpg" alt="image" />
                  </div>
                  <div class="tour-content">
                    <h3 class="box-title">
                      <a href="tour-details.html">Bangkok Zoo Place</a>
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
                    <img src="assets/img/tour/tour_12_1.jpg" alt="image" />
                  </div>
                  <div class="tour-content">
                    <h3 class="box-title">
                      <a href="tour-details.html">Belgium Guggenheim Forest</a>
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
                    <img src="assets/img/tour/tour_12_2.jpg" alt="image" />
                  </div>
                  <div class="tour-content">
                    <h3 class="box-title">
                      <a href="tour-details.html">Italy Forest Tour package</a>
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
        <div
          class="shape-mockup movingX d-none d-xl-block"
          data-top="8%"
          data-left="-15%"
        >
          <img src="assets/img/shape/shape_2_1.png" alt="shape" />
        </div>
        <div
          class="shape-mockup jump d-none d-xl-block"
          data-top="23%"
          data-right="-14%"
        >
          <img src="assets/img/shape/shape_2_2.png" alt="shape" />
        </div>
        <div
          class="shape-mockup spin d-none d-xl-block"
          data-bottom="-4%"
          data-left="-18%"
        >
          <img src="assets/img/shape/shape_2_3.png" alt="shape" />
        </div>
        <div
          class="shape-mockup movingX d-none d-xl-block"
          data-bottom="12%"
          data-right="-14%"
        >
          <img src="assets/img/shape/shape_2_4.png" alt="shape" />
        </div>
      </div>
    </section>
    <section
      class="gallery-area7 position-relative overflow-hidden space"
      id="gallery-sec"
    >
      <div class="shadow-title text-center">Gallery</div>
      <div class="container-fluid">
        <div class="title-area text-center">
          <span class="sub-title">Best Memorable Places</span>
          <h2 class="sec-title">Our Recent Gallery</h2>
        </div>
        <div class="slider-area">
          <div
            class="swiper th-slider gallerySlide9 has-shadow"
            id="gallerySlide9"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"767":{"slidesPerView":"2","centeredSlides":"true"},"992":{"slidesPerView":"3","centeredSlides":"true"},"1200":{"slidesPerView":"3","centeredSlides":"true"},"1400":{"slidesPerView":"5","centeredSlides":"true"}}}'
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="gallery-card style2">
                  <div class="box-img global-img">
                    <a
                      href="assets/img/gallery/gallery_14_2.jpg"
                      class="popup-image"
                      ><div class="icon-btn">
                        <i class="fal fa-magnifying-glass-plus"></i>
                      </div>
                      <img
                        src="assets/img/gallery/gallery_14_2.jpg"
                        alt="gallery image"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card style2">
                  <div class="box-img global-img">
                    <a
                      href="assets/img/gallery/gallery_14_3.jpg"
                      class="popup-image"
                      ><div class="icon-btn">
                        <i class="fal fa-magnifying-glass-plus"></i>
                      </div>
                      <img
                        src="assets/img/gallery/gallery_14_3.jpg"
                        alt="gallery image"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card style2">
                  <div class="box-img global-img">
                    <a
                      href="assets/img/gallery/gallery_14_4.jpg"
                      class="popup-image"
                      ><div class="icon-btn">
                        <i class="fal fa-magnifying-glass-plus"></i>
                      </div>
                      <img
                        src="assets/img/gallery/gallery_14_4.jpg"
                        alt="gallery image"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card style2">
                  <div class="box-img global-img">
                    <a
                      href="assets/img/gallery/gallery_14_5.jpg"
                      class="popup-image"
                      ><div class="icon-btn">
                        <i class="fal fa-magnifying-glass-plus"></i>
                      </div>
                      <img
                        src="assets/img/gallery/gallery_14_5.jpg"
                        alt="gallery image"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card style2">
                  <div class="box-img global-img">
                    <a
                      href="assets/img/gallery/gallery_14_1.jpg"
                      class="popup-image"
                      ><div class="icon-btn">
                        <i class="fal fa-magnifying-glass-plus"></i>
                      </div>
                      <img
                        src="assets/img/gallery/gallery_14_1.jpg"
                        alt="gallery image"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card style2">
                  <div class="box-img global-img">
                    <a
                      href="assets/img/gallery/gallery_14_2.jpg"
                      class="popup-image"
                      ><div class="icon-btn">
                        <i class="fal fa-magnifying-glass-plus"></i>
                      </div>
                      <img
                        src="assets/img/gallery/gallery_14_2.jpg"
                        alt="gallery image"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card style2">
                  <div class="box-img global-img">
                    <a
                      href="assets/img/gallery/gallery_14_3.jpg"
                      class="popup-image"
                      ><div class="icon-btn">
                        <i class="fal fa-magnifying-glass-plus"></i>
                      </div>
                      <img
                        src="assets/img/gallery/gallery_14_3.jpg"
                        alt="gallery image"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card style2">
                  <div class="box-img global-img">
                    <a
                      href="assets/img/gallery/gallery_14_4.jpg"
                      class="popup-image"
                      ><div class="icon-btn">
                        <i class="fal fa-magnifying-glass-plus"></i>
                      </div>
                      <img
                        src="assets/img/gallery/gallery_14_4.jpg"
                        alt="gallery image"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card style2">
                  <div class="box-img global-img">
                    <a
                      href="assets/img/gallery/gallery_14_5.jpg"
                      class="popup-image"
                      ><div class="icon-btn">
                        <i class="fal fa-magnifying-glass-plus"></i>
                      </div>
                      <img
                        src="assets/img/gallery/gallery_14_5.jpg"
                        alt="gallery image"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card style2">
                  <div class="box-img global-img">
                    <a
                      href="assets/img/gallery/gallery_14_1.jpg"
                      class="popup-image"
                      ><div class="icon-btn">
                        <i class="fal fa-magnifying-glass-plus"></i>
                      </div>
                      <img
                        src="assets/img/gallery/gallery_14_1.jpg"
                        alt="gallery image"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card style2">
                  <div class="box-img global-img">
                    <a
                      href="assets/img/gallery/gallery_14_2.jpg"
                      class="popup-image"
                      ><div class="icon-btn">
                        <i class="fal fa-magnifying-glass-plus"></i>
                      </div>
                      <img
                        src="assets/img/gallery/gallery_14_2.jpg"
                        alt="gallery image"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card style2">
                  <div class="box-img global-img">
                    <a
                      href="assets/img/gallery/gallery_14_3.jpg"
                      class="popup-image"
                      ><div class="icon-btn">
                        <i class="fal fa-magnifying-glass-plus"></i>
                      </div>
                      <img
                        src="assets/img/gallery/gallery_14_3.jpg"
                        alt="gallery image"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card style2">
                  <div class="box-img global-img">
                    <a
                      href="assets/img/gallery/gallery_14_4.jpg"
                      class="popup-image"
                      ><div class="icon-btn">
                        <i class="fal fa-magnifying-glass-plus"></i>
                      </div>
                      <img
                        src="assets/img/gallery/gallery_14_4.jpg"
                        alt="gallery image"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card style2">
                  <div class="box-img global-img">
                    <a
                      href="assets/img/gallery/gallery_14_5.jpg"
                      class="popup-image"
                      ><div class="icon-btn">
                        <i class="fal fa-magnifying-glass-plus"></i>
                      </div>
                      <img
                        src="assets/img/gallery/gallery_14_5.jpg"
                        alt="gallery image"
                    /></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="slider-pagination"></div>
          </div>
        </div>
        <div
          class="shape-mockup shape1 d-none d-xxl-block"
          data-bottom="15%"
          data-right="6%"
        >
          <img src="assets/img/shape/shape_1.png" alt="shape" />
        </div>
        <div
          class="shape-mockup shape2 d-none d-xl-block"
          data-bottom="0%"
          data-right="4%"
        >
          <img src="assets/img/shape/shape_2.png" alt="shape" />
        </div>
        <div
          class="shape-mockup shape3 d-none d-xxl-block"
          data-bottom="4%"
          data-right="0%"
        >
          <img src="assets/img/shape/shape_3.png" alt="shape" />
        </div>
        <div
          class="shape-mockup d-none d-xl-block"
          data-bottom="0%"
          data-left="0%"
        >
          <img src="assets/img/shape/shape_6.png" alt="shape" />
        </div>
      </div>
    </section>
    <section class="team-area7 position-relative space-top overflow-hidden">
      <div class="container z-index-common">
        <div
          class="row justify-content-lg-between justify-content-center align-items-center"
        >
          <div class="col-lg-7">
            <div class="title-area text-center text-lg-start pe-xl-5 me-xl-5">
              <span class="sub-title">Meet with Guide</span>
              <h2 class="sec-title">Meet with Tour Guide</h2>
            </div>
          </div>
          <div class="col-auto">
            <div class="sec-btn">
              <a href="team.html" class="th-btn style4 th-icon"
                >View All Guide</a
              >
            </div>
          </div>
        </div>
        <div class="slider-area">
          <div
            class="swiper th-slider teamSlider7 has-shadow"
            id="teamSlider7"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="th-team team-box2 style2">
                  <div class="team-img">
                    <img src="assets/img/team/team_5_1.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">Jesmin Marry</a>
                      </h3>
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
                        <a target="_blank" href="https://www.youtube.com/"
                          ><i class="fab fa-youtube"></i
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
                <div class="th-team team-box2 style2">
                  <div class="team-img">
                    <img src="assets/img/team/team_5_2.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">Jason Vermate</a>
                      </h3>
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
                        <a target="_blank" href="https://www.youtube.com/"
                          ><i class="fab fa-youtube"></i
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
                <div class="th-team team-box2 style2">
                  <div class="team-img">
                    <img src="assets/img/team/team_5_3.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">William Lily</a>
                      </h3>
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
                        <a target="_blank" href="https://www.youtube.com/"
                          ><i class="fab fa-youtube"></i
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
                <div class="th-team team-box2 style2">
                  <div class="team-img">
                    <img src="assets/img/team/team_5_4.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">Henry Joshep</a>
                      </h3>
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
                        <a target="_blank" href="https://www.youtube.com/"
                          ><i class="fab fa-youtube"></i
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
                <div class="th-team team-box2 style2">
                  <div class="team-img">
                    <img src="assets/img/team/team_5_1.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">Jesmin Marry</a>
                      </h3>
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
                        <a target="_blank" href="https://www.youtube.com/"
                          ><i class="fab fa-youtube"></i
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
                <div class="th-team team-box2 style2">
                  <div class="team-img">
                    <img src="assets/img/team/team_5_2.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">Jason Vermate</a>
                      </h3>
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
                        <a target="_blank" href="https://www.youtube.com/"
                          ><i class="fab fa-youtube"></i
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
                <div class="th-team team-box2 style2">
                  <div class="team-img">
                    <img src="assets/img/team/team_5_3.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">William Lily</a>
                      </h3>
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
                        <a target="_blank" href="https://www.youtube.com/"
                          ><i class="fab fa-youtube"></i
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
                <div class="th-team team-box2 style2">
                  <div class="team-img">
                    <img src="assets/img/team/team_5_4.jpg" alt="Team" />
                  </div>
                  <div class="team-content">
                    <div class="media-body">
                      <h3 class="box-title">
                        <a href="tour-guider-details.html">Henry Joshep</a>
                      </h3>
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
                        <a target="_blank" href="https://www.youtube.com/"
                          ><i class="fab fa-youtube"></i
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
          </div>
        </div>
      </div>
    </section>
    <div class="overflow-hidden space overflow-hidden">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="title-area text-center">
              <span class="sub-title">Feature of the Tourm</span>
              <h2 class="sec-title">Revolutionizing the ways we travel</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="choose-area2" data-bg-src="assets/img/bg/feature_bg_1.png">
        <div class="container">
          <div
            class="row gy-4 justify-content-center justify-content-lg-between"
          >
            <div class="col-lg-4 col-md-6 choose-feature_wrapp">
              <div class="choose-feature">
                <div class="box-img">
                  <img src="assets/img/normal/feature_1_1.jpg" alt="Icon" />
                </div>
                <div class="choose-feature_content">
                  <h3 class="box-title">Custom Booking</h3>
                  <p class="box-text">
                    Tour and travel agencies play a crucial role in simplifying
                    travel planning, offering expertise, and ensuring a smooth
                    and enjoyable experience for travelers. Whether booking a
                    quick..
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 choose-feature_wrapp">
              <div class="choose-feature">
                <div class="box-img">
                  <img src="assets/img/normal/feature_1_2.jpg" alt="Icon" />
                </div>
                <div class="choose-feature_content">
                  <h3 class="box-title">End-to-End Messaging</h3>
                  <p class="box-text">
                    A worldwide tour is the ultimate journey of exploration,
                    offering unforgettable experiences and a chance to connect
                    with the world in meaningful ways. Whether you're chasing
                    adventure,
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 choose-feature_wrapp">
              <div class="choose-feature">
                <div class="box-img">
                  <img src="assets/img/normal/feature_1_3.jpg" alt="Icon" />
                </div>
                <div class="choose-feature_content">
                  <h3 class="box-title">Instant Itinerary</h3>
                  <p class="box-text">
                    A worldwide tour is the ultimate dream for many travelers—a
                    chance to explore the diverse cultures, landscapes, and
                    wonders of every corner of the globe. Whether it's a
                    meticulously
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="position-relative space-bottom overflow-hidden overflow-hidden"
      id="faq-sec"
    >
      <div class="container">
        <div class="row gy-4 align-items-center justify-content-between">
          <div class="col-xl-6">
            <div class="pe-xl-5">
              <div class="title-area mb-30">
                <span class="sub-title">Frequently Asked Question</span>
                <h2 class="sec-title">
                  Your Perfect Journey, Crafted with Care
                </h2>
              </div>
              <div class="accordion" id="faqAccordion">
                <div class="accordion-card style3">
                  <div class="accordion-header" id="collapse-item-1">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="true"
                      aria-controls="collapse-1"
                    >
                      What does a travel agency do?
                    </button>
                  </div>
                  <div
                    id="collapse-1"
                    class="accordion-collapse collapse show"
                    aria-labelledby="collapse-item-1"
                    data-bs-parent="#faqAccordion"
                  >
                    <div class="accordion-body">
                      <p class="faq-text">
                        We help plan, book, and coordinate your travel
                        arrangements, including flights, accommodations, tours,
                        and activities, ensuring a hassle-free travel
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-card style3">
                  <div class="accordion-header" id="collapse-item-2">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="false"
                      aria-controls="collapse-2"
                    >
                      Do travel agencies only handle international trips?
                    </button>
                  </div>
                  <div
                    id="collapse-2"
                    class="accordion-collapse collapse"
                    aria-labelledby="collapse-item-2"
                    data-bs-parent="#faqAccordion"
                  >
                    <div class="accordion-body">
                      <p class="faq-text">
                        We help plan, book, and coordinate your travel
                        arrangements, including flights, accommodations, tours,
                        and activities, ensuring a hassle-free travel
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-card style3">
                  <div class="accordion-header" id="collapse-item-3">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      Do you offer customized travel packages?
                    </button>
                  </div>
                  <div
                    id="collapse-3"
                    class="accordion-collapse collapse"
                    aria-labelledby="collapse-item-3"
                    data-bs-parent="#faqAccordion"
                  >
                    <div class="accordion-body">
                      <p class="faq-text">
                        We help plan, book, and coordinate your travel
                        arrangements, including flights, accommodations, tours,
                        and activities, ensuring a hassle-free travel
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-card style3">
                  <div class="accordion-header" id="collapse-item-4">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-4"
                      aria-expanded="false"
                      aria-controls="collapse-4"
                    >
                      How do I book a trip through your agency?
                    </button>
                  </div>
                  <div
                    id="collapse-4"
                    class="accordion-collapse collapse"
                    aria-labelledby="collapse-item-4"
                    data-bs-parent="#faqAccordion"
                  >
                    <div class="accordion-body">
                      <p class="faq-text">
                        We help plan, book, and coordinate your travel
                        arrangements, including flights, accommodations, tours,
                        and activities, ensuring a hassle-free travel
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="faq-img3 ps-xl-3">
              <div class="img1">
                <img src="assets/img/normal/faq_img2.png" alt="faq" />
              </div>
            </div>
          </div>
        </div>
        <div
          class="shape-mockup movingX d-none d-xl-block"
          data-top="8%"
          data-left="-15%"
        >
          <img src="assets/img/shape/shape_2_1.png" alt="shape" />
        </div>
        <div
          class="shape-mockup jump d-none d-xl-block"
          data-top="23%"
          data-right="-14%"
        >
          <img src="assets/img/shape/shape_2_2.png" alt="shape" />
        </div>
        <div
          class="shape-mockup spin d-none d-xl-block"
          data-bottom="-4%"
          data-left="-18%"
        >
          <img src="assets/img/shape/shape_2_3.png" alt="shape" />
        </div>
        <div
          class="shape-mockup movingX d-none d-xl-block"
          data-bottom="12%"
          data-right="-14%"
        >
          <img src="assets/img/shape/shape_2_4.png" alt="shape" />
        </div>
      </div>
    </div>
    <section class="testi-area11 overflow-hidden space" id="testi-sec">
      <div class="container-fluid p-0">
        <div class="title-area text-center">
          <span class="sub-title">Testimonial</span>
          <h2 class="sec-title">What Client Say About us</h2>
        </div>
        <div class="slider-area">
          <div
            class="swiper th-slider slider-drag-wrap testiSlider11"
            id="testiSlider0"
            data-slider-options='{"centeredSlides":true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1300":{"slidesPerView":"4"}}}'
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testi-card4 gsap-cursor">
                  <div class="testi-card4_review">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div class="box-content">
                    <p class="box-text">
                      “We specialize in personalized itineraries, 24/7 customer
                      support, and access to exclusive deals, ensuring a unique
                      and unforgettable travel experience.”
                    </p>
                    <div class="box-profile">
                      <div class="box-avater">
                        <img
                          src="assets/img/testimonial/testi_7_1.png"
                          alt=""
                        />
                      </div>
                      <div class="media-body">
                        <h3 class="box-title">Michel Smith</h3>
                        <span class="box-desig">Cloth Store Inc.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card4 gsap-cursor">
                  <div class="testi-card4_review">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div class="box-content">
                    <p class="box-text">
                      “We specialize in personalized itineraries, 24/7 customer
                      support, and access to exclusive deals, ensuring a unique
                      and unforgettable travel experience.”
                    </p>
                    <div class="box-profile">
                      <div class="box-avater">
                        <img
                          src="assets/img/testimonial/testi_7_2.png"
                          alt=""
                        />
                      </div>
                      <div class="media-body">
                        <h3 class="box-title">Sarah Johnson</h3>
                        <span class="box-desig">Cloth Store Inc.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card4 gsap-cursor">
                  <div class="testi-card4_review">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div class="box-content">
                    <p class="box-text">
                      “We specialize in personalized itineraries, 24/7 customer
                      support, and access to exclusive deals, ensuring a unique
                      and unforgettable travel experience.”
                    </p>
                    <div class="box-profile">
                      <div class="box-avater">
                        <img
                          src="assets/img/testimonial/testi_7_3.png"
                          alt=""
                        />
                      </div>
                      <div class="media-body">
                        <h3 class="box-title">Richard Wilson</h3>
                        <span class="box-desig">Cloth Store Inc.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card4 gsap-cursor">
                  <div class="testi-card4_review">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div class="box-content">
                    <p class="box-text">
                      “We specialize in personalized itineraries, 24/7 customer
                      support, and access to exclusive deals, ensuring a unique
                      and unforgettable travel experience.”
                    </p>
                    <div class="box-profile">
                      <div class="box-avater">
                        <img
                          src="assets/img/testimonial/testi_7_4.png"
                          alt=""
                        />
                      </div>
                      <div class="media-body">
                        <h3 class="box-title">David Brown</h3>
                        <span class="box-desig">Cloth Store Inc.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card4 gsap-cursor">
                  <div class="testi-card4_review">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div class="box-content">
                    <p class="box-text">
                      “We specialize in personalized itineraries, 24/7 customer
                      support, and access to exclusive deals, ensuring a unique
                      and unforgettable travel experience.”
                    </p>
                    <div class="box-profile">
                      <div class="box-avater">
                        <img
                          src="assets/img/testimonial/testi_7_2.png"
                          alt=""
                        />
                      </div>
                      <div class="media-body">
                        <h3 class="box-title">Michel Smith</h3>
                        <span class="box-desig">Cloth Store Inc.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card4 gsap-cursor">
                  <div class="testi-card4_review">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div class="box-content">
                    <p class="box-text">
                      “We specialize in personalized itineraries, 24/7 customer
                      support, and access to exclusive deals, ensuring a unique
                      and unforgettable travel experience.”
                    </p>
                    <div class="box-profile">
                      <div class="box-avater">
                        <img
                          src="assets/img/testimonial/testi_7_1.png"
                          alt=""
                        />
                      </div>
                      <div class="media-body">
                        <h3 class="box-title">Sarah Johnson</h3>
                        <span class="box-desig">Cloth Store Inc.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card4 gsap-cursor">
                  <div class="testi-card4_review">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div class="box-content">
                    <p class="box-text">
                      “We specialize in personalized itineraries, 24/7 customer
                      support, and access to exclusive deals, ensuring a unique
                      and unforgettable travel experience.”
                    </p>
                    <div class="box-profile">
                      <div class="box-avater">
                        <img
                          src="assets/img/testimonial/testi_7_3.png"
                          alt=""
                        />
                      </div>
                      <div class="media-body">
                        <h3 class="box-title">Richard Wilson</h3>
                        <span class="box-desig">Cloth Store Inc.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card4 gsap-cursor">
                  <div class="testi-card4_review">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div class="box-content">
                    <p class="box-text">
                      “We specialize in personalized itineraries, 24/7 customer
                      support, and access to exclusive deals, ensuring a unique
                      and unforgettable travel experience.”
                    </p>
                    <div class="box-profile">
                      <div class="box-avater">
                        <img
                          src="assets/img/testimonial/testi_7_4.png"
                          alt=""
                        />
                      </div>
                      <div class="media-body">
                        <h3 class="box-title">David Brown</h3>
                        <span class="box-desig">Cloth Store Inc.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card4 gsap-cursor">
                  <div class="testi-card4_review">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div class="box-content">
                    <p class="box-text">
                      “We specialize in personalized itineraries, 24/7 customer
                      support, and access to exclusive deals, ensuring a unique
                      and unforgettable travel experience.”
                    </p>
                    <div class="box-profile">
                      <div class="box-avater">
                        <img
                          src="assets/img/testimonial/testi_7_2.png"
                          alt=""
                        />
                      </div>
                      <div class="media-body">
                        <h3 class="box-title">Michel Smith</h3>
                        <span class="box-desig">Cloth Store Inc.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card4 gsap-cursor">
                  <div class="testi-card4_review">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div class="box-content">
                    <p class="box-text">
                      “We specialize in personalized itineraries, 24/7 customer
                      support, and access to exclusive deals, ensuring a unique
                      and unforgettable travel experience.”
                    </p>
                    <div class="box-profile">
                      <div class="box-avater">
                        <img
                          src="assets/img/testimonial/testi_7_1.png"
                          alt=""
                        />
                      </div>
                      <div class="media-body">
                        <h3 class="box-title">Sarah Johnson</h3>
                        <span class="box-desig">Cloth Store Inc.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card4 gsap-cursor">
                  <div class="testi-card4_review">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div class="box-content">
                    <p class="box-text">
                      “We specialize in personalized itineraries, 24/7 customer
                      support, and access to exclusive deals, ensuring a unique
                      and unforgettable travel experience.”
                    </p>
                    <div class="box-profile">
                      <div class="box-avater">
                        <img
                          src="assets/img/testimonial/testi_7_2.png"
                          alt=""
                        />
                      </div>
                      <div class="media-body">
                        <h3 class="box-title">Richard Wilson</h3>
                        <span class="box-desig">Cloth Store Inc.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card4 gsap-cursor">
                  <div class="testi-card4_review">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div class="box-content">
                    <p class="box-text">
                      “We specialize in personalized itineraries, 24/7 customer
                      support, and access to exclusive deals, ensuring a unique
                      and unforgettable travel experience.”
                    </p>
                    <div class="box-profile">
                      <div class="box-avater">
                        <img
                          src="assets/img/testimonial/testi_7_3.png"
                          alt=""
                        />
                      </div>
                      <div class="media-body">
                        <h3 class="box-title">David Brown</h3>
                        <span class="box-desig">Cloth Store Inc.</span>
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
    <section class="overflow-hidden space-top" id="blog-sec">
      <div class="container">
        <div class="mb-30 text-center text-md-start">
          <div class="row align-items-center justify-content-between">
            <div class="col-md-7">
              <div class="title-area mb-md-0">
                <span class="sub-title">Blog and Article</span>
                <h2 class="sec-title">News & Articles From Tourm</h2>
              </div>
            </div>
            <div class="col-md-auto">
              <a href="blog.html" class="th-btn style4 th-icon"
                >See More Articles</a
              >
            </div>
          </div>
        </div>
        <div class="slider-area">
          <div
            class="swiper th-slider has-shadow"
            id="blogSlider6"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="blog-box style2 th-ani">
                  <div class="blog-img global-img">
                    <img src="assets/img/blog/blog_10_1.jpg" alt="blog image" />
                  </div>
                  <div class="blog-box_content">
                    <div class="blog-meta">
                      <a class="author" href="blog.html">Sep 05 2024</a>
                      <a href="blog.html">6 min read</a>
                    </div>
                    <h3 class="box-title">
                      <a href="blog-details.html"
                        >10 Reason why you should visit New Jersy</a
                      >
                    </h3>
                    <a href="blog-details.html" class="th-btn style4 th-icon"
                      >Read More</a
                    >
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="blog-box style2 th-ani">
                  <div class="blog-img global-img">
                    <img src="assets/img/blog/blog_10_2.jpg" alt="blog image" />
                  </div>
                  <div class="blog-box_content">
                    <div class="blog-meta">
                      <a class="author" href="blog.html">Sep 06 2024</a>
                      <a href="blog.html">7 min read</a>
                    </div>
                    <h3 class="box-title">
                      <a href="blog-details.html"
                        >The best time to visit japan & enjoy the cherry
                        blossoms</a
                      >
                    </h3>
                    <a href="blog-details.html" class="th-btn style4 th-icon"
                      >Read More</a
                    >
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="blog-box style2 th-ani">
                  <div class="blog-img global-img">
                    <img src="assets/img/blog/blog_10_3.jpg" alt="blog image" />
                  </div>
                  <div class="blog-box_content">
                    <div class="blog-meta">
                      <a class="author" href="blog.html">Sep 07 2024</a>
                      <a href="blog.html">8 min read</a>
                    </div>
                    <h3 class="box-title">
                      <a href="blog-details.html"
                        >The 7 amazing destinations for adventure seekers</a
                      >
                    </h3>
                    <a href="blog-details.html" class="th-btn style4 th-icon"
                      >Read More</a
                    >
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="blog-box style2 th-ani">
                  <div class="blog-img global-img">
                    <img src="assets/img/blog/blog_10_1.jpg" alt="blog image" />
                  </div>
                  <div class="blog-box_content">
                    <div class="blog-meta">
                      <a class="author" href="blog.html">Sep 09 2024</a>
                      <a href="blog.html">9 min read</a>
                    </div>
                    <h3 class="box-title">
                      <a href="blog-details.html"
                        >10 Reason why you should visit New Jersy</a
                      >
                    </h3>
                    <a href="blog-details.html" class="th-btn style4 th-icon"
                      >Read More</a
                    >
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="blog-box style2 th-ani">
                  <div class="blog-img global-img">
                    <img src="assets/img/blog/blog_10_2.jpg" alt="blog image" />
                  </div>
                  <div class="blog-box_content">
                    <div class="blog-meta">
                      <a class="author" href="blog.html">Sep 10 2024</a>
                      <a href="blog.html">10 min read</a>
                    </div>
                    <h3 class="box-title">
                      <a href="blog-details.html"
                        >The best time to visit japan & enjoy the cherry
                        blossoms</a
                      >
                    </h3>
                    <a href="blog-details.html" class="th-btn style4 th-icon"
                      >Read More</a
                    >
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="blog-box style2 th-ani">
                  <div class="blog-img global-img">
                    <img src="assets/img/blog/blog_10_3.jpg" alt="blog image" />
                  </div>
                  <div class="blog-box_content">
                    <div class="blog-meta">
                      <a class="author" href="blog.html">Sep 12 2024</a>
                      <a href="blog.html">11 min read</a>
                    </div>
                    <h3 class="box-title">
                      <a href="blog-details.html"
                        >The 7 amazing destinations for adventure seekers</a
                      >
                    </h3>
                    <a href="blog-details.html" class="th-btn style4 th-icon"
                      >Read More</a
                    >
                  </div>
                </div>
              </div>
            </div>
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
    </div>
  )
}

export default Hometravelagency