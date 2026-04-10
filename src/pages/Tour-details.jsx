import React from 'react'

function Tourdetails() {
  return (
    <div>
    <div className="breadcumb-wrapper" style={{ backgroundImage: "url('/assets/img/bg/breadcumb-bg.jpg')" }}>
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">Tour Details</h1>
          <ul className="breadcumb-menu">
            <li><a href="home-travel.html">Home</a></li>
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
                <div
                  className="swiper th-slider mb-4"
                  id="tourSlider4"
                  data-slider-options='{"effect":"fade","loop":true,"thumbs":{"swiper":".tour-thumb-slider"},"autoplayDisableOnInteraction":"true"}'
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="tour-slider-img">
                        <img src="assets/img/tour/tour_inner_1.jpg" alt="img" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="tour-slider-img">
                        <img src="assets/img/tour/tour_inner_2.jpg" alt="img" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="tour-slider-img">
                        <img src="assets/img/tour/tour_inner_3.jpg" alt="img" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="tour-slider-img">
                        <img src="assets/img/tour/tour_inner_1.jpg" alt="img" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="tour-slider-img">
                        <img src="assets/img/tour/tour_inner_2.jpg" alt="img" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="tour-slider-img">
                        <img src="assets/img/tour/tour_inner_3.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper th-slider tour-thumb-slider"
                  data-slider-options='{"effect":"slide","loop":true,"breakpoints":{"0":{"slidesPerView":2},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"3"}},"autoplayDisableOnInteraction":"true"}'
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="tour-slider-img">
                        <img
                          src="assets/img/tour/tour_inner_1.jpg"
                          alt="Image"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="tour-slider-img">
                        <img
                          src="assets/img/tour/tour_inner_2.jpg"
                          alt="Image"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="tour-slider-img">
                        <img
                          src="assets/img/tour/tour_inner_3.jpg"
                          alt="Image"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="tour-slider-img">
                        <img
                          src="assets/img/tour/tour_inner_1.jpg"
                          alt="Image"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="tour-slider-img">
                        <img
                          src="assets/img/tour/tour_inner_2.jpg"
                          alt="Image"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="tour-slider-img">
                        <img
                          src="assets/img/tour/tour_inner_3.jpg"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
                <h2 className="box-title">
                  Explore the Beauty of Maldives and enjoy
                </h2>
                <h4 className="tour-price">
                  <span className="currency">$189,25</span>/Person
                </h4>
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
                <h2 className="box-title">Basic Information</h2>
                <p className="blog-text mb-35">
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Dolorem ipsum
                  quia dolor sit amet, consectetur, adipisci.
                </p>
                <div className="destination-checklist mb-50">
                  <div className="checklist style2">
                    <ul>
                      <li>Destination</li>
                      <li>Departure</li>
                      <li>Language</li>
                      <li>Reture Date</li>
                      <li>Departure Date</li>
                      <li>No. of Guide</li>
                    </ul>
                  </div>
                  <div className="checklist style2">
                    <ul>
                      <li>Netherland</li>
                      <li>Singapore Airport, Singapore</li>
                      <li>English</li>
                      <li>August 12, 2024</li>
                      <li>Netherland</li>
                      <li>25 Tour Places</li>
                      <li>2 Person</li>
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
                      Day 01
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
                      Day 02
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
                      Day 03
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="day-tab4"
                      data-bs-toggle="tab"
                      data-bs-target="#day-tab4-pane"
                      type="button"
                      role="tab"
                      aria-controls="day-tab4-pane"
                      aria-selected="false"
                    >
                      Day 04
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="day-tab5"
                      data-bs-toggle="tab"
                      data-bs-target="#day-tab5-pane"
                      type="button"
                      role="tab"
                      aria-controls="day-tab5-pane"
                      aria-selected="false"
                    >
                      Day 05
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="day-tab6"
                      data-bs-toggle="tab"
                      data-bs-target="#day-tab6-pane"
                      type="button"
                      role="tab"
                      aria-controls="day-tab6-pane"
                      aria-selected="false"
                    >
                      Day 06
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="day-tab7"
                      data-bs-toggle="tab"
                      data-bs-target="#day-tab7-pane"
                      type="button"
                      role="tab"
                      aria-controls="day-tab7-pane"
                      aria-selected="false"
                    >
                      Day 07
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
                          <li>
                            As the Eiffel Tower is to Paris, the silhouette of
                            the
                          </li>
                          <li>
                            Curabitur pellentesque nibh nibh, at maximus ante
                          </li>
                          <li>
                            United commitment toour excellence patent
                            protection.
                          </li>
                          <li>
                            As the Eiffel Tower is to Paris, the silhouette of
                            the
                          </li>
                          <li>
                            Maecenas vitae mattis tellus. Nullam quis imperdiet
                          </li>
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
                          <li>
                            As the Eiffel Tower is to Paris, the silhouette of
                            the
                          </li>
                          <li>
                            Curabitur pellentesque nibh nibh, at maximus ante
                          </li>
                          <li>
                            United commitment toour excellence patent
                            protection.
                          </li>
                          <li>
                            As the Eiffel Tower is to Paris, the silhouette of
                            the
                          </li>
                          <li>
                            Maecenas vitae mattis tellus. Nullam quis imperdiet
                          </li>
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
                          <li>
                            As the Eiffel Tower is to Paris, the silhouette of
                            the
                          </li>
                          <li>
                            Curabitur pellentesque nibh nibh, at maximus ante
                          </li>
                          <li>
                            United commitment toour excellence patent
                            protection.
                          </li>
                          <li>
                            As the Eiffel Tower is to Paris, the silhouette of
                            the
                          </li>
                          <li>
                            Maecenas vitae mattis tellus. Nullam quis imperdiet
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="day-tab5-pane"
                    role="tabpanel"
                    aria-labelledby="day-tab5"
                    tabindex="0"
                  >
                    <div className="tour-grid-plan">
                      <div className="checklist">
                        <ul>
                          <li>
                            As the Eiffel Tower is to Paris, the silhouette of
                            the
                          </li>
                          <li>
                            Curabitur pellentesque nibh nibh, at maximus ante
                          </li>
                          <li>
                            United commitment toour excellence patent
                            protection.
                          </li>
                          <li>
                            As the Eiffel Tower is to Paris, the silhouette of
                            the
                          </li>
                          <li>
                            Maecenas vitae mattis tellus. Nullam quis imperdiet
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="day-tab6-pane"
                    role="tabpanel"
                    aria-labelledby="day-tab6"
                    tabindex="0"
                  >
                    <div className="tour-grid-plan">
                      <div className="checklist">
                        <ul>
                          <li>
                            As the Eiffel Tower is to Paris, the silhouette of
                            the
                          </li>
                          <li>
                            Curabitur pellentesque nibh nibh, at maximus ante
                          </li>
                          <li>
                            United commitment toour excellence patent
                            protection.
                          </li>
                          <li>
                            As the Eiffel Tower is to Paris, the silhouette of
                            the
                          </li>
                          <li>
                            Maecenas vitae mattis tellus. Nullam quis imperdiet
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="day-tab7-pane"
                    role="tabpanel"
                    aria-labelledby="day-tab7"
                    tabindex="0"
                  >
                    <div className="tour-grid-plan">
                      <div className="checklist">
                        <ul>
                          <li>
                            As the Eiffel Tower is to Paris, the silhouette of
                            the
                          </li>
                          <li>
                            Curabitur pellentesque nibh nibh, at maximus ante
                          </li>
                          <li>
                            United commitment toour excellence patent
                            protection.
                          </li>
                          <li>
                            As the Eiffel Tower is to Paris, the silhouette of
                            the
                          </li>
                          <li>
                            Maecenas vitae mattis tellus. Nullam quis imperdiet
                          </li>
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
              <div className="widget">
                <h3 className="widget_title">Recent Posts</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-img">
                      <a href="blog-details.html"
                        ><img
                          src="assets/img/blog/recent-post-1-1.jpg"
                          alt="Blog Image"
                      /></a>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <a className="text-inherit" href="blog-details.html"
                          >Exploring The Green Spaces Of the island maldives</a>
                      </h4>
                      <div className="recent-post-meta">
                        <a href="/blog"
                          ><i className="fa-regular fa-calendar"></i>22/6/ 2025</a>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                      <a href="blog-details.html"
                        ><img
                          src="assets/img/blog/recent-post-1-2.jpg"
                          alt="Blog Image"
                      /></a>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <a className="text-inherit" href="blog-details.html"
                          >Harmony With Nature Of Belgium Tour and travle</a>
                      </h4>
                      <div className="recent-post-meta">
                        <a href="/blog"
                          ><i className="fa-regular fa-calendar"></i>25/6/ 2025</a>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                      <a href="blog-details.html"
                        ><img
                          src="assets/img/blog/recent-post-1-3.jpg"
                          alt="Blog Image"
                      /></a>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <a className="text-inherit" href="blog-details.html"
                          >Exploring The Green Spaces Of Realar Residence</a>
                      </h4>
                      <div className="recent-post-meta">
                        <a href="/blog"
                          ><i className="fa-regular fa-calendar"></i>27/6/ 2025</a>
                      </div>
                    </div>
                  </div>
                </div>
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
                data-bg-src="assets/img/bg/widget_bg_1.jpg"
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
                    <a href="contact.html" className="th-btn style2 th-icon"
                      >Read More</a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <div className="tour-gallery-wrapper">
          <h3 className="page-title mt-50 mb-30">From our gallery</h3>
          <div className="row gy-4 gallery-row filter-active">
            <div className="col-md-6 col-xl-auto filter-item">
              <div className="tour-gallery-card">
                <div className="gallery-img global-img">
                  <img
                    src="assets/img/gallery/gallery_5_1.jpg"
                    alt="gallery image"
                  />
                  <a
                    href="assets/img/gallery/gallery_5_1.jpg"
                    className="icon-btn popup-image"
                    ><i className="fal fa-magnifying-glass-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto filter-item">
              <div className="tour-gallery-card">
                <div className="gallery-img global-img">
                  <img
                    src="assets/img/gallery/gallery_5_2.jpg"
                    alt="gallery image"
                  />
                  <a
                    href="assets/img/gallery/gallery_5_2.jpg"
                    className="icon-btn popup-image"
                    ><i className="fal fa-magnifying-glass-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto filter-item">
              <div className="tour-gallery-card">
                <div className="gallery-img global-img">
                  <img
                    src="assets/img/gallery/gallery_5_3.jpg"
                    alt="gallery image"
                  />
                  <a
                    href="assets/img/gallery/gallery_5_3.jpg"
                    className="icon-btn popup-image"
                    ><i className="fal fa-magnifying-glass-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto filter-item">
              <div className="tour-gallery-card">
                <div className="gallery-img global-img">
                  <img
                    src="assets/img/gallery/gallery_5_4.jpg"
                    alt="gallery image"
                  />
                  <a
                    href="assets/img/gallery/gallery_5_4.jpg"
                    className="icon-btn popup-image"
                    ><i className="fal fa-magnifying-glass-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto filter-item">
              <div className="tour-gallery-card">
                <div className="gallery-img global-img">
                  <img
                    src="assets/img/gallery/gallery_5_5.jpg"
                    alt="gallery image"
                  />
                  <a
                    href="assets/img/gallery/gallery_5_5.jpg"
                    className="icon-btn popup-image"
                    ><i className="fal fa-magnifying-glass-plus"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="location-map">
          <h3 className="page-title mt-45 mb-30">Location</h3>
          <div className="contact-map style3">
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
          <i className="fa-sharp fa-solid fa-star"></i><span>4.9k</span>
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
  )
}

export default Tourdetails