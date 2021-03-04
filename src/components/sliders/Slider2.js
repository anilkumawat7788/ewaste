import React, { Component } from "react";
import "./sliders.css";
import service from "../../assets/service.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p6 from "../../assets/p6.png";
import s1 from "../../assets/s1.svg";
import s2 from "../../assets/s2.svg";
import s3 from "../../assets/s3.svg";
import s4 from "../../assets/s4.svg";
import s5 from "../../assets/s5.svg";
import s6 from "../../assets/s6.svg";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
class Services extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
    };
    return (
      <>
       
        {/* slider start here */}
        <div className="MAIN_SLIDER">
        
          <Slider {...settings}>
            <div>
              <div className="all_services_box2">
                <img className="ALL_SERVICES_imgs" src={s1} alt="" />
                <h3>Transporting</h3>
                <p>
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum
                </p>
              </div>
              {/* <img className="slider_images" src={p6} alt=""/> */}
            </div>
            <div>
              <div className="all_services_box2">
                <img className="ALL_SERVICES_imgs" src={s2} alt="" />
                <h3>RECYCLING PROCESS</h3>
                <p>
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum
                </p>
              </div>
            </div>
            <div>
              <div className="all_services_box2">
                <img className="ALL_SERVICES_imgs" src={s6} alt="" />
                <h3>ASSETS RECOVERY</h3>
                <p>
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum
                </p>
              </div>
            </div>
            <div>
              <div className="all_services_box2">
                <img className="ALL_SERVICES_imgs" src={s3} alt="" />
                <h3>SECURITY SERVICES</h3>
                <p>
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum
                </p>
              </div>
            </div>
            <div>
              <div className="all_services_box2">
                <img className="ALL_SERVICES_imgs" src={s5} alt="" />
                <h3>DATA DESTRUCTION</h3>
                <p>
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum
                </p>
              </div>
            </div>
            <div>
              <div className="all_services_box2">
                <img className="ALL_SERVICES_imgs" src={s4} alt="" />
                <h3>ONLINE TRACKING</h3>
                <p>
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
export default Services;
