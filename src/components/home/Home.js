import React from "react";
import "./home.css";
import Carousel from "react-bootstrap/Carousel";
import CheckIcon from "@material-ui/icons/Check";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import s1 from "../../assets/s1.svg";
import s2 from "../../assets/s2.svg";
import s3 from "../../assets/s3.svg";
import s4 from "../../assets/s4.svg";
import s5 from "../../assets/s5.svg";
import s6 from "../../assets/s6.svg";
import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <section>
        <Carousel>
          <Carousel.Item interval={1000}>
           
            <img className="d-block w-100" src={p1} alt="First slide" />
           
            <Carousel.Caption className="slider_headings">
            <div className="slider_img">
              <img className="slider_first_img" src={p2} alt="" />
            </div>
              <h3>ONE 'COMPANY NAME' ONE PROMISE</h3>
              <p>Electronic Recycling & Zero Landfill</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={p1} alt="Second slide" />
            <Carousel.Caption className="slider_headings">
            <div className="slider_img">
              <img className="slider_first_img" src={p2} alt="" />
            </div>
              <h3>ONE 'COMPANY NAME' ONE PROMISE</h3>
              <p>Electronic Recycling & Zero Landfill</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={p1} alt="Third slide" />
            <Carousel.Caption className="slider_headings">
            <div className="slider_img">
              <img className="slider_first_img" src={p2} alt="" />
            </div>
            <h3>ONE 'COMPANY NAME' ONE PROMISE</h3>
              <p>Electronic Recycling & Zero Landfill</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="get_started_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-10 col-12 mx-auto">
              {/* <div className="row">
                <div className="container container_line"> */}
              <div className="row container_line">
                <div className="col-md-3 col-ld-3 col-sm-3 col-3 box-1">
                  <h4>GET STARTED</h4>
                </div>
                <div className="col-md-3 col-ld-3 col-sm-3 col-3 box-1">
                  <h4>GET STARTED</h4>
                </div>
                <div className="col-md-3 col-ld-3 col-sm-3 col-3 box-1">
                  <h4>ACCEPTABLE PRODUCTS</h4>
                </div>
                <div className="col-md-3 col-ld-3 col-sm-3 col-3 box-1">
                  <h4>IN-STORE</h4>
                </div>
              </div>
              {/* </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="services_home_top_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-10 col-12 mx-auto">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 home_services_section">
                  <span className="trangale_span">01</span> <h4>Services</h4>
                  <h3>
                    COMPANY-The Recovery Management is full of secured and
                    recovered with managemental qualities
                  </h3>
                  <h1>Since 2001.</h1>
                  <h2>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s
                  </h2>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.
                  </p>
                  <h5>
                    {" "}
                    <CheckIcon className="check_ok" /> Transporting
                  </h5>
                  <h5>
                    <CheckIcon className="check_ok" /> SECURITY SERVICE
                  </h5>
                  <h5>
                    <CheckIcon className="check_ok" /> RECYCLING PROCESS
                  </h5>
                  <h5>
                    <CheckIcon className="check_ok" /> DATA DESTRUCYION
                  </h5>
                  <h5>
                    <CheckIcon className="check_ok" /> ASSETS RECOVERY
                  </h5>
                  <h5>
                    <CheckIcon className="check_ok" /> ONLINE TRACKING
                  </h5>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 all_services_heading_box">
                      <div className="all_services_box">
                        <img className="ALL_SERVICES_imgs" src={s1} alt="" />
                        <h3>Transporting</h3>
                        <p>
                          dummy text of the printing and typesetting industry.
                          Lorem Ipsum
                        </p>
                      </div>
                      <div className="all_services_box">
                        <img className="ALL_SERVICES_imgs" src={s2} alt="" />
                        <h3>RECYCLING PROCESS</h3>
                        <p>
                          dummy text of the printing and typesetting industry.
                          Lorem Ipsum
                        </p>
                      </div>
                      <div className="all_services_box">
                        <img className="ALL_SERVICES_imgs" src={s6} alt="" />
                        <h3>ASSETS RECOVERY</h3>
                        <p>
                          dummy text of the printing and typesetting industry.
                          Lorem Ipsum
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 all_services_heading_box2">
                      <div className="all_services_box">
                        <img className="ALL_SERVICES_imgs" src={s3} alt="" />
                        <h3>SECURITY SERVICES</h3>
                        <p>
                          dummy text of the printing and typesetting industry.
                          Lorem Ipsum
                        </p>
                      </div>
                      <div className="all_services_box">
                        <img className="ALL_SERVICES_imgs" src={s5} alt="" />
                        <h3>DATA DESTRUCTION</h3>
                        <p>
                          dummy text of the printing and typesetting industry.
                          Lorem Ipsum
                        </p>
                      </div>
                      <div className="all_services_box">
                        <img className="ALL_SERVICES_imgs" src={s4} alt="" />
                        <h3>ONLINE TRACKING</h3>
                        <p>
                          dummy text of the printing and typesetting industry.
                          Lorem Ipsum
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* electronic wastes */}
      <section className="electronic_top_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-10 col-12 mx-auto">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 electronics_bg1">
                  <h3>ELECTRONICS WASTES FACT:</h3>
                  <p>
                    One of the most challenging problems today in the waste
                    stream is electronics waste products, particularly because
                    of their quantity and the fact that they are of high
                    toxicity. E-waste products which include electronics such as
                    computers, televisions, computer components and more contain
                    harmful substances like mercury, lithium, lead, Brominated
                    flame retardants, PVC......
                  </p>
                  <NavLink className="learn_more_btn_home" to="/">
                    LEARN MORE
                  </NavLink>
                </div>
                <div className="col-lg-6 col-md-6 col-12 electronics_bg2">
                  <h3>ADVERSE EFFECTS OF ELECTRONICS WASTES:</h3>
                  <p>
                    Improper dumping of used electronic products affects the
                    inhabitants of the planet in general. Birds, animals,
                    aquamarine life and sea mammals are no exception and
                    virtually every organism, since the toxic are released to
                    the atmosphere as well as into the water sources. The
                    electronics waste also seeps into the soil and the
                    air.......
                  </p>
                  <NavLink className="learn_more_btn_home" to="/">
                    LEARN MORE
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section work process here */}
      <section className="work_process_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-10 col-12 mx-auto work_top_headings">
              <span className="trangale_span2">02</span> <h4>Work Process</h4>
              <h1>HOW WE WORK</h1>
              <div className="row">
                <div className="col-lg-3 col-md-3 col-6">
                  <div className="work_follow_box">
                    <span className="number_span">01</span>
                    <span className="dot"></span>
                    <h3>Step One</h3>
                    <p>Nunc laoreet, mi sed fermentum fringilla, eros metus</p>
                    <NavLink className="BTN_GETIN_TOUCH" to="/">
                      Get In Touch
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6">
                  <div className="work_follow_box">
                    <span className="number_span">02</span>
                    <span className="dot"></span>
                    <h3>Step Two</h3>
                    <p>Nunc laoreet, mi sed fermentum fringilla, eros metus</p>
                    <NavLink className="BTN_GETIN_TOUCH" to="/">
                      Get In Touch
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6">
                  <div className="work_follow_box">
                    <span className="number_span">03</span>
                    <span className="dot"></span>
                    <h3>Step Three</h3>
                    <p>Nunc laoreet, mi sed fermentum fringilla, eros metus</p>
                    <NavLink className="BTN_GETIN_TOUCH" to="/">
                      Get In Touch
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6">
                  <div className="work_follow_box">
                    <span className="number_span">04</span>
                    <span className="dot"></span>
                    <h3>Step Four</h3>
                    <p>Nunc laoreet, mi sed fermentum fringilla, eros metus</p>
                    <NavLink className="BTN_GETIN_TOUCH" to="/">
                      Get In Touch
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="twitter_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-10 col-12 mx-auto twitter_headings">
              <span className="trangale_span3">03</span> <h4>Tweet On Us</h4>
              <h1>Tweeting Media</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="full_twitter_bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-10 col-12 mx-auto">
              <div className="twitter_box">
                <h1>Tweets by @ManojTivary</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
