import React from "react";

function Footer() {
  return (
    <>
      <footer
        className="footer-wrapper bg-title footer-layout2"
        style={{ marginTop: "100px", height: "800px" }}
      >
        <div className="widget-area">
          <div className="container">
            <div className="newsletter-area">
              <div className="newsletter-top"></div>
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
