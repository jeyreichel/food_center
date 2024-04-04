import React, { Component } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import { Link } from "react-router-dom";
import Slider from "./../Element/Slider";

//Images
var img1 = require("./../../images/background/bg5.jpg");
var serblog1 = require("./../../images/our-services/s_02.jpg");
var serblog2 = require("./../../images/our-services/s_09.jpg");
var serblog3 = require("./../../images/our-services/s_10.jpg");
var serblog4 = require("./../../images/our-services/s_11.jpg");

class Index1 extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content bg-white">
          <div className="content-block">
            <Slider />
            <div
              className="section-full content-inner-3"
              style={{
                backgroundImage: "url(" + img1 + ")",
                backgroundSize: "100%",
              }}
            >
              <div className="container">
                <div className="row service-area1">
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div
                      className="icon-bx-wraper text-center service-box1"
                      style={{ backgroundImage: "url(" + serblog1 + ")" }}
                    >
                      <div className="icon-content">
                        <h2 className="dlab-tilte text-white">Bakery</h2>
                        <p>Lorem Ipsum is simply</p>
                        <div className="dlab-separator style1 bg-primary"></div>
                        <Link to={"/bakery"} className="btn btnhover">
                          More details{" "}
                          <i className="fa fa-angle-double-right m-l5"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div
                      className="icon-bx-wraper text-center service-box1"
                      style={{ backgroundImage: "url(" + serblog2 + ")" }}
                    >
                      <div className="icon-content">
                        <h2 className="dlab-tilte text-white">Dairy</h2>
                        <p>Lorem Ipsum is simply</p>
                        <div className="dlab-separator style1 bg-primary"></div>
                        <Link to={"/dairy"} className="btn btnhover">
                          More details{" "}
                          <i className="fa fa-angle-double-right m-l5"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div
                      className="icon-bx-wraper text-center service-box1"
                      style={{ backgroundImage: "url(" + serblog3 + ")" }}
                    >
                      <div className="icon-content">
                        <h2 className="dlab-tilte text-white">Meat</h2>
                        <p>Lorem Ipsum is simply </p>
                        <div className="dlab-separator style1 bg-primary"></div>
                        <Link to={"/meat"} className="btn btnhover">
                          More details{" "}
                          <i className="fa fa-angle-double-right m-l5"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div
                      className="icon-bx-wraper text-center service-box1"
                      style={{ backgroundImage: "url(" + serblog4 + ")" }}
                    >
                      <div className="icon-content">
                        <h2 className="dlab-tilte text-white">Liquor</h2>
                        <p>Lorem Ipsum is simply </p>
                        <div className="dlab-separator style1 bg-primary"></div>
                        <Link to={"/liquor"} className="btn btnhover">
                          More details{" "}
                          <i className="fa fa-angle-double-right m-l5"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-head mb-0 text-center">
                      <h3 className="text-primary">Welcome to Food Center</h3>
                      <p className="main-text">
                        <b>
                          <i>St. Thomas</i>
                        </b>
                        <> </>
                        premier supermarket. <strong>Food Center</strong> offers
                        you stateside convenience with the largest variety of
                        merchandise on island. From gourmet to everyday, you are
                        sure to find what you are looking for. We offer you a
                        product mix twice that of any on island. Gourmet
                        products abound in every isle offering you a selection
                        second to none.
                      </p>
                      <p>
                        Clean, convenient, fast checkouts, ample (private)
                        parking, and secure. Whether you’re shopping for your
                        home or charter, you can shop with confidence at Food
                        Center. We are here to serve you. Thank you for visiting
                        our website. Feel free to browse some of our
                        departments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-full bg-white pb-6">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="port-box1 text-white">
                      <div className="dlab-media">
                        <img
                          src={require("./../../images/our-work/b_04.jpg")}
                          alt=""
                        />
                      </div>
                      <div className="dlab-info">
                        <h2 className="title">Bakery</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="port-box1 text-white">
                      <div className="dlab-media">
                        <img
                          src={require("./../../images/our-work/da_11.jpg")}
                          alt=""
                        />
                      </div>
                      <div className="dlab-info">
                        <h2 className="title">Dairy</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="port-box1 text-white">
                      <div className="dlab-media">
                        <img
                          src={require("./../../images/our-work/m_03.jpg")}
                          alt=""
                        />
                      </div>
                      <div className="dlab-info">
                        <h2 className="title">Meats</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="port-box1 text-white m-md-b0 m-sm-b0">
                      <div className="dlab-media">
                        <img
                          src={require("./../../images/our-work/l_06.jpg")}
                          alt=""
                        />
                      </div>
                      <div className="dlab-info">
                        <h2 className="title">Wine</h2>
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
  }
}

export default Index1;
