import React, {useState} from "react";
import "./about.css";
import { NavLink } from "react-router-dom";
import p1 from "../../assets/p1.png";
import p4 from "../../assets/p4.png";

import Accordion from './Accordion';

const About = () => {
    const [active, setActive] = useState(" ");
    return (
      <>
        {/* <Helmet>
          <title>About | Creniux</title>
          <meta
            name="description"
            content="We are a full fledged software services company
                          providing best innovative solutions to all your software
                          requirements We are here to delight you with our
                          services right from software consulting to software
                          deployment and then support and maintenance"
          />
        </Helmet> */}
    
      <section className="about_top_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-10 col-12 mx-auto">
              <div className="about_top_banner">
                <h1>About Us</h1>
                <NavLink to="/" className="contact_btn">
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>
        </div>
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
      <section className="company_managment_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-10 col-12 mx-auto management_heading">
              <h2>Company name Recovery Management</h2>
              <img className="img-fluid management_img" src={p1} alt="m1" />
              <p>
                Company name is a Canadian Electronics Recycling Company that
                operates out of a 12,000 square foot, state-of-the-art E-waste
                processing facility in Toronto, Ontario.
                <br />
                Company name provides customers with a comprehensive selection
                of waste management services focusing on green electronics
                recycling, waste disposal, hard drive data destruction and
                shredder and resource management strategies. Here at Company
                name we pride ourselves on the core principles of
                <span className="text_bold">
                  “Environmental Protection”, “Information Security” and
                  “Resource Integration”.
                </span>{" "}
                Based on the model of sustainable junk removal, waste recycling
                and the<span className="text_bold"> “Zero Landfill”</span>{" "}
                initiative.
                <br /> Company name as an outstanding recycling center around
                Toronto area tailors the programs and measures that correspond
                to our various recycling projects to continually improve
                recovery rate. This is done in a bid to avoid burning and
                dumping to reduce the effects of ecological pollution and
                climate change.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="certified">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-10 col-12 mx-auto ">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6-col-6">
                  <div className="box-2">
                    <img className="certified_img img-fluid" src={p4} alt="" />
                    <h4>
                      ISO 9001:2015 is defined as the international standard
                      that specifies requirements for a quality management
                      system (QMS). Organizations use the standard to
                      demonstrate the ability to consistently provide products
                      and services that meet customer and regulatory
                      requirements.
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6-col-6">
                  <div className="box-2">
                    <img className="certified_img img-fluid" src={p4} alt="" />
                    <h4>
                      ISO 9001:2015 is defined as the international standard
                      that specifies requirements for a quality management
                      system (QMS). Organizations use the standard to
                      demonstrate the ability to consistently provide products
                      and services that meet customer and regulatory
                      requirements.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6-col-6">
                  <div className="box-2">
                    <img className="certified_img img-fluid" src={p4} alt="" />
                    <h4>
                      ISO 9001:2015 is defined as the international standard
                      that specifies requirements for a quality management
                      system (QMS). Organizations use the standard to
                      demonstrate the ability to consistently provide products
                      and services that meet customer and regulatory
                      requirements.
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6-col-6">
                  <div className="box-2">
                    <img className="certified_img img-fluid" src={p4} alt="" />
                    <h4>
                      ISO 9001:2015 is defined as the international standard
                      that specifies requirements for a quality management
                      system (QMS). Organizations use the standard to
                      demonstrate the ability to consistently provide products
                      and services that meet customer and regulatory
                      requirements.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="recovery_managment">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-10 col-12 mx-auto ">
            <div className="recovery_managment_box">
              <h3>COMPANY NAME-The Recovery Management we specialize in aspects of :</h3>
             
            </div>
            <Accordion
                    title="01.Asset Recover Service"
                   
                    contents="Flexcycle provides customers with a comprehensive asset recovery services focusing on green electronics recycling, data destruction, data wipe, removing assets, waste disposal, and resource management strategies. Depending on clients' requirements, all related reports and certificates would be offered."
                    active={active}
                    setActive={setActive}
                  />
                   <Accordion
                    title="02.Data Destruction Service"
                   
                    contents="Flexcycle provides customers with a comprehensive asset recovery services focusing on green electronics recycling, data destruction, data wipe, removing assets, waste disposal, and resource management strategies. Depending on clients' requirements, all related reports and certificates would be offered."
                    active={active}
                    setActive={setActive}
                  />
                   <Accordion
                    title="03.Facilitate waste removal & disposal"
                   
                    contents="Flexcycle provides customers with a comprehensive asset recovery services focusing on green electronics recycling, data destruction, data wipe, removing assets, waste disposal, and resource management strategies. Depending on clients' requirements, all related reports and certificates would be offered."
                    active={active}
                    setActive={setActive}
                  />
                   <Accordion
                    title="04.Electronics recycling -IT equipment"
                   
                    contents="Flexcycle provides customers with a comprehensive asset recovery services focusing on green electronics recycling, data destruction, data wipe, removing assets, waste disposal, and resource management strategies. Depending on clients' requirements, all related reports and certificates would be offered."
                    active={active}
                    setActive={setActive}
                  />
                   <Accordion
                    title="05.Secure storage LIVE access viewing"
                   
                    contents="Flexcycle provides customers with a comprehensive asset recovery services focusing on green electronics recycling, data destruction, data wipe, removing assets, waste disposal, and resource management strategies. Depending on clients' requirements, all related reports and certificates would be offered."
                    active={active}
                    setActive={setActive}
                  />

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
