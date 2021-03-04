import React, { Component } from "react";
import "./contact.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import map1 from "../../assets/map1.svg";
import map2 from "../../assets/map2.svg";
import map3 from "../../assets/map3.svg";
class Contact extends Component {
  constructor() {
    super();
    this.state = {
      fulltname: "",
      email: "",
      msg: "",
    };
  }
  changefullName = (event) => {
    this.setState({
      fullname: event.target.value,
    });
  };
  changeemail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  changemsg = (event) => {
    this.setState({
      msg: event.target.value,
    });
  };
  sendEmail = (event) => {
    event.preventDefault();

    const regitstered = {
      fullname: this.state.fullname,
      email: this.state.email,
      msg: this.state.msg,
    };
    axios
      .post("http://localhost:5000/app/signup", regitstered)
      .then((res) => console.log(res.data));

    this.setState({
      fullname: "",
      email: "",
      msg: "",
    });
  };
  render() {
    return (
      <>
        <section className="contact_top_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-10 col-md-10 col-sm-10 col-12 mx-auto">
                <div className="about_top_banner">
                  <h1>Contact Us</h1>
                  <NavLink to="/about" className="contact_btn">
                    About Us
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="map">
          <iframe
            width="600"
            height="450"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62205.76671891818!2d77.6158920862314!3d12.980778061040395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe3e4281694d06515!2sRpl%20Techno%20It%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1612898464918!5m2!1sen!2sin"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-10 col-md-10 col-sm-10 col-12 mx-auto">
                <div className="row map_position">
                  <div className="col-lg-4 col-md-4 col-12 map_fiexed">
                    <div className="map_boxes">
                      <img className="map_images" src={map1} alt="" />
                      <h3>Our Phone</h3>
                      <p>(+91) 8908751223</p>
                      <p>(+91) 8874589566</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12 map_fiexed">
                    <div className="map_boxes">
                      <img className="map_images" src={map2} alt="" />
                      <h3>Our Mail Box</h3>
                      <p>info.companyname@gmail.com</p>
                      <p>info.companyname@gmail.com</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12 map_fiexed">
                    <div className="map_boxes">
                      <img className="map_images" src={map3} alt="" />
                      <h3>Our Location</h3>
                      <p>Address name</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact form start here */}
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-10 col-md-10 col-sm-10 col-12 mx-auto contact_form_heading">
                <h1>Latest Contact</h1>

                <div className="contact_form">
                  <form onSubmit={this.sendEmail}>
                    <div class="mb-1 form-row">
                      <div class="form-group col-md-6">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Full Name:
                        </label>
                        <input
                          type="text"
                          className="form-control form-group"
                          id="form_1"
                          name="fullname"
                          onChange={this.changefullName}
                          value={this.state.fullname}
                          placeholder="Peter"
                        />
                      </div>

                      <div className="mb-1 form-group col-md-6">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Email:
                        </label>
                        <input
                          type="email"
                          className="form-control form-group"
                          id="form_2"
                          name="email"
                          onChange={this.changeemail}
                          value={this.state.email}
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>

                    <div className="mb-1">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        Message:
                      </label>
                      <textarea
                        className="form-control form-group"
                        id="form_3"
                        rows="3"
                        name="msg"
                        onChange={this.changemsg}
                        value={this.state.msg}
                        placeholder="message here..."
                      ></textarea>
                    </div>
                    <div class="mb-1 form-row">
                      <div class="form-group col-md-6 submit_my_btn">
                        <input
                          type="submit"
                          className="btn btn_submit2"
                          value="SUBMIT"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Contact;
