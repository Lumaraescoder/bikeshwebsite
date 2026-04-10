import React from "react";

function Header() {
  return (
    <div>
      {/* <div className="cursor-follower"></div> */}
      <div className="slider-drag-cursor">
        <i className="fas fa-angle-left me-2"></i> DRAG
        <i className="fas fa-angle-right ms-2"></i>
      </div>
      <div className="color-scheme-wrap active">
        <button className="switchIcon">
          <i className="fa-solid fa-palette"></i>
        </button>
        <h4 className="color-scheme-wrap-title">
          <i className="far fa-palette"></i>STYLE SWITCHER
        </h4>
        <div className="color-switch-btns">
          <button style={{ color: "#684DF4" }}>
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button style={{ color: "#086ad8" }}>
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button style={{ color: "#FC3737" }}>
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button style={{ color: "#8a2be2" }}>
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button style={{ color: "#104CBA" }}>
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button style={{ color: "#ffbf4f" }}>
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button style={{ color: "#323F7C" }}>
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button style={{ color: "#0e2bc5" }}>
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button style={{ color: "#F79C53" }}>
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button style={{ color: "#6957af" }}>
            <i className="fa-solid fa-droplet"></i>
          </button>
        </div>
        <a
          href="https://themeforest.net/search/themeholy"
          className="th-btn text-center"
        >
          <i className="fa fa-shopping-cart me-2"></i> Purchase
        </a>
      </div>
      <div id="preloader" className="preloader">
        {/* <button className="th-btn preloaderCls">Cancel Preloader</button> */}
        <div className="preloader-inner">
          <img src="assets/img/logo3.svg" alt="" />
        </div>
        <div id="loader" className="th-preloader">
          <div className="animation-preloader">
            <div className="txt-loading">
              <span preloader-text="T" className="characters">
                T{" "}
              </span>
              <span preloader-text="O" className="characters">
                O{" "}
              </span>
              <span preloader-text="U" className="characters">
                U{" "}
              </span>
              <span preloader-text="R" className="characters">
                R{" "}
              </span>
              <span preloader-text="M" className="characters">
                M
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="sidemenu-wrapper sidemenu-info">
        <div className="sidemenu-content">
          <button className="closeButton sideMenuCls">
            <i className="far fa-times"></i>
          </button>
          <div className="widget">
            <div className="th-widget-about">
              <div className="about-logo">
                <a href="/">
                  <img src="assets/img/logo2.svg" alt="Tourm" />
                </a>
              </div>
              <p className="about-text">
                Rapidiously myocardinate cross-platform intellectual capital
                model. Appropriately create interactive infrastructures
              </p>
              <div className="th-social">
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.twitter.com/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.whatsapp.com/">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="widget">
            <h3 className="widget_title">Recent Posts</h3>
            <div className="recent-post-wrap">
              <div className="recent-post">
                <div className="media-img">
                  <a href="/blog-details">
                    <img
                      src="assets/img/blog/recent-post-1-1.jpg"
                      alt="Blog Image"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <div className="recent-post-meta">
                    <a href="/blog">
                      <i className="far fa-calendar"></i>24 Jun , 2025
                    </a>
                  </div>
                  <h4 className="post-title">
                    <a className="text-inherit" href="/blog-details">
                      Where Vision Meets Concrete Reality
                    </a>
                  </h4>
                </div>
              </div>
              <div className="recent-post">
                <div className="media-img">
                  <a href="/blog-details">
                    <img
                      src="assets/img/blog/recent-post-1-2.jpg"
                      alt="Blog Image"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <div className="recent-post-meta">
                    <a href="/blog">
                      <i className="far fa-calendar"></i>22 Jun , 2025
                    </a>
                  </div>
                  <h4 className="post-title">
                    <a className="text-inherit" href="/blog-details">
                      Raising the Bar in Construction.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="widget">
            <h3 className="widget_title">Get In Touch</h3>
            <div className="th-widget-contact">
              <div className="info-box_text">
                <div className="icon">
                  <img src="assets/img/icon/phone.svg" alt="img" />
                </div>
                <div className="details">
                  <p>
                    <a href="tel:+01234567890" className="info-box_link">
                      +01 234 567 890
                    </a>
                  </p>
                  <p>
                    <a href="tel:+09876543210" className="info-box_link">
                      +09 876 543 210
                    </a>
                  </p>
                </div>
              </div>
              <div className="info-box_text">
                <div className="icon">
                  <img src="assets/img/icon/envelope.svg" alt="img" />
                </div>
                <div className="details">
                  <p>
                    <a
                      href="mailto:mailinfo00@tourm.com"
                      className="info-box_link"
                    >
                      mailinfo00@tourm.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:support24@tourm.com"
                      className="info-box_link"
                    >
                      support24@tourm.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="info-box_text">
                <div className="icon">
                  <img src="assets/img/icon/location-dot.svg" alt="img" />
                </div>
                <div className="details">
                  <p>789 Inner Lane, Holy park, California, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popup-search-box">
        <button className="searchClose">
          <i className="fal fa-times"></i>
        </button>
        <form action="#">
          <input type="text" placeholder="What are you looking for?" />
          <button type="submit">
            <i className="fal fa-search"></i>
          </button>
        </form>
      </div>
      <div className="th-menu-wrapper onepage-nav">
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle">
            <i className="fal fa-times"></i>
          </button>
          <div className="mobile-logo">
            <a href="/">
              <img src="/assets/img/logo2.svg" alt="Tourm" />
            </a>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li className="menu-item-has-children mega-menu-wrap">
                <a className="active" href="/">
                  Home
                </a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Destination</a>
                <ul className="sub-menu">
                  <li>
                    <a href="/destination">Destination</a>
                  </li>
                  <li>
                    <a href="/destination-details">Destination Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Service</a>
                <ul className="sub-menu">
                  <li>
                    <a href="/service">Services</a>
                  </li>
                  <li>
                    <a href="/service-details">Service Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Activities</a>
                <ul className="sub-menu">
                  <li>
                    <a href="/activity">activities</a>
                  </li>
                  <li>
                    <a href="/activities-details">activities Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li className="menu-item-has-children">
                    <a href="#">Shop</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="shop.html">Shop</a>
                      </li>
                      <li>
                        <a href="shop-details.html">Shop Details</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart Page</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="/tour">Our Tour</a>
                  </li>
                  <li>
                    <a href="/tour-details">Tour Details</a>
                  </li>
                  <li>
                    <a href="resort.html">Resort page</a>
                  </li>
                  <li>
                    <a href="resort-details.html">Resort Details</a>
                  </li>
                  <li>
                    <a href="/tour-details">Tour Details</a>
                  </li>
                  <li>
                    <a href="tour-guide.html">Tour Guider</a>
                  </li>
                  <li>
                    <a href="tour-guider-details.html">Tour Guider Details</a>
                  </li>
                  <li>
                    <a href="/faq">Faq Page</a>
                  </li>
                  <li>
                    <a href="/price">Price Package</a>
                  </li>
                  <li>
                    <a href="/error">Error Page</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/blog-details">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header className="th-header header-layout1">
        <div className="header-top">
          <div className="container th-container">
            <div className="row justify-content-center justify-content-xl-between align-items-center">
              <div className="col-auto d-none d-md-block">
                <div className="header-links">
                  <ul>
                    {/* Address and opening hours removed as requested */}
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-right">
                  <div className="currency-menu">
                    <select className="form-select nice-select">
                      <option selected="">language</option>
                      <option>CNY</option>
                      <option>EUR</option>
                      <option>AUD</option>
                    </select>
                  </div>
                  <div className="header-links">
                    <ul>
                      <li className="d-none d-md-inline-block">
                        <a href="/faq">FAQ</a>
                      </li>
                      <li className="d-none d-md-inline-block">
                        <a href="/contact">Support</a>
                      </li>
                      <li>
                        <a href="#login-form" className="popup-content">
                          Sign In / Register
                          <i className="fa-regular fa-user"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container th-container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <a href="/">
                      <img src="/assets/img/logo.svg" alt="Tourm" />
                    </a>
                  </div>
                </div>
                <div className="col-auto me-xl-auto">
                  <nav className="main-menu d-none d-xl-inline-block">
                    <ul>
                      <li className="mega-menu-wrap">
                        <a className="active" href="/">
                          Home
                        </a>
                        {/* <ul className="mega-menu mega-menu-content">
                        <li>
                          <div className="container">
                            <div className="row gy-4">
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/.jpg"
                                      alt="Home One"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        target="_blank"
                                        href="/"
                                        className="th-btn"
                                        >View Demo</a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="/"
                                      >Home Travel</a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-tour.jpg"
                                      alt="Home Two"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        target="_blank"
                                        href="home-/tour"
                                        className="th-btn"
                                        >View Demo</a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-/tour"
                                      >Home Tour</a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-agency.jpg"
                                      alt="Home Three"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        target="_blank"
                                        href="home-agency.html"
                                        className="th-btn"
                                        >View Demo</a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-agency.html"
                                      >Home Agency</a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-yacht.jpg"
                                      alt="Home Four"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        target="_blank"
                                        href="home-yacht.html"
                                        className="th-btn"
                                        >View Demo</a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-yacht.html"
                                      >Home Yacht</a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-beach.jpg"
                                      alt="Home Five"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        target="_blank"
                                        href="home-beach.html"
                                        className="th-btn"
                                        >View Demo</a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-beach.html"
                                      >Home Beach</a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-resort.jpg"
                                      alt="Home Six"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        target="_blank"
                                        href="home-resort.html"
                                        className="th-btn"
                                        >View Demo</a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-resort.html"
                                      >Home resort</a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-countryside-hotel.jpg"
                                      alt="Home Six"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        target="_blank"
                                        href="home-countryside-hotel.html"
                                        className="th-btn"
                                        >View Demo</a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-countryside-hotel.html"
                                      >Home Countryside Hotel</a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-forest.jpg"
                                      alt="Home Six"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        target="_blank"
                                        href="home-forest.html"
                                        className="th-btn">View Demo</a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-forest.html"
                                      >Home Forest</a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-hiking.jpg"
                                      alt="Home Six"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        target="_blank"
                                        href="home-hiking.html"
                                        className="th-btn"
                                        >View Demo</a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-hiking.html"
                                      >Home Hiking</a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-hiking-2.jpg"
                                      alt="Home ten"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        target="_blank"
                                        href="home-hiking-2.html"
                                        className="th-btn"
                                        >View Demo</a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-hiking-2.html"
                                      >Home Hiking Style 2</a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-cruise-tour.jpg"
                                      alt="Home ten"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        target="_blank"
                                        href="home-cruise-/tour"
                                        className="th-btn"
                                        >View Demo</a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-cruise-/tour"
                                      >Home Cruise Tour</a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/-agency.jpg"
                                      alt="Home ten"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        target="_blank"
                                        href="home-travel-agency.html"
                                        className="th-btn"
                                        >View Demo</a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-travel-agency.html"
                                      >Home Travel Agency</a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-museum-tour.jpg"
                                      alt="Home ten"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        target="_blank"
                                        href="home-museum-/tour"
                                        className="th-btn"
                                        >View Demo</a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-museum-/tour"
                                      >Home Museum Tour</a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-worldwide-tour.jpg"
                                      alt="Home ten"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        target="_blank"
                                        href="home-worldwide-/tour"
                                        className="th-btn"
                                        >View Demo</a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-worldwide-/tour"
                                      >Home Worldwide Tour</a>
                                  </h3>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="mega-menu-box">
                                  <div className="mega-menu-img">
                                    <img
                                      src="assets/img/pages/home-city-tour.jpg"
                                      alt="Home ten"
                                    />
                                    <div className="btn-wrap">
                                      <a
                                        target="_blank"
                                        href="home-city-/tour"
                                        className="th-btn"
                                        >View Demo</a>
                                    </div>
                                  </div>
                                  <h3 className="mega-menu-title">
                                    <a href="home-city-/tour"
                                      >Home City Tour</a>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul> */}
                      </li>
                      <li>
                        <a href="/about">About Us</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Destination</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/destination">Destination</a>
                          </li>
                          <li>
                            <a href="/destination-details">
                              Destination Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Service</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/service">Services</a>
                          </li>
                          <li>
                            <a href="/service-details">Service Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Activities</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/activity">activities</a>
                          </li>
                          <li>
                            <a href="/activities-details">activities Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <a href="#">Shop</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="shop.html">Shop</a>
                              </li>
                              <li>
                                <a href="shop-details.html">Shop Details</a>
                              </li>
                              <li>
                                <a href="cart.html">Cart Page</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                              <li>
                                <a href="wishlist.html">Wishlist</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="gallery.html">Gallery</a>
                          </li>
                          <li>
                            <a href="/tour">Our Tour</a>
                          </li>
                          <li>
                            <a href="/tour-details">Tour Details</a>
                          </li>
                          <li>
                            <a href="resort.html">Resort page</a>
                          </li>
                          <li>
                            <a href="resort-details.html">Resort Details</a>
                          </li>
                          <li>
                            <a href="/tour-details">Tour Details</a>
                          </li>
                          <li>
                            <a href="tour-guide.html">Tour Guider</a>
                          </li>
                          <li>
                            <a href="tour-guider-details.html">
                              Tour Guider Details
                            </a>
                          </li>
                          <li>
                            <a href="/faq">Faq Page</a>
                          </li>
                          <li>
                            <a href="/price">Price Package</a>
                          </li>
                          <li>
                            <a href="/error">Error Page</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/blog">Blog</a>
                          </li>
                          <li>
                            <a href="/blog-details">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/contact">Contact us</a>
                      </li>
                    </ul>
                  </nav>
                  <button
                    type="button"
                    className="th-menu-toggle d-block d-xl-none"
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </div>
                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <a href="/contact" className="th-btn style3 th-icon">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="logo-bg"
              data-mask-src="assets/img/logo_bg_mask.png"
            ></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
