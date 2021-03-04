import React, { Component } from "react";
// import "./service.css";
import p10 from "../../assets/p10.png";
import Slider1 from "../sliders/Slider1";
import Slider2 from "../sliders/Slider2";

class Consumer extends Component {
  render() {
    return (
      <>
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-10 col-md-10 col-12 mx-auto recyling_headings">
                <h1>Consumer e-waste</h1>
                <img className="img-fluid" src={p10} alt="" />
                <h5>
                  When people decide to recycle their E-waste, especially the
                  computer recycling, laptop recycling, and tablet and phone
                  recycling, one of the major concerns is <span className="text_bold">Data Security. </span>  
                  Flexcycle seeks to address any customer concerns by fulfilling
                  our duty to keep your data secure. We can guarantee through
                  our internal data destruction protocols and extensive staff
                  training that your sensitive documents, confidential
                  information and intellectual property will never be leaked or
                  recovered.
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
export default Consumer;
