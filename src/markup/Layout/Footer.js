import React, { Component } from "react";
import { Link } from "react-router-dom";

var bgfoter = require("./../../images/background/bg2.jpg");

class Footer extends Component {
  render() {
    return (
      <footer
        className="site-footer"
        style={{
          backgroundImage: "url(" + bgfoter + ")",
          backgroundSize: "cover",
        }}
      >
        <div className="footer-top bg-line-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                <div className="widget widget_getintuch">
                  <h5 className="footer-title text-white">Contact Us</h5>
                  <ul>
                    <li>
                      <i className="fa fa-map-marker"></i>
                      <p>Virgin Island, U.S.</p>
                    </li>
                    <li>
                      <i className="fa fa-phone"></i>
                      <p>(340)-777-8806</p>
                    </li>
                    <li>
                      <i className="fa fa-fax"></i>
                      <p>(340)-777-8807</p>
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i>
                      <p>customerservice@foodcentervi.com</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                <div className="widget widget_services border-0">
                  <h4 className="footer-title">Quick Links</h4>
                  <ul className="list-2">
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/store"}>Store</Link>
                    </li>
                    <li>
                      <Link to={"/location"}>Bulletin</Link>
                    </li>
                    <li>
                      <Link to={"/faq"}>Links/FAQ</Link>
                    </li>
                    <li>
                      <Link to={"/term-condition"}>Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link to={"/privacy"}>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to={"/contact-1"}>Contact Us</Link>
                    </li>
                    <li>
                      <Link to={"/disclaimer"}>Disclaimer</Link>
                    </li>
                    <li>
                      <Link to={"/copyright"}>Corpyright</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                <div className="widget border-0">
                  <h4 className="footer-title">Opening Hours</h4>
                  <p className="m-b20">
                    Our support available to help you 24 hours a day, seven days
                    a week.
                  </p>
                  <ul className="work-hour-list">
                    <li>
                      <span className="day">
                        <span>Monday to Friday</span>
                      </span>
                      <span className="timing">7AM - 5PM</span>
                    </li>
                    <li>
                      <span className="day">
                        <span>Saturday</span>
                      </span>
                      <span className="timing">10AM - 5PM</span>
                    </li>
                    <li>
                      <span className="day">
                        <span>Holiday</span>
                      </span>
                      <span className="timing">include</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 text-left">
                {" "}
                <span>
                  Copyright © 2024 Food Center. all rights reserved.
                </span>{" "}
              </div>
              <div className="col-lg-6 col-md-6 text-right">
                <div className="widget-link">
                  <ul>
                    <li>
                      <Link to={"about-1"}>About Us</Link>
                    </li>
                    <li>
                      <Link to={"faq"}>Link/FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
