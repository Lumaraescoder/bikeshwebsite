import React from 'react'

function Tour() {
  return (
    <div>
    <div className="breadcumb-wrapper" style={{ backgroundImage: "url('/assets/img/bg/breadcumb-bg.jpg')" }}>
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">Popular Tours</h1>
          <ul className="breadcumb-menu">
            <li><a href="home-travel.html">Home</a></li>
            <li>Popular Tours</li>
          </ul>
        </div>
      </div>
    </div>
    <section className="space">
      <div className="container">
        <div className="th-sort-bar">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-4">
              <div className="search-form-area">
                <form className="search-form">
                  <input type="text" placeholder="Search" />
                  <button type="submit">
                    <i className="fa-light fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-auto">
              <div className="sorting-filter-wrap">
                <div className="nav" role="tablist">
                  <a
                    className="active"
                    href="#"
                    id="tab-destination-grid"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-grid"
                    role="tab"
                    aria-controls="tab-grid"
                    aria-selected="true"
                    ><i className="fa-light fa-grid-2"></i></a>
                  <a
                    href="#"
                    id="tab-destination-list"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-list"
                    role="tab"
                    aria-controls="tab-list"
                    aria-selected="false"
                    className=""
                    ><i className="fa-solid fa-list"></i></a>
                </div>
                <form className="woocommerce-ordering" method="get">
                  <select
                    name="orderby"
                    className="orderby"
                    aria-label="destination order"
                  >
                    <option value="menu_order" selected="selected">
                      Default Sorting
                    </option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by latest</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">
                      Sort by price: high to low
                    </option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-8 col-lg-7">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade active show"
                id="tab-grid"
                role="tabpanel"
                aria-labelledby="tab-tour-grid"
              >
                <div className="row gy-24 gx-24">
                  <div className="col-md-6">
                    <div className="tour-box th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_4_1.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <a href="tour-details.html">Greece Tour Package</a>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <a
                            href="tour-details.html"
                            className="woocommerce-review-link"
                            >(<span className="count">4.8</span> Rating)</a>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$980.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <a href="tour-details.html" className="th-btn style4"
                            >Detail View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tour-box th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_4_2.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <a href="tour-details.html">Dubai Tour Package</a>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <a
                            href="tour-details.html"
                            className="woocommerce-review-link"
                            >(<span className="count">4.8</span> Rating)</a>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$980.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <a href="tour-details.html" className="th-btn style4"
                            >Detail View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tour-box th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_4_3.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <a href="tour-details.html">Belgium Tour Package</a>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <a
                            href="tour-details.html"
                            className="woocommerce-review-link"
                            >(<span className="count">4.8</span> Rating)</a>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$980.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <a href="tour-details.html" className="th-btn style4"
                            >Detail View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tour-box th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_4_4.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <a href="tour-details.html">Greece Tour Package</a>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <a
                            href="tour-details.html"
                            className="woocommerce-review-link"
                            >(<span className="count">4.8</span> Rating)</a>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$980.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <a href="tour-details.html" className="th-btn style4"
                            >Detail View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tour-box th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_4_5.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <a href="tour-details.html">Maldives Tour Package</a>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <a
                            href="tour-details.html"
                            className="woocommerce-review-link"
                            >(<span className="count">4.8</span> Rating)</a>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$980.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <a href="tour-details.html" className="th-btn style4"
                            >Detail View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tour-box th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_4_6.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <a href="tour-details.html">Paris Tour Package</a>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <a
                            href="tour-details.html"
                            className="woocommerce-review-link"
                            >(<span className="count">4.8</span> Rating)</a>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$980.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <a href="tour-details.html" className="th-btn style4"
                            >Detail View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tour-box th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_4_7.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <a href="tour-details.html"
                            >Switzerland Tour Package</a>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <a
                            href="tour-details.html"
                            className="woocommerce-review-link"
                            >(<span className="count">4.8</span> Rating)</a>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$980.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <a href="tour-details.html" className="th-btn style4"
                            >Detail View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="tour-box th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_4_8.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <a href="tour-details.html">Bali Tour Package</a>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <a
                            href="tour-details.html"
                            className="woocommerce-review-link"
                            >(<span className="count">4.8</span> Rating)</a>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$980.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <a href="tour-details.html" className="th-btn style4"
                            >Detail View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="tab-list"
                role="tabpanel"
                aria-labelledby="tab-tour-list"
              >
                <div className="row gy-30">
                  <div className="col-12">
                    <div className="tour-box style-flex th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_4_1.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <a href="tour-details.html">Greece Tour Package</a>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <a
                            href="tour-details.html"
                            className="woocommerce-review-link"
                            >(<span className="count">4.8</span> Rating)</a>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$980.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <a href="tour-details.html" className="th-btn style4"
                            >Detail View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="tour-box style-flex th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_4_2.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <a href="tour-details.html">Dubai Tour Package</a>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <a
                            href="tour-details.html"
                            className="woocommerce-review-link"
                            >(<span className="count">4.8</span> Rating)</a>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$980.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <a href="tour-details.html" className="th-btn style4"
                            >Detail View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="tour-box style-flex th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_4_3.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <a href="tour-details.html">Belgium Tour Package</a>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <a
                            href="tour-details.html"
                            className="woocommerce-review-link"
                            >(<span className="count">4.8</span> Rating)</a>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$980.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <a href="tour-details.html" className="th-btn style4"
                            >Detail View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="tour-box style-flex th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_4_4.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <a href="tour-details.html">Greece Tour Package</a>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <a
                            href="tour-details.html"
                            className="woocommerce-review-link"
                            >(<span className="count">4.8</span> Rating)</a>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$980.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <a href="tour-details.html" className="th-btn style4"
                            >Detail View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="tour-box style-flex th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_4_5.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <a href="tour-details.html">Maldives Tour Package</a>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <a
                            href="tour-details.html"
                            className="woocommerce-review-link"
                            >(<span className="count">4.8</span> Rating)</a>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$980.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <a href="tour-details.html" className="th-btn style4"
                            >Detail View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="tour-box style-flex th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_4_6.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <a href="tour-details.html">Paris Tour Package</a>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <a
                            href="tour-details.html"
                            className="woocommerce-review-link"
                            >(<span className="count">4.8</span> Rating)</a>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$980.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <a href="tour-details.html" className="th-btn style4"
                            >Detail View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="tour-box style-flex th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_4_7.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <a href="tour-details.html"
                            >Switzerland Tour Package</a>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <a
                            href="tour-details.html"
                            className="woocommerce-review-link"
                            >(<span className="count">4.8</span> Rating)</a>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$980.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <a href="tour-details.html" className="th-btn style4"
                            >Detail View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="tour-box style-flex th-ani">
                      <div className="tour-box_img global-img">
                        <img src="assets/img/tour/tour_4_8.jpg" alt="image" />
                      </div>
                      <div className="tour-content">
                        <h3 className="box-title">
                          <a href="tour-details.html">Bali Tour Package</a>
                        </h3>
                        <div className="tour-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{width: "100%"}}
                              >Rated <strong className="rating">5.00</strong> out of
                              5 based on <span className="rating">4.8</span>(4.8
                              Rating)</span>
                          </div>
                          <a
                            href="tour-details.html"
                            className="woocommerce-review-link"
                            >(<span className="count">4.8</span> Rating)</a>
                        </div>
                        <h4 className="tour-box_price">
                          <span className="currency">$980.00</span>/Person
                        </h4>
                        <div className="tour-action">
                          <span><i className="fa-light fa-clock"></i>7 Days</span>
                          <a href="tour-details.html" className="th-btn style4"
                            >Detail View</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="th-pagination text-center mt-60">
                <ul>
                  <li><a className="active" href="/tour">1</a></li>
                  <li><a href="/tour">2</a></li>
                  <li><a href="/tour">3</a></li>
                  <li><a href="/tour">4</a></li>
                  <li>
                    <a className="next-page" href="/tour"
                      >Next <img src="assets/img/icon/arrow-right4.svg" alt=""
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area">
              <div className="widget widget_categories">
                <h3 className="widget_title">Categories</h3>
                <ul>
                  <li>
                    <a href="blog.html"
                      ><img src="assets/img/theme-img/map.svg" alt="" />City
                      Tour</a>
                    <span>(8)</span>
                  </li>
                  <li>
                    <a href="blog.html"
                      ><img src="assets/img/theme-img/map.svg" alt="" />Beach
                      Tours</a>
                    <span>(6)</span>
                  </li>
                  <li>
                    <a href="blog.html"
                      ><img src="assets/img/theme-img/map.svg" alt="" />Wildlife
                      Tours</a>
                    <span>(2)</span>
                  </li>
                  <li>
                    <a href="blog.html"
                      ><img src="assets/img/theme-img/map.svg" alt="" />News &
                      Tips</a>
                    <span>(7)</span>
                  </li>
                  <li>
                    <a href="blog.html"
                      ><img
                        src="assets/img/theme-img/map.svg"
                        alt=""
                      />Adventure Tours</a>
                    <span>(9)</span>
                  </li>
                  <li>
                    <a href="blog.html"
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
                        <a href="blog.html"
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
                        <a href="blog.html"
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
                        <a href="blog.html"
                          ><i className="fa-regular fa-calendar"></i>27/6/ 2025</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget widget_tag_cloud">
                <h3 className="widget_title">Popular Tags</h3>
                <div className="tagcloud">
                  <a href="blog.html">Tour</a>
                  <a href="blog.html">Adventure</a>
                  <a href="blog.html">Rent</a> <a href="blog.html">Innovate</a>
                  <a href="blog.html">Hotel</a> <a href="blog.html">Modern</a>
                  <a href="blog.html">Luxury</a> <a href="blog.html">Travel</a>
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
                    <a href="contact.html" className="th-btn style2 th-icon"
                      >Read More</a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <div
          className="shape-mockup shape1 d-none d-xxl-block"
          data-bottom="7%"
          data-right="-8%"
        >
          <img src="assets/img/shape/shape_1.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape2 d-none d-xl-block"
          data-bottom="1%"
          data-right="-7%"
        >
          <img src="assets/img/shape/shape_2.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape3 d-none d-xxl-block"
          data-bottom="-2%"
          data-right="-12%"
        >
          <img src="assets/img/shape/shape_3.png" alt="shape" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Tour