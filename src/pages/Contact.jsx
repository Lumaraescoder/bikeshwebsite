import React, { useState } from "react";

function Contact() {
  return (
    <div>
      <div className="space">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Get In Touch</span>
            <h2 className="sec-title">Our Contact Information</h2>
          </div>
          <div className="row gy-4 justify-content-center">
            <div className="col-xl-4 col-lg-6">
              <div className="about-contact-grid style2">
                <div className="about-contact-icon">
                  <img src="assets/img/icon/location-dot2.svg" alt="" />
                </div>
                <div className="about-contact-details">
                  <h6 className="box-title">Our Address</h6>
                  <p className="about-contact-details-text">Lisboa</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="about-contact-grid">
                <div className="about-contact-icon">
                  <img src="assets/img/icon/call.svg" alt="" />
                </div>
                <div className="about-contact-details">
                  <h6 className="box-title">Phone Number</h6>
                  <p className="about-contact-details-text">
                    <a href="tel:01234567890">+351 920 414 513</a>
                  </p>
                  {/* <p className="about-contact-details-text">
                    <a href="tel:01234567890">+09 876 543 210</a>
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="about-contact-grid">
                <div className="about-contact-icon">
                  <img src="assets/img/icon/mail.svg" alt="" />
                </div>
                <div className="about-contact-details">
                  <h6 className="box-title">Email Address</h6>
                  <p className="about-contact-details-text">
                    <a href="mailto:bikeshlawaju@icloud.com">
                      bikeshlawaju@icloud.com
                    </a>
                  </p>
                  {/* <p className="about-contact-details-text">
                    <a href="mailto:support24@tourm.com">support24@tourm.com</a>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="space-extra2-top space-extra2-bottom"
        // style={{ backgroundImage: "url('/assets/img/bg/video_bg_1.jpg')" }}
      >
        <div className="container">
          <div className="row flex-row-reverse justify-content-center align-items-center">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [people, setPeople] = useState(1);
  const [hours, setHours] = useState(1);
  const [startTime, setStartTime] = useState("");

  return (
    <form
      action="https://formspree.io/f/mlgznboo"
      method="POST"
      className="contact-form style2"
      onSubmit={(e) => {
        if (!e.target.name?.value || !e.target.email?.value) {
          e.preventDefault();
          alert("Please provide your name and email before submitting.");
        }
      }}
    >
      <h3 className="sec-title mb-30 text-capitalize">Book a tour</h3>
      <div className="row">
        <div className="col-12 form-group">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Full Name"
            required
          />
          <img src="assets/img/icon/user.svg" alt="" />
        </div>

        <div className="col-12 form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email Address"
            required
          />
          <img src="assets/img/icon/mail.svg" alt="" />
        </div>

        <div className="col-12 form-group">
          <input
            type="tel"
            className="form-control"
            name="phone"
            placeholder="Phone / WhatsApp Number"
          />
          <img src="assets/img/icon/call.svg" alt="" />
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label style={{ fontSize: "14px" }}>Date</label>
            <input type="date" name="date" className="form-control" />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label style={{ fontSize: "14px" }}>Number of Passengers</label>
            <select
              name="people"
              className="form-control"
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
            >
              <option value={1}>1 Passenger</option>
              <option value={2}>2 Passengers</option>
              <option value={3}>3 Passengers</option>
              <option value={4}>4 Passengers</option>
              <option value={5}>5 Passengers</option>
              <option value={6}>6 Passengers</option>
              <option value={7}>7 Passengers</option>
            </select>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label style={{ fontSize: "14px" }}>Hours</label>
            <select
              name="hours"
              className="form-control"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
            >
              <option value={1}>1 hour</option>
              <option value={2}>2 hours</option>
              <option value={3}>3 hours</option>
              <option value={4}>4 hours</option>
              <option value={5}>5 hours</option>
              <option value={6}>6 hours</option>
            </select>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label style={{ fontSize: "14px" }}>Start Time</label>
            <input
              type="time"
              name="start_time"
              className="form-control"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label style={{ fontSize: "14px" }}>Pick up</label>
            <input
              type="text"
              name="pickup"
              className="form-control"
              placeholder="Pick up"
            />
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <textarea
              name="message"
              className="form-control"
              rows="4"
              placeholder="Special requests, accessibility needs or anything you'd like us to know..."
            ></textarea>
          </div>
        </div>

        <input type="hidden" name="_subject" value={`New Tour Inquiry`} />

        <div className="col-12 form-btn">
          <button type="submit" className="th-btn style3 w-100">
            Send inquiry
            <img src="assets/img/icon/plane.svg" alt="" />
          </button>
        </div>
      </div>
      <p className="form-messages mb-0 mt-3"></p>
    </form>
  );
}

export default Contact;
