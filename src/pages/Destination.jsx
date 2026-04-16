import React from "react";
import { Link } from "react-router-dom";
import { destinations } from "../data/destinations.js";

function Destination() {
  return (
    <div>
      <div
        className="breadcumb-wrapper"
        style={{ backgroundImage: "url('/assets/img/bg/breadcumb-bg.jpg')" }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Destinos</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Destinos</li>
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
                    <input type="text" placeholder="Pesquisar" />
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
                    >
                      <i className="fa-light fa-grid-2"></i>
                    </a>
                    <a
                      href="#"
                      id="tab-destination-list"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-list"
                      role="tab"
                      aria-controls="tab-list"
                      aria-selected="false"
                      className=""
                    >
                      <i className="fa-solid fa-list"></i>
                    </a>
                  </div>
                  <form className="woocommerce-ordering" method="get">
                    <select
                      name="orderby"
                      className="orderby"
                      aria-label="order dos destinos"
                    >
                      <option value="menu_order" selected="selected">
                        Ordenação Padrão
                      </option>
                      <option value="popularity">Popularidade</option>
                      <option value="rating">Avaliação média</option>
                      <option value="date">Mais recentes</option>
                      <option value="price">Preço: baixo para alto</option>
                      <option value="price-desc">
                        Preço: alto para baixo
                      </option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-9 col-lg-8">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade active show"
                  id="tab-grid"
                  role="tabpanel"
                  aria-labelledby="tab-destination-grid"
                >
                  <div className="row gy-30">
                    {destinations.map((destination) => (
                      <div key={destination.id} className="col-xxl-4 col-xl-6">
                        <div className="tour-box th-ani">
                          <div className="tour-box_img global-img">
                            <img src={'/' + destination.heroImg} alt={destination.title} />
                          </div>
                          <div className="tour-content">
                            <h3 className="box-title">
                              <Link to={`/destination-details/${destination.slug}`}>{destination.title}</Link>
                            </h3>
                            <div className="tour-rating">
                              <div
                                className="star-rating"
                                role="img"
                                aria-label={`Rated ${destination.rating} out of 5`}
                              >
                                <span style={{ width: "100%" }}>
                                  Avaliado <strong className="rating">{destination.rating}</strong>{" "}
                                  de 5 com base em <span className="rating">{destination.rating}</span>({destination.rating}
                                  Avaliação)
                                </span>
                              </div>
                              <Link
                                to={`/destination-details/${destination.slug}`}
                                className="woocommerce-review-link"
                              >
                                (<span className="count">{destination.rating}</span> Avaliação)
                              </Link>
                            </div>
                            <h4 className="tour-box_price">
                              <span className="currency">{destination.price}</span>/Pessoa
                            </h4>
                            <div className="tour-action">
                              <span>
                                <i className="fa-light fa-clock"></i>{destination.duration}
                              </span>
                              <Link to="/contact" className="th-btn style4 th-icon">
                                Reservar Agora
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-list"
                  role="tabpanel"
                  aria-labelledby="tab-destination-list"
                >
                  <div className="row gy-30">
                    {destinations.map((destination) => (
                      <div key={destination.id} className="col-12">
                        <div className="tour-box style-flex th-ani">
                          <div className="tour-box_img global-img">
                            <img src={'/' + destination.heroImg} alt={destination.title} />
                          </div>
                          <div className="tour-content">
                            <h3 className="box-title">
                              <Link to={`/destination-details/${destination.slug}`}>{destination.title}</Link>
                            </h3>
                            <div className="tour-rating">
                              <div
                                className="star-rating"
                                role="img"
                                aria-label={`Rated ${destination.rating} out of 5`}
                              >
                                <span style={{ width: "100%" }}>
                                  Avaliado <strong className="rating">{destination.rating}</strong>{" "}
                                  de 5 com base em <span className="rating">{destination.rating}</span>({destination.rating} Avaliação)
                                </span>
                              </div>
                              <Link
                                to={`/destination-details/${destination.slug}`}
                                className="woocommerce-review-link"
                              >
                                (<span className="count">{destination.rating}</span> Avaliação)
                              </Link>
                            </div>
                            <h4 className="tour-box_price">
                              <span className="currency">{destination.price}</span>/Pessoa
                            </h4>
                            <div className="tour-action">
                              <span>
                                <i className="fa-light fa-clock"></i>{destination.duration}
                              </span>
                              <Link to="/contact" className="th-btn style4 th-icon">
                                Reservar Agora
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="th-pagination text-center mt-60 mb-0">
                <ul>
                  <li>
                    <a className="active" href="/destination">
                      1
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4">
              <aside className="sidebar-area style2">
                <div className="widget widget_categories">
                  <h3 className="widget_title">Categorias</h3>
                  <ul>
                    <li>
                      <a href="/blog">
                        <img src="assets/img/theme-img/map.svg" alt="" />
                        City Tour
                      </a>
                      <span>(8)</span>
                    </li>
                    <li>
                      <a href="/blog">
                        <img src="assets/img/theme-img/map.svg" alt="" />
                        Beach Tours
                      </a>
                      <span>(6)</span>
                    </li>
                    <li>
                      <a href="/blog">
                        <img src="assets/img/theme-img/map.svg" alt="" />
                        Wildlife Tours
                      </a>
                      <span>(2)</span>
                    </li>
                    <li>
                      <a href="/blog">
                        <img src="assets/img/theme-img/map.svg" alt="" />
                        News & Tips
                      </a>
                      <span>(7)</span>
                    </li>
                    <li>
                      <a href="/blog">
                        <img src="assets/img/theme-img/map.svg" alt="" />
                        Adventure Tours
                      </a>
                      <span>(9)</span>
                    </li>
                    <li>
                      <a href="/blog">
                        <img src="assets/img/theme-img/map.svg" alt="" />
                        Mountain Tours
                      </a>
                      <span>(10)</span>
                    </li>
                  </ul>
                </div>
                <div className="widget">
                  <h3 className="widget_title">Publicações Recentes</h3>
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
                        <h4 className="post-title">
                          <a className="text-inherit" href="/blog-details">
                            Exploring The Green Spaces Of the island maldives
                          </a>
                        </h4>
                        <div className="recent-post-meta">
                          <a href="/blog">
                            <i className="fa-regular fa-calendar"></i>22/6/ 2025
                          </a>
                        </div>
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
                        <h4 className="post-title">
                          <a className="text-inherit" href="/blog-details">
                            Harmony With Nature Of Belgium Tour and travle
                          </a>
                        </h4>
                        <div className="recent-post-meta">
                          <a href="/blog">
                            <i className="fa-regular fa-calendar"></i>25/6/ 2025
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="/blog-details">
                          <img
                            src="assets/img/blog/recent-post-1-3.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a className="text-inherit" href="/blog-details">
                            Exploring The Green Spaces Of Realar Residence
                          </a>
                        </h4>
                        <div className="recent-post-meta">
                          <a href="/blog">
                            <i className="fa-regular fa-calendar"></i>27/6/ 2025
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget widget_tag_cloud">
                  <h3 className="widget_title">Tags Populares</h3>
                  <div className="tagcloud">
                    <a href="/blog">Tour</a>
                    <a href="/blog">Aventura</a>
                    <a href="/blog">Aluguel</a> <a href="/blog">Inovação</a>
                    <a href="/blog">Hotel</a> <a href="/blog">Moderno</a>
                    <a href="/blog">Luxo</a> <a href="/blog">Viagem</a>
                  </div>
                </div>
                <div
                  className="widget widget_offer"
                  style={{
                    backgroundImage: "url('/assets/img/bg/widget_bg_1.jpg')",
                  }}
                >
                  <div className="offer-banner">
                    <div className="offer">
                      <h6 className="box-title">
                        Precisa de ajuda? Estamos aqui para ajudar
                      </h6>
                      <div className="banner-logo">
                        <img src="assets/img/logo2.svg" alt="Tourm" />
                      </div>
                      <div className="offer">
                        <h6 className="offer-title">Suporte online disponível</h6>
                        <a className="offter-num" href="%2b256214203215.html">
                          +256 214 203 215
                        </a>
                      </div>
                      <a href="/contact" className="th-btn style2 th-icon">
                        Saber Mais
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Destination;
