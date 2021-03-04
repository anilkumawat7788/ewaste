import React, { Component } from "react";
// import "./service.css";
import p9 from "../../assets/p9.png";
import Slider1 from "../sliders/Slider1";
import Slider2 from "../sliders/Slider2";

class Industries extends Component {
  render() {
    return (
      <>
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-10 col-md-10 col-12 mx-auto recyling_headings">
                <h1>Industries e-waste</h1>
                <img className="img-fluid" src={p9} alt="" />
                <h5>
                  Company name as a  <span className="text_bold"> recycling company in Toronto provides a
                  comprehensive selection of recyclable materials recovery,
                  waste management services</span> and electronics waste recycling
                  services to clients across a broad spectrum of fields. We
                  achieved ISO 9001 (Quality),  <span className="text_blue">ISO 14001 (Environmental) and
                  OHSAS 18001 (Health & Safety) standards</span> which are given to
                  companies who focus on quality and customer satisfaction
                  through defined and reviewed processes or procedures.

                  Flexcycle also provides extensive solutions for company’s
                  sensitive data, confidentiality agreement and intellectual
                  property. Our reasonable plan and team of highly trained
                  technicians will ensure your storage media is handled
                  efficiently and securely
                  
                  
                 
                </h5>
              </div>
            </div>
          </div>
        </section>
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
export default Industries;
