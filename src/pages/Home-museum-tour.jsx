import React from 'react'

function Homemuseumtour() {
  return (
    <div>
    <div class="th-hero-wrapper bg-bottom-center hero-13" id="hero">
      <div class="hero-13-wrapp">
        <div class="container">
          <div class="hero-style13 text-center">
            <h1 class="hero-title">
              The Magic of Museum Tours Across the Globe
            </h1>
            <p class="hero-desc">
              Tourm an international travel management company with 25 years of
              experience, specializing in business and maritime travel.
            </p>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="input-wrap">
                <form
                  action="https://html.themeholy.com/tourm/demo/mail.php"
                  method="POST"
                  class="booking-form style9 ajax-contact"
                >
                  <div class="row align-items-center justify-content-between">
                    <div class="form-group col-sm-6 col-lg-auto">
                      <div class="icon"><i class="fa-light fa-route"></i></div>
                      <div class="search-input">
                        <label>Destination</label>
                        <select
                          class="nice-select"
                          name="Destination"
                          id="Destination"
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
                    <div class="form-group col-sm-6 col-lg-auto">
                      <div class="icon">
                        <i class="fa-regular fa-person-hiking"></i>
                      </div>
                      <div class="search-input">
                        <label>Type</label>
                        <select class="nice-select" name="type" id="type">
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
                    <div class="form-group col-sm-6 col-lg-auto">
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
                    <div class="form-btn col-sm-6 col-lg-auto">
                      <button class="th-btn">
                        <img src="assets/img/icon/search.svg" alt="" />Search
                      </button>
                    </div>
                  </div>
                  <p class="form-messages mb-0 mt-3"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-video-img">
        <img src="assets/img/hero/hero-video-img.png" alt="" />
        <a
          href="https://www.youtube.com/watch?v=cQfIUPw72Dk"
          class="play-btn popup-video"
          ><i class="fa-sharp fa-solid fa-play"></i
        ></a>
      </div>
      <div class="scroll-down">
        <a href="#destination-sec" class="scroll-wrap"
          ><span><img src="assets/img/icon/down-arrow.svg" alt="" /></span
          >Scroll Down</a
        >
      </div>
    </div>
    <section
      class="position-relative overflow-hidden space"
      id="destination-sec"
    >
      <div class="container">
        <div
          class="row justify-content-lg-between justify-content-center align-items-center"
        >
          <div class="col-lg-7">
            <div class="title-area text-center text-lg-start pe-xl-5 me-xl-5">
              <span class="sub-title">Top Destination</span>
              <h2 class="sec-title">Top Museum Destination</h2>
            </div>
          </div>
          <div class="col-auto">
            <div class="sec-btn">
              <a href="destination.html" class="th-btn style3 th-icon"
                >View All</a
              >
            </div>
          </div>
        </div>
        <div class="slider-area">
          <div
            class="swiper th-slider has-shadow"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"},"1300":{"slidesPerView":"4"}}}'
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="destination-item4 style3 th-ani">
                  <div
                    class="destination-item4_img global-img"
                    data-mask-src="assets/img/destination/shape.png"
                  >
                    <img
                      src="assets/img/destination/destination_11_1.jpg"
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
                <div class="destination-item4 style3 th-ani">
                  <div
                    class="destination-item4_img global-img"
                    data-mask-src="assets/img/destination/shape.png"
                  >
                    <img
                      src="assets/img/destination/destination_11_2.jpg"
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
                <div class="destination-item4 style3 th-ani">
                  <div
                    class="destination-item4_img global-img"
                    data-mask-src="assets/img/destination/shape.png"
                  >
                    <img
                      src="assets/img/destination/destination_11_3.jpg"
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
                <div class="destination-item4 style3 th-ani">
                  <div
                    class="destination-item4_img global-img"
                    data-mask-src="assets/img/destination/shape.png"
                  >
                    <img
                      src="assets/img/destination/destination_11_4.jpg"
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
                <div class="destination-item4 style3 th-ani">
                  <div
                    class="destination-item4_img global-img"
                    data-mask-src="assets/img/destination/shape.png"
                  >
                    <img
                      src="assets/img/destination/destination_11_1.jpg"
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
                <div class="destination-item4 style3 th-ani">
                  <div
                    class="destination-item4_img global-img"
                    data-mask-src="assets/img/destination/shape.png"
                  >
                    <img
                      src="assets/img/destination/destination_11_2.jpg"
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
          data-bottom="21%"
          data-left="-14%"
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
    <div
      class="about-area10 bg-smoke position-relative overflow-hidden space"
      id="about-sec"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="title-area text-center">
              <span class="sub-title style1">Let’s Go Together</span>
              <h2 class="sec-title mb-20">
                Interactive Museum Tours That Bring History to Life
              </h2>
            </div>
          </div>
        </div>
        <div class="row gy-4">
          <div class="col-xl-5">
            <div class="about-card2-wrap">
              <div class="about-card2">
                <div class="box-centent">
                  <h5 class="box-title">Guided by the Pro</h5>
                  <p class="box-text">
                    Tour and travel agencies play a crucial role in simplifying
                    travel planning
                  </p>
                  <a href="blog-details.html" class="line-btn th-icon"
                    >Learn More</a
                  >
                </div>
                <div class="box-img">
                  <img src="assets/img/icon/about_card_1.svg" alt="" />
                </div>
              </div>
              <div class="about-card2">
                <div class="box-centent">
                  <h5 class="box-title">Online Booking Ticket</h5>
                  <p class="box-text">
                    Tour and travel agencies play a crucial role in simplifying
                    travel planning
                  </p>
                  <a href="blog-details.html" class="line-btn th-icon"
                    >Learn More</a
                  >
                </div>
                <div class="box-img">
                  <img src="assets/img/icon/about_card_2.svg" alt="" />
                </div>
              </div>
              <div class="about-card2">
                <div class="box-centent">
                  <h5 class="box-title">Latest Museum Collections</h5>
                  <p class="box-text">
                    Tour and travel agencies play a crucial role in simplifying
                    travel planning
                  </p>
                  <a href="blog-details.html" class="line-btn th-icon"
                    >Learn More</a
                  >
                </div>
                <div class="box-img">
                  <img src="assets/img/icon/about_card_3.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-7">
            <div class="img-box14">
              <div class="about-img-wrapp">
                <div class="img1">
                  <img src="assets/img/normal/about_11_1.jpg" alt="About" />
                </div>
                <div class="img2">
                  <img src="assets/img/normal/about_11_2.jpg" alt="About" />
                </div>
              </div>
              <div class="about-wrapp style2">
                <div class="icon">
                  <img src="assets/img/logo-icon2.svg" alt="" />
                </div>
                <div class="discount-wrapp">
                  <div class="discount-tag">
                    <span class="discount-anime"
                      >100k+ clients are happy to our service *</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="shape-mockup shape1 d-none d-xxl-block"
          data-top="14%"
          data-right="-13%"
        >
          <img src="assets/img/shape/shape_1.png" alt="shape" />
        </div>
        <div
          class="shape-mockup shape2 d-none d-xl-block"
          data-top="25%"
          data-right="-12%"
        >
          <img src="assets/img/shape/shape_2.png" alt="shape" />
        </div>
        <div
          class="shape-mockup shape3 d-none d-xxl-block"
          data-top="20%"
          data-right="-18%"
        >
          <img src="assets/img/shape/shape_3.png" alt="shape" />
        </div>
        <div
          class="shape-mockup z-index-3 d-none d-xxl-block"
          data-bottom="-10%"
          data-left="-18%"
        >
          <img src="assets/img/shape/car_2.png" alt="shape" />
        </div>
      </div>
    </div>
    <section
      class="gallery-area8 position-relative overflow-hidden space"
      id="gallery-sec"
    >
      <div class="container">
        <div
          class="row justify-content-lg-between justify-content-center align-items-center"
        >
          <div class="col-lg-7">
            <div class="title-area text-center text-lg-start pe-xl-5 me-xl-5">
              <span class="sub-title">Best Memorable Places</span>
              <h2 class="sec-title">
                Explore the most beautiful place in the world
              </h2>
              <p class="sec-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
          <div class="col-auto">
            <div class="sec-btn">
              <a href="team.html" class="th-btn style3 th-icon"
                >Enter Gallery</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid p-0">
        <div class="slider-area">
          <div
            class="swiper th-slider gallerySlide10 has-shadow"
            id="gallerySlide10"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"767":{"slidesPerView":"2","centeredSlides":"true"},"992":{"slidesPerView":"3","centeredSlides":"true"},"1200":{"slidesPerView":"3","centeredSlides":"true"},"1400":{"slidesPerView":"5","centeredSlides":"true"}}}'
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="gallery-card2">
                  <div class="box-img">
                    <a
                      href="assets/img/gallery/gallery_15_2.png"
                      class="popup-image"
                      ><img
                        src="assets/img/gallery/gallery_15_2.png"
                        alt="gallery image"
                    /></a>
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">The Golden Age</h3>
                    <p class="box-text">
                      Have a valid credit card or preferred payment method ready
                      to complete the booking process.
                    </p>
                  </div>
                  <div class="box-btn">
                    <a
                      href="assets/img/gallery/gallery_15_2.png"
                      class="icon-btn popup-image"
                      ><img src="assets/img/icon/right-up.svg" alt=""
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card2">
                  <div class="box-img">
                    <a
                      href="assets/img/gallery/gallery_15_3.png"
                      class="popup-image"
                      ><img
                        src="assets/img/gallery/gallery_15_3.png"
                        alt="gallery image"
                    /></a>
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">The Golden Age</h3>
                    <p class="box-text">
                      Have a valid credit card or preferred payment method ready
                      to complete the booking process.
                    </p>
                  </div>
                  <div class="box-btn">
                    <a
                      href="assets/img/gallery/gallery_15_3.png"
                      class="icon-btn popup-image"
                      ><img src="assets/img/icon/right-up.svg" alt=""
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card2">
                  <div class="box-img">
                    <a
                      href="assets/img/gallery/gallery_15_4.png"
                      class="popup-image"
                      ><img
                        src="assets/img/gallery/gallery_15_4.png"
                        alt="gallery image"
                    /></a>
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">The Golden Age</h3>
                    <p class="box-text">
                      Have a valid credit card or preferred payment method ready
                      to complete the booking process.
                    </p>
                  </div>
                  <div class="box-btn">
                    <a
                      href="assets/img/gallery/gallery_15_4.png"
                      class="icon-btn popup-image"
                      ><img src="assets/img/icon/right-up.svg" alt=""
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card2">
                  <div class="box-img">
                    <a
                      href="assets/img/gallery/gallery_15_5.png"
                      class="popup-image"
                      ><img
                        src="assets/img/gallery/gallery_15_5.png"
                        alt="gallery image"
                    /></a>
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">The Golden Age</h3>
                    <p class="box-text">
                      Have a valid credit card or preferred payment method ready
                      to complete the booking process.
                    </p>
                  </div>
                  <div class="box-btn">
                    <a
                      href="assets/img/gallery/gallery_15_5.png"
                      class="icon-btn popup-image"
                      ><img src="assets/img/icon/right-up.svg" alt=""
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card2">
                  <div class="box-img">
                    <a
                      href="assets/img/gallery/gallery_15_1.png"
                      class="popup-image"
                      ><img
                        src="assets/img/gallery/gallery_15_1.png"
                        alt="gallery image"
                    /></a>
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">The Golden Age</h3>
                    <p class="box-text">
                      Have a valid credit card or preferred payment method ready
                      to complete the booking process.
                    </p>
                  </div>
                  <div class="box-btn">
                    <a
                      href="assets/img/gallery/gallery_15_1.png"
                      class="icon-btn popup-image"
                      ><img src="assets/img/icon/right-up.svg" alt=""
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card2">
                  <div class="box-img">
                    <a
                      href="assets/img/gallery/gallery_15_2.png"
                      class="popup-image"
                      ><img
                        src="assets/img/gallery/gallery_15_2.png"
                        alt="gallery image"
                    /></a>
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">The Golden Age</h3>
                    <p class="box-text">
                      Have a valid credit card or preferred payment method ready
                      to complete the booking process.
                    </p>
                  </div>
                  <div class="box-btn">
                    <a
                      href="assets/img/gallery/gallery_15_2.png"
                      class="icon-btn popup-image"
                      ><img src="assets/img/icon/right-up.svg" alt=""
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card2">
                  <div class="box-img">
                    <a
                      href="assets/img/gallery/gallery_15_3.png"
                      class="popup-image"
                      ><img
                        src="assets/img/gallery/gallery_15_3.png"
                        alt="gallery image"
                    /></a>
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">The Golden Age</h3>
                    <p class="box-text">
                      Have a valid credit card or preferred payment method ready
                      to complete the booking process.
                    </p>
                  </div>
                  <div class="box-btn">
                    <a
                      href="assets/img/gallery/gallery_15_3.png"
                      class="icon-btn popup-image"
                      ><img src="assets/img/icon/right-up.svg" alt=""
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card2">
                  <div class="box-img">
                    <a
                      href="assets/img/gallery/gallery_15_4.png"
                      class="popup-image"
                      ><img
                        src="assets/img/gallery/gallery_15_4.png"
                        alt="gallery image"
                    /></a>
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">The Golden Age</h3>
                    <p class="box-text">
                      Have a valid credit card or preferred payment method ready
                      to complete the booking process.
                    </p>
                  </div>
                  <div class="box-btn">
                    <a
                      href="assets/img/gallery/gallery_15_4.png"
                      class="icon-btn popup-image"
                      ><img src="assets/img/icon/right-up.svg" alt=""
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card2">
                  <div class="box-img">
                    <a
                      href="assets/img/gallery/gallery_15_5.png"
                      class="popup-image"
                      ><img
                        src="assets/img/gallery/gallery_15_5.png"
                        alt="gallery image"
                    /></a>
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">The Golden Age</h3>
                    <p class="box-text">
                      Have a valid credit card or preferred payment method ready
                      to complete the booking process.
                    </p>
                  </div>
                  <div class="box-btn">
                    <a
                      href="assets/img/gallery/gallery_15_5.png"
                      class="icon-btn popup-image"
                      ><img src="assets/img/icon/right-up.svg" alt=""
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card2">
                  <div class="box-img">
                    <a
                      href="assets/img/gallery/gallery_15_1.png"
                      class="popup-image"
                      ><img
                        src="assets/img/gallery/gallery_15_1.png"
                        alt="gallery image"
                    /></a>
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">The Golden Age</h3>
                    <p class="box-text">
                      Have a valid credit card or preferred payment method ready
                      to complete the booking process.
                    </p>
                  </div>
                  <div class="box-btn">
                    <a
                      href="assets/img/gallery/gallery_15_1.png"
                      class="icon-btn popup-image"
                      ><img src="assets/img/icon/right-up.svg" alt=""
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card2">
                  <div class="box-img">
                    <a
                      href="assets/img/gallery/gallery_15_2.png"
                      class="popup-image"
                      ><img
                        src="assets/img/gallery/gallery_15_2.png"
                        alt="gallery image"
                    /></a>
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">The Golden Age</h3>
                    <p class="box-text">
                      Have a valid credit card or preferred payment method ready
                      to complete the booking process.
                    </p>
                  </div>
                  <div class="box-btn">
                    <a
                      href="assets/img/gallery/gallery_15_2.png"
                      class="icon-btn popup-image"
                      ><img src="assets/img/icon/right-up.svg" alt=""
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card2">
                  <div class="box-img">
                    <a
                      href="assets/img/gallery/gallery_15_3.png"
                      class="popup-image"
                      ><img
                        src="assets/img/gallery/gallery_15_3.png"
                        alt="gallery image"
                    /></a>
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">The Golden Age</h3>
                    <p class="box-text">
                      Have a valid credit card or preferred payment method ready
                      to complete the booking process.
                    </p>
                  </div>
                  <div class="box-btn">
                    <a
                      href="assets/img/gallery/gallery_15_3.png"
                      class="icon-btn popup-image"
                      ><img src="assets/img/icon/right-up.svg" alt=""
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card2">
                  <div class="box-img">
                    <a
                      href="assets/img/gallery/gallery_15_4.png"
                      class="popup-image"
                      ><img
                        src="assets/img/gallery/gallery_15_4.png"
                        alt="gallery image"
                    /></a>
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">The Golden Age</h3>
                    <p class="box-text">
                      Have a valid credit card or preferred payment method ready
                      to complete the booking process.
                    </p>
                  </div>
                  <div class="box-btn">
                    <a
                      href="assets/img/gallery/gallery_15_4.png"
                      class="icon-btn popup-image"
                      ><img src="assets/img/icon/right-up.svg" alt=""
                    /></a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="gallery-card2">
                  <div class="box-img">
                    <a
                      href="assets/img/gallery/gallery_15_5.png"
                      class="popup-image"
                      ><img
                        src="assets/img/gallery/gallery_15_5.png"
                        alt="gallery image"
                    /></a>
                  </div>
                  <div class="box-content">
                    <h3 class="box-title">The Golden Age</h3>
                    <p class="box-text">
                      Have a valid credit card or preferred payment method ready
                      to complete the booking process.
                    </p>
                  </div>
                  <div class="box-btn">
                    <a
                      href="assets/img/gallery/gallery_15_5.png"
                      class="icon-btn popup-image"
                      ><img src="assets/img/icon/right-up.svg" alt=""
                    /></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="slider-pagination"></div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="position-relative bg-smoke overflow-hidden space"
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
                <div class="tour-box th-ani gsap-cursor">
                  <div class="tour-box_img global-img">
                    <img src="assets/img/tour/tour_13_1.jpg" alt="image" />
                  </div>
                  <div class="tour-content">
                    <h3 class="box-title">
                      <a href="tour-details.html">Belgium Guggenheim Museum</a>
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
                      <a href="contact.html" class="th-btn style4 th-icon"
                        >Book Now</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="tour-box th-ani gsap-cursor">
                  <div class="tour-box_img global-img">
                    <img src="assets/img/tour/tour_13_2.jpg" alt="image" />
                  </div>
                  <div class="tour-content">
                    <h3 class="box-title">
                      <a href="tour-details.html">Italy Museum Tour package</a>
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
                      <a href="contact.html" class="th-btn style4 th-icon"
                        >Book Now</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="tour-box th-ani gsap-cursor">
                  <div class="tour-box_img global-img">
                    <img src="assets/img/tour/tour_13_3.jpg" alt="image" />
                  </div>
                  <div class="tour-content">
                    <h3 class="box-title">
                      <a href="tour-details.html">Dubai Museum Tour Package</a>
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
                      <a href="contact.html" class="th-btn style4 th-icon"
                        >Book Now</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="tour-box th-ani gsap-cursor">
                  <div class="tour-box_img global-img">
                    <img src="assets/img/tour/tour_13_4.jpg" alt="image" />
                  </div>
                  <div class="tour-content">
                    <h3 class="box-title">
                      <a href="tour-details.html">Switzerland Museum Tour</a>
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
                      <a href="contact.html" class="th-btn style4 th-icon"
                        >Book Now</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="tour-box th-ani gsap-cursor">
                  <div class="tour-box_img global-img">
                    <img src="assets/img/tour/tour_13_1.jpg" alt="image" />
                  </div>
                  <div class="tour-content">
                    <h3 class="box-title">
                      <a href="tour-details.html">Belgium Guggenheim Museum</a>
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
                      <a href="contact.html" class="th-btn style4 th-icon"
                        >Book Now</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="tour-box th-ani gsap-cursor">
                  <div class="tour-box_img global-img">
                    <img src="assets/img/tour/tour_13_2.jpg" alt="image" />
                  </div>
                  <div class="tour-content">
                    <h3 class="box-title">
                      <a href="tour-details.html">Italy Museum Tour package</a>
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
                      <a href="contact.html" class="th-btn style4 th-icon"
                        >Book Now</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slider-pagination"></div>
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
    <div
      class="history-sec1 overflow-hidden space-top"
      id="story-sec"
      data-pos-for=".team-area7"
      data-sec-pos="bottom-half"
    >
      <div class="container">
        <div
          class="history-area overflow-hidden"
          data-bg-src="assets/img/bg/history_bg_1.jpg"
        >
          <div class="history-content">
            <div class="title-area">
              <h3 class="sec-title">Meet with Tour Guide</h3>
              <p class="sec-text">
                Consider purchasing travel insurance to protect your trip in
                case of unforeseen circumstances, such as trip cancellation,
                medical emergencies, or lost luggage. Review the coverage and
                terms.
              </p>
            </div>
            <div class="btn-group">
              <a href="tour.html" class="th-btn style1 th-icon">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-60">
        <div class="row gy-4 justify-content-center">
          <div class="col-xl-4 col-md-6">
            <div class="story-box">
              <h3 class="box-title">Ticket Tours</h3>
              <p class="story-box_text">
                Specialized agencies manage business trips for companies,
                handling complex itineraries, multiple bookings, and loyalty
                programs, making it easier for employees to travel for work.
                Agencies often cater to group travel needs for events like
                family reunions.
              </p>
              <span class="story-box_icon"
                ><img src="assets/img/icon/history_1_1.svg" alt=""
              /></span>
              <div class="icon">
                <img src="assets/img/icon/arrow-up.svg" alt="" />
              </div>
              <div class="discount-wrapp">
                <div class="discount-tag">
                  <span class="discount-anime">See More about Tickets</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="story-box">
              <h3 class="box-title">Events</h3>
              <p class="story-box_text">
                Specialized agencies manage business trips for companies,
                handling complex itineraries, multiple bookings, and loyalty
                programs, making it easier for employees to travel for work.
                Agencies often cater to group travel needs for events like
                family reunions.
              </p>
              <span class="story-box_icon"
                ><img src="assets/img/icon/history_1_2.svg" alt=""
              /></span>
              <div class="icon">
                <img src="assets/img/icon/arrow-up.svg" alt="" />
              </div>
              <div class="discount-wrapp">
                <div class="discount-tag">
                  <span class="discount-anime">See More about Tickets</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="story-box">
              <h3 class="box-title">Attractions</h3>
              <p class="story-box_text">
                Specialized agencies manage business trips for companies,
                handling complex itineraries, multiple bookings, and loyalty
                programs, making it easier for employees to travel for work.
                Agencies often cater to group travel needs for events like
                family reunions.
              </p>
              <span class="story-box_icon"
                ><img src="assets/img/icon/history_1_3.svg" alt=""
              /></span>
              <div class="icon">
                <img src="assets/img/icon/arrow-up.svg" alt="" />
              </div>
              <div class="discount-wrapp">
                <div class="discount-tag">
                  <span class="discount-anime">See More about Tickets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section
      class="team-area7 bg-bottom-center position-relative space-top overflow-hidden"
      data-bg-src="assets/img/bg/team_bg_4.jpg"
    >
      <div class="container th-container2">
        <div class="title-area text-center">
          <span class="sub-title text-white">Meet with Guide</span>
          <h2 class="sec-title text-white">Meet with Tour Guide</h2>
        </div>
        <div
          class="swiper th-slider has-shadow categorySlider teamSlider10"
          id="teamSlider10"
          data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"767":{"slidesPerView":"2","centeredSlides":"true"},"992":{"slidesPerView":"3","centeredSlides":"true"},"1200":{"spaceBetween":120,"slidesPerView":"3","centeredSlides":"true"}}}'
        >
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="th-team team-grid3 single">
                <div class="team-img">
                  <img src="assets/img/team/team_6_1.jpg" alt="Team" />
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
              <div class="th-team team-grid3 single">
                <div class="team-img">
                  <img src="assets/img/team/team_6_2.jpg" alt="Team" />
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
              <div class="th-team team-grid3 single">
                <div class="team-img">
                  <img src="assets/img/team/team_6_3.jpg" alt="Team" />
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
              <div class="th-team team-grid3 single">
                <div class="team-img">
                  <img src="assets/img/team/team_6_1.jpg" alt="Team" />
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
              <div class="th-team team-grid3 single">
                <div class="team-img">
                  <img src="assets/img/team/team_6_2.jpg" alt="Team" />
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
              <div class="th-team team-grid3 single">
                <div class="team-img">
                  <img src="assets/img/team/team_6_3.jpg" alt="Team" />
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
          </div>
        </div>
        <div
          class="shape-mockup movingX d-none d-xl-block"
          data-top="8%"
          data-left="-5%"
        >
          <img src="assets/img/shape/shape_2_1.png" alt="shape" />
        </div>
        <div
          class="shape-mockup jump d-none d-xl-block"
          data-top="23%"
          data-right="-4%"
        >
          <img src="assets/img/shape/shape_2_2.png" alt="shape" />
        </div>
        <div
          class="shape-mockup spin d-none d-xl-block"
          data-bottom="-4%"
          data-left="-8%"
        >
          <img src="assets/img/shape/shape_2_3.png" alt="shape" />
        </div>
        <div
          class="shape-mockup movingX d-none d-xl-block"
          data-bottom="12%"
          data-right="-4%"
        >
          <img src="assets/img/shape/shape_2_4.png" alt="shape" />
        </div>
      </div>
      <div class="elements-sec space-extra-top overflow-hidden">
        <div class="container-fluid">
          <div class="tags-container relative"></div>
        </div>
      </div>
    </section>
    <div
      class="about-area position-relative overflow-hidden space overflow-hidden"
      id="about-sec"
    >
      <div class="container">
        <div class="row gy-4">
          <div class="col-xl-6">
            <div class="img-box15 pe-xl-4">
              <div class="img1 global-img">
                <img src="assets/img/normal/about_12_1.jpg" alt="About" />
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="ps-xl-4">
              <div class="title-area mb-20">
                <span class="sub-title style1">More About Us</span>
                <h2 class="sec-title mb-20">
                  Top Ways to Enjoy Your Next Museum Visit
                </h2>
                <p class="sec-text2 mb-50">
                  Specialized agencies manage business trips for companies,
                  handling complex itineraries, multiple bookings, and loyalty
                  programs, making it easier.
                </p>
              </div>
              <div class="about-item-wrap style2">
                <div class="about-item style4">
                  <div class="about-item_img">
                    <img src="assets/img/icon/about_2_1.svg" alt="" />
                  </div>
                  <div class="about-item_centent">
                    <h5 class="box-title">Secure Booking</h5>
                    <p class="about-item_text">
                      Have a valid credit card or preferred payment method ready
                      to complete the booking process.
                    </p>
                  </div>
                </div>
                <div class="about-item style4">
                  <div class="about-item_img">
                    <img src="assets/img/icon/about_2_2.svg" alt="" />
                  </div>
                  <div class="about-item_centent">
                    <h5 class="box-title">Cultural Tours</h5>
                    <p class="about-item_text">
                      Have a valid credit card or preferred payment method ready
                      to complete the booking process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section
      class="testi-area12 position-relative bg-smoke overflow-hidden space"
      id="testi-sec"
    >
      <div class="container-fluid pe-4 ps-4 justify-content-center">
        <div class="title-area mb-20 text-center">
          <span class="sub-title">Testimonial</span>
          <h2 class="sec-title">What Client Say About us</h2>
        </div>
        <div class="slider-area">
          <div
            class="swiper th-slider testiSlider12 has-shadow"
            id="testiSlider12"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"767":{"slidesPerView":"1","centeredSlides":"true"},"992":{"slidesPerView":"1","centeredSlides":"true"},"1200":{"slidesPerView":"2","centeredSlides":"true"},"1400":{"slidesPerView":"3","centeredSlides":"true"}}}'
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testi-card5">
                  <div class="box-img">
                    <img src="assets/img/testimonial/testi_11_1.jpg" alt="" />
                  </div>
                  <div class="box-content">
                    <div class="box-quote">
                      <img src="assets/img/icon/testi-quote5.svg" alt="img" />
                    </div>
                    <p class="box-text">
                      “Major travel agencies include global players like TUI,
                      Thomas Cook, Flight Centre, and American Express Travel,
                      alongside many boutique.”
                    </p>
                    <h3 class="box-title">Angelina Mary</h3>
                    <span class="box-desig">World Traveler</span>
                    <span class="box-number">01</span>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card5">
                  <div class="box-img">
                    <img src="assets/img/testimonial/testi_11_2.jpg" alt="" />
                  </div>
                  <div class="box-content">
                    <div class="box-quote">
                      <img src="assets/img/icon/testi-quote5.svg" alt="img" />
                    </div>
                    <p class="box-text">
                      “Major travel agencies include global players like TUI,
                      Thomas Cook, Flight Centre, and American Express Travel,
                      alongside many boutique.”
                    </p>
                    <h3 class="box-title">Maria Doe</h3>
                    <span class="box-desig">World Traveler</span>
                    <span class="box-number">02</span>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card5">
                  <div class="box-img">
                    <img src="assets/img/testimonial/testi_11_3.jpg" alt="" />
                  </div>
                  <div class="box-content">
                    <div class="box-quote">
                      <img src="assets/img/icon/testi-quote5.svg" alt="img" />
                    </div>
                    <p class="box-text">
                      “Major travel agencies include global players like TUI,
                      Thomas Cook, Flight Centre, and American Express Travel,
                      alongside many boutique.”
                    </p>
                    <h3 class="box-title">Angelina Rose</h3>
                    <span class="box-desig">World Traveler</span>
                    <span class="box-number">03</span>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card5">
                  <div class="box-img">
                    <img src="assets/img/testimonial/testi_11_1.jpg" alt="" />
                  </div>
                  <div class="box-content">
                    <div class="box-quote">
                      <img src="assets/img/icon/testi-quote5.svg" alt="img" />
                    </div>
                    <p class="box-text">
                      “Major travel agencies include global players like TUI,
                      Thomas Cook, Flight Centre, and American Express Travel,
                      alongside many boutique.”
                    </p>
                    <h3 class="box-title">Angelina Mary</h3>
                    <span class="box-desig">World Traveler</span>
                    <span class="box-number">01</span>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card5">
                  <div class="box-img">
                    <img src="assets/img/testimonial/testi_11_2.jpg" alt="" />
                  </div>
                  <div class="box-content">
                    <div class="box-quote">
                      <img src="assets/img/icon/testi-quote5.svg" alt="img" />
                    </div>
                    <p class="box-text">
                      “Major travel agencies include global players like TUI,
                      Thomas Cook, Flight Centre, and American Express Travel,
                      alongside many boutique.”
                    </p>
                    <h3 class="box-title">Maria Doe</h3>
                    <span class="box-desig">World Traveler</span>
                    <span class="box-number">02</span>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card5">
                  <div class="box-img">
                    <img src="assets/img/testimonial/testi_11_3.jpg" alt="" />
                  </div>
                  <div class="box-content">
                    <div class="box-quote">
                      <img src="assets/img/icon/testi-quote5.svg" alt="img" />
                    </div>
                    <p class="box-text">
                      “A home that perfectly blends sustainability with luxury
                      until I discovered Ecoland Residence. From the moment I
                      stepped into this community, I knew it was where I wanted
                      to live. The commitment to eco-friendly living”
                    </p>
                    <h3 class="box-title">Angelina Rose</h3>
                    <span class="box-desig">World Traveler</span>
                    <span class="box-number">03</span>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card5">
                  <div class="box-img">
                    <img src="assets/img/testimonial/testi_11_1.jpg" alt="" />
                  </div>
                  <div class="box-content">
                    <div class="box-quote">
                      <img src="assets/img/icon/testi-quote5.svg" alt="img" />
                    </div>
                    <p class="box-text">
                      “Major travel agencies include global players like TUI,
                      Thomas Cook, Flight Centre, and American Express Travel,
                      alongside many boutique.”
                    </p>
                    <h3 class="box-title">Angelina Mary</h3>
                    <span class="box-desig">World Traveler</span>
                    <span class="box-number">01</span>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card5">
                  <div class="box-img">
                    <img src="assets/img/testimonial/testi_11_2.jpg" alt="" />
                  </div>
                  <div class="box-content">
                    <div class="box-quote">
                      <img src="assets/img/icon/testi-quote5.svg" alt="img" />
                    </div>
                    <p class="box-text">
                      “Major travel agencies include global players like TUI,
                      Thomas Cook, Flight Centre, and American Express Travel,
                      alongside many boutique.”
                    </p>
                    <h3 class="box-title">Maria Doe</h3>
                    <span class="box-desig">World Traveler</span>
                    <span class="box-number">02</span>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testi-card5">
                  <div class="box-img">
                    <img src="assets/img/testimonial/testi_11_3.jpg" alt="" />
                  </div>
                  <div class="box-content">
                    <div class="box-quote">
                      <img src="assets/img/icon/testi-quote5.svg" alt="img" />
                    </div>
                    <p class="box-text">
                      “A home that perfectly blends sustainability with luxury
                      until I discovered Ecoland Residence. From the moment I
                      stepped into this community, I knew it was where I wanted
                      to live. The commitment to eco-friendly living”
                    </p>
                    <h3 class="box-title">Angelina Rose</h3>
                    <span class="box-desig">World Traveler</span>
                    <span class="box-number">03</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="slider-pagination"></div>
            <button
              data-slider-prev="#testiSlider12"
              class="slider-arrow style7 slider-prev"
            >
              <img src="assets/img/icon/right-arrow2.svg" alt="" />
            </button>
            <button
              data-slider-next="#testiSlider12"
              class="slider-arrow style7 slider-next"
            >
              <img src="assets/img/icon/left-arrow2.svg" alt="" />
            </button>
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
    <section class="overflow-hidden space" id="blog-sec">
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
                    <img src="assets/img/blog/blog_13_1.jpg" alt="blog image" />
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
                    <img src="assets/img/blog/blog_13_2.jpg" alt="blog image" />
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
                    <img src="assets/img/blog/blog_13_3.jpg" alt="blog image" />
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
                    <img src="assets/img/blog/blog_13_1.jpg" alt="blog image" />
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
                    <img src="assets/img/blog/blog_13_2.jpg" alt="blog image" />
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
                    <img src="assets/img/blog/blog_13_3.jpg" alt="blog image" />
                  </div>
                  <div class="blog-box_content">
                    <div class="blog-meta">
                      <a class="author" href="blog.html">Sep 13 2024</a>
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
        <div
          class="shape-mockup shape1 d-none d-xxl-block"
          data-bottom="20%"
          data-left="-17%"
        >
          <img src="assets/img/shape/shape_1.png" alt="shape" />
        </div>
        <div
          class="shape-mockup shape2 d-none d-xl-block"
          data-bottom="5%"
          data-left="-17%"
        >
          <img src="assets/img/shape/shape_2.png" alt="shape" />
        </div>
        <div
          class="shape-mockup shape3 d-none d-xxl-block"
          data-bottom="12%"
          data-left="-10%"
        >
          <img src="assets/img/shape/shape_3.png" alt="shape" />
        </div>
      </div>
    </section>
    <div
      class="newsletter-area2 space"
      data-bg-src="assets/img/bg/subscribe_bg_2.jpg"
    >
      <div class="container">
        <div class="newsletter-sec2">
          <div class="newsletter-wrapp">
            <h2 class="h2 newsletter-title mb-30">
              Subscribe to Our Newsletter
            </h2>
          </div>
          <div class="newsletter-form-wrapper">
            <form class="newsletter-form style5">
              <input
                class="form-control"
                type="email"
                placeholder="Enter your Email"
                required=""
              />
              <button type="submit" class="th-btn style3 th-icon">
                Subscribe
              </button>
            </form>
          </div>
          <p class="newsletter-text2">
            Refer to our Privacy Policy for data management specifics
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Homemuseumtour