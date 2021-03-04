import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./news.css";
import p7 from "../../assets/p7.png";
import Accordion from "../about/Accordion";

const News = () => {
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

      <section className="news_top_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-10 col-12 mx-auto">
              <div className="about_top_banner">
                <h1>News</h1>
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
              <h2>No space for e-waste on the GST rate list</h2>
              <img className="img-fluid management_img" src={p7} alt="m1" />
              <p>
              <span className="text_bold">“We are not able to find the item code for our category.
                Different electronics are scheduled under different rates of
                GST,“ Jain added.</span>  <br /><br />  Currently, e-waste players have to pay 10%
                extra tax and take a refund from the government after 90 days,
                which makes the entire ordeal complicated. Jain also adds that
                noting India is the fifth largest producer of e-waste and is
                also a major importer of e-waste from leading generating regions
                such as USA, China, and the EU, GST should have been clear ..<br /> <br /> 
                Prabir Chetia, head ­ business research & advisory, Aranca ­ a
                global research and advisory firm ­ says e-waste has not been
                explicitly defined under the GST rate schedule, indicating the
                industry has been overlooked. <br /> “The GST rate is clearly defined
                for a very limited range of electronic scrap or waste, which
                comprise certain types of cells, batteries and accumulators, and
                the applicable rate is 18%. Further, GST rate for electronic
                products varies from 5% to 28%, depending on th ..
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
                  COMPANY NAME-The Recovery Management we specialize in aspects
                  of :
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
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default News;
