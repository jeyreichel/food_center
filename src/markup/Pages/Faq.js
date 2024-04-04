import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";

var img1 = require("./../../images/background/bg2.jpg");
var img2 = require("./../../images/background/bg5.jpg");

const defaultAccordion = [
  {
    title: "Alcoholic Beverages:",
    text: "U.S. residents 21 years of age and older can return to the mainland with four litres of liquor, duty free. You are allowed to add a 5th litre duty free if it is a product made in the U.S. Virgin Islands.  The legal drinking age in the US. Virgin Islands is eighteen (18). It is a violation of law for alcohol to be sold to any person under the age of eighteen (18). Minors are prohibited from assisting with alcoholic products. This includes but is not limited to working as bartenders, engaging in the sale of alcohol, or serving alcoholic products.",
  },
  {
    title: "Tobacco Products:",
    text: "U.S. citizens age 21 or older are allowed up to 100 cigars (not of Cuban origin) and up to 5 cartons, or 1,000 cigarettes duty free, per person, if purchased in the U.S. Virgin Islands.  The legal smoking age in the US. Virgin Islands is eighteen (18).  It is a violation of law for tobacco to be sold to any person under the age of eighteen (18).",
  },
];

const Faq = () => {
  const [activeDefault, setActiveDefault] = useState(0);
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-black-middle"
          style={{
            backgroundImage: "url(" + img1 + ")",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Link and Faq's</h1>
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to={"./"}>
                      <i className="fa fa-home"></i>
                    </Link>
                  </li>
                  <li>Link and Faq's</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="content-block">
          <div
            className="section-full content-inner bg-white faq-area"
            style={{
              backgroundImage: "url( " + img2 + " )",
              backgroundSize: "100%",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-5">
                  <div className="m-b50">
                    <div className="about-thumb">
                      <img
                        src={require("./../../images/map-vixxa.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="contact-form">
                    <div className="title-bx">
                      <div className="icon-bx-xs">
                        <Link to={""} className="icon-cell text-white">
                          <i className="fa fa-comment"></i>
                        </Link>
                      </div>
                      <h4>Ask Us</h4>
                    </div>
                    <form>
                      <div className="form-group">
                        <label>Your Name (*)</label>
                        <div className="input-group">
                          <input
                            name="dzName"
                            type="text"
                            required=""
                            className="form-control"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Your Email (*)</label>
                        <div className="input-group">
                          <input
                            name="dzName"
                            type="text"
                            required=""
                            className="form-control"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Subject</label>
                        <div className="input-group">
                          <input
                            name="dzName"
                            type="text"
                            required=""
                            className="form-control"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Select Service</label>
                        <div className="input-group">
                          <select className="form-control">
                            <option>Barkery </option>
                            <option>Dairy</option>
                            <option>Deli</option>
                            <option>Gourmet</option>
                            <option>Grocery</option>
                            <option>Hot Food</option>
                            <option>Meat</option>
                            <option>Liquor</option>
                            <option>Produce</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Your Question</label>
                        <div className="input-group">
                          <textarea className="form-control"></textarea>
                        </div>
                      </div>
                      <div className="form-group">
                        <button className="btn btn-md btnhover">
                          Submit Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-8 col-md-7 m-b30">
                  <div className="faq-area2">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="section-head text-left">
                          <h3>Links</h3>
                          <p className="text-center">
                            Visitor information sites on the U.S Virgin Islands
                          </p>
                          <div className="text-center">
                            <h4>
                              <a href="http://www.frommers.com/destinations/virgin-islands/726150#ixzz3hRi0uTzn">
                                Frommers Destinations
                              </a>
                            </h4>
                            <br />
                            <h4>
                              <a href="http://www.visitusvi.com">Visit USVI</a>{" "}
                            </h4>
                            <br />
                            <h4>
                              <a href="http://visitstthomas.com/shopping_duty_free.html">
                                Vist St. Thomas
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="section-head">
                          <h3>FAQS</h3>
                        </div>
                        <Accordion
                          className="dlab-accordion faq-style2"
                          defaultActiveKey="0"
                        >
                          {defaultAccordion.map((d, i) => (
                            <div className="panel">
                              <div className="acod-head">
                                <Accordion.Toggle
                                  as={Link}
                                  variant="link"
                                  className={` ${
                                    activeDefault === i ? "" : "collapsed"
                                  }`}
                                  onClick={() =>
                                    setActiveDefault(
                                      activeDefault === i ? -1 : i
                                    )
                                  }
                                  eventKey={`${i}`}
                                >
                                  {d.title}
                                </Accordion.Toggle>
                              </div>
                              <Accordion.Collapse
                                eventKey={`${i}`}
                                className="acod-body collapse "
                              >
                                <p className="acod-content">{d.text}</p>
                              </Accordion.Collapse>
                            </div>
                          ))}
                          <h5>
                            Source:{" "}
                            <a href="https://secure.dlca.vi.gov/">USVI DLCA</a>
                          </h5>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
