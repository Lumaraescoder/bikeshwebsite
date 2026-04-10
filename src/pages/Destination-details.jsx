import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Destinationdetails() {
  const { slug } = useParams();

  // Static content for Alfama tour as example - descriptions in English
  const title = "Alfama Old Town Tour";
  const heroImg = "assets/img/photosoftheclientes/clientspanteao%20alfama.jpeg";
  const shortDesc =
    "Explore the heart of Lisbon's oldest district, winding alleys, Fado music, and the stunning Panteão Nacional. Perfect for history lovers and first-time visitors.";
  const longDesc =
    "Discover Alfama, Lisbon's oldest neighborhood, with its narrow cobblestone streets, traditional Fado houses, and breathtaking viewpoints. Visit the National Pantheon, Miradouro da Senhora do Monte, and hidden azulejo-covered squares. Hear live Fado music stories and taste genuine Portuguese petiscos. Our electric tuk-tuk navigates the steep hills perfectly, offering unique access to spots larger vehicles can't reach.";
  const duration = "1h";
  const price = "€35";
  const rating = 4.9;
  const reviews = 128;
  const location = "Lisbon, Portugal";
  const visa = "Schengen Area - visa policy applies";
  const language = "Portuguese, English";
  const currency = "Euro (€)";
  const bestTime = "Year-round (avoid August heat)";
  const highlights = [
    "National Pantheon visit",
    "Miradouro Senhora do Monte",
    "Traditional Fado neighborhood",
    "Historic azulejo tiles",
    "Narrow street tuk-tuk access",
  ];
  const gallery = [
    "assets/img/photosoftheclientes/clientspanteao alfama.jpeg",
    "assets/img/photosoftheclientes/capa.jpeg",
    "assets/img/photosoftheclientes/0389dc11-52a8-4df9-93ea-99a34ae2a493.jpeg",
    "assets/img/photosoftheclientes/clients.jpeg",
  ];

  return (
    <div>
      <div
        className="breadcumb-wrapper"
        style={{ backgroundImage: "url('/assets/img/bg/breadcumb-bg.jpg')" }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">{title}</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Destination Details</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="space">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="page-single">
                <div className="service-img">
                  <img src={heroImg} alt={title} />
                </div>
                <div className="page-content d-block">
                  <div className="page-meta mt-50 mb-45">
                    <a className="page-tag" href="/tour">
                      Featured
                    </a>
                    <span className="ratting">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <span>{rating}</span>
                    </span>
                  </div>
                  <h2 className="box-title">{shortDesc}</h2>
                  <p className="blog-text mb-30">{longDesc}</p>
                  <h2 className="box-title">Basic Information</h2>
                  <div className="destination-checklist">
                    <div className="checklist style2">
                      <ul>
                        <li>Destination</li>
                        <li>Visa Requirements</li>
                        <li>Language</li>
                        <li>Currency Used</li>
                        <li>Best Time</li>
                        <li>Duration</li>
                        <li>Per Person</li>
                      </ul>
                    </div>
                    <div className="checklist style2">
                      <ul>
                        <li>{location}</li>
                        <li>{visa}</li>
                        <li>{language}</li>
                        <li>{currency}</li>
                        <li>{bestTime}</li>
                        <li>{duration}</li>
                        <li>{price}</li>
                      </ul>
                    </div>
                  </div>
                  <h2 className="box-title">Highlights</h2>
                  <div className="checklist">
                    <ul>
                      {highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="destination-gallery-wrapper">
                  <h3 className="page-title mt-30 mb-30">From our gallery</h3>
                  <div className="row gy-4 gallery-row filter-active">
                    {gallery.map((img, i) => (
                      <div key={i} className="col-xxl-auto filter-item">
                        <div className="gallery-box style3">
                          <div className="gallery-img global-img">
                            <img src={"/" + img} alt="gallery image" />
                            <a
                              href={"/" + img}
                              className="icon-btn popup-image"
                            >
                              <i className="fal fa-magnifying-glass-plus"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <section id="book" className="space-top">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <div className="section-header style2 text-center">
                          <h2 className="section-title">Book This Tour</h2>
                          <p>
                            {title} - {duration} | {price} per person
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8 mx-auto">
                        <form className="tour-book-form">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Full Name"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Email Address"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  type="tel"
                                  className="form-control"
                                  placeholder="Phone Number"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  type="date"
                                  className="form-control"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <select className="form-control" required>
                                  <option>Number of People</option>
                                  <option>1 Person</option>
                                  <option>2 People</option>
                                  <option>3+ People</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  rows="4"
                                  placeholder="Special Requirements"
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-12">
                              <button type="submit" className="th-btn w-100">
                                Book Now - {price}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="th-comments-wrap style2">
                  <h2 className="blog-inner-title h4">Reviews ({reviews})</h2>
                  {/* static reviews keep */}
                  <ul className="comment-list">
                    {/* keep existing reviews */}
                    <li className="th-comment-item">
                      {/* ... keep all comment JSX ... */}
                    </li>
                    {/* ... */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-5">{/* keep sidebar */}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Destinationdetails;
