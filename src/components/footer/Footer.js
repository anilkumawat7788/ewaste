import React from "react";
import "./footer.css";
// import logo from "../../images/logo.png";
// import footer11 from "../../images/footer11.png";
// import footer12 from "../../images/footer12.jpg";
// import footer13 from "../../images/footer13.png";
// import footer14 from "../../images/footer14.png";
// import footer15 from "../../images/footer15.png";
// import footer16 from "../../images/footer16.PNG";
import { NavLink } from "react-router-dom";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { FaTwitter } from "react-icons/fa";
// import { ImLocation } from "react-icons/im";
// import { ImFacebook } from "react-icons/im";
// import { AiFillInstagram } from "react-icons/ai";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from '@material-ui/icons/Phone';
import phone from "../../assets/phone.svg";
import location from "../../assets/location.svg";
// import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="main_container">
        <footer className="footer_background">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-10 col-lg-10 col-sm-10 col-12 mx-auto">
                <div className="row my-5">
                  <div className="col-lg-3 col-md-3 col-6 mx-auto footer_left1">
                    <h3>Contact Us</h3>
                    <div>
                      <img className="phone_img" src={phone} alt="" />
                      <p>
                        Call us <br /> +070 2589 256
                      </p>
                    </div>
                    <div>
                      <img className="phone_img" src={location} alt="" />
                      <p>
                        Present location <br /> Bangalore Karnataka India
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-6 footer_left2">
                    <h3>More</h3>
                    <p>
                      <NavLink className="footer_left2_headings" to="/">
                        Home
                      </NavLink>
                      <br />
                      <NavLink className="footer_left2_headings" to="/about">
                        Testimonial
                      </NavLink>
                      <br />
                      <NavLink className="footer_left2_headings" to="/about">
                        Team
                      </NavLink>
                      <br />
                      <NavLink className="footer_left2_headings" to="/career">
                        Career
                      </NavLink>
                      <br />
                      <NavLink className="footer_left2_headings" to="/contact">
                        Contact
                      </NavLink>
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-6 footer_center">
                    <h3>Services</h3>
                    <p>
                      <NavLink className="footer_left2_headings" to="/">
                        Transporting
                      </NavLink>
                      <br />
                      <NavLink className="footer_left2_headings" to="/career">
                        Security Services
                      </NavLink>
                      <br />
                      <NavLink className="footer_left2_headings" to="/blog">
                        Recycling Process
                      </NavLink>
                      <br />
                      <NavLink className="footer_left2_headings" to="/contact">
                        Data Destruction
                      </NavLink>
                      <br />
                      <NavLink className="footer_left2_headings" to="/contact">
                        Assets Recovery
                      </NavLink>
                      <br />
                      <NavLink className="footer_left2_headings" to="/contact">
                        Online Tracking
                      </NavLink>
                    </p>
                  </div>

                  <div className="col-lg-3 col-md-3 col-6 footer_right2 mx-auto">
                    <h3 className="special_center">Our News Letters</h3>
                    <h1>GET IN TOUCH WITH US</h1>
                    <div className="email_input">
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        id="emailid"
                        className="form-control"
                      />
                      <div className="emailstyle">
                       <span className="circle_bg"><MailOutlineIcon className="mail_circle" /></span> 
                      </div>
                    </div>
                    <div className="email_input">
                      <input
                        type="phone"
                        placeholder="Enter Your Phone Num"
                        id="phoneid"
                        className="form-control"
                      />
                      <div className="emailstyle">
                      <span className="circle_bg"><PhoneIcon className="mail_circle" /></span> 
                      </div>
                    </div>
                  </div>
                </div>

                <hr />
                <div className="all_policy">
                  <h3>©2021 Creniux. All Rights Reserved</h3>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Footer;
