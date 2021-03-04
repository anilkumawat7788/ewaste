import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './career.css'
import p6 from "../../assets/p6.png";
import Accordion from "../about/Accordion";

const Career = () => {
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

      <section className="career_top_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-10 col-12 mx-auto">
              <div className="about_top_banner">
                <h1>Career</h1>
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
              <h2>Career opportunities At Company Name</h2>
              <img className="img-fluid management_img" src={p6} alt="m1" />
              <p>
                Company name as an ISO certified company is a creative and
                dynamic Waste Management And Recycling Company that is in the
                growing stages. We are building a training system geared to
                fully enhance the quality of our staff. We focus on employee
                growth, encourage innovation and highlight the personality of
                employees. Additionally, through continuous environmental
                education training, Company name guides staff members to focus
                on rapid yet sustainable company development. We are ultimately
                looking for the interviewees who are full of ambition and has a
                passion for environmental sustainability to grow with the
                Company name team.<br /> Let us help you achieve your career dream and
                create the brilliance together! <br />Please send your resume to
                info@companyname.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="recovery_managment">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-10 col-12 mx-auto ">
              <div className="recovery_managment_box">
                <h3>
                COMPANY NAME-The Recovery Management we specialize in aspects of :
                </h3>
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
               <Accordion
                title="06.Minimie freight costs and simplify logistics"
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
export default Career;
