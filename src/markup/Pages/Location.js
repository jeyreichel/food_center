import React, { Component } from "react";

import { Link } from "react-router-dom";
import GoogleMaps from "simple-react-google-maps";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

var bgimg1 = require("./../../images/background/bg2.jpg");
var bgimg2 = require("./../../images/background/bg5.jpg");

class Location extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content bg-white">
          <div
            className="dlab-bnr-inr overlay-black-middle"
            style={{ backgroundImage: "url(" + bgimg1 + ")" }}
          >
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Location</h1>

                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link to={"./"}>
                        <i className="fa fa-home"></i>
                      </Link>
                    </li>
                    <li>Location</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="content-block">
            <div
              className="section-full content-inner-2 contact-form bg-white"
              style={{
                backgroundImage: "url(" + bgimg2 + ")",
                backgroundSize: "100%",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6 d-flex m-md-b30 m-lg-b30">
                    <div className="p-a30 border contact-area border-1 align-self-stretch radius-sm bg-white">
                      <h3 className="m-b5">Quick Contact</h3>
                      <p>
                        If you have any questions simply use the following
                        contact details.
                      </p>
                      <ul className="no-margin">
                        <li className="icon-bx-wraper left m-b30">
                          <div className="icon-bx-xs border-1 text-primary">
                            {" "}
                            <Link to={""} className="icon-cell">
                              <i className="ti-location-pin"></i>
                            </Link>{" "}
                          </div>
                          <div className="icon-content">
                            <h6 className="text-uppercase m-tb0 dlab-tilte">
                              Address:
                            </h6>
                            <p>
                              6195 Estate Frydenhoj, #26A St, Thomas, VI 00802
                            </p>
                          </div>
                        </li>
                        <li className="icon-bx-wraper left  m-b30">
                          <div className="icon-bx-xs border-1 text-primary">
                            {" "}
                            <Link to={""} className="icon-cell">
                              <i className="ti-email"></i>
                            </Link>{" "}
                          </div>
                          <div className="icon-content">
                            <h6 className="text-uppercase m-tb0 dlab-tilte">
                              Email:
                            </h6>
                            <p>customerservice@foodcentervi.com</p>
                          </div>
                        </li>
                        <li className="icon-bx-wraper left">
                          <div className="icon-bx-xs border-1 text-primary">
                            <Link to={""} className="icon-cell">
                              <i className="ti-mobile"></i>
                            </Link>{" "}
                          </div>
                          <div className="icon-content">
                            <h6 className="text-uppercase m-tb0 dlab-tilte">
                              PHONE
                            </h6>
                            <p></p>
                          </div>
                        </li>
                      </ul>
                      <div className="m-t20">
                        <ul className="dlab-social-icon dlab-social-icon-lg">
                          <li>
                            <Link
                              to={""}
                              className="fa fa-facebook bg-primary mr-1"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              to={""}
                              className="fa fa-twitter bg-primary mr-1"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              to={""}
                              className="fa fa-linkedin bg-primary mr-1"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              to={""}
                              className="fa fa-pinterest-p bg-primary mr-1"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              to={""}
                              className="fa fa-google-plus bg-primary "
                            ></Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-12 d-flex">
                    <GoogleMaps
                      apiKey={"AIzaSyBbHk3eFodSk_DSGzv8dd_dIJpZvVDyg4s "}
                      style={{ height: "500px", width: "100%" }}
                      zoom={6}
                      center={{ lat: 37.4224764, lng: -122.0842499 }}
                      markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
                    />
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

export default Location;
