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
              <li>
                <a className="active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a href="#service-sec">Tours</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header className="th-header header-layout1">
     
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
                      <li>
                        <a className="active" href="#hero">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="#service-sec">Tours</a>
                      </li>
                      <li>
                        <a href="#gallery">Gallery</a>
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
