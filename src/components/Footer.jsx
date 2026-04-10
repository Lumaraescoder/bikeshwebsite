import React from "react";

function Footer() {
  return (
    <>
      <footer
        className="footer-wrapper bg-title footer-layout2"
        style={{ marginTop: "100px" }}
      >
        <div className="widget-area">
          <div className="container">
            <div className="newsletter-area">
              <div className="newsletter-top">
                <div className="row gy-4 align-items-center">
                  <div className="col-lg-5">
                    <h2 className="newsletter-title text-white text-capitalize mb-0">
                      get updated the latest newsletter
                    </h2>
                  </div>
                  <div className="col-lg-7">
                    <form className="newsletter-form style2">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Enter Email"
                        required=""
                      />
                      <button type="submit" className="th-btn style1">
                        Subscribe Now
                        <img src="assets/img/icon/plane2.svg" alt="" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-3">
                <div className="widget footer-widget">
                  <div className="th-widget-about">
                    <div className="about-logo">
                      <a href="/">
                        <img src="assets/img/logo-white.svg" alt="Tourm" />
                      </a>
                    </div>
                    <p className="about-text">
                      Rapidiously myocardinate cross-platform intellectual
                      capital model. Appropriately create interactive
                      infrastructures
                    </p>
                    <div className="th-social">
                      <a href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://www.twitter.com/">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* ...other footer columns/widgets can go here... */}
            </div>
          </div>
        </div>
      </footer>
      {/* Scroll top and login form can be placed outside the footer if needed */}
      <div className="scroll-top">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "307.919",
            }}
          ></path>
        </svg>
      </div>
      <div id="login-form" className="popup-login-register mfp-hide">
        {/* ...login/register form content here... */}
      </div>
    </>
  );
}

export default Footer;
