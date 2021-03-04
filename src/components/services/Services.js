import React, { Component } from "react";
import "./service.css";
import service from "../../assets/service.png";
import Slider1 from '../sliders/Slider1';
import Slider2 from '../sliders/Slider2';
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
class Services extends Component {
  render() {
   
    return (
      <>
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-10 col-md-10 col-12 mx-auto recyling_headings">
                <h1>Recycling Services</h1>
                <img className="img-fluid" src={service} alt="" />
                <h5>
                  Company name as a <span className="text_blue">SERI Responsible Recycling (R2) Certified</span> 
                  company is confident that its approach to waste recycling and
                  recyclable material recovery will leave every client satisfied
                  with the service provided. This confidence stems from a set of
                  proven, flexible and <span className="text_bold"> Customizable Electronics Recycling </span> 
                  project plans to meet the varying needs of our customers.
                </h5>
              </div>
            </div>
          </div>
        </section>
        <div className="myrowclass">
        <div class="vl"></div>
        <div class="v2"></div>
        <div class="v3"></div>
        </div>
       
        {/* slider start here */}
        <div className="myslider1">
        <Slider1 />
        </div>
       
       <div className="myslider2">
       <Slider2 />
       </div>
      
      </>
    );
  }
}
export default Services;
